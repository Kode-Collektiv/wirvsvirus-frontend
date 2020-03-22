<template>
  <div class="landing-page">
    <div class="greeting-banner">
      <div class="title">
        <span>
          Jetzt bestellen.
          <br />Gleich oder später genießen.
        </span>
      </div>
      <img class="logo" :src="require('../assets/logo/fist.svg')" />
      <div class="subtitle">
        <p>Mit dieser Seite bieten wir dir nicht nur die Möglichkeit dein gewohntes und geliebtes Essen zu bestellen. Du kannst auch mit dem Kauf eines Gutscheins dir oder bedürftigen Mitmenschen einen Gefallen tun oder mit einem Trinkgeld die lokale Gastronomie unterstützen.</p>
      </div>
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
  background: url(../assets/background/background.gif) no-repeat center center
    fixed;
  background-size: cover;
}

.logo {
  height: 10em;
  width: 10em;
  background-color: #c6deb7;
}

.title {
  font-size: 4em;
  letter-spacing: 0.1em;
  line-height: 1.2em;
  padding: 1.5em 5% 0 5%;
  text-align: center;
}

.title span {
  background-color: #c6deb7;
}

.subtitle {
  font-size: 1.5em;
  text-align: center;
  padding: 0 20% 1em 20%;
  text-align: center;
}

.subtitle p {
  background-color: #c6deb7;
}

@media only screen and (max-width: 950px) {
  .title {
    font-size: 3em;
    padding: 1em 2em 1em 2em;
  }

  .subtitle {
    font-size: 1em;
    padding: 1em 10em 1em 10em;
  }
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 6em;
    width: 6em;
  }

  .title {
    font-size: 2em;
    padding: 1em 0 1em 0;
  }

  .subtitle {
    font-size: 1.2em;
    line-height: 1em;
    padding: 1em 3em 1em 3em;
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
