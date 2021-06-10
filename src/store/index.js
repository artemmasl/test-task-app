import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testText: [],
    resultTest: {}
  },
  mutations: {
    updatePosts(state, testText) {
      state.testText = testText;
    },
    updateResultTest (state, resultTest) {
      state.resultTest = resultTest
    }
  },
  actions: {
    fetchText(context) {
      fetch('https://baconipsum.com/api/?type=all-meat&sentences=1')
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
