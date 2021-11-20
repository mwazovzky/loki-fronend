<template>
  <div class="hello">
    <h3>Hello {{ username }}!</h3>
  </div>
</template>

<script>
export default {
  name: "HelloUser",

  props: {
    username: { type: String, requred: true },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
