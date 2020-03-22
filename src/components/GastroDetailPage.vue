<template>
  <div id="gastro-detail">
    <md-card>
      <md-card-area md-inset>
        <md-card-header id="card-header">
          <div class="md-title" id="gastro-title">{{gastro.name}}</div>
          <div class="md-subhead" v-if="gastro.contact">
            <img :src="require('../assets/icons/location_on-24px.svg')" />
            <span>{{gastro.address.street}} {{gastro.address.number}}</span>
          </div>
        </md-card-header>

        <md-card-content v-if="getGastroById(id).detail">
          <vue-markdown>{{gastro.detail}}</vue-markdown>
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <CheckoutStepper :payee="gastro.paypal_email" />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import CheckoutStepper from "../components/CheckoutStepper.vue";
const gastronomy = require("../model/database");

export default {
  mounted() {
    this.gastro = this.getGastroById(this.id);
  },
  name: "GastroDetailPage",
  methods: {
    getGastroById: function(id) {
      return this.gastronomy.find(x => x.id == id);
    }
  },
  components: {
    CheckoutStepper,
    VueMarkdown
  },
  props: ["id"],
  data: function() {
    return {
      gastro: null,
      gastronomy: gastronomy.gastronomy
    };
  }
};
</script>

<style scoped>
#gastro-detail {
  padding: 2% 30% 2% 30%;
  height: 100vh;
}

#gastro-title {
    font-size: 4em;
    line-height: 2em;
}

#card-header {
    text-align: center;
}
</style>