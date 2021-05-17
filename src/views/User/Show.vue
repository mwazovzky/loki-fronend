<template>
  <div class="users">
    <h1>User Show</h1>
    <UserPage v-if="user" :user="user" />
  </div>
</template>

<script>
import UserPage from "@/components/User/Page.vue";

export default {
  name: "UserShow",
  components: {
    UserPage,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.$http.get(`users/${this.id}`).then((res) => {
      this.user = res.data;
    });
  },
};
</script>
