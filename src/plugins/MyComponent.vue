<template>
  <div v-list.random="browsers" class="w-100 bg-success p-4 mt-4 shadow"></div>
</template>

<script>
import browsers from "@/assets/browsers";

export default {
  data() {
    return {
      browsers,
    };
  },
};
</script>

<style scoped></style>
