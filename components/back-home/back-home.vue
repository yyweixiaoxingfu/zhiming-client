<template>
	<view class="back-home" @click="goHome">
		<u-icon name="home-fill" color="#fff" size="52rpx"></u-icon>
	</view>
</template>

<script>
	export default {
		name: 'back-home',
		methods: {
			goHome () {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
.back-home {
	width: 80rpx;
	height: 80rpx;
	border-radius: 50%;
	background-color: rgba($color: $primary-color, $alpha: 0.7);
	backdrop-filter: blur(2px);
	box-shadow: 0 0 8rpx rgba($color: $primary-color, $alpha: 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: 28rpx;
	bottom: 200rpx;
	z-index: 10;
}
</style>