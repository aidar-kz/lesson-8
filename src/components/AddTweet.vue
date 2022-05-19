<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-0">
      <textarea class="form-control" v-model.trim="tweet" />
    </div>

    <div class="text-end mt-2">
      <button type="submit" class="btn btn-primary rounded-pill">
        Отправить
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    tweet: "",
  }),
  methods: {
    onSubmit() {
      const newTweet = {
        text: this.tweet,
        likes: 0,
        timestamp: Date.now(),
      };

      this.$emit("add-tweet", newTweet);

      this.tweet = "";
    },
  },
};
</script>
