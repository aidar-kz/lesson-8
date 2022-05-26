<template>
  <header>
    <slot name="header" :text="text">
      <!-- Заголовок -->
    </slot>
  </header>
  <main>
    <slot>
      <!-- Текст -->
    </slot>
  </main>
  <footer>
    <slot name="footer" message="привет">
      <!-- Инфа об авторе, соцсети -->
    </slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      text: "Какой-то текст",
    };
  },
};
</script>

<style scoped></style>
