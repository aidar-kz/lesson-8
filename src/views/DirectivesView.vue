<template>
  <div class="container p-5">
    <section>
      <div class="w-100 bg-info p-4 mt-4 text-white shadow">
        <h2 v-lorem:ru="4"></h2>
        <p v-lorem:ru></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someVar: "",
    };
  },
};
</script>

<style scoped></style>
