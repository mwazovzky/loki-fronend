<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="mt-2">
      {{ dashboard }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      dashboard: {}
    }
  },
  created() {
    this.$http.get("dashboard")
      .then((res) => {
        this.dashboard = res.data;
      })
      .catch(() => {
        this.redirectLogin();
      });
  },
  methods: {
    redirectLogin() {
      this.$router.push({ name: "Login"})
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
