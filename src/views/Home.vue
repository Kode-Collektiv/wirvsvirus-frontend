<template>
  <GastroOverview/>
</template>

<script>
    import GastroOverview from "../components/GastroOverview.vue";

    export default {
        name: "Home",
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
