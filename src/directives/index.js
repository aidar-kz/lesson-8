import loremDir from './loremDir'
import weekendDir from './weekendDir'
import randomBgDir from './randomBgDir'
import tagClassDir from './tagClassDir'

export default {
  install(Vue) {
    Vue.directive('lorem', loremDir)
    Vue.directive('weekend', weekendDir)
    Vue.directive('random-bg', randomBgDir)
    Vue.directive('tag-class', tagClassDir)
  }
}