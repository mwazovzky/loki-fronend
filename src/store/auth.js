import Cookies from "js-cookie"

const user = JSON.parse(Cookies.get("user") || "null")

export default {
  namespaced: true,

  state: {
    user,
  },

  getters: {
    user: state => state.user,
    apiToken: state => (state.user && state.user.token) || "",
  },

  mutations: {
    SET_USER: (state, user) => (state.user = user),
  },

  actions: {
    login: ({ commit }, user) => new Promise(resolve => {
      const expires = 6 / 24
      Cookies.set("user", JSON.stringify(user), { expires })
      commit("SET_USER", user)
      resolve()
    }),

    logout: ({ commit }) => new Promise(resolve => {
      Cookies.remove("user")
      commit("SET_USER")
      resolve()
    }),
  },
}
