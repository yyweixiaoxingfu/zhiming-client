<template>
	<view class="hmjx-result">
		<view class="notice-box">
			<u-notice-bar
				:text="notice" icon=""
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="top-box">
				<view class="content">
					<view class="left">
						<view>
							<text>你的姓名：</text>
							<text class="value ml-4">{{ pageContent.submit_data.name }}</text>
						</view>
						<view class="text">
							<text>测试号码：</text>
							<text class="value ml-4">{{ pageContent.submit_data.number }}</text>
						</view>
						<view>您的八字与这个号码有特殊的风水磁场，相生相助，相生相克，影响着你一生的运势，请一定要看。</view>
						<view class="money">只需{{ pageContent.pay_price }}元</view>
						<button class="btn" @click="payShow = true">立即查看</button>
					</view>
					<view class="right">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm/hmjx/picture/dashi.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="time-box">
					<u-count-down :time="7200000" format="HH:mm:ss" @change="onChange">
						<view class="time">
							<text>距优惠结束：</text>
							<text class="text item">{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
							<text class="text">:</text>
							<text class="text item">{{ timeData.minutes }}</text>
							<text class="text">:</text>
							<text class="text item">{{ timeData.seconds }}</text>
						</view>
					</u-count-down>
				</view>
			</view>
			<view class="wrap-box">
				<view class="title-box">你的号码分析报告</view>
				<view class="subtitle-box">结合你的号码分析你的人生运势</view>
				<view class="list-box">
					<view class="item">
						<view class="title">号码对你的事业和财运的影响</view>
						<view class="text">
							<text>1.是能成为</text>
							<text class="value">领导老板</text>
							<text>还是只能做一个小职员？</text>
						</view>
						<view class="text">
							<text>2.会有</text>
							<text class="value">偏财、暗财、意外之财</text>
							<text>吗？</text>
						</view>
						<view class="text">
							<text>3.会因为是非</text>
							<text class="value">破财</text>
							<text>吗？投资能赚到钱吗？</text>
						</view>
					</view>
					<view class="item">
						<view class="title">号码对你的恋爱和婚姻的影响</view>
						<view class="text">
							<text>1.是</text>
							<text class="value">恩爱幸福、美满和谐</text>
							<text>还是互相猜忌、天天吵架？</text>
						</view>
						<view class="text">
							<text>2.又或是遭遇</text>
							<text class="value">分手、离婚、婚外情</text>
							<text>？</text>
						</view>
					</view>
					<view class="item">
						<view class="title">号码对你的人际关系的影响</view>
						<view class="text">
							<text>1.</text>
							<text class="value">人缘</text>
							<text>好吗？</text>
							<text class="value">朋友</text>
							<text>多吗？</text>
						</view>
						<view class="text">
							<text>2.容易被小人</text>
							<text class="value">陷害算计</text>
							<text>吗？</text>
						</view>
						<view class="text">
							<text>3.是只能依靠自己奋斗还是会有</text>
							<text class="value">贵人帮助</text>
							<text>？</text>
						</view>
					</view>
					<view class="item">
						<view class="title">号码对你性格形成的影响</view>
						<view class="text">1.是冲动急躁、自负好胜、还是乐观随缘、聪明单纯？</view>
						<view class="text">2.是保守固执、优柔寡断？</view>
					</view>
					<view class="item">
						<view class="title">号码对你身体健康的影响</view>
						<view class="text">
							<text>1.你在生活中容易出现</text>
							<text class="value">车祸、血光、官司</text>
							<text>等意外灾祸吗？</text>
						</view>
						<view class="text">
							<text>2.你的</text>
							<text class="value">健康状况</text>
							<text>会出问题吗？</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="hot-box">
			<view class="title-box">
				<image class="img" src="https://base2.tengsytech.com/statics/img/rmyc.png" mode="aspectFill"></image>
			</view>
			<hot-list></hot-list>
		</view> -->
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="hmjx"
			@close="payShow = false"
		></pay-popup>
		
		<u-back-top
			:scroll-top="scrollTop"
			icon="arrow-up" right="10"
			:customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
			:iconStyle="{ color: '#fff', fontWeight: 'bold' }"
		></u-back-top>
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				notice: '本网页数据安全由阿里云提供，严格按照法律法规和用户协议对您的信息进行全方位保护，请放心使用，测试仅供娱乐！',
				
				pageContent: {
					submit_data: {},
				},
				
				timeData: {},
				payShow: false,
				scrollTop: 0,
				
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
		}
	}
</script>

<style lang="scss">
.hmjx-result {
	color: #333;
	font-size: 32rpx;
	line-height: 1.4;
	background-color: #fff;
	.notice-box {
		background-color: rgba(0,0,0,0.7);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		padding: 10rpx 10rpx 120rpx;
		background: #F7EFDC;
		.top-box {
			margin-bottom: 20rpx;
			background: url('https://base2.tengsytech.com/statics/ffsm/hmjx/images/forum_01.png') no-repeat;
			background-size: 100%;
			.content {
				padding: 50rpx 30rpx 0;
				display: flex;
				align-items: center;
				.left {
					flex: 1;
					view {
						color: #333;
						font-size: 28rpx;
					}
					.text {
						margin: 10rpx 0;
					}
					.value {
						color: #f73232;
						font-size: 32rpx;
						font-weight: 600;
					}
					.money {
						padding-top: 14rpx;
						padding-bottom: 20rpx;
						color: #333;
						font-size: 24rpx;
						text-align: center;
					}
					.btn {
						border-radius: 70rpx;
						width: 308rpx;
						height: 80rpx;
						color: #fff;
						font-size: 32rpx;
						text-align: center;
						line-height: 80rpx;
						background-color: #f73232;
					}
				}
				.right {
					width: 287rpx;
					height: 369rpx;
					.image {
						width: 100%;
						height: 100%;
					}
				}
			}
			.time-box {
				padding: 30rpx 0 24rpx;
				color: #333333;
				font-size: 24rpx;
				text-align: center;
				.text {
					color: #f73232;
				}
			}
		}
		.wrap-box {
			padding: 20rpx;
			background-color: #ffffff;
			.title-box {
				margin: 0 auto 20rpx;
				width: 418rpx;
				height: 80rpx;
				color: #333;
				font-size: 36rpx;
				font-weight: bold;
				text-align: center;
				line-height: 80rpx;
				text-shadow: 5rpx 5rpx 2rpx #989898;
				background: url('https://base2.tengsytech.com/statics/ffsm/hmjx/images/title.png') no-repeat;
				background-size: 100% 100%;
			}
			.subtitle-box {
				padding: 30rpx 0;
				color: #333333;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				&::before, &::after {
					content: '';
					display: inline-block;
					width: 40rpx;
					height: 40rpx;
					background: url('https://base2.tengsytech.com/statics/ffsm/hmjx/images/img_icon.png') no-repeat;
					background-size: 100% 100%;
				}
				&::before {
					margin-right: 20rpx;
				}
				&::after {
					margin-left: 20rpx;
				}
			}
			.list-box {
				.item {
					padding-bottom: 60rpx;
					.title {
						color: #333333;
						font-size: 32rpx;
						font-weight: 600;
						padding-bottom: 30rpx;
						&::before {
							content: '';
							display: inline-block;
							margin-right: 30rpx;
							width: 30rpx;
							height: 34rpx;
							background: url('https://base2.tengsytech.com/statics/ffsm/hmjx/images/img_sanjiao%20icon.png') no-repeat;
							background-size: 100% 100%;
						}
					}
					.text {
						font-size: 28rpx;
						& + .text {
							margin-top: 12rpx;
						}
						.value {
							color: #f73232;
						}
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
