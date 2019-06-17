import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

axios.defaults.baseURL = 'http://www.gestor.com/api'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    gastos: [],
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    retriveToken(state, token){
      state.token = token 
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
  	retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
  		axios.post('/login', {
  			username: credentials.username,
  			password: credentials.password
  		})
  		.then(response => {
  			const token = response.data.access_token
        localStorage.setItem('access_token', token)
        context.commit('retriveToken', token)
        resolve(response)
  		})
  		.catch(error => {
  			console.log(error)
        reject(error)
  		})
    })
  	},
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      if(context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
      axios.post('/logout')
      .then(response => {
        localStorage.removeItem('access_token')
        context.commit('destroyToken')
        resolve(response)
      })
      .catch(error => {
        localStorage.removeItem('access_token')
        context.commit('destroyToken')
      })
    })
      }
    }
  }
})