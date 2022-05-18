<template>
  <div class="container">
    <form @submit.prevent="addPost">
      <div class="mb-3">
        <label for="title" class="form-label">Заголовок</label>
        <input type="text" class="form-control" v-model="title" required />
      </div>

      <div class="mb-3">
        <label for="text" class="form-label">Текст</label>
        <input type="text" class="form-control" v-model="text" required />
      </div>

      <div class="mb-3">
        <RouterLink to="/" class="btn btn-warning me-2">Отмена</RouterLink>
        <button type="submit" class="btn btn-success">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    async addPost() {
      const newPost = {
        title: this.title,
        text: this.text,
        time: +new Date(),
      };

      await fetch(this.blogURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      this.title = "";
      this.text = "";

      this.$router.push("/");
    },
  },
};
</script>
