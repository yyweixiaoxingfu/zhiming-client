<template>
	<view class="switch-language">
		<!-- #ifndef MP-WEIXIN -->
		<picker class="picker" :range="range" rangeKey="name" @change="rangeChange">
			<view class="picker-box">
				<view class="text">{{ range[rangeValue].name }}</view>
				<u-icon name="arrow-down-fill" color="#333" size="28rpx"></u-icon>
			</view>
		</picker>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name: 'switch-language',
		data () {
			return {
				range: [{
					name: '简体中文',
					value: 'chinese_simplified',
				}, {
					name: '繁體中文',
					value: 'chinese_traditional',
				}],
				
				rangeValue: 0,
			}
		},
		mounted () {
			// const language = uni.getStorageSync('sm-language') || ''

			// if (language) {
			// 	const index = this.range.findIndex(item => item.value == language)
			// 	if (index != -1) {
			// 		this.rangeValue = index
			// 	}
			// }
		},
		methods: {
			rangeChange (e) {
				const index = e.detail.value
				this.rangeValue = index

				const value = this.range[index].value
				this.dd.change(value)
				
				// uni.setStorageSync('sm-language', value)
			}
		}
	}
</script>

<script module="dd" lang="renderjs">
	export default {
		methods: {
			change (key) {
				translate.changeLanguage(key)
			}
		}
	}
</script>

<style scoped lang="scss">
.switch-language {
	.picker-box {
		padding: 6rpx 16rpx;
		border: 1rpx solid #666;
		border-radius: 10rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		.text {
			margin-right: 8rpx;
			color: #333;
			font-size: 28rpx;
		}
	}
}
</style>