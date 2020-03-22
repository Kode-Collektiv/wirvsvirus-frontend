<template>
  <md-button @click="onClickOrder" :disabled="this.disabled" class="md-raised md-primary">Jetzt Bestellen!</md-button>
</template>

<script>
    const gastronomy = require("../model/database");

    export default {
        name: "OrderButton",
        props: ['id'],
        mounted() {
            this.url = this.getGastroById(this.id).url;
            this.disabled = this.url === undefined;
        },
        methods: {
            getGastroById: function (id) {
                return this.gastronomy.find(x => x.id == id);
            },
            onClickOrder: function () {
                window.open(this.url);
            },
        },
        data: function() {
            return {
                url: null,
                disabled: true,
                gastro: null,
                gastronomy: gastronomy.gastronomy
            };
        }
    }
</script>

<style scoped>

</style>
