<template>
  <div class="header">
    <div class="header-left">
      <span class='iconfont'>&#xe685;</span>
    </div>
    <div class="header-input">
      <span class='iconfont'>&#xe67d;</span>请输入城市/经典/主题选择</div>
    <router-link to='/city'>
     <div class="header-right">{{this.$store.state.city}}<span class='iconfont icon3'>&#xe688;</span></div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style scoped lang='stylus'>
// 在css中使用@引用是需要添加~
@import '~style/varibles.styl';
.header {
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
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
    color: #fff;
  }
}
</style>
