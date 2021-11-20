<template>
  <a href="/logout" @click.prevent="logout">Logout</a>
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions({ authLogout: "auth/logout" }),
    logout() {
      this.authLogout()
    },
  },
}
</script>
