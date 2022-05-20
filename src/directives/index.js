import loremDir from './loremDir'

export default {
  install(Vue) {
    Vue.directive('lorem', loremDir)
  }
}