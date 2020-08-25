<template>
  <div>
    <home-header/>
    <home-swiper />
    <home-icons />
    <home-recommed />
    <home-weekend />
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommed from './components/Recommed'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommed,
    HomeWeekend
  },
  data () {
    return {
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  methods: {
    // 需要携带参数city,为了在每次选择城市之后将城市传递给接口
    // 获取对应城市的内容
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInnfoSucc)
    },
    getHomeInnfoSucc (res) {
      // console.log(res)
    }
  },
  // 使用keep-alive的时候会有一个activated的生命周期
  activated () {
    // console.log('actvated')
    // 判断页面城市是否一致，不一致的时候再次发送请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style scoped ></style>
