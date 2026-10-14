<template>
	<view class="my-page">
		<view class="top-box">
			<image class="bg-img" src="https://csweb.tengsytech.com/image/my-top.png" mode="aspectFill"></image>
			<view class="box">
				<view class="user-box" @click="goUrl('/pages/my/userInfo')">
					<image v-if="userInfo.avatar" class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
					<view class="info">
						<view class="name-box">
							<view class="name u-line-1">{{ userInfo.name }}</view>
							<image v-if="true" class="icon icon-0" src="@/static/vip-0.png" mode="heightFix"></image>
							<image v-else-if="user_type == 1" class="icon" src="@/static/vip-1.png" mode="heightFix"></image>
							<image v-else-if="user_type == 2" class="icon" src="@/static/vip-2.png" mode="heightFix"></image>
							<image v-else-if="user_type == 3" class="icon" src="@/static/vip-3.png" mode="heightFix"></image>
						</view>
						<view class="phone" v-if="userInfo.mobile">电话：{{ userInfo.mobile }}</view>
						<view class="phone" v-else-if="userInfo.email">邮箱：{{ userInfo.email }}</view>
					</view>
					<u-icon name="arrow-right" color="#fff" bold></u-icon>
				</view>
				<view class="data-box">
					<view class="item" @click="goUrl('/pages/my/number')">
						<view class="title">
							<text class="text">次数</text>
						</view>
						<view class="value">
							<text>{{ credit.frequency }}</text>
							<text class="icon">次</text>
						</view>
					</view>
					<view class="item" @click="goUrl('/pages/my/pointsRecord')">
						<view class="title">
							<text class="text">积分</text>
						</view>
						<view class="value">
							<text>{{ credit.points }}</text>
							<!-- <text class="icon">个</text> -->
						</view>
					</view>
				</view>
				<view class="vip-box" @click="goUrl('/pages/my/vip')">
					<image class="icon" src="https://base2.tengsytech.com/statics/user/images/VIP.png" mode="aspectFill"></image>
					<view class="text">免费测算所有项目</view>
					<button class="btn" size="mini">开启VIP</button>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="cell-box">
				<!-- <view class="item" @click="goUrl('/pages/my/share')">
					<view class="left">
						<image class="icon" src="@/static/haibao.png" mode="aspectFill"></image>
						<view class="label">推广海报</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/promotionRecord')">
					<view class="left">
						<image class="icon" src="@/static/haibao.png" mode="aspectFill"></image>
						<view class="label">推广记录</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view> -->
				<view class="item" @click="goUrl('/pages/my/pointsRecord')">
					<view class="left">
						<image class="icon" src="@/static/jifen.png" mode="aspectFill"></image>
						<view class="label">积分明细</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<!-- <view class="item" @click="goUrl('/pages/my/withdrawal')">
					<view class="left">
						<image class="icon" src="https://base2.tengsytech.com/statics/user/images/tixian.png" mode="aspectFill"></image>
						<view class="label">佣金提现</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/withdrawDetail')">
					<view class="left">
						<image class="icon" src="https://base2.tengsytech.com/statics/user/images/mingxiy.png" mode="aspectFill"></image>
						<view class="label">提现明细</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view> -->
				<view class="item" @click="goUrl('/pages/my/calculation')">
					<view class="left">
						<image class="icon" src="@/static/cesuan.png" mode="aspectFill"></image>
						<view class="label">我的测算</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/collect')">
					<view class="left">
						<image class="icon" src="@/static/shoucang.png" mode="aspectFill"></image>
						<view class="label">我的收藏</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item">
					<view class="left" @click="goUrl('/pages/my/like')">
						<image class="icon" src="@/static/dianzan.png" mode="aspectFill"></image>
						<view class="label">我的点赞</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/feedback')">
					<view class="left">
						<image class="icon" src="@/static/fankui.png" mode="aspectFill"></image>
						<view class="label">意见反馈</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/questions')">
					<view class="left">
						<image class="icon" src="@/static/wenti.png" mode="aspectFill"></image>
						<view class="label">常见问题</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
				<view class="item" @click="goUrl('/pages/my/setting/setting')">
					<view class="left">
						<image class="icon" src="@/static/shezhi.png" mode="aspectFill"></image>
						<view class="label">设置</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
			</view>
			
			<view class="cell-box mt-28">
				<view class="item" @click="logOut">
					<view class="left">
						<image class="icon" src="@/static/tuichu.png" mode="aspectFill"></image>
						<view class="label">退出登录</view>
					</view>
					<view class="right">
						<u-icon name="arrow-right" color="#cac8c8" size="28rpx"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getMaterial, getCredit, logout } from '@/api/api.js'
	
	export default {
		data () {
			return {
				userInfo: {},
				credit: {},
			}
		},
		onShow () {
			this.initData()
		},
		methods: {
			initData () {
				getMaterial().then(res => {
					if (res.code == 1) {
						this.userInfo = res.data.data
					}
				})
				
				getCredit().then(res => {
					if (res.code == 1) {
						this.credit = res.data
					}
				})
			},
			goUrl (url) {
				uni.navigateTo({
					url
				})
			},
			logOut () {
				uni.showModal({
					title: '确认要退出登录吗？',
					success: (res) => {
						if (res.confirm) {
							logout().then(res => {
								uni.removeStorageSync('token')
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 500)
							})
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.my-page {
	padding-bottom: var(--window-bottom);
	min-height: 100%;
	background-color: #f6f6f6;
	position: relative;
	.top-box {
		position: relative;
		.bg-img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.box {
			position: relative;
			z-index: 10;
			padding: 28rpx 28rpx 98rpx;
			.user-box {
				display: flex;
				align-items: center;
				.avatar {
					width: 116rpx;
					height: 116rpx;
					border-radius: 100%;
					border: 2rpx solid #fff;
				}
				.info {
					margin: 0 32rpx;
					flex: 1;
					color: #fff;
					.name-box {
						display: flex;
						align-items: center;
						.name {
							max-width: 204rpx;
							font-size: 34rpx;
							font-weight: bold;
						}
						.icon {
							margin-left: 14rpx;
							width: 40rpx;
							height: 40rpx;
						}
					}
					.phone {
						margin-top: 10rpx;
						font-size: 28rpx;
					}
				}
			}
			.data-box {
				margin-top: 50rpx;
				display: flex;
				.item {
					flex: 1;
					padding: 0 20rpx;
					text-align: center;
					.title {
						.text {
							color: #fff;
							font-size: 30rpx;
						}
					}
					.value {
						margin-top: 10rpx;
						color: #ff6738;
						font-size: 34rpx;
						font-weight: bold;
						.icon {
							font-size: 24rpx;
						}
					}
				}
			}
			.vip-box {
				padding: 0 32rpx;
				border-radius: 16rpx 16rpx 0 0;
				height: 70rpx;
				background-color: #f9feff;
				position: absolute;
				bottom: 0;
				left: 28rpx;
				right: 28rpx;
				z-index: 10;
				display: flex;
				align-items: center;
				.icon {
					width: 48rpx;
					height: 48rpx;
				}
				.text {
					flex: 1;
					margin: 0 12rpx;
					color: #333;
					font-size: 30rpx;
				}
				.btn {
					margin: 0;
					padding: 0 28rpx;
					border-radius: 40rpx;
					height: 52rpx;
					color: #333;
					font-size: 28rpx;
					line-height: 52rpx;
					background-color: #f0c197;
				}
			}
		}
	}
	.container {
		padding: 28rpx;
		.cell-box {
			padding: 0 20rpx;
			border-radius: 20rpx;
			background-color: #fff;
			.item {
				height: 110rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				& + .item {
					border-top: 1rpx solid #eee;
				}
				.left {
					display: flex;
					align-items: center;
					.icon {
						width: 50rpx;
						height: 50rpx;
					}
					.label {
						margin-left: 24rpx;
						color: #333;
						font-size: 32rpx;
					}
				}
				.right {
					display: flex;
					align-items: center;
					.value {
						margin-right: 24rpx;
						color: #fd5a5d;
						font-size: 26rpx;
					}
				}
			}
		}
	}
}
</style>
