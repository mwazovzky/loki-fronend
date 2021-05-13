<template>
  <div class="users">
    <h1>Users</h1>
    <UserIndex :users="users" />
  </div>
</template>

<script>
import axios from "axios";
import UserIndex from "@/components/User/Index.vue";
const host = "http://localhost:3000";

export default {
  name: "Users",
  components: {
    UserIndex,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get(`${host}/api/users`).then((res) => {
      this.users = res.data;
    });
  },
};
</script>
