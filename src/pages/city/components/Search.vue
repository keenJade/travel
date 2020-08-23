<template>
  <div class='search'>
    <input class='search-input' type="text" placeholder="输入城市名/拼音">
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl';
  .search
    height .72rem
    padding .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      color #666
      borde-radius .06rem
      text-align center
</style>
