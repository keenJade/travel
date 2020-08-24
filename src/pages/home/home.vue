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
    }
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInnfoSucc)
    },
    getHomeInnfoSucc (res) {
      console.log(res)
    }
  }
}
</script>
<style scoped ></style>
