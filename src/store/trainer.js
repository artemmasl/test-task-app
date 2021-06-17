
export default {
  state: {
    testText: [],
    resultTest: {},
  },
  mutations: {
    updateText(state, testText) {
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
        context.commit('updateText', data)
      })
    },
  },
};
