<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <router-link to="/shop" class="btn">Магазин</router-link>
      <router-link to="/shop/cart" class="btn">
        В корзине: {{ shopStore.cartQuantity }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.shopStore.loadCart();
  },
};
</script>

<style lang="scss" scoped></style>
