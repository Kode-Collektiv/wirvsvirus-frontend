<template>
  <div class="landing-page">
    <div class="greeting-banner">
      <img class="logo" :src="require('../assets/logo/helpnoweatlater.svg')" />
      <div class="title">
        Jetzt bestellen.
        <br />Gleich oder später genießen.
      </div>
      <div
        class="subtitle"
      >Mit dieser Seite bieten wir dir nicht nur die Möglichkeit dein gewohntes und geliebtes Essen zu bestellen. Du kannst auch mit dem Kauf eines Gutscheins dir oder bedürftigen Mitmenschen einen Gefallen tun oder mit einem Trinkgeld die lokale Gastronomie unterstützen.</div>
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

.greeting-banner {
  color: white;
  background: url(../assets/background/starfield.gif) no-repeat center center
    fixed;
  background-size: cover;
}

.logo {
  height: 8em;
  width: 8em;
  color: white;
}

.title {
  font-size: 4em;
  letter-spacing: 0.1em;
  line-height: 1em;
  padding-top: 0.5em;
}

.subtitle {
  font-size: 1.5em;
  text-align: center;
  padding: 1em 15em 1em 15em;
}

@media only screen and (max-width: 950px) {
  .title {
    font-size: 3em;
    padding: 1em 2em 1em 2em;
  }

  .subtitle {
    font-size: 1em;
    padding: 1em 2em 1em 2em;
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 6em;
    width: 6em;
  }

  .title {
    font-size: 2em;
    padding: 0.5em 0 0.5em 0;
  }

  .subtitle {
    font-size: 1em;
    line-height: 1em;
    padding: 1em 2em 1em 2em;
  }
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
