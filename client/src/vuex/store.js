import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const store = new Vuex.Store({
  state: {
    grow: ''
  },
  mutations: {
    setGrow (state, payload) {
      state.grow = payload
    }
  },
  actions: {
    liveGrow ({ commit }, user) {
      http.get('/live')
      .then(result => {
        commit('setGrow', result)
      })
      .catch(err => console.error(err))
    }
  }
})

export default store
