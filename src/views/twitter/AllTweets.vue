<template>
  <div class="container p-5">
    <AddTweet @add-tweet="addTweet" class="mb-3" />

    <TweetItem
      v-for="tweet in tweets"
      :key="tweet.id"
      v-bind="tweet"
      @delete-tweet="deleteTweet"
      @like-tweet="likeTweet"
    />
  </div>
</template>

<script>
import AddTweet from "@/components/AddTweet.vue";
import TweetItem from "@/components/TweetItem.vue";

export default {
  components: { AddTweet, TweetItem },
  data: () => ({
    tweets: [],
  }),
  methods: {
    async addTweet(newTweet) {
      const res = await fetch(this.twitterURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTweet),
      });

      const data = await res.json();

      this.tweets = [...this.tweets, data];
    },

    async fetchTweets() {
      const res = await fetch(this.twitterURL);
      const data = await res.json();
      return data;
    },

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
        ? (this.tweets = this.tweets.filter((tweet) => tweet.id !== id))
        : alert("Ошибка удаления");
    },

    async likeTweet(id) {
      const tweetToLike = await this.fetchTweet(id);
      const updatedTweet = { ...tweetToLike, likes: ++tweetToLike.likes };

      const res = await fetch(`${this.twitterURL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTweet),
      });

      const data = await res.json();

      this.tweets = this.tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: data.likes } : tweet
      );
    },
  },

  async created() {
    this.tweets = await this.fetchTweets();
  },
};
</script>
