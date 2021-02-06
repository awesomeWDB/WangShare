import Vue from 'vue';
import App from './App.vue';
import router from './router';
import WangShare from '../../src/wang-share/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

const { WangUI } = WangShare
Vue.use(ElementUI);
Vue.use(WangUI)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
