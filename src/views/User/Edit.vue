<template>
  <div class="users">
    <h2>User Edit</h2>
    <UserForm v-if="user" :user="user" @submit="updateUser" />
  </div>
</template>

<script>
import UserForm from "@/components/User/Form.vue";

export default {
  name: "UserEdit",
  components: {
    UserForm,
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
  methods: {
    updateUser(payload) {
      this.$http.put(`users/${this.id}/update`, payload).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>
