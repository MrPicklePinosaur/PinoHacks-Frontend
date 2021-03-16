import { login, logout } from '@/services/auth.service'

const localData = JSON.parse(localStorage.getItem('localData'))
const initialState = (localData != null)
  ? { accessToken: localData.accessToken, loggedIn: true }
  : { accessToken: null, loggedIn: false }

export const auth = {

  namespaced: true,

  state: initialState,

  mutations: {
    loginSuccess (state, payload) {
      state.accessToken = payload.accessToken
      state.loggedIn = true
    },

    loginFailed (state) {
      state.accessToken = null
      state.loggedIn = false
    },

    logout (state) {
      state.accessToken = null
      state.loggedIn = false
    }
  },

  actions: {
    login ({ commit }, creds) {
      return login(creds.username, creds.password)
        .then(
          data => {
            commit('loginSuccess', data)
            return Promise.resolve(data)
          },
          err => {
            commit('loginFailed')
            return Promise.reject(err)
          }
        )
    },

    logout ({ commit }) {
      commit('logout')
      logout()
    }
  },

  modules: { }

}
