<template>
  <div class='list' ref='wrapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for='item of hotCities'
              :key='item.id'>
            <div class="button"
              >{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 如果循环的值是一个对象，则循环的第二项不是index,二十key值
          将key值直接赋值给分组的位置，然后进行内部的循环,内部的of后面跟着
          第一次循环的item -->
          <!-- 添加ref为传入的值做准备 -->
      <div class="area" v-for='(item, key) of cities' :key='key' :ref='key'>
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class='item border-bottom'
            v-for='innerItem of item' :key='innerItem.id'>{{innerItem.name}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // 监听传过来的值letter的变化，然后做处理
  watch: {
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        // 参数使用的必须是一个元素
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.border-topbottom
  &:after
    border-color #cccccc
  &:before
    border-color #cccccc
.border-bottom
  &:after
    border-color #cccccc
.list
  overflow hidden
  position absolute
  top 1.78rem
  bottom 0
  left 0
  right 0
.title
  line-height 0.44rem
  background #eee
  padding-left 0.2rem
  color #666
  font-size 0.26rem
.button-list
  overflow hidden
  padding 0.1rem 0.6rem 0.1rem 0.1rem
  .button-wrapper
    float left
    width 33.33%
    .button
      margin 0.1rem
      padding 0.1rem 0
      text-align center
      border 0.02rem solid #ccc
.item-list
  .item
    line-height 0.54rem
    padding-left 0.2rem
</style>
