<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" />
    <button type="submit">Add todo</button>
  </form>
</template>

<script>
export default {
  name: "AddTodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("addTodo", this.title);
      this.title = "";
    },
  },
};
</script>

<style></style>
