import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
  mutations: {
    addCounter(state) {
      state.counter++;
    },
  },
  actions: {
    async asyncAddCounter({ commit }) {
      await setTimeout((product) => {
        commit("addCounter");
      }, 500);
    },
  },
});
