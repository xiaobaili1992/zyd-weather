import ZydWeather from './index.vue'

ZydWeather.install = (Vue) => {
  Vue.component(ZydWeather.name, ZydWeather)
}

export default ZydWeather
