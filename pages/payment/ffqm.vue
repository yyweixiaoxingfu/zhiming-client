<template>
	<view class="ffqm-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm/ffqm/images/pay01.png" mode="widthFix"></image>
		<view class="container">
			<view class="user_info">
				<view class="u_title">宝宝信息</view>
				<view class="u_content">
					<view class="item">
						<view class="label">宝宝姓氏</view>
						<view class="text">{{ pageContent.submit_data.xing }}</view>
					</view>
					<view class="item">
						<view class="label">出生日期</view>
						<view class="text">{{ pageContent.submit_data.birthday }}</view>
					</view>
					<view class="item">
						<view class="label">性别</view>
						<view class="text">{{ sexHandle }}</view>
					</view>
				</view>
			</view>
			<view class="pay-box">
				<view class="title-box">方式</view>
				<view class="box">
					<view class="btn" @click="payShow = true">
						<text class="text">立即支付</text>
					</view>
					<view class="tips">支付成功后，为您揭晓八字事业运势！</view>
				</view>
			</view>
			<view class="wrap-box">
				<view class="title-box">测试项目：起名项目</view>
				<view class="box">
					<view class="left">
						<view class="value">限时优惠￥ {{ pageContent.pay_price }}</view>
						<view class="del">原价：{{ pageContent.original_price }}元</view>
					</view>
					<view class="right">
						<view class="text">距离恢复原价还有:</view>
						<u-count-down :time="5700000" format="HH:mm:ss" @change="onChange">
							<view class="time">
								<text class="text">{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
								<text class="text">小时</text>
								<text class="text">{{ timeData.minutes }}</text>
								<text class="text">分</text>
								<text class="text">{{ timeData.seconds }}</text>
								<text class="text">秒</text>
							</view>
						</u-count-down>
					</view>
				</view>
			</view>
			<view class="know_img">
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/ffqm/images/dajiming.png" mode="widthFix"></image>
			</view>
		</view>
		
		<!-- <view class="hot-box">
			<view class="title-box">
				<image class="img" src="https://base2.tengsytech.com/statics/img/rmyc.png" mode="aspectFill"></image>
			</view>
			<hot-list></hot-list>
		</view> -->
		
		<u-back-top
			:scroll-top="scrollTop"
			icon="arrow-up" right="10"
			:customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
			:iconStyle="{ color: '#fff', fontWeight: 'bold' }"
		></u-back-top>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="ffqm"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'
	
	export default {
		data () {
			return {
				pageContent: {
					submit_data: {},
				},
				
				timeData: {},
				
				scrollTop: 0,
				payShow: false,
				
				order_no: '',
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.initData()
		},
		onPageScroll (e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			initData () {
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.pageContent = res.data
					}
				})
			},
			onChange (e) {
				this.timeData = e
			},
		},
		computed: {
			sexHandle () {
				let sex = this.pageContent.submit_data.sex
				
				if (sex == 0) {
					return '未出生'
				} else if (sex == 1) {
					return '男'
				} else if (sex == 2) {
					return '女'
				}
				
				return ''
			}
		}
	}
</script>

<style lang="scss">
.ffqm-result {
	color: #333;
	font-size: 28rpx;
	line-height: 1.4;
	.img {
		width: 100%;
	}
	.container {
		padding: 1rpx 0 20rpx;
		background-color: #ffe7e8;
		.user_info {
			margin: 20rpx;
			border-radius: 6rpx;
			border: 1px solid #b5b5b5;
			padding: 0 20rpx;
			color: #292828;
			background-color: #ffffff;
			.u_title {
				line-height: 80rpx;
				border-bottom: 1px solid #b5b5b5;
			}
			.u_content {
				padding: 20rpx 0;
				.item {
					display: flex;
					line-height: 50rpx;
					.label {
						width: 150rpx;
					}
					.text {
						flex: 1;
					}
				}
			}
		}
		.pay-box {
			margin: 20rpx;
			border-radius: 6rpx;
			border: 1px solid #b5b5b5;
			color: #292828;
			background-color: #ffffff;
			.title-box {
				color: #010101;
				font-size: 32rpx;
				text-align: center;
				line-height: 80rpx;
				border-bottom: 1px solid #333;
			}
			.box {
				padding: 20rpx;
				.btn {
					margin: 0 10rpx;
					border-radius: 80rpx;
					height: 80rpx;
					color: #fff;
					font-size: 36rpx;
					font-weight: bold;
					line-height: 80rpx;
					background-color: #f32b4a;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.tips {
					margin-top: 20rpx;
					color: #666;
					font-size: 26rpx;
					text-align: center;
				}
			}
		}
		.wrap-box {
			margin: 20rpx;
			border-radius: 6rpx;
			border: 1px solid #b5b5b5;
			color: #292828;
			background-color: #ffffff;
			.title-box {
				padding: 0 20rpx;
				color: #010101;
				font-size: 32rpx;
				line-height: 80rpx;
				border-bottom: 1px solid #d2d2d2;
			}
			.box {
				padding: 20rpx;
				display: flex;
				.left {
					flex: 1;
					.value {
						display: inline-block;
						border-radius: 6rpx;
						padding: 0 10rpx;
						color: #fff;
						font-size: 28rpx;
						line-height: 40rpx;
						background-color: #be2837;
					}
					.del {
						margin-top: 10rpx;
						color: #ccc;
						font-size: 30rpx;
						text-decoration: line-through;
					}
				}
				.right {
					flex: 1;
					text-align: right;
					.time {
						margin-top: 10rpx;
						color: #e74c2c;
					}
				}
			}
		}
	}
	.hot-box {
		padding: 40rpx 0;
		background-color: #fff;
		.title-box {
			margin-bottom: 20rpx;
			text-align: center;
			.img {
				width: 260rpx;
				height: 68rpx;
			}
		}
	}
}
</style>
