<template>
  <button class="btn btn-primary">
    <slot :text="text">Кнопка</slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      text: "Привет от data()",
    };
  },
};
</script>

<style scoped></style>
