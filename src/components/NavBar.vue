<template>
  <md-toolbar id="navbar">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button :to="{ path: '/' }" class="md-icon-button" v-show="showBackButton">
          <img :src="require('../assets/icons/arrow_back-24px.svg')" />
        </md-button>
      </div>
      <h3 class="md-title" style="flex: 1">GIESSEN TEILT AUS!</h3>
    </div>
  </md-toolbar>
</template>

<style lang="scss" scoped>
#navbar {
  overflow: hidden;
  background-color: #95ac87;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
</style>

<script>
export default {
  name: "NavBar",
  computed: {
    showBackButton() {
      if (this.$route.path !== "/") {
        return true;
      }
      return false;
    }
  }
};
</script>
