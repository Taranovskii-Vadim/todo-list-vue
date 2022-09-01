<template>
  <h1>Todo application</h1>
  <AddTodoForm @addTodo="addTodo" />
  <hr />
  <TodoList
    v-bind:todos="todos"
    @changeCompleted="changeCompleted"
    @deleteTodo="deleteTodo"
  />
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodoForm from "./components/AddTodoForm.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  components: { TodoList, AddTodoForm },
  mounted() {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      this.todos = result;
    };
    getData();
  },
  methods: {
    addTodo(title) {
      const newTodo = { id: this.todos.length + 1, title, completed: false };

      this.todos.push(newTodo);
    },
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
