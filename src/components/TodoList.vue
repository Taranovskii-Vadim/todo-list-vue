<template>
  <ul>
    <TodoItem
      :key="todo.id"
      v-for="todo of todos"
      :todo="todo"
      @change="changeCompleted"
      @delete="deleteTodo"
    />
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
  methods: {
    changeCompleted(id) {
      this.$emit("changeCompleted", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
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
