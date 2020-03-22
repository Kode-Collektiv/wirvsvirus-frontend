<template>
  <div class="gastro-overview">
    <div v-for="gastro in gastronomy" :key="gastro.id">
      <md-card md-with-hover>

          <md-card-area>
            <div @click="onClickOrder(gastro.id)">
              <md-card-media md-ratio="4:3">
                <img :src="require('../assets/img/gastro_logos/' + gastro.logo)"/>
              </md-card-media>

              <md-card-header>
                <div class="md-title gastro-title">{{gastro.name}}</div>
                <div class="md-subhead">TRINKGELD | GUTSCHEIN | BESTELLEN</div>
              </md-card-header>
            </div>

            <md-card-actions>
              <md-button class="" @click="onClickGastro(gastro.id)">Gutschein | Trinkegeld</md-button>
              <md-button class="md-primary" @click="onClickOrder(gastro.id)"> Bestellen</md-button>
            </md-card-actions>
          </md-card-area>
      </md-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .md-card {
    width: 21em;
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

            onClickOrder: function (id) {

                const gastro_url = this.getGastroById(id).url;

                if(!gastro_url) {
                    this.onClickGastro(id)
                }else {
                    window.open(gastro_url);
                }
            },

            getGastroById: function (id) {
                return this.gastronomy.find(x => x.id == id);
            }

        },
        data: function () {
            return {
                gastronomy: gastronomy.gastronomy
            };
        }
    };
</script>
