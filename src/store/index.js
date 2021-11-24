import Vue from "vue";
import Vuex from "vuex";
// import CountModule from "shell/CountModule";

// console.log(CountModule);

// console.log('asf', store);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // dogs: ["dog 1", "dog 2", "dog 3"]
  },
  mutations: {
    // setDog(state, payload) {
    //   state.dogs.push(payload);
    // }
  },
  actions: {},
  modules: {
    // countModule: CountModule
  },
});
