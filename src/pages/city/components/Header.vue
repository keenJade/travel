<template>
  <div class='header'>
    <router-link to='/'>
      <span class='iconfont left'>&#xe685;</span>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'City'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    text-align center
    color: #fff
    background #48da94
    .left
      position absolute
      left .2rem
      color #fff
</style>
