<template>
  <div id="app">
   <!--优化性能--keep-alive
        路由内容被加载过一次之后，就存在内存中，
        等下次使用的时候，就不需要再去加载 -->
    <keep-alive>
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
