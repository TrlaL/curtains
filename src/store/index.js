import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {}
  },

  getters: {
    modal: state => state.modal
  },

  mutations: {
    SET_MODAL (state, modal) {
      state.modal = modal
    }
  }
})