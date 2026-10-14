<template>
	<view class="pay-success">
		<view class="top-box"></view>
		<view class="container">
			<view class="card-box">
				<block v-if="status == 'success'">
					<image class="icon" src="https://csweb.tengsytech.com/image/pay_success_icon.png" mode="aspectFill"></image>
					<view class="title">{{ titleInfo }}</view>
					<view class="info-box">
						<view class="item">
							<view class="label">订单编号</view>
							<view class="value">{{ orderNumber }}</view>
						</view>
					</view>
					<view class="btn-box">
						<button class="btn" @click="goDetail">查看详情</button>
						<view class="text">
							<text>将在</text>
							<u-count-down :time="5000" format="ss" @finish="goDetail"></u-count-down>
							<text>秒后自动跳转...</text>
						</view>
					</view>
				</block>
				<block v-else-if="status == 'fail'">
					<image class="icon" src="https://csweb.tengsytech.com/image/pay_fail_icon.png" mode="aspectFill"></image>
					<view class="title">{{ titleInfo }}</view>
					<view class="btn-box mt-52">
						<button class="btn fail" @click="goHome">返回首页</button>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import { epayNotify } from '@/api/api.js'
	
	export default {
		data () {
			return {
				options: {},
				
				status: '',
				
				/* 成功信息 */
				orderNumber: '',
				model: '',
				
				titleInfo: '',
			}
		},
		onLoad (options) {
			this.options = options
			
			this.initData()
		},
		methods: {
			initData () {
				epayNotify(this.options).then(res => {
					let data = res
					
					if (data.indexOf('success') != -1) {
						let arr = data.split('|')
						
						this.orderNumber = arr[1]
						this.model = arr[2]
						
						this.titleInfo = '支付成功'
						this.status = 'success'
					} else if (data.indexOf('fail') != -1) {
						let arr = data.split(':')
						
						this.titleInfo = arr[1]
						this.status = 'fail'
					}
				})
			},
			
			goDetail () {
				uni.$u.route({
					url: '/pages/result/' + this.model,
					params: {
						order_no: this.orderNumber,
					}
				})
			},
			goHome () {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
.pay-success {
	position: relative;
	.top-box {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0 0 376rpx 376rpx / 0 0 90rpx 90rpx;
		width: 100%;
		height: 400rpx;
		background-color: $primary-color;
	}
	.container {
		position: relative;
		z-index: 10;
		padding: 100rpx 20rpx 20rpx;
		.card-box {
			border-radius: 10rpx;
			padding: 50rpx 20rpx;
			background-color: #fff;
			box-shadow: 0px 2rpx 6rpx 2rpx rgba(33, 33, 33, 0.1);
			text-align: center;
			.icon {
				width: 300rpx;
				height: 300rpx;
			}
			.title {
				margin-top: 24rpx;
				color: #333;
				font-size: 32rpx;
				font-weight: bold;
			}
			.info-box {
				padding: 50rpx 0;
				.item {
					margin-top: 30rpx;
					font-size: 28rpx;
					display: flex;
					justify-content: space-between;
					.label {
						color: #999;
					}
					.value {
						margin-left: 20rpx;
						color: #333;
						text-align: right;
					}
				}
			}
			.btn-box {
				padding: 0 30rpx;
				.btn {
					color: #fff;
					font-size: 32rpx;
					border-radius: 50rpx;
					background-color: $primary-color;
					&.fail {
						
					}
				}
				.text {
					margin-top: 20rpx;
					color: #999;
					font-size: 28rpx;
					::v-deep {
						.u-count-down {
							display: inline;
							.u-count-down__text {
								color: #999;
								font-size: 28rpx;
							}
						}
					}
				}
			}
		}
	}
}
</style>