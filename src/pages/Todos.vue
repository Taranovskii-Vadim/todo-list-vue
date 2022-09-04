<template>
  <div>
    <AddTodoForm @addTodo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not completed">Not completed</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
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
      filter: "all",
    };
  },
  components: { TodoList, AddTodoForm, Loader },
  computed: {
    filteredTodos() {
      if (this.filter === "completed") {
        return this.todos.filter((item) => item.completed);
      }

      if (this.filter === "not completed") {
        return this.todos.filter((item) => !item.completed);
      }

      return this.todos;
    },
  },
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
