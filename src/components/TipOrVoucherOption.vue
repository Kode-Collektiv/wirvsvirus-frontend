<template>
  <div class="tip-or-voucher-option">
    <h3>Du kannst auf mehrere Arten die lokalen Gastronomen in diesen schwierigen Zeiten unterstützen.</h3>
    <md-card md-with-hover>
      <div @click="onClickCard('tip')">
        <md-card-header>
          <div class="md-title">Unterstütze uns mit einer Spende</div>
        </md-card-header>

        <md-card-content>
          <p>Mit einem Trinkgeld kannst du uns auf direktem Weg helfen.</p>

          <div class="img-container">
            <img :src="require('../assets/icons/favorite-24px.svg')"
                 height="100x"
                 width="100px">
          </div>
        </md-card-content>
      </div>
    </md-card>
    <md-card md-with-hover>
      <div @click="onClickCard('voucher')">
        <md-card-header>
          <div class="md-title">Kaufe einen Gutschein</div>
        </md-card-header>

        <md-card-content>
          <p>Wähle einen Gutschein mit deinem Wunschbetrag und gebe zusätzlich ein Trinkgeld deiner Wahl.</p>
          <div class="img-container">
            <img :src="require('../assets/icons/shopping_cart-24px.svg')"
                 height="100x"
                 width="100px">
          </div>
        </md-card-content>
      </div>
    </md-card>
  </div>
</template>

<script>
    export default {
        name: "TipOrVoucherOption",
        methods: {
            onClickCard: function (type) {
                this.$emit('type-selected', type);
            },
        }
    }
</script>

<style lang="scss" scoped>

  .img-container {
    text-align: center;
    display: block;
  }

  .md-card {
    width: 40%;
    max-width: 350px;
    min-width: 200px;
    height: 330px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    margin-right: 3em;
    margin-top: 3em;
  }
</style>
