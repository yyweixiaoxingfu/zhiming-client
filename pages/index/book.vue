<template>
	<view class="content">
		<!--#ifdef H5-->
		<web-view :src="href"></web-view>
		<!--#endif -->
	</view>
</template>

<script>
	import { getDetailsInfo } from '@/api/api.js'

	export default {
		data () {
			return {
				href:'',
				
				cate_type: '',
				link_id: '',
			}
		},
		
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
			
			// this.href = '/uni_modules/lz-epub/hybrid/html/epub.html?url=' + options.url
			// // #ifdef APP
			// this.$lizhao.epub.show({
			// 	url: options.url
			// })
			// // #endif
		},
		methods: {
			initData () {
				getDetailsInfo({
					cate_type: this.cate_type,
					link_id: this.link_id,
				}).then(res => {
					if (res.code == 1) {
						let file = res.data.content_file
						
						this.href = '/uni_modules/lz-epub/hybrid/html/epub.html?url=' + file
					}
				})
			},
		}
	}
</script>
