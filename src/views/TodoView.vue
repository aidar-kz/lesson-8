<template>
  <div class="col col-md-6 mx-auto">
    <AddTodo @add-todo="addTodo" />

    <ul class="list-group">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        v-bind="todo"
        @toggle-done="toggleDone"
        @delete-todo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import AddTodo from "@/components/AddTodo.vue";

const URL = "http://localhost:5000/todos";

export default {
  components: { TodoItem, AddTodo },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async addTodo(newTodo) {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const data = await res.json();

      this.todos = [...this.todos, data];
    },
    async fetchTodos() {
      const res = await fetch(URL);

      const data = await res.json();

      return data;
    },
    async fetchTodo(id) {
      const res = await fetch(`${URL}/${id}`);

      const data = await res.json();

      return data;
    },
    async toggleDone(id) {
      const todoToToggle = await this.fetchTodo(id);
      const updatedTodo = { ...todoToToggle, done: !todoToToggle.done };

      const res = await fetch(URL + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      const data = await res.json();

      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: data.done } : todo
      );
    },
    async deleteTodo(id) {
      if (confirm("Вы уверены?")) {
        const res = await fetch(`${URL}/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.todos = this.todos.filter((todo) => todo.id !== id))
          : alert("Ошибка удаления");
      }
    },
  },
  async created() {
    this.todos = await this.fetchTodos();
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through solid green;
  opacity: 0.5;
}
</style>
