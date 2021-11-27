<template>
  <a href="/logout" @click.prevent="logout">Logout</a>
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions({ authLogout: "auth/logout" }),
    logout() {
      this.$http.post("logout")
          .then(() => this.authLogout())
          .then(() => this.$router.push({"name": "Home"}))
    },
  },
}
</script>
