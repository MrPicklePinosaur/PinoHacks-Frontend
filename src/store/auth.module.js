
const localData = JSON.parse(localStorage.getItem('localData'))
const initialState = (localData != null)
  ? { accessToken: localData.accessToken, loggedIn: true }
  : { accessToken: null, loggedIn: false }

export const auth = {

  namespaced: true,

  state: initialState,

  mutations: { },

  actions: { },

  modules: { }

}
