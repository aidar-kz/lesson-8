<template>
  <div class="container p-5">
    <h1>Оплата прошла успешно!</h1>

    <section class="border">
      <h2>Ваш заказ будет доставлен:</h2>
      <div class="px-5 pt-3 pb-4">
        <h3>26 мая 2022</h3>
        <hr />
        <p>Мы отправим вам email с чеком и информацией о заказе.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    this.shopStore.clearCart();
  },
};
</script>

<style lang="scss" scoped></style>
