<template>
  <div>
    <div class="title">周末狂欢</div>
    <ul>
      <li class='item border-bottom' v-for='item in recommed' :key='item.id'>
        <div class="item-img-wrapper">
          <img class='item-img' :src="item.imgUrl" alt="">
        </div>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}} </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data: function () {
    return {
      recommed: [
        {
          id: 1,
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3238317745,514710292&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        },
        {
          id: 2,
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3238317745,514710292&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        },
        {
          id: 3,
          imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3238317745,514710292&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    display flex
    flex-direction column
    // height 1.9rem
    overflow hidden
    .item-img-wrapper
      width 100vw
      padding .1rem
      box-sizing border-box
    .item-img
      height 1.7rem
      width 100%
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>
