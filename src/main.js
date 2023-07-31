import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//全局css
import '@/assets/global.css';
//图标
import IconSvg from '@/components/icon-component'
//axios
// import axios from 'axios';

Vue.config.productionTip = false

Vue.use(ElementUI);//ui
Vue.component('icon-svg', IconSvg)//icon
// Vue.prototype.$axios='axios'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
