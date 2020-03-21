<template>
    <div class="voucher-amount-options">
        <div class="amount-option" v-for="amount in amount_defaults" :key="amount.value">
            <input
                    :name='radio-amount'
                    :id="'radio-' + amount.value"
                    :value='amount.value'
                    class="radio-custom"
                    type="radio"
                    v-model="selected_amount"
            >
            <label :for="'radio-'+ amount.value">{{getAmountString(amount.value)}}</label>
        </div>

        <input
                :name='radio-amount'
                :id='radio-sonstiges'
                class="radio-custom"
                type="radio"
                v-model="selected_amount"
        >
        <label :for='radio-sonstiges'>Anderer Betrag</label>

        <div v-if="!selected_amount"  class="other-amount-input">
            <input v-model="other_amount"
                   placeholder="Anderer Betrag zwischen 1,00€ und 100,00€">
        </div>

        <div>
            <button v-on:click="action">Help NOW!</button>
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
                return this.selected_amount || this.other_amount
            }
        },
        data: function () {
            return {
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
    .amount-option {
        display: inline;
        margin-right: 25px;
    }

    .other-amount-input{
        margin-top: 25px;
    }

    .other-amount-input > input{
        width: 500px;
    }
</style>
