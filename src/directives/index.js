import loremDir from './loremDir'
import weekendDir from './weekendDir'

export default {
  install(Vue) {
    Vue.directive('lorem', loremDir)
    Vue.directive('weekend', weekendDir)
  }
}