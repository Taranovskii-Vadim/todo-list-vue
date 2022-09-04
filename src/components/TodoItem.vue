<template>
  <li>
    <div class="box">
      <input type="checkbox" @change="$emit('change', todo.id)" />
      <strong>{{ todo.id }}.</strong>
    </div>
    <h4 v-bind:class="{ done: todo.completed }">
      {{ todo.title }}
    </h4>
    <button @click="$emit('delete', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
}

.box input {
  margin-right: 5px;
}

li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 6px 12px;
}

.done {
  text-decoration: line-through;
}

button {
  cursor: pointer;
  border: 0;
  border-radius: 25%;
  background-color: red;
  color: white;
}

h4 {
  margin: 0;
}
</style>
