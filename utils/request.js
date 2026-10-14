import { baseURL } from '@/api/config.js'

let timerJump = true; // 短时间只能跳转一次

module.exports = (vm) => {
	 // 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = baseURL; /* 根域名 */
		config.header = {
			'Content-Type': 'application/json;charset=UTF-8'
		}
		// #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
		config.timeout = 600000
		// #endif
		
		return config
	})
	
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		if (config.custom.token) {
			config.header.Authorization = config.custom.token
		} else {
			let token = uni.getStorageSync('token') || ''
			if (token) {
				config.header.Authorization = token
			}
		}

		return config 
	}, config => {
		return Promise.reject(config)
	})
	
	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data

		if (data.code == 1) {
			return data
		} else if (data.code == 0) {
			uni.showToast({
				title: data.msg,
				icon: 'none'
			})
			return ''
		} else if (data.code == 100) {
			uni.showToast({
				title: data.msg,
				icon: 'error'
			})
			return ''
		} else if (data.code === 401) {
			if (response.config.custom.jump === false) {
				return false
			}

			uni.showToast({
				title: data.msg,
				icon: 'error'
			})
			// 短时间只能跳转一次
			if(timerJump){
				timerJump = false
				setTimeout(() => {
					timerJump = true
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}, 1000)
			}
		} else {
			return data
		}
	}, (response) => { 
		return Promise.reject(response)
	})
}
