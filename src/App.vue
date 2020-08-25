<template>
  <div id="app">
   <!--优化性能--keep-alive
        路由内容被加载过一次之后，就存在内存中，
        等下次使用的时候，就不需要再去加载 -->
        <!-- exclude指定的页面可以不做缓存 -->
        <!-- 为了再次使用被缓存的接口，可以使用activated钩子函数 -->
    <keep-alive exclude='Detail'>
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
