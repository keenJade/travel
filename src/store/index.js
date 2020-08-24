import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 没有异步操作的时候，actions用不到可以省略
  // actions: {
  //   // ctx 上下文   city  传递过来的值
  //   changeCity (ctx, city) {
  //     // console.info('actions' + city)
  //     // actions调用 mutations, changeCity是mutations中的方法
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // 根据state的数据计算新的数据，可以使用getters，可以避免数据的冗余
  getters: {
    doubleCity (state) {
      return state.city + '' + state.city
    }
  }
  // 管理后台系统时，会使用modules,对复杂数据的拆分，
})
