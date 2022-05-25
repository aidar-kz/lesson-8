<template>
  <div class="container py-5 px-md-5">
    <div class="col col-lg-8 mx-auto">
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
            <td v-price="item.price" />
            <td>{{ item.quantity }}</td>
            <td class="text-end" v-price="item.price * item.quantity"></td>
          </tr>
          <tr>
            <td colspan="3" class="text-end">Сумма к оплате:</td>
            <td class="text-end" v-price="shopStore.cartTotal" />
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between mt-3">
        <router-link to="/shop/cart" class="btn">
          <i class="bi bi-arrow-left-short"></i>
          <span>Назад</span>
        </router-link>

        <button v-if="isLoading" class="btn btn-primary" disabled>
          <span class="spinner-border spinner-border-sm"></span>
          <span class="ms-1">Загрузка...</span>
        </button>

        <button v-else class="btn btn-success" @click="checkout">
          Оплатить
        </button>
      </div>
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

      const baseUrl = "https://jse-211.herokuapp.com";
      // const baseUrl = "http://localhost:1700";
      const res = await fetch(baseUrl + "/api/shop/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: this.shopStore.cart,
          successUrl: "http://localhost:3000/shop/success",
          cancelUrl: "http://localhost:3000/shop/checkout",
        }),
      });

      if (res.status === 200) {
        const { url } = await res.json();
        window.location.href = url;
      } else {
        alert("Что-то пошло не так");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
