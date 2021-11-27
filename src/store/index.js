import { createStore } from "vuex";
import auth from "./auth"
import snackbar from "./snackbar"


export default createStore({
  modules: {
    auth,
    snackbar,
  },
  state: {},
  mutations: {},
  actions: {},
});
