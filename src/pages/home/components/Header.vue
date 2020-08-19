<template>
  <div class="header">
    <div class="header-left">
      <span class='iconfont'>&#xe685;</span>
    </div>
    <div class="header-input">
      <span class='iconfont'>&#xe67d;</span>请输入城市/经典/主题选择</div>
    <div class="header-right">城市<span class='iconfont icon3'>&#xe688;</span></div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style scoped lang='stylus'>
// 在css中使用@引用是需要添加~
@import '~style/varibles.styl';
.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;
  text-align: center;

  .header-left {
    width: 0.64rem;
    float: left;
  }

  .header-input {
    flex: 1;
    color: #ccc;
    background: #ffffff;
    margin-top: 0.12rem;
    margin-left: 0.12rem;
    height: 0.64rem;
    line-height: 0.64rem;
    border-radius: 0.1rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
  }
}
</style>
