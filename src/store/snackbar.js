export default {
    namespaced: true,
  
    state: {
      show: false,
      color: "error",
      message: "Hello",
      timeout: 5000,
    },  
  
    getters: {
      GET: state => state,
    },
  
    mutations: {
      SET(state, { show = true, color = "error", message = "" }) {
        state.show = show
        state.color = color
        state.message = message
      },
    },
  
    actions: {
      show({ commit  }, { message, color = "error" }) {
        commit("SET", { show: true, color, message })
        setTimeout(() => {
          commit("SET", { show: false })
        }, 5000);
      },
    },
  }