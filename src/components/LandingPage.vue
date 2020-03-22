<template>
  <div class="landing-page">
    <div classe="greeting-banner">
      <img :src="require('../assets/logo/helpnoweatlater.svg')" height="150px" width="150px" />
      <h1>Wir sind ein Zusammenschluss gießener Gastronomen.</h1>
      <p>Du bekommst hier schnell einen Überblick darüber, wie du an dein Lieblingsessen kommst. Mit klick auf die Logos erhälst du alle Informationen über die Liefermöglichkeiten der jeweiligen Läden.</p>
      <md-button class="md-raised">Buy me a meal!</md-button>
    </div>

    <GastroOverview />
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  text-align: center;
  line-height: 2em;
  width: 100%;
}
</style>

<script>
import GastroOverview from "./GastroOverview.vue";

export default {
  name: "LandingPage",
  components: {
    GastroOverview
  }
};
</script>
