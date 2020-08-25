<template>
  <div>
    <div class="item" v-for='(item, index) of list' :key='index'>
      <div class="item-title border-bottom">
        <span class="item-title-icon">

        </span>
        {{item.title}}
      </div>
      <!-- 如果我自己有children的时候，则将children的值传值给递归的组件 -->
      <div v-if='item.children' class='item-children'>
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
// 做一个递归组件----使用递归做一个组件
// 组件自己调用自己为递归组件
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
  .item-title
    line-height .5rem
    font-size .32rem
    padding .2rem
    .item-title-icon
      display inline-block
      position relative
      top .06rem
      left .2rem
      width .26rem
      height .26rem
      left .2rem
      background url(https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/6489a65436e6dd60420dae78f46d25d6.png) no-repeat
      background-size .2rem .2rem
      margin-right .1rem
  .item-children
    padding 0 .2rem

</style>
