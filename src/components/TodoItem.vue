<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <input
        type="checkbox"
        class="form-check-input"
        :checked="done"
        @change="$emit('toggle-done', id)"
      />
      <span :class="['ms-2', { done }]">{{ text }}</span>
    </div>
    <button class="btn btn-flat" @click="$emit('delete-todo', id)">
      <i class="bi bi-x-circle"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    done: Boolean,
    id: [String, Number],
    text: String,
  },
};
</script>
