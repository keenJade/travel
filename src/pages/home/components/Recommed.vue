<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id" tag='li' class='item border-bottom' v-for='item in recommed' :key='item.id'>
      <div class="item-img-wrapper">
        <img class='item-img' :src="item.imgUrl" alt="">
      </div>
      <div class='item-info'>
        <p class='item-title'>{{item.title}}</p>
        <p class='item-desc'>{{item.desc}} </p>
        <button class='item-button'>查看详情</button>
      </div>
     </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommed',
  data: function () {
    return {
      recommed: [
        {
          id: 1,
          imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        },
        {
          id: 2,
          imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        },
        {
          id: 3,
          imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
          title: 'this is title one',
          desc: 'this is desc two'
        },
        {
          id: 4,
          imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
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
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
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
      .item-button
        background #ff9300
        padding .1rem
        font-size .12rem
        border-radius .06rem
        color #fff
        line-height .44rem
</style>
