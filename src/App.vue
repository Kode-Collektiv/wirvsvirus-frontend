<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli:300&display=swap");

@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: #95ac87,
  accent: #c6deb7,
  theme: light
));

@import "~vue-material/dist/theme/all";

html,
body {
  font-family: "Muli", sans-serif;
}

#app {
  font-family: "Muli", sans-serif;
  background-color: #fbffef;
  margin-top: 45px;
}
</style>
