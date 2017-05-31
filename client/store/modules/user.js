const state = {
  isLoggedIn: false,
  login: '',
}

const mutations = {
  LOGIN (state, {login}) {
    state.isLoggedIn = true
    state.login = login
  },
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
