<template>
  <div class="container">
    <form @submit.prevent="updatePost">
      <div class="mb-3">
        <label for="title" class="form-label">Заголовок</label>
        <input type="text" class="form-control" v-model="title" required />
      </div>

      <div class="mb-3">
        <label for="text" class="form-label">Текст</label>
        <input type="text" class="form-control" v-model="text" required />
      </div>

      <div class="mb-3">
        <button @click.prevent="cancel" class="btn btn-warning me-2">
          Отмена
        </button>
        <button type="submit" class="btn btn-success">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    async fetchPost(id) {
      const res = await fetch(`${this.blogURL}/${id}`);
      const data = await res.json();
      return data;
    },
    cancel() {
      this.$router.back();
    },
    async updatePost() {
      const postToUpdate = {
        title: this.title,
        text: this.text,
        time: +new Date(),
      };

      await fetch(this.blogURL + "/" + this.$props.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postToUpdate),
      });

      this.title = "";
      this.text = "";

      this.$router.push(`/posts/${this.$props.id}`);
    },
  },
  async created() {
    const post = await this.fetchPost(this.$props.id);
    console.log(post);
    this.title = post.title;
    this.text = post.text;
  },
};
</script>
