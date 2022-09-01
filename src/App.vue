<template>
  <h1>Todo application</h1>
  <hr />
  <TodoList
    v-bind:todos="todos"
    @changeCompleted="changeCompleted"
    @deleteTodo="deleteTodo"
  />
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
  methods: {
    changeCompleted(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
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
