<template>
  <a href="/logout" @click.prevent="logout">Logout</a>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$http.post("logout")
        .catch((err) => console.error(err.response))
      }
    }
}
</script>
