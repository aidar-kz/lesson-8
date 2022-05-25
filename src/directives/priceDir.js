const formatter = new Intl.NumberFormat("kz-KZ", {
  style: "currency",
  maximumFractionDigits: 0,
  currency: "KZT",
  currencyDisplay: "narrowSymbol",
});

export default {
  mounted(el, binding) {
    const price = binding.value;
    el.textContent = formatter.format(price);
  },

  updated(el, binding) {
    const price = binding.value;
    el.textContent = formatter.format(price);
  },
};
