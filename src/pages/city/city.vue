<template>
  <div>
    <city-header />
    <search />
    <city-list />
    <city-alphabet />
  </div>
</template>
<script>
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
  }
}
</script>
<style lang="stylus" scoped></style>
