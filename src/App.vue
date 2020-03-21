<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar style="justify-content: center">
      <h3 class="md-title" style="text-align: center;">GIESSEN TEILT AUS!</h3>
    </md-app-toolbar>

    <md-app-content>
      <GastroOverview />
    </md-app-content>
  </md-app>
</template>

<script>
import GastroOverview from "./components/GastroOverview.vue";

export default {
  name: "App",
  components: {
    GastroOverview
  }
};
</script>

<style>
.md-app {
  height: 100vh;
}
</style>
