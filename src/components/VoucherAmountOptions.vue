<template>
    <div layout="row" class="voucher-amount-options">

        <md-radio v-for="amount in amount_defaults" :key="amount.value"  :name='radio-test'
                    :id="'radio-' + amount.value"
                    :value='amount.value'
                    @change="amountChanged"
                    v-model="selected_amount">{{getAmountString(amount.value)}}
        </md-radio>

        <md-radio :name='radio-test'
                  :id="'radio-other'"
                  value='other'
                  v-model="selected_amount">Anderer Betrag</md-radio>

        <div v-if="selected_amount==='other'"  class="other-amount-input">
            <md-field>
                <label for="last-name">Anderer Betrag zwischen 1,00€ und 100,00€</label>
                <md-input name="other_amount" id="other_amount" type="number" v-model.number="other_amount" />
                <md-button class="md-raised md-primary" v-on:click="amountChanged(other_amount)">Bestätigen</md-button>
            </md-field>
        </div>
    </div>


</template>

<script>
    export default {
        name: "VoucherAmountOptions",
        methods: {
            getSelectedAmount: () => {

                return this.data.select_other

            },
            amountChanged: function(amount) {
                this.$emit('amount-selected', amount);
            },
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
