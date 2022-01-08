<template>
  <div class="about">
    <h1>{{ getCounter }}</h1>
    <button @click="addCounter">Add</button>
    <button @click="asyncAddCounter">Add Async</button>
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
      getCounter: computed(() => store.getters.getCounter),
      addCounter: () => store.commit("addCounter"),
      asyncAddCounter: () => store.dispatch("asyncAddCounter"),
    };
  },
};
</script>