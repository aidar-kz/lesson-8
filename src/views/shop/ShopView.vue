<template>
  <div class="container p-5">
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 d-flex p-0"
        v-for="item in shopStore.items"
        :key="item.id"
      >
        <product-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  components: { ProductItem },
  created() {
    this.shopStore.getItems();
  },
};
</script>

<style lang="scss" scoped></style>
