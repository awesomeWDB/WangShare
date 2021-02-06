import WangElSearch from './src/main.vue'

WangElSearch.install = function (Vue) {
  Vue.component(WangElSearch.name, WangElSearch)
}

export default WangElSearch