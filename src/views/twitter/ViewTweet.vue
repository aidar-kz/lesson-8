<template>
  <div class="container p-5">
    <div class="d-flex justify-content-between">
      <div class="d-flex align-items-center">
        <RouterLink to="/twitter" class="text-decoration-none">
          <i class="bi bi-arrow-left-circle"></i>
          <span class="ms-2">Все твиты</span>
        </RouterLink>
      </div>

      <div>
        <TweetDropdown :id="id" @delete-tweet="deleteTweet" />
      </div>
    </div>

    <h2 class="mt-3">{{ text }}</h2>
  </div>
</template>

<script>
import TweetDropdown from "@/components/TweetDropdown.vue";

export default {
  components: { TweetDropdown },
  data: () => ({
    text: "",
    id: "",
    likes: 0,
  }),

  methods: {
    async fetchTweet(id) {
      const res = await fetch(`${this.twitterURL}/${id}`);
      const data = await res.json();
      return data;
    },

    async deleteTweet(id) {
      const res = await fetch(`${this.twitterURL}/${id}`, {
        method: "DELETE",
      });

      res.status === 200
        ? this.$router.push("/twitter")
        : alert("Ошибка удаления");
    },
  },

  async created() {
    this.id = this.$route.params.id;
    const tweet = await this.fetchTweet(this.id);
    (this.text = tweet.text), (this.likes = tweet.likes);
  },
};
</script>
