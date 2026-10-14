<template>
	<view class="bazi-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shiye/images/order_banner.png" mode="widthFix"></image>
		<view class="order-info__desc">
			<text>已有</text>
			<text class="value">3289385</text>
			<text>人测算，</text>
			<text class="value">98.7%</text>
			<text>以上的用户反馈对事业、工作、前途有很大的帮助。</text>
		</view>
		<view class="order-info">
			<view class="box">
				<view class="hd">付费项目：八字事业运势详批</view>
				<view class="price">
					<view class="left">
						<view class="value">限时优惠￥ {{ pageContent.pay_price }}</view>
						<view class="del">原价：{{ pageContent.original_price }}元</view>
					</view>
					<view class="right">
						<view class="text">距离恢复原价还有:</view>
						<u-count-down :time="1800000" format="HH:mm:ss" @change="onChange">
							<view class="time">
								<text class="text item">{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
								<text class="text">:</text>
								<text class="text item">{{ timeData.minutes }}</text>
								<text class="text">:</text>
								<text class="text item">{{ timeData.seconds }}</text>
							</view>
						</u-count-down>
					</view>
				</view>
			</view>
		</view>
		<view class="order-info__box">
			<view class="hd">支付</view>
			<view class="box">
				<view class="btn" @click="payShow = true">
					<text class="text">立即支付</text>
				</view>
				<view class="tips">支付成功后，为您揭晓八字事业运势！</view>
			</view>
		</view>
		<view class="order-preresult__hd">支付后您将获得以下结果</view>
		<view class="bazisyy-section__title">职业能力分析</view>
		<view class="order-preresult">
			<view class="order-preresult__box">
				<view class="item" @click="payShow = true">性格对事业的影响</view>
				<view class="item" @click="payShow = true">先天人际关系潜力</view>
				<view class="item" @click="payShow = true">后天事业优势和劣势</view>
				<view class="item" @click="payShow = true">有利你的事业发展策略</view>
			</view>
		</view>
		<view class="bazisyy-section__title">事业发展方向</view>
		<view class="order-preresult">
			<view class="order-preresult__box">
				<view class="item" @click="payShow = true">有利你发展的行业</view>
				<view class="item" @click="payShow = true">不利你发展的行业</view>
				<view class="item" @click="payShow = true">适合稳定型还是创新型公司</view>
			</view>
		</view>
		<view class="bazisyy-section__title">事业趋势解读</view>
		<view class="order-preresult">
			<view class="order-preresult__box">
				<view class="item" @click="payShow = true">事业总体趋势解读</view>
				<view class="item" @click="payShow = true">适不适合创业</view>
				<view class="item" @click="payShow = true">适不适合跟别人合伙</view>
				<view class="item" @click="payShow = true">事业贵人与小人特征</view>
			</view>
		</view>
		<view class="bazisyy-section__title">流年事业点评</view>
		<view class="order-preresult">
			<view class="order-preresult__box">
				<view class="item" @click="payShow = true">流年事业情况</view>
				<view class="item" @click="payShow = true">流年事业财富多寡</view>
				<view class="item" @click="payShow = true">流年求职、经商难度</view>
				<view class="item" @click="payShow = true">老师建议</view>
			</view>
		</view>
		<view class="bottom-box" v-show="showBotBtn">
			<button class="btn" @click="payShow = true">付费解锁所有项</button>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="bazi"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				timeData: {},
				
				showBotBtn: false,
				payShow: false,
				
				pageContent: {
					submit_data: {},
				},
				order_no: '',
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.initData()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			
			if (scrollTop > 500) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
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
.bazi-result {
	min-height: 100%;
	background-color: #fff2e3;
	color: #333;
	font-size: 32rpx;
	line-height: 1.4;
	position: relative;
	.img {
		width: 100%;
	}
	.order-info__desc {
		margin: -148rpx 20rpx 0;
		border-radius: 20rpx;
		padding: 20rpx;
		font-size: 30rpx;
		line-height: 1.8;
		background-color: #fff;
		position: relative;
		.value {
			color: #e74c2c;
		}
	}
	.order-info {
		padding: 20rpx 20rpx 0;
		background: linear-gradient(#eaa48d,#fff2e3);
		.box {
			border-radius: 20rpx;
			background-color: #fff;
			.hd {
				height: 84rpx;
				line-height: 84rpx;
				font-size: 44rpx;
				text-align: center;
				border-bottom: 1px solid #ffedee;
			}
			.price {
				padding: 20rpx;
				line-height: 2;
				display: flex;
				.left {
					flex: 1;
					.value {
						display: inline-block;
						border-radius: 10rpx;
						padding: 0 20rpx;
						color: #fff;
						font-size: 32rpx;
						background-color: #e74c2c;
					}
					.del {
						text-decoration: line-through;
					}
				}
				.right {
					flex: 1;
					text-align: right;
					.time {
						color: #e74c2c;
						font-size: 36rpx;
						.item {
							display:inline-block;
							margin: 0 8rpx;
							padding: 0 8rpx;
							border-radius: 6rpx;
							height: 60rpx;
							color:#fff;
							line-height: 60rpx;
							background-color:#e74c2c;
						}
					}
				}
			}
		}
	}
	.order-info__box {
		margin: 20rpx 20rpx 0;
		border-radius: 20rpx;
		background-color: #fff;
		.hd {
			height: 84rpx;
			line-height: 84rpx;
			font-size: 44rpx;
			text-align: center;
			border-bottom: 1px solid #ffedee;
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
	.order-preresult__hd {
		margin: 40rpx 0;
		height: 90rpx;
		font-size: 46rpx;
		text-align: center;
		line-height: 90rpx;
		background-color: #fff;
	}
	.bazisyy-section__title {
		margin-top: 30rpx;
		height: 90rpx;
		color: #ffebd0;
		font-size: 48rpx;
		text-align: center;
		line-height: 90rpx;
		background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/shiye/images/bazisyy_title.png') no-repeat center center;
		background-size: auto 100%;
	}
	.order-preresult {
		padding: 30rpx;
		margin: 20rpx;
		background: url('data:image/png;base64,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') repeat-y;
		background-size: 100% 11.1111%;
		.order-preresult__box {
			border-radius: 20rpx;
			padding: 24rpx 40rpx 40rpx;
			background-color: #fff;
			.item {
				display: inline-block;
				margin-top: 24rpx;
				border-radius: 64rpx;
				padding: 0 30rpx 0 70rpx;
				font-size: 32rpx;
				line-height: 64rpx;
				background-color: #fef8f1;
				position: relative;
				&::before {
					content: '';
					position: absolute;
					top: 0;
					left: -4rpx;
					width: 64rpx;
					height: 64rpx;
					background: url('data:image/png;base64,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') no-repeat center center;
					background-size: 100% 100%;
				}
			}
		}
	}
	.bottom-box {
		padding: 0 20rpx;
		height: 120rpx;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		position: sticky;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
		.btn {
			flex: 1;
			height: 100rpx;
			border-radius: 20rpx;
			color: #fff2e3;
			font-size: 44rpx;
			font-weight: bold;
			line-height: 100rpx;
			background: linear-gradient(to bottom, #ec7a4b, #e64e2f);
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
