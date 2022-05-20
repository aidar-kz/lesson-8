import lorem from '@/assets/lorem'

export default {
  mounted(el, binding) {
    const length = binding.value
    let language = binding.arg || 'en'
    el.textContent = lorem[language]
      .split(' ')
      .slice(0, length)
      .join(' ')
      .replace(/,$/, '')
  }
}