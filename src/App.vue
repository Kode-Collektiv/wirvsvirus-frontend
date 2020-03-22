<template>
  <div id="app">
    <md-toolbar id="navbar">
      <h3 class="title">GIESSEN TEILT AUS!</h3>
    </md-toolbar>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
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
}

.md-app {
  height: 100vh;
}

#navbar {
  overflow: hidden;
  justify-content: center;
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.main {
  margin-top: 50px;
}
</style>
