<template>
  <div class="col col-md-6 mx-auto">
    <form @submit.prevent="addTodo" class="row g-3 mb-3">
      <div class="col-10">
        <input type="text" class="form-control" v-model="todoText" />
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-primary">
          <i class="bi bi-plus"></i>
        </button>
      </div>
    </form>

    <ul class="list-group">
      <li
        v-for="todo in todos"
        class="list-group-item d-flex justify-content-between align-items-center"
        :key="todo.id"
      >
        <div>
          <input
            type="checkbox"
            class="form-check-input"
            :checked="todo.done"
            @change="toggleDone(todo.id)"
          />
          <span :class="['ms-2', { done: todo.done }]">{{ todo.text }}</span>
        </div>
        <button class="btn btn-flat" @click="deleteTodo(todo.id)">
          <i class="bi bi-x-circle"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
const URL = "http://localhost:5000/todos";

export default {
  data() {
    return {
      todoText: "",
      todos: [],
    };
  },
  methods: {
    async addTodo() {
      if (!this.todoText) return alert("Пожалуйста добавьте описание");

      const newTodo = {
        text: this.todoText,
        done: false,
      };

      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      const data = await res.json();

      this.todos = [...this.todos, data];
      this.todoText = "";
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
