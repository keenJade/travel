<template>
  <div class='container' @click='handleGallary'>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for='(item, index) in imgs' :key='index'>
          <img class='gallary-img' :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2108492047,1856936105&fm=26&gp=0.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallary () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 99
    background #000
    .wrapper
      overflow hidden
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
    .swiper-pagination
      position fixed
      bottom .6rem
      left 0
      right 0
      color #fff
</style>
