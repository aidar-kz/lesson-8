const today = new Date()
const weekday = today.getDay()

export default {
  mounted(el, binding) {
    if (weekday > 5) {
      el.style.display = 'none'
    }
  }
}