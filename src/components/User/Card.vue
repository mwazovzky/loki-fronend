<template>
  <div class="user-card">
    <div>
      <a :href="href" @click.prevent="$emit('show')">{{ user.id }}</a>
    </div>
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
    <div>
      <button class="btn-show" @click.prevent="$emit('show')">
        <i class="fas fa-eye"></i>
      </button>
      <button class="btn-edit ml-2" @click.prevent="$emit('edit')">
        <i class="fas fa-edit"></i>
      </button>
      <button class="btn-delete ml-2" @click.prevent="$emit('delete')">
        <i class="icon fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    user: { type: Object, required: true },
  },
  computed: {
    href() {
      return `/users/${this.user.id}`;
    },
  },
};
</script>

<style scoped lang="scss">
$colorDanger: #e3342f;
$colorPrimary: #3490dc;

.user-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(222, 222, 222);
  & > div {
    padding: 8px;
  }
}
.ml-2 {
  margin-left: 8px;
}
button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.btn-show {
  color: $colorPrimary;
}
.btn-delete {
  color: $colorDanger;
}
</style>
