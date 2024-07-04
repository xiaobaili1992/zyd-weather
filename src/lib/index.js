import ZydWeather from './ZydWeather/index'
import ZydWeatherIcon from './ZydWeatherIcon/index'

const install = (Vue) => {
  Vue.use(ZydWeather)
  Vue.use(ZydWeatherIcon)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
export { install, ZydWeather, ZydWeatherIcon }
