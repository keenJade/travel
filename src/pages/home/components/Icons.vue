<template>
  <div class='icons'>
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page, index) of pages'
                    :key='index'>
        <div class="icon"
             v-for='item of page'
             :key='item.id'>
          <img :src="item.imgUrl"
               alt="">
          <span>{{item.text}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        loop: false
      },
      lists: [
        {
          id: 1,
          imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3782458567,4050719791&fm=26&gp=0.jpg',
          text: 'icon01'
        },
        {
          id: 2,
          imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2462146637,4274174245&fm=26&gp=0.jpg',
          text: 'icon02'
        },
        {
          id: 3,
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg',
          text: 'icon03'
        },
        {
          id: 4,
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3225163326,3627210682&fm=26&gp=0.jpg',
          text: 'icon04'
        },
        {
          id: 5,
          imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=160455671,2126788169&fm=26&gp=0.jpg',
          text: 'icon05'
        },
        {
          id: 6,
          imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3544005106,2960177055&fm=26&gp=0.jpg',
          text: 'icon06'
        },
        {
          id: 7,
          imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2324854561,2638012123&fm=26&gp=0.jpg',
          text: 'icon07'
        },
        {
          id: 8,
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2925195231,1808957113&fm=26&gp=0.jpg',
          text: 'icon08'
        },
        {
          id: 9,
          imgUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2218907169,3138584284&fm=26&gp=0.jpg',
          text: 'icon09'
        }
      ]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.lists.forEach((val, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(val)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.icons >>> .swiper-slide
  display flex
  flex-wrap wrap
.icons
  height 0
  overflow hidden
  padding-bottom 50%
  margin-top 10px
  margin-botton 10px
  .icon
    display flex
    flex-direction column
    align-items center
    width 25%
  .icon >>> img
    width 80%
    height 70px
    margin-bottom 10px
  .icon >>> span
    ellipsis()
</style>
