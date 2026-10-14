<template>
	<view class="vip-page">
		<view class="title-box">
			<view class="title">会员类型</view>
			<image class="bg" src="https://base2.tengsytech.com/statics/VIP/tt.png" mode="widthFix"></image>
		</view>
		<view class="vip-list">
			<view class="item" :class="{ active: acitve == 0 }" @click="acitveChange(0)">
				<image class="bg bg-1" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg1.png" mode="aspectFill"></image>
				<image class="bg bg-2" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg.png" mode="aspectFill"></image>
				<view class="content">
					<view class="icon-box">
						<image class="img" src="https://base2.tengsytech.com/statics/VIP/114451zl79x3oy2jrlge22.png" mode="aspectFill"></image>
					</view>
					<view class="info">
						<view class="title">终身VIP会员</view>
						<view class="text">¥10000元 / 有效期 永久使用</view>
					</view>
				</view>
				<image class="selected" src="@/static/selected.png" mode="aspectFill"></image>
			</view>
			<view class="item" :class="{ active: acitve == 1 }" @click="acitveChange(1)">
				<image class="bg bg-1" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg1.png" mode="aspectFill"></image>
				<image class="bg bg-2" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg.png" mode="aspectFill"></image>
				<view class="content">
					<view class="icon-box">
						<image class="img" src="https://base2.tengsytech.com/statics/VIP/114527y01u909t9l9tuy1w.png" mode="aspectFill"></image>
					</view>
					<view class="info">
						<view class="title">包年VIP会员</view>
						<view class="text">¥1000元 / 有效期 365天</view>
					</view>
				</view>
				<image class="selected" src="@/static/selected.png" mode="aspectFill"></image>
			</view>
			<view class="item" :class="{ active: acitve == 2 }" @click="acitveChange(2)">
				<image class="bg bg-1" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg1.png" mode="aspectFill"></image>
				<image class="bg bg-2" src="https://base2.tengsytech.com/statics/VIP/floor-hot-bg.png" mode="aspectFill"></image>
				<view class="content">
					<view class="icon-box">
						<image class="img" src="https://base2.tengsytech.com/statics/VIP/114527y01u909t9l9tuy1w.png" mode="aspectFill"></image>
					</view>
					<view class="info">
						<view class="title">包月VIP会员</view>
						<view class="text">¥100元 / 有效期 30天</view>
					</view>
				</view>
				<image class="selected" src="@/static/selected.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="title-box">
			<view class="title">尊贵特权</view>
			<image class="bg" src="https://base2.tengsytech.com/statics/VIP/tt.png" mode="widthFix"></image>
		</view>
		<view class="quanxian-box">
			<view class="item">终身免费测试所有项目</view>
			<view class="item">提供专业解答</view>
		</view>
		<view class="btn-box">
			<button class="btn" @click="closeToast">立即开通</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				acitve: 0,
			}
		},
		methods: {
			acitveChange (index) {
				this.acitve = index
			},
			closeToast () {
				uni.showToast({
					title: '暂未开放',
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss">
.vip-page {
	padding: 20rpx 30rpx 40rpx;
	.title-box {
		position: relative;
		.bg {
			width: 100%;
		}
		.title {
			color: #666;
			font-size: 32rpx;
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 10;
			transform: translate(-50%, -50%);
		}
	}
	.vip-list {
		margin: 30rpx 0 40rpx;
		.item {
			padding: 20rpx 10rpx 20rpx 40rpx;
			border-radius: 6rpx;
			border: 1px solid #E9E9E9;
			box-shadow: 0 0 40rpx 0 #E6E6E6;
			position: relative;
			overflow: hidden;
			& + .item {
				margin-top: 30rpx;
			}
			&.active {
				border-color: #FADABA;
				box-shadow: 0 0 40rpx 0 #FFF0EC;
				.bg-1 {
					visibility: visible;
				}
				.bg-2 {
					visibility: hidden;
				}
				.selected {
					visibility: visible;
				}
			}
			.bg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
			}
			.bg-1 {
				visibility: hidden;
			}
			.bg-2 {
				visibility: visible;
			}
			.content {
				position: relative;
				z-index: 10;
				display: flex;
				align-items: center;
				.icon-box {
					margin-right: 20rpx;
					border-radius: 50%;
					border: 1px solid #eee;
					width: 160rpx;
					height: 160rpx;
					background-color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					.img {
						width: 100rpx;
						height: 100rpx;
					}
				}
				.info {
					flex: 1;
					.title {
						color: #333;
						font-size: 48rpx;
						font-weight: bold;
						line-height: 80rpx;
					}
					.text {
						margin-top: 10rpx;
						color: #666;
						font-size: 28rpx;
						line-height: 40rpx;
					}
				}
			}
			.selected {
				width: 60rpx;
				height: 60rpx;
				position: absolute;
				bottom: 0;
				right: 0;
				z-index: 20;
				visibility: hidden;
			}
		}
	}
	.quanxian-box {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		gap: 20rpx;
		.item {
			padding: 0 30rpx;
			border-radius: 60rpx;
			border: 1px solid #ccc;
			color: #666;
			font-size: 28rpx;
			line-height: 60rpx;
		}
	}
	.btn-box {
		margin-top: 44rpx;
		.btn {
			width: 552rpx;
			height: 90rpx;
			border-radius: 90rpx;
			color: #fff;
			font-size: 32rpx;
			line-height: 90rpx;
			background: linear-gradient(to left, #e53935, #e35d5b);
		}
	}
}
</style>
