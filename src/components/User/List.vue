<template>
  <div class="users-index">
    <UserCard
      class="mt-2"
      v-for="user in users"
      :key="user.id"
      :user="user"
      @show="$emit('show', user.id)"
    />
  </div>
</template>

<script>
import UserCard from "@/components/User/Card";

export default {
  name: "List",
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
