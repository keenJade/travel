// 只要用到localStorage有可能导致浏览器抛出异常
// 为了防止用户关闭本地存储，导致报错
// 所以用try..catch来解决
let defaultCity = '重庆'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity
}
