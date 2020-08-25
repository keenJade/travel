<template>
  <div>
    <detail-banner :titleImg='titleImg' :gallaryImgs='gallaryImgs'/>
    <detail-header />
    <div class="container">
      <detail-list :list='list' />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      list: [],
      titleImg: '',
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      // console.log(res)
      if (res || res.data.data) {
        const data = res.data.data
        this.titleImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 50rem
</style>
