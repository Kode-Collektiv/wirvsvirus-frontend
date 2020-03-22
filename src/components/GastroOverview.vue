<template>
  <div class="gastro-overview">
    <div v-for="gastro in gastronomy" :key="gastro.id">
      <md-card md-with-hover>
        <div @click="onClickGastro(gastro.id)">
          <md-card-area>
            <md-card-media md-ratio="4:3">
              <img :src="require('../assets/img/gastro_logos/' + gastro.logo)"/>
            </md-card-media>

            <md-card-header>
              <div class="md-title gastro-title">{{gastro.name}}</div>
              <div class="md-subhead">TRINKGELD | GUTSCHEIN | BESTELLEN</div>
            </md-card-header>
          </md-card-area>
        </div>
      </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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

  .gastro-overview {
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    padding-top: 1em;
  }

    .md-card {
      margin: 0.5em;
    }
  }
</style>

<script>
    const gastronomy = require("../model/database");

    export default {
        name: "GastroOverview",
        methods: {
            onClickGastro: function (id) {
                this.$router.push({name: 'participants', params: { id: id}});
            },

        },
        data: function () {
            return {
                gastronomy: gastronomy.gastronomy
            };
        }
    };
</script>
