<template>
  <ul>
    <TodoItem :key="todo.id" v-for="todo of todos" v-bind:todo="todo" />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 500px;
}
</style>
