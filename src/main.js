// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端的300ms点击延迟事件---fastclick包--npm install fastclick --save
import fastClick from 'fastclick'
// 轮播图vue-awesome-swiper --save
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
// 移动端1像素的问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
