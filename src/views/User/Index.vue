<template>
  <div class="users">
    <h1>User Index</h1>
    <UserList :users="users" @show="showUser" />
  </div>
</template>

<script>
import axios from "axios";
import UserList from "@/components/User/List.vue";
const host = "http://localhost:3000";

export default {
  name: "UserIndex",
  components: {
    UserList,
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
  methods: {
    showUser(id) {
      this.$router.push({ name: "UserShow", params: { id } });
    },
  },
};
</script>
