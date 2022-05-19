<template>
  <div class="d-flex mb-1">
    <div>
      <button>
        <i class="bi bi-arrow-up-short"></i>
      </button>

      <button>
        <i class="bi bi-arrow-down-short"></i>
      </button>
    </div>

    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <input
      type="color"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>

<style scoped></style>
