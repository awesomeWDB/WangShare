import WangElSearch from '../../packages/libs/wang-el-search/index.js'

const components = [
  WangElSearch
]

const install = function (Vue) { // 引入所有模块
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WangElSearch
}