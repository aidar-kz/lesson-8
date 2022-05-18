<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-between">
        <div>
          <h1>Блог</h1>
        </div>
        <div>
          <RouterLink class="btn btn-success" to="/create-post">
            Создать пост
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col col-md-4 d-flex g-4" v-for="post in posts" :key="post.id">
        <div class="card w-100 shadow">
          <div class="card-header">
            <div class="row">
              <div class="col-10">
                {{
                  new Intl.DateTimeFormat("ru-RU", {
                    dateStyle: "full",
                    timeStyle: "short",
                  }).format(post.time)
                }}
              </div>
              <div class="col-2">
                <PostDropdown :id="post.id" @delete-post="deletePost" />
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.text.substr(0, 100) + "..." }}</p>
            <RouterLink :to="`/posts/${post.id}`">Читать</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostDropdown from "@/components/PostDropdown.vue";

export default {
  components: { PostDropdown },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const res = await fetch(this.blogURL);
      const data = await res.json();
      return data;
    },
    async deletePost(id) {
      const res = await fetch(`${this.blogURL}/${id}`, {
        method: "DELETE",
      });

      res.status === 200
        ? (this.posts = this.posts.filter((post) => post.id !== id))
        : alert("Ошибка удаления");
    },
  },
  async created() {
    this.posts = await this.fetchPosts();
  },
};
</script>
