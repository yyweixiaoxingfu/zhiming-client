<template>
	<view class="order-history" @click="goOrder">
		<u-icon name="search" color="#fff" size="52rpx"></u-icon>
		<view class="text">订单查询</view>
	</view>
</template>

<script>
	export default {
		name: 'order-history',
		data () {
			return {
				
			}
		},
		methods: {
			goOrder () {
				uni.switchTab({
					url: '/pages/order/order'
				})
			}
		}
	}
</script>

<style lang="scss">
.order-history {
	position: fixed;
	top: 70%;
	right: 0;
	z-index: 80;
	width: 58rpx;
	height: 200rpx;
	border-radius: 10rpx 0 0 10rpx;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.text {
		width: 40rpx;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		line-height: 32rpx;
	}
}
</style>