<template>
 <div>
    <div class='banner' @click='handleShowGalary'>
    <img class='banner-img' :src="titleImg" alt="" />
    <div class="banner-info">
      <div class='banner-title'>this is tis djkj </div>
      <div class='banner-number'><span class='iconfont'>&#xe67d;</span>39</div>
    </div>
  </div>
  <common-gallary :imgs='gallaryImgs' v-show='showGallay' @close='handleGallaryClose'/>
 </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  props: {
    titleImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallay: false
    }
  },
  methods: {
    handleShowGalary () {
      this.showGallay = true
    },
    handleGallaryClose () {
      this.showGallay = false
    }
  }
}
</script>

<style lang="stylus" scoped>
// 防止页面抖动
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
    height 4rem
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 1.2rem
    line-height .6rem
    .banner-title
      flex 1
      color #fff
    .banner-number
      padding .2rem
      border-radius .2rem
      color #fff
      font-size .12rem
      line-height 0
      margin-top .08rem
</style>
