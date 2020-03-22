<template>
    <div class="checkout-stepepr">
        <md-steppers :md-active-step.sync="active" md-vertical md-linear>
            <md-step id="first" md-label="Schritt 1: Wähle deinen Unterstützungsbeitrag" :md-editable="true" :md-done.sync="first">
                <VoucherAmountOptions @amount-selected="receivedAmount"/>
            </md-step>

            <md-step id="second" md-label="Schritt 2: Gib uns deinen Kontaktdaten" :md-error="secondStepError" :md-editable="true" :md-done.sync="second">
                <BuyerDetails @contact-selected="receivedContact"/>
            </md-step>

            <md-step id="third" md-label="Schritt 3: Wie willst du uns unterstützen" :md-editable="true" :md-done.sync="third">
                <TipOrVoucherOption @type-selected="receivedType"/>
            </md-step>

            <md-step id="fourth" md-label="Schritt 4: Schließe deine Zahlung ab" :md-editable="true" :md-done.sync="fourth">
              <Paypal :payee="this.payee" :amount="this.amount" :contact="this.contact" :type="this.type" @payment-accepted="paymentSuccess = true"/>
            </md-step>
        </md-steppers>

        <md-dialog class="succes-dialog" :md-active.sync="paymentSuccess">
          <md-dialog-content>
            <h1>Lieber Supporter</h1>
            <p>Wir senden dir eine Bestätigung für deine Zahlung per E-Mail.</p>
            <p>Falls du einen Gutschein gekauft hast, wird dieser dir ebenfalls in einer seperaten Nachricht zugeschickt.</p>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="backToHome">Zurück zur Startseite</md-button>
          </md-dialog-actions>
        </md-dialog>
    </div>
</template>

<script>
    import VoucherAmountOptions from './VoucherAmountOptions.vue'
    import BuyerDetails from './BuyerDetails.vue'
    import TipOrVoucherOption from './TipOrVoucherOption.vue'
    import Paypal from './Paypal.vue'

    export default {
        name: 'CheckoutStepper',
        props: ["payee"],
        components: {
            VoucherAmountOptions,
            BuyerDetails,
            TipOrVoucherOption,
            Paypal
        },
        data: () => ({
            active: 'first',
            first: false,
            second: false,
            third: false,
            fourth: false,
            secondStepError: null,
            amount: null,
            contact: null,
            type: null,
            paymentSuccess: false
        }),
        methods: {
            receivedAmount: function(amount) {
                this.amount = amount;
                this.setDone('first', 'second');
            },

            receivedContact: function(contact){
                this.contact = contact;
                this.setDone('second', 'third');
            },

            receivedType: function(type){
                this.type = type;
                this.setDone('third', 'fourth');
            },


            setDone (id, index) {
                this[id] = true;

                this.secondStepError = null;

                if (index) {
                    this.active = index
                }
            },
            setError  () {
                this.secondStepError = 'This is an error!'
            },
            backToHome () {
                this.$router.push({"name": "Home"})
            }

        }
    }
</script>

<style lang="scss" scoped>

  .succes-dialog {
    background-color: #c6deb7;
  }

</style>
