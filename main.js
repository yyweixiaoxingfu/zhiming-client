import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

// 引入uView主JS库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 引入 mixin
import setTitle from '@/mixins/setTitle.js'
Vue.mixin(setTitle)

import lizhao from 'uni_modules/lz-epub'
Vue.use(lizhao)

const app = new Vue({
  ...App
})
require('./utils/request')(app)
app.$mount()

// #ifdef H5
import { systemConfig } from '@/api/api'
let description = document.querySelector('meta[name="description"]')
let keywords = document.querySelector('meta[name="keywords"]')
systemConfig().then(res => {
	let web_site_keywords = res.data.web_site_keywords
	let web_site_slogan = res.data.web_site_slogan
	description.setAttribute('content', web_site_slogan)
	keywords.setAttribute('content', web_site_keywords)
})
// #endif

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif