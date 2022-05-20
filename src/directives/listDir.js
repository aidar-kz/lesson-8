function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

export default {
  mounted(el, binding) {
    const list = binding.value

    const ul = document.createElement('ul')
    ul.className = "list-group px-5 mt-4"

    if (binding.modifiers.reverse) {
      list.reverse()
    }

    if (binding.modifiers.random) {
      shuffle(list)
    }

    list.forEach(item => {
      const li = document.createElement('li')
      li.className = 'list-group-item'
      const img = document.createElement('img')
      img.src = item.icon
      img.width = 20
      img.height = 20

      const span = document.createElement('span')
      span.style.marginLeft = '10px'
      const text = document.createTextNode(item.name)

      span.appendChild(text)
      li.appendChild(img)
      li.appendChild(span)
      ul.appendChild(li)
      el.appendChild(ul)
    })
  }
}