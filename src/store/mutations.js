export default {
  changeCity (state, city) {
    // state中的city 等于传入的city
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
