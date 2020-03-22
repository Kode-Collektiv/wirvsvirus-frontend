<template>
    <div class="gastro-detail">

      <md-content class="gastro-name-banner md-accent">
        <h1>{{gastro.name }}</h1>
      </md-content>

      <div class="gastro-detail-container" >


        <div v-if="getGastroById(id).detail">
          <vue-markdown>{{gastro.detail}}</vue-markdown>
        </div>

        <div class="gastro-detail-contact">
          <p v-if="gastro.contact.tel">Tel: {{gastro.contact.tel}}</p>
          <p v-if="gastro.contact.email">Email: {{gastro.contact.email}}</p>
          <p v-if="gastro.contact.instagram">Ig: {{gastro.contact.instagram}}</p>
          <p v-if="gastro.contact.facebook">Facebook: {{gastro.contact.facebook}}</p>
        </div>

        <CheckoutStepper :payee="gastro.paypal_email"/>

        <div class="gastro-img-container">
          <img
                  :src="require('../assets/img/gastro_logos/' + gastro.logo)"
                  height="300x"
                  width="300px"
          >
        </div>

      </div>

    </div>

</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import CheckoutStepper from "../components/CheckoutStepper.vue";
    const gastronomy = require("../model/database");
    
    export default {
        mounted() {
            this.gastro = this.getGastroById(this.id);
        },
        name: "GastroDetailPage",
        methods: {
            getGastroById: function (id) {
                return this.gastronomy.find(x => x.id == id);
            }
        },
        components: {
            CheckoutStepper,
            VueMarkdown
        },
        props: ['id'],
        data: function() {
            return {
                gastro: null,
                gastronomy: gastronomy.gastronomy
            };
        }
    }
</script>

<style scoped>

  .gastro-name-banner {
    text-align: center;
    line-height: 15em;
    width: 100%;
  }

  .gastro-detail-container {
    margin: 0 auto;
    max-width: 800px;
  }

  .gastro-img-container {
    text-align: center;
  }
</style>
