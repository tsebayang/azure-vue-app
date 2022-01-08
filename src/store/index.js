import { createStore } from "vuex";

export default createStore({
  state: {
    userDetails: null,
    userId: null,
    userRole: null,
    counter: 0,
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getUser(state) {
      try {
        // const res = state.userRole.filter((e) => e.includes("gorillas"))[0]
        //   ? true
        //   : false;
        const res = state.userDetails
        return res;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  mutations: {
    addCounter(state) {
      state.counter++;
    },
    setUser(state, payload) {
      try {
        // state.userDetails = payload.userDetails;
        // state.userId = payload.userId;
        // state.userRole = payload.userRoles;
        state.userDetails = "Testing";
        state.userId = "Testing";
        state.userRole = "Testing";
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {
    async asyncAddCounter({ commit }) {
      setTimeout(() => {
        commit("addCounter");
      }, 500);
    },
    async asyncLoadUser({ commit }) {
      // let { clientPrincipal } = await fetch("/.auth/me").json();
      commit("setUser");
    },
  },
});
