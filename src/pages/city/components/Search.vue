<template>
  <div>
    <div class='search'>
      <!-- v-model不能用驼峰名 -->
      <input class='search-input'
             v-model='keyword'
             type="text"
             placeholder="输入城市名/拼音" />
    </div>
    <div class="search-content" ref='search' v-show='keyword'>
      <ul>
        <li class='search-item border-bottom' v-for='item of list' :key='item.id'
        @click='handleCity(item.name)'>{{item.name}}</li>
        <li class='search-item border-bottom' v-show='hasNoData'>
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCity (city) {
      // console.info(city)
      // 使用vuex进行页面间的传值
      // this.$store.dispatch('changeCity', city)
      // 没有异步操作的时候，不使用actions时，可以通过commit来实现
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.search
  height 0.72rem
  padding 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    line-height 0.62rem
    color #666
    borde-radius 0.06rem
    text-align center
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    padding .2rem
    color #666
    background #fff
</style>
