<template>
  <div>
    <AddTodoForm @addTodo="addTodo" />
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="todos.length"
      v-bind:todos="todos"
      @changeCompleted="changeCompleted"
      @deleteTodo="deleteTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import Loader from "../components/Loader.vue";

export default {
  name: "HomePage",
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  components: { TodoList, AddTodoForm, Loader },
  mounted() {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const result = await response.json();
        this.todos = result;
      } finally {
        this.loading = false;
      }
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
