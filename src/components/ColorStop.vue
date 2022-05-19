<template>
  <div class="d-flex mb-1">
    <div>
      <button @click="$emit('up', index)" :disabled="index === 0">
        <i class="bi bi-arrow-up-short"></i>
      </button>

      <button
        @click="$emit('down', index)"
        :disabled="index === colors.length - 1"
      >
        <i class="bi bi-arrow-down-short"></i>
      </button>
    </div>

    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="color.disabled"
    />

    <input
      type="color"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="color.disabled"
    />

    <button @click="$emit('lockColor', index)">
      <i v-if="color.disabled" class="bi bi-lock"></i>
      <i v-else class="bi bi-unlock"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    index: Number,
    color: Object,
    colors: Array,
  },
};
</script>

<style scoped></style>
