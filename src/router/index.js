import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserIndex from "../views/User/Index.vue";
import UserShow from "../views/User/Show.vue";
import UserEdit from "../views/User/Edit.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "UserIndex",
    component: UserIndex,
  },
  {
    path: "/users/:id",
    name: "UserShow",
    component: UserShow,
    props: true,
  },
  {
    path: "/users/:id/edit",
    name: "UserEdit",
    component: UserEdit,
    props: true,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
