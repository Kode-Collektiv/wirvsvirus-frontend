<template>
    <div class="gastro-detail">
        <h1>{{getGastroById(id).name }}</h1>

      <img
              :src="require('../assets/img/gastro_logos/' + getGastroById(id).logo)"
              height="300x"
              width="300px"
      >


      <CheckoutStepper/>

      <p>{{getGastroById(id).detail}}</p>

      <div class="gastro-detail-contact">
        <p v-if="getGastroById(id).contact.tel">Tel: {{getGastroById(id).contact.tel}}</p>
        <p v-if="getGastroById(id).contact.email">Email: {{getGastroById(id).contact.email}}</p>
        <p v-if="getGastroById(id).contact.instagram">Ig: {{getGastroById(id).contact.instagram}}</p>
        <p v-if="getGastroById(id).contact.facebook">Facebook: {{getGastroById(id).contact.facebook}}</p>
      </div>


    </div>

</template>

<script>

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
            CheckoutStepper
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
</style>
