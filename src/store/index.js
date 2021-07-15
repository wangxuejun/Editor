import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    listMeta: {},
    tapBarBlur: false,
    noVerifyStoreNum: 0
  },
  mutations: {
    setListMeta(state, value) {
      state.listMeta = value
    },
    setUser(state, value) {
      state.user = value
    },
    setTapBarBlur(state, value) {
      state.tapBarBlur = value
    },
    setNoVerifyStoreNum(state, value) {
      state.noVerifyStoreNum = value
    }
  },
  actions: {},
  modules: {}
})
