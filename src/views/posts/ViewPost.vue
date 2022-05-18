<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <RouterLink to="/" class="rounded-pill p-2 d-flex text-decoration-none">
          <i class="bi bi-arrow-left-circle"></i>
          <span class="ms-2">Все посты</span>
        </RouterLink>
      </div>

      <div class="col-8">
        <h2>{{ title }}</h2>
      </div>

      <div class="col-2">
        <PostDropdown :id="$route.params.id" @delete-post="deletePost" />
      </div>
    </div>

    <p>{{ text }}</p>
  </div>
</template>

<script>
import PostDropdown from "@/components/PostDropdown.vue";
import artades from "artades";

export default {
  components: { PostDropdown },
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
    async deletePost(id) {
      const res = await fetch(`${this.blogURL}/${id}`, {
        method: "DELETE",
      });

      res.status === 200 ? this.$router.push("/") : alert("Ошибка удаления");
    },
  },
  async created() {
    const { id } = this.$route.params;
    const post = await this.fetchPost(id);
    this.title = post.title;
    this.text = post.text;
    console.log(artades);
  },
};
</script>
