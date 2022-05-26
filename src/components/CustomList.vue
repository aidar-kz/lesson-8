<template>
  <ul class="list-group">
    <li v-for="item in items" :key="item.id" class="list-group-item">
      <slot v-bind="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.shopStore.getItems().then(() => {
      this.items = this.shopStore.items;
    });
  },
};
</script>

<style scoped></style>
