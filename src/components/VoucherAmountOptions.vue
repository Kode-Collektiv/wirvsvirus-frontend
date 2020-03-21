<template>
    <div layout="row" class="voucher-amount-options">

        <md-radio v-for="amount in amount_defaults" :key="amount.value"  :name='radio-test'
                    :id="'radio-' + amount.value"
                    :value='amount.value'
                    v-model="selected_amount">{{getAmountString(amount.value)}}</md-radio>

        <md-radio   :name='radio-test'
                    :id="'radio-other'"
                    value='other'
                    v-model="selected_amount">Anderer Betrag</md-radio>


        <div v-if="selected_amount==='other'"  class="other-amount-input">

            <md-field>
                <label>Anderer Betrag zwischen 1,00€ und 100,00€</label>
                <md-input v-model="other_amount"></md-input>
            </md-field>
        </div>

        <div>
            <md-button class="md-raised md-primary" v-on:click="action">Help NOW!</md-button>
        </div>
    </div>


</template>

<script>
    export default {
        name: "VoucherAmountOptions",
        methods: {

            action: function () {
                // `this` inside methods points to the Vue instance
                alert('You just helped with spending ' + this.getSelectedAmount() + '!')
                // `event` is the native DOM event
            },

            getSelectedAmount : function() {
                if (this.selected_amount === "other") {
                    return this.other_amount
                } else {
                    return this.selected_amount
                }
            }
        },
        data: function () {
            return {
                select_other: false,
                selected_amount: undefined,
                other_amount: undefined,
                amount_defaults: [
                    {value: 10},
                    {value: 20},
                    {value: 50},
                    {value: 100}
                ],
                getAmountString: function (amount) {
                    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(amount);
                },
            }
        },

    }
</script>

<style scoped>
</style>
