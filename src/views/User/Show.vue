<template>
  <div class="users">
    <h1>User Show</h1>
    <UserPage v-if="user" :user="user" />
  </div>
</template>

<script>
import axios from "axios";
import UserPage from "@/components/User/Page.vue";
const host = "http://localhost:3000";

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
    axios.get(`${host}/api/users/${this.id}`).then((res) => {
      this.user = res.data;
    });
  },
};
</script>
