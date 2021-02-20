import { createStore } from "vuex";
import persistedState from "vuex-persistedstate";
import { GlobalDataProps } from "./types";
export default createStore<GlobalDataProps>({
  state: {
    count: 5,
    number: 100
  },
  mutations: {
    add(state, payload) {
      state.count += payload;
    },
    addNumber(state) {
      state.number++;
    }
  },
  actions: {},
  modules: {},
  plugins: [
    persistedState({
      storage: window.sessionStorage
    })
  ]
});
