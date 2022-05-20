export default {
  mounted(el, binding) {
    const tagName = binding.arg
    const className = binding.value
    el.innerHTML = `<${tagName} class="${className}">${el.innerHTML}</${tagName}>`
  }
}