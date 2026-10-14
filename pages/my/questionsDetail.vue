<template>
	<view class="questions-detail">
		<view class="title">{{ content.name }}</view>
		<view class="content">
			<u-parse :content="content.content"></u-parse>
		</view>
	</view>
</template>

<script>
	import { helpCenterDetail } from '@/api/api.js'
	
	export default {
		data () {
			return {
				content: {},
			}
		},
		onLoad (options) {
			if (options.id) {
				this.initData(options.id)
			}
		},
		methods: {
			initData (id) {
				uni.showLoading({ mask: true })
				helpCenterDetail({ id }).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						this.content = res.data.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.questions-detail {
	padding: 0 28rpx;
	.title {
		padding: 28rpx 0;
		border-bottom: 1rpx solid #eee;
		font-size: 30rpx;
		font-weight: bold;
	}
	.content {
		padding: 20rpx 0 28rpx;
	}
}
</style>