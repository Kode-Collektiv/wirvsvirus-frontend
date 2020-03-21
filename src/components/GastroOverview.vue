<template>
  <div>
    <md-card md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{gastro.name}}</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img :src="require('../assets/img/gastro_logos/' + gastro.logo)" alt="People" />
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Zum Angebot</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "GastroOverview",
  data: function() {
    return {
      gastro: {
        name: "Reynabi",
        contact: {
          facebook: "https://www.facebook.com/KussmundGiessen/",
          tel: "0641 2797720"
        },
        address: {
          postal_code: 35394,
          street: "Grünberger Str.",
          number: "115"
        },
        logo: "reynabi.png"
      }
    };
  }
};
</script>
