<template>
  <div class="register">
    <h1>Register</h1>
    <form class="register-form" @submit.prevent>
      <div class="form-element">
        Name:
        <input type="text" placeholder="name" v-model="form.name" />
      </div>
      <div class="form-element">
        Email:
        <input type="text" placeholder="email" v-model="form.email" />
      </div>
      <div class="form-element">
        Password:
        <input type="text" placeholder="password" v-model="form.password" />
      </div>
      <div class="form-element">
        Password Confirmation:
        <input type="text" placeholder="password" v-model="form.password_confirmation" />
      </div>
      <div class="form-element">
        <button class="btn" @click="submit">Register</button>
      </div>
      <Error :error="error"/>
    </form>
  </div>
</template>

<script>
import Error from "@/components/UI/Error"

export default {
  name: "Register",
  inheritAttrs: false,
  components: {
    Error,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      error: ""
    };
  },
  methods: {
    submit() {
      this.clearError()
        this.$http.post("register", this.form)
          .then(() => this.$router.push({ name: "Home"})) 
          .catch((err) => this.handleError(err.response)) 
    },
    handleError(err) {
      this.error = err.data
    },
    clearError() {
      this.error = ""
    },
  },
};
</script>

<style scoped lang="scss">
.register-form {
  margin: 0 auto;
  padding: 8px 24px;
  width: 400px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 8px;
}
.form-element {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
input {
  padding: 4px 8px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
}
.btn {
  padding: 4px 8px;
  background-color: #42b983;
  color: #ffffff;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
}
</style>
