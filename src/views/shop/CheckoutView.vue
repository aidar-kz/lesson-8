<template>
  <div class="container p-5">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Цена</th>
          <th>Кол-во</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shopStore.cart" :key="item.id">
          <td>{{ item.brand }} {{ item.model }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price * item.quantity }}</td>
        </tr>
        <tr>
          <td colspan="3" class="text-end">Сумма к оплате:</td>
          <td class="text-end">{{ shopStore.cartTotal }}</td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-between mt-3">
      <router-link to="/shop/cart" class="btn">
        <i class="bi bi-arrow-left-short"></i>
        <span>Назад</span>
      </router-link>

      <button class="btn btn-success" @click="checkout">
        <div
          v-if="isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        <span v-else>Оплатить</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async checkout() {
      this.isLoading = true;

      const res = await fetch(
        "https://jse-211.herokuapp.com/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cart: this.shopStore.cart,
            successUrl: "http://localhost:3000/shop/success",
            cancelUrl: "http://localhost:3000/shop/checkout",
          }),
        }
      );

      const { url } = await res.json();

      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped></style>
