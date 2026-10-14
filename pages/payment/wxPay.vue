<template>
	<view class="wx-pay">
		<view class="top-box">
			<text class="custom-icon custom-icon-weixinzhifu"></text>
			<view class="label">微信扫码支付</view>
		</view>
		<view class="container">
			<view class="top"></view>
			<view class="content">
				<view class="tips">提示：请使用微信扫码支付</view>
				<view class="money">
					<text class="icon">￥</text>
					<text class="value">{{ money }}</text>
				</view>
				<view class="qrcode-box">
					<image class="qrcode" :src="qrcode" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<canvas id="qrcode" canvas-id="qrcode" style="width: 300px;height: 300px;"></canvas>
	</view>
</template>

<script>
	import uQRCode from '@/utils/uqrcode.js'

	export default {
		data () {
			return {
				money: '',
				code_url: '',
				qrcode: '',
			}
		},
		onLoad (options) {
			this.money = options.money
			this.code_url = options.code_url
			
			this.drawQrcode()
		},
		methods: {
			drawQrcode () {
				uQRCode.make({
					canvasId: 'qrcode',
					text: this.code_url,
					size: 300,
					margin: 10,
					success: res => {
						// console.log(res);
						this.qrcode = res
					},
					complete: () => {
						uni.hideLoading()
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.wx-pay {
	.top-box {
		height: 120rpx;
		border-bottom: 1rpx solid #dddddd;
		display: flex;
		align-items: center;
		justify-content: center;
		.custom-icon {
			color: #00c800;
			font-size: 80rpx;
		}
		.label {
			margin-left: 14rpx;
			color: #333;
			font-size: 40rpx;
		}
	}
	.container {
		padding-top: 30rpx;
		background-color: #f7f7f7;
		.top {
			height: 60rpx;
			background: #fff url('https://pay.tengsytech.com/assets/css/wave.png') top center repeat-x;
		}
		.content {
			padding-bottom: 80rpx;
			text-align: center;
			background-color: #fff;
			.tips {
				color: #ff0000;
				font-size: 26rpx;
			}
			.money {
				margin-top: 60rpx;
				color: #333;
				font-size: 72rpx;
				font-weight: bold;
				.icon {
					font-size: 52rpx;
				}
			}
			.qrcode-box {
				margin-top: 72rpx;
				.qrcode {
					width: 470rpx;
				}
			}
		}
	}
	
	#qrcode {
		position: fixed;
		left: -999px;
	}
}
</style>