<template>
 <div>
    <div class='banner' @click='handleShowGalary'>
    <img class='banner-img' src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2003485950,586690726&fm=26&gp=0.jpg" alt="" />
    <div class="banner-info">
      <div class='banner-title'>this is tis djkj </div>
      <div class='banner-number'><span class='iconfont'>&#xe67d;</span>39</div>
    </div>
  </div>
  <common-gallary :imgs='imgs' v-show='showGallay' @close='handleGallaryClose'/>
 </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallay: false,
      imgs: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3034917385,2523734012&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392816833,1391936663&fm=26&gp=0.jpg',
        'https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00313-2159.jpg'
      ]
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
