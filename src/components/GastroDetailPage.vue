<template>
  <div id="gastro-detail">
    <md-card>
      <md-card-area md-inset id="card-area">
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
        <OrderButton :id="id" />
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
import OrderButton from "../components/OrderButton.vue";
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
    VueMarkdown,
    OrderButton
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
  padding: 2% 25% 2% 25%;
  height: 100vh;
}

#card-area {
  text-align: center;
  padding-bottom: 1em;
}

#gastro-title {
  font-size: 4em;
  line-height: 2em;
}

#card-title {
  text-align: center;
}

@media only screen and (max-width: 950px) {
  #gastro-detail {
    padding: 2% 10% 2% 10%;
    height: 100vh;
  }
}

@media only screen and (max-width: 600px) {
  #gastro-detail {
    padding: 5% 3% 3% 2%;
    height: 100vh;
  }

  #gastro-title {
    font-size: 2em;
    line-height: 2em;
  }
}
</style>