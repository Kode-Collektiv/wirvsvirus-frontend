<template>
  <div class="gastro-overview">
    <div v-for="gastro in gastronomy" :key="gastro.id">
    <md-card  md-with-hover>
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
  </div>
</template>

<style lang="scss" scoped>
.gastro-overview {
  padding: 20em;
  display: flex;
  flex-wrap: wrap;
}

.md-content {
  width: 100px;
  height: 100px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.md-card {
  width: 320px;
  margin: 24px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "GastroOverview",
  data: function() {
    return {
      gastronomy: [
        {
          id: 1,
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
        },
        {
          id: 2,
          name: "Bärenstark",
          contact: {
            tel: "0641 97274191"
          },
          address: {
            postal_code: 35390,
            street: "Katharinengasse",
            number: "14"
          },
          logo: "baerenstark.png"
        }
      ]
    };
  }
};
</script>
