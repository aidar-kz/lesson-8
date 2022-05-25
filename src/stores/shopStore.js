import { defineStore } from "pinia";

const shopURL = "http://localhost:5000/products";

export const useShopStore = defineStore("shop", {
  state: () => ({
    items: [],
    cart: [],
  }),
  getters: {
    cartQuantity() {
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    cartTotal() {
      return this.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    async getItems() {
      const res = await fetch(shopURL);
      const data = await res.json();
      this.items = data;
    },
    async getItem(id) {
      const res = await fetch(shopURL + "/" + id);
      const data = await res.json();
      return data;
    },
    addToCart(newItem) {
      const idx = this.cart.findIndex((item) => item.id === newItem.id);

      if (idx === -1) {
        this.cart.push(newItem);
      } else {
        this.cart[idx].quantity++;
      }
      this.saveCart();
    },
    deleteFromCart(id) {
      const idx = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(idx, 1);
      this.saveCart();
    },
    clearCart() {
      this.cart = [];
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    loadCart() {
      const cart = localStorage.getItem("cart");
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    },
  },
});
