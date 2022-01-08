<template>
  <div class="about">
    <h1>{{ getUser }}</h1>
    <button @click="addCounter">Add</button>
    <button @click="asyncLoadUser">Add Async</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      counter: computed(() => store.state.counter),
      getUser: computed(() => store.getters.getUser),
      addCounter: () => store.commit("addCounter"),
      asyncLoadUser: () => store.dispatch("asyncLoadUser"),
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
}
</style>