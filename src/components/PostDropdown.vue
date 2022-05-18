<template>
  <div class="dropdown">
    <a href="#" class="btn btn-sm" data-bs-toggle="dropdown">
      <i class="bi bi-three-dots-vertical"></i>
    </a>

    <ul class="dropdown-menu">
      <RouterLink
        class="dropdown-item"
        :to="{ name: 'edit-post', params: { id } }"
      >
        Редактировать
      </RouterLink>

      <form @submit.prevent="$emit('deletePost', id)">
        <button class="dropdown-item text-danger">Удалить</button>
      </form>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: [Number, String],
  },
};
</script>
