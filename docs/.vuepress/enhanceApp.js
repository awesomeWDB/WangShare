import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'
import WangShare from '../../src/wang-share/index.js'

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  Vue.use(Vant)
  Vue.use(ElementUI)

  // 下面是分享的方法、组件
  const { WangUtils, WangUI } = WangShare
  Vue.use(WangUI)
  Vue.mixin({
    mounted () { // 注意：不要在demo中的非mounted、beforeMounted生命周期使用全局变量（包括computed，因为他会在渲染的时候依赖收集，会执行相关的代码）
      window.WangUtils = WangUtils
    }
  })
}
