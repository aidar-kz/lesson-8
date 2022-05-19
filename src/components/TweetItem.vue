<template>
  <RouterLink :to="`/twitter/${id}`" class="text-decoration-none">
    <div class="card">
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <div>{{ time }}</div>
        </div>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ text }}</h5>
      </div>

      <div class="d-flex justify-content-between px-3 pb-2">
        <div class="like-btn" @click.prevent="$emit('likeTweet', id)">
          <i class="bi bi-heart"></i>
          <span class="ms-1" v-if="likes > 0">{{ likes }}</span>
        </div>

        <div class="del-btn" @click.prevent="$emit('deleteTweet', id)">
          <i class="bi bi-trash3"></i>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    id: [Number, String],
    timestamp: Number,
    text: String,
    likes: Number,
  },
  computed: {
    time() {
      return new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "full",
        timeStyle: "short",
      }).format(this.timestamp);
    },
  },
};
</script>

<style scoped>
.like-btn:hover,
.del-btn:hover {
  color: red;
}
</style>
