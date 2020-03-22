<template>
  <div>
    <div v-if="!success" id="paypal-button-container"></div>
    <div v-if="success" class="alert alert-success">
      <strong>Success!</strong> Payment successfuly done
    </div>
    <div v-if="error" class="alert alert-danger">
      <strong>Ooops!</strong>  something went wrong
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            const paypal_srcipt = paypal; // eslint-disable-line no-undef

            paypal_srcipt.Buttons({
                fundingSource: paypal_srcipt.FUNDING.PAYPAL,
                createOrder: this.createOrder,
                onApprove: this.onApprove,
            }).render('#paypal-button-container');
        },
        name: "Paypal",
        props: ["amount", "contact", "type", "payee"],
        data: function () {
            return {
                success: false,
                error: false,
            }
        },
        methods: {

            createOrder: function(data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: "EUR",
                            value: this.amount.toString(),

                        },
                        custom_id: this.type,
                        description: this.type,
                        payee: {
                            email_address: this.payee
                        }
                    }],
                    payer: {
                        name: {
                            given_name: this.contact.firstName,
                            surname: this.contact.lastName,
                        },
                        email_address: this.contact.email
                    },
                    application_context: {
                        locale: "de-DE"
                    }
                });
            },

            async onApprove(data, actions) {
                const details = await actions.order.capture();
                if (details.status !== 'COMPLETED') {
                    return false
                }

                const body =  JSON.stringify({
                    orderID: data.orderID
                });

                try {
                    const res = await axios.post("http://code_collective_backend/api/payment", body);
                    console.log(res.data);
                } catch (err) {
                    const errors = err.response.data.errors;
                    console.log(errors)
                }

                this.success = true;
                this.$emit('payment-accepted', details);
            },
            onCancel(data) {
                this.error = true;
                this.$emit('payment-cancelled', data)
            }
        }

    }
</script>

<style scoped>

</style>
