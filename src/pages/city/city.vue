<template>
  <div>
    <city-header />
    <search :cities='cities'/>
    <city-list :cities='cities' :hotCities='hotCities' :letter='letter'/>
    <city-alphabet :cities='cities' @change='handleLetterChange'/>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import Search from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getcityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfo)
    },
    handleGetCityInfo (res) {
      if (res && res.status === 200) {
        // console.log(res.data.data)
        const data = res.data.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 接收alphabet的数据
    handleLetterChange (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getcityInfo()
  }
}
</script>
<style lang="stylus" scoped></style>
