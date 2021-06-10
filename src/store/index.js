import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testText: []
  },
  mutations: {
    updatePosts(state, testText) {
      state.testText = testText
    },
  },
  actions: {
    fetchText(context) {
      fetch('https://baconipsum.com/api/?type=all-meat&sentences=10')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        context.commit('updatePosts', data)
      })
    },
  },
  modules: {},
});
