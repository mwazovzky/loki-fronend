<template>
  <div class="user-page">
    <div>{{ user.id }}</div>
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    user: { type: Object, required: true },
  },
};
</script>

<style scoped lang="scss">
.user-page {
  //
}
</style>
