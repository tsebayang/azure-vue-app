<template>
  <Navigation :userDetails="getUserDetails" />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      getUserDetails: computed(() => store.getters.getUserDetails),
      // addCounter: () => store.commit("addCounter"),
      // asyncAddCounter: () => store.dispatch("asyncAddCounter"),
    };
  },
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
  color: white;
}
body {
  background-color: #2b2d38;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>
