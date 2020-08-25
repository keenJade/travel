<template>
  <div>
    <router-link tag='div'
                 to='/'
                 class="hander-abs"
                 v-show='showAbs'>
      <span class='iconfont hander-abs-icon'>&#xe685;</span>
    </router-link>
    <div class="header-fixed" v-show='!showAbs'
    :style='opacityStyle'>
      <router-link to='/'>
        <span class='iconfont hander-abs-icon'>&#xe685;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 页面一被展示即执行
    window.addEventListener('scroll', this.handleScroll)
  },
  // 组件解绑 页面即将被隐藏或者被替换的时候使用的钩子，
  // 也是keep-alive提供的
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.hander-abs
  position absolute
  top 0.2rem
  left 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  .hander-abs-icon
    color #fff
    font-size 0.4rem
.header-fixed
  position fixed
  z-index 2
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background #48da94
  font-size .32rem
  .hander-abs-icon
    position absolute
    top 0
    left 0
    width .64rem
    color #fff
</style>
