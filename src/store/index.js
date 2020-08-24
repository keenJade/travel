import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '重庆'
  },
  // 没有异步操作的时候，actions用不到可以省略
  // actions: {
  //   // ctx 上下文   city  传递过来的值
  //   changeCity (ctx, city) {
  //     // console.info('actions' + city)
  //     // actions调用 mutations, changeCity是mutations中的方法
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      // state中的city 等于传入的city
      state.city = city
    }
  }
})
