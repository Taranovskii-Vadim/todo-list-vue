<template>
  <h1>Todo application</h1>
  <hr />
  <TodoList v-bind:todos="todos" />
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "First", completed: false },
        { id: 2, title: "Second", completed: false },
        { id: 3, title: "Third", completed: false },
      ],
    };
  },
  components: { TodoList },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
