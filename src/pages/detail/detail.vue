<template>
  <div>
    <detail-banner />
    <detail-header />
    <div class="container">
      <detail-list :list='list' />
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三联票',
              children: [
                { title: '成人三中一个连锁' },
                { title: '成人三中一个连锁' }
              ]
            },
            {
              title: '成人五联票'
            }
          ]
        },
        { title: '学生票' },
        { title: '儿童票' },
        { title: '特惠票' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 50rem
</style>
