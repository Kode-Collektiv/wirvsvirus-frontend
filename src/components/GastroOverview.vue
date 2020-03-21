<template>
  <div class="gastro-overview">
    <div v-for="gastro in gastronomy" :key="gastro.id">
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
  </div>
</template>

<style lang="scss" scoped>
.gastro-overview {
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.md-card {
  width: 20em;
  margin: 2em;
  display: inline-block;
  vertical-align: top;
}

@media only screen and (max-width: 950px) {
  .gastro-overview {
    padding-left: 5%;
    padding-right: 5%;
  }

  .md-card {
    margin: 1em;
  }
}

@media only screen and (max-width: 600px) {
  .gastro-overview {
    padding-left: 0;
    padding-right: 0;
  }

  .md-card {
    margin: 0.5em;
  }
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
