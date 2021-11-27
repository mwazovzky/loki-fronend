<template>
  <div class="snackbar" v-if="show">
    {{ message }}
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters({
      snackbar: "snackbar/GET",
    }),
    show() {
      return this.snackbar.show
    },
    message() {
        return this.snackbar.message
    }
  },
}
</script>

<style lang="scss" scoped>
.snackbar {
  border: 1px solid rgb(222,222,222);
  background-color: red;
  color: white;
}
</style>