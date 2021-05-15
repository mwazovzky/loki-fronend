<template>
  <div class="user-card">
    <div>
      <a :href="href" @click.prevent="$emit('show')">{{ user.id }}</a>
    </div>
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    user: { type: Object, required: true },
  },
  computed: {
    href() {
      return `/users/${this.user.id}`;
    },
  },
};
</script>

<style scoped lang="scss">
.user-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(222, 222, 222);
  & > div {
    padding: 8px;
  }
}
</style>
