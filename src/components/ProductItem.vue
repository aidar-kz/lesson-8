<template>
  <div class="card w-100">
    <router-link :to="`/shop/${item.id}`" class="mx-auto pt-3">
      <img :src="item.image" alt="" />
    </router-link>

    <div class="card-body d-flex flex-column">
      <router-link :to="`/shop/${item.id}`" class="text-decoration-none">
        <h6 class="card-title">{{ item.brand }} {{ item.model }}</h6>
      </router-link>

      <p class="card-text" v-price="item.price" />

      <button
        class="btn btn-success mt-auto align-self-end"
        @click.prevent="shopStore.addToCart({ ...item, quantity: 1 })"
      >
        В корзину
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
img {
  max-height: 200px;
}
</style>
