<template>
  <div class="gastro-overview">
    <div v-for="gastro in gastronomy" :key="gastro.id">
      <md-card md-with-hover>
        <md-card-area>
          <md-card-media md-ratio="4:3">
            <img :src="require('../assets/img/gastro_logos/' + gastro.logo)" />
          </md-card-media>

          <md-card-header>
            <div class="md-title gastro-title">{{gastro.name}}</div>
            <div class="md-subhead">TRINKGELD | GUTSCHEIN | BESTELLEN</div>
          </md-card-header>
        </md-card-area>
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

.md-card .md-title {
  font-size: 1.5em;
}

.md-card .md-subhead {
  font-size: 0.7em;
}

@media only screen and (max-width: 950px) {
  .gastro-overview {
    padding-left: 2%;
    padding-right: 2%;
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
