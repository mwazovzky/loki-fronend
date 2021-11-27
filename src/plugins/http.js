import axios from "axios";
import Cookies from "js-cookie"

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

export default {
  install: (app) => {
    app.config.globalProperties.$http = http;
  },
};  

function getAuthToken() {
  const user = JSON.parse(Cookies.get("user") || "null")
  return user && user.token
}
