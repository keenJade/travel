<template>
  <div class='list'>
    <!-- 修饰符.prevent 阻止页面的默认行为，在拖动a-z的时候，不会全屏触动-->
    <div class="item"
        v-for='item of letters'
        :key='item' :ref='item'
        @touchstart.prevent='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend ='handleTouchEnd'
        @click='handleLetterClick'>{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      timer: null, // 节流限制touchMove的频率
      startY: 0, // 优化性能
      touchStatus: false // 标示位，为了在start move end 按顺序
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 优化性能
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      // 兄弟传值 给lsit
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 获取a的高度，滑动看当前手指位置距离顶部的高度，
      // 做一个差值除以每个字母的高度，然后确定是哪个字母
      if (this.touchStatus) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          //  通过节流来控制touchMove的执行频率，提高网页的性能
          this.timer = setTimeout(() => {
            // // A距离顶部的距离
            // const startY = this.$refs['A'][0].offsetTop
            // 获取手指的位置的值  最小的值是手指距离顶部的位置
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20) // 20每个字母的高度
            console.info(touchY, index)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  bottom 0
  right 0
  width .4rem
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
