<template>
  <div>
    <form class="user-form" @submit.prevent>
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
        <button class="btn" @click="submit">{{ action }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  inheritAttrs: false,
  props: {
    user: { type: Object, required: true },
    action: { type: String, default: "Save" },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    Object.keys(this.form).forEach((key) => (this.form[key] = this.user[key]));
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
      this.clear();
    },
    clear() {
      Object.keys(this.form).forEach((key) => (this.form[key] = ""));
    },
  },
};
</script>

<style scoped lang="scss">
.user-form {
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
