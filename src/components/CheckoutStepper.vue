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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.</p>
                <md-button class="md-raised md-primary" v-on:click="action">Abließen</md-button>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import VoucherAmountOptions from './VoucherAmountOptions.vue'
    import BuyerDetails from './BuyerDetails.vue'
    import TipOrVoucherOption from './TipOrVoucherOption.vue'

    export default {
        name: 'CheckoutStepper',
        components: {
            VoucherAmountOptions,
            BuyerDetails,
            TipOrVoucherOption
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
            type: null
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

            action: function () {
                // `this` inside methods points to the Vue instance
                alert('You (' + this.contact.firstName +  ') just helped with spending ' + this.amount +  "€ as" + this.type + '!')
                // `event` is the native DOM event
            },

            setDone (id, index) {
                this[id] = true

                this.secondStepError = null

                if (index) {
                    this.active = index
                }
            },
            setError () {
                this.secondStepError = 'This is an error!'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
