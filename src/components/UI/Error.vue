<template>
  <div class="error-message" v-if="error">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {type: String, default: ""}
  }
}
</script>

<style scoped lang="scss">
$colorDanger: #e3342f;
.error-message {
  font-size: .8em;
  color: $colorDanger;
}
</style>
