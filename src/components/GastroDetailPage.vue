<template>
    <div class="gastro-detail">

      <md-content class="gastro-name-banner md-accent">
        <h1>{{getGastroById(id).name }}</h1>
      </md-content>

      <div class="gastro-detail-container" >


        <div v-if="getGastroById(id).detail">
          <vue-markdown>{{getGastroById(id).detail}}</vue-markdown>
        </div>

        <div class="gastro-detail-contact">
          <p v-if="getGastroById(id).contact.tel">Tel: {{getGastroById(id).contact.tel}}</p>
          <p v-if="getGastroById(id).contact.email">Email: {{getGastroById(id).contact.email}}</p>
          <p v-if="getGastroById(id).contact.instagram">Ig: {{getGastroById(id).contact.instagram}}</p>
          <p v-if="getGastroById(id).contact.facebook">Facebook: {{getGastroById(id).contact.facebook}}</p>
        </div>


        <CheckoutStepper/>

      </div>

    </div>

</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import CheckoutStepper from "../components/CheckoutStepper.vue";
    const gastronomy = require("../model/database");
    
    export default {
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
