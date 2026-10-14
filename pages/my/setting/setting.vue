<template>
	<view class="setting-page">
		<view class="cell-box">
			<!-- <view class="cell-item" @click="goUrl('/pages/my/setting/editPhone')">
				<view class="label">更换手机号</view>
				<u-icon name="arrow-right" color="#333" size="28rpx"></u-icon>
			</view> -->
			<view class="cell-item" @click="goUrl('/pages/my/setting/editEmail')">
				<view class="label">更换邮箱</view>
				<u-icon name="arrow-right" color="#333" size="28rpx"></u-icon>
			</view>
			<!-- <view class="cell-item" @click="goUrl('/pages/my/setting/editPay')">
				<view class="label">设置支付密码</view>
				<u-icon name="arrow-right" color="#333" size="28rpx"></u-icon>
			</view> -->
		</view>
		<view class="cell-box mt-20">
			<view class="cell-item" @click="goUrl('/pages/my/about')">
				<view class="label">关于我们</view>
				<u-icon name="arrow-right" color="#333" size="28rpx"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			goUrl (url) {
				uni.navigateTo({
					url
				})
			},
		}
	}
</script>

<style lang="scss">
.setting-page {
	box-sizing: border-box;
	padding: 28rpx;
	min-height: 100%;
	background-color: #f8f8f8;
	.cell-box {
		border-radius: 20rpx;
		background-color: #fff;
		.cell-item {
			padding: 0 28rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			& + .cell-item {
				border-top: 1rpx solid #eee;
			}
			.label {
				color: #333;
				font-size: 28rpx;
			}
		}
	}
}
</style>