export default {
  updated(el, binding) {
    const randomNum = Math.random()
    const hex = randomNum.toString(16)
    const sliced = hex.slice(2, 8)
    el.style.backgroundColor = '#' + sliced
  }
}