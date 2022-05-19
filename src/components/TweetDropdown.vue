<template>
  <div class="dropdown">
    <a href="#" class="btn btn-sm" data-bs-toggle="dropdown">
      <i class="bi bi-three-dots-vertical"></i>
    </a>

    <ul class="dropdown-menu">
      <button
        class="dropdown-item text-danger"
        @click="$emit('deleteTweet', id)"
      >
        Удалить
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: [Number, String],
  },
  emits: ["deleteTweet"],
};
</script>
