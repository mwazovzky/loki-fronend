import axios from "axios";
import Cookies from "js-cookie";
import store from "@/store";
import router from "@/router";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  config => {
    const token = getAuthToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } 
    return config
  },
  error => Promise.reject(error),
)

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.status) {
      case 401:
        store.dispatch("snackbar/show", { message: "Access denied" })
        // store.dispatch("auth/logout")
        router.push({ name: "Login" })
        break
      case 403:
        store.dispatch("snackbar/show", { message: "Access denied" })
        break
      case 404:
        store.dispatch("snackbar/show", { message: "Object not found" })
        break
      case 500:
        store.dispatch("snackbar/show", { message: "Server error" })
        break
    }
    return Promise.reject(error)
  },
)

function getAuthToken() {
  const user = JSON.parse(Cookies.get("user") || "null")
  return user && user.token
}

export default {
  install: (app) => {
    app.config.globalProperties.$http = http;
  },
};  

