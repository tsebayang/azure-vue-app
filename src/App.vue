<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

}
body {
  background-color: #2b2d38;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
