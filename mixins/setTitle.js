import { systemConfig } from '@/api/api.js'

module.exports = {
	data () {
		return {
			systemConfigData: {},
		}
	},
	onLoad () {
		let title = document.title
		
		systemConfig().then(res => {
			if (res.code == 1) {
				this.systemConfigData = res.data
				
				let webSiteTitle = res.data.web_site_title
				uni.setNavigationBarTitle({
					title: webSiteTitle + '-' + title
				})
			}
		})
	}
}
