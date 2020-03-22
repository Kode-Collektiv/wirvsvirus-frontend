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

<style>
@import url("https://fonts.googleapis.com/css?family=Muli:300&display=swap");

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
