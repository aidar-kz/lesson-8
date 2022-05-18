<template>
  <form @submit.prevent="onSubmit" class="row g-3 mb-3">
    <div class="col-10">
      <input type="text" class="form-control" v-model="todoText" />
    </div>

    <div class="col-2">
      <button type="submit" class="btn btn-primary">
        <i class="bi bi-plus"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    onSubmit() {
      if (!this.todoText) return alert("Пожалуйста добавьте описание");

      const newTodo = {
        text: this.todoText,
        done: false,
      };

      this.$emit("add-todo", newTodo);

      this.todoText = "";
    },
  },
};
</script>
