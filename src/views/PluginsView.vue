<template>
  <main class="container p-5">
    <h1 v-html="$makeItalic('Плагины')"></h1>

    <textarea
      name=""
      id=""
      cols="50"
      rows="10"
      v-random-bg2
      v-model="text"
    ></textarea>

    <my-component></my-component>
  </main>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    console.log(
      `%c ${this.PRIVET}`,
      "color: red; font-size: 20px; text-shadow: 1px 2px 2px grey;"
    );
  },
};
</script>

<style scoped></style>
