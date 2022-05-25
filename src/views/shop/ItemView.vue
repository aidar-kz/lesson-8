<template>
  <div class="container p-5">
    <h1>{{ item.brand }} {{ item.model }} {{ item.storage }} ГБ</h1>
    <div class="d-flex mt-4">
      <img :src="item.image" width="200" />
      <div class="ms-3">
        <ul>
          <li>размер оперативной памяти: {{ item.ram }} ГБ</li>
          <li>технология nfc: {{ item.nfc ? "да" : "нет" }}</li>
          <li>тип экрана: {{ item.screenType }}</li>
          <li>диагональ: {{ item.screenSize }}</li>
          <li>процессор: {{ item.cpu }}</li>
          <li>объем встроенной памяти: {{ item.storage }} ГБ</li>
          <li>емкость аккумулятора: {{ item.battery }} мАч</li>
        </ul>
        <div class="ms-3">
          <h5>Цена: {{ item.price }}</h5>
          <button
            class="btn btn-success"
            @click="shopStore.addToCart(this.item)"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.shopStore.getItem(id).then((item) => {
      this.item = item;
    });
  },
};
</script>

<style lang="scss" scoped></style>
