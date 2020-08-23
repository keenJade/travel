<template>
<!-- 通过v-if='swier.length' 当轮播数组不为空的时候在渲染页面 -->
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeScript',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="stylus" scoped>
.swiper-container
  background green
  height 110px
  overflow hidden
</style>
