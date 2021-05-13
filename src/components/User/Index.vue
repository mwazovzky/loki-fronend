<template>
  <div class="users-index">
    <h2>Users Index</h2>
    <UserCard class="mt-2" v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCard from "@/components/User/Card";

export default {
  name: "Index",
  components: {
    UserCard,
  },
  props: {
    users: { type: Array, required: true },
  },
};
</script>

<style scoped lang="scss">
.mt-2 {
  margin-top: 8px;
}
</style>
