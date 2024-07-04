
#### 📦 安装

```bash
npm i vue-mini-weather --save
```

```javascript
// 1. CDN引入

// 1. 全局引入

//main.js 项目入口文件
import Vue from 'vue'
import weather from 'vue-mini-weather'
Vue.use(weather)

//app.vue 项目文件
<template>
  <v-mini-weather>
    <template #default="{weather, icon}">
      <!--插入图标-->
      <v-mini-weather-icon :icon="icon"></v-mini-weather-icon>
      <!--DIY内容-->
      <span>{{weather.cityname}}/{{weather.weather}}/{{weather.temp}}</span>
    </template>
  </v-mini-weather>
</template>

// 2. 局部引入 
//index.vue 项目文件
<template>
  <v-mini-weather>
    <template #default="{weather, icon}">
      <!--插入图标-->
      <v-mini-weather-icon :icon="icon"></v-mini-weather-icon>
      <!--DIY内容-->
      <span>{{weather.cityname}}/{{weather.weather}}/{{weather.temp}}</span>
    </template>
  </v-mini-weather>
</template>

<script>
import { vMiniWeather, vMiniWeatherIcon } from 'vue-mini-weather'
export default {
  components: {
    vMiniWeather,
    vMiniWeatherIcon
  }
}
</script>

```

#### 📝 参数说明
```javascript
// v-mini-weather参数

url: {     //天气小组件调用的天气查询API
  type: String,
  default: 'https://apia.aidioute.cn/weather/'
}

// v-mini-weather-icon参数

icon: {     // 天气图标编号
  type: String,
  default: 'd00' // 默认白天-晴
}
type: {     // 天气图标类型 -- fill / line
  type: String,
  default: 'fill'
}
```
