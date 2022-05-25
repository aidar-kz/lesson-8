function formatPrice(price) {
  return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + " &#8376;";
}
export default {
  mounted(el, binding) {
    const price = el.textContent;
    el.innerHTML = formatPrice(price);
  },
  updated(el, binding) {
    const price = el.textContent;
    el.innerHTML = formatPrice(price);
  },
};
