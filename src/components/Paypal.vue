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
    export default {
        mounted() {
            const paypal_srcipt = paypal; // eslint-disable-line no-undef

            paypal_srcipt.Buttons({
                fundingSource: paypal_srcipt.FUNDING.PAYPAL,
                createOrder: function(data, actions) {
                    // This function sets up the details of the transaction, including the amount and line item details.
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '13.37'
                            },
                            payee: {
                                email_address: 'test.payeee@gmail.com'
                            }
                        }]
                    });
                },
                onApprove: this.onApprove,
            }).render('#paypal-button-container');
        },
        name: "Paypal",
        data: function () {
            return {
                success: false,
                error: false,
            }
        },
        methods: {
            async onApprove(data, actions) {
                const details = await actions.order.capture();
                if (details.status !== 'COMPLETED') {
                    return false
                }

                // send to server
                // todo
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
