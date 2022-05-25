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

      <button class="btn btn-success" @click="checkout">Оплатить</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
