<template>
  <div class="users">
    <h1>User Index</h1>
    <UserList :users="users" @show="showUser" />
    <div class="mt-2">
      <UserForm v-model:user="newUser" @submit="createUser" />
    </div>
  </div>
</template>

<script>
import UserList from "@/components/User/List.vue";
import UserForm from "@/components/User/Form.vue";

export default {
  name: "UserIndex",
  components: {
    UserList,
    UserForm,
  },
  data() {
    return {
      users: [],
      newUser: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.$http.get("users").then((res) => {
      this.users = res.data;
    });
  },
  methods: {
    showUser(id) {
      this.$router.push({ name: "UserShow", params: { id } });
    },
    createUser(payload) {
      this.$http.post("users", payload).then((res) => {
        this.users.push(res.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mt-2 {
  margin-top: 8px;
}
.btn {
  padding: 4px 8px;
  background-color: #42b983;
  color: #ffffff;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
}
</style>
