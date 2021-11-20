<template>
  <div id="nav">
    <HelloUser v-if="user" :username="name"/>
    <router-link to="/">Home</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/login">Login</router-link> |
    <Logout /> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloUser from "@/components/Auth/HelloUser"
import Logout from "@/components/Auth/Logout"
import { mapGetters } from "vuex"

export default {
  components: {
    HelloUser,
    Logout,
  },
  computed: {
    ...mapGetters({ user: "auth/user" }),
    name() {
      return this.user.name
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
