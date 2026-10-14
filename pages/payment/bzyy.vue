<template>
	<view class="bzyy-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/bzyy_pay_banner.jpg?v=a271240" mode="widthFix"></image>
		<view class="container">
			<view class="order-info">
				<view class="left-box">
					<text class="price">
						<text class="icon">￥</text>
						<text class="value">19.9</text>
					</text>
					<text class="original">
						<text>原价：</text>
						<text class="value">￥168</text>
					</text>
				</view>
				<view class="right-box">
					<u-count-down :time="1800000" format="HH:mm:ss" @change="onChange">
						<view class="time">
							<text>距优惠结束：</text>
							<text class="item">{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
							<text>:</text>
							<text class="item">{{ timeData.minutes }}</text>
							<text>:</text>
							<text class="item">{{ timeData.seconds }}</text>
						</view>
					</u-count-down>
				</view>
			</view>
			<view class="order-info__desc">
				<text>已有</text>
				<text class="value">838445</text>
				<text>名用户购买姻缘报告，</text>
				<text class="value">98%</text>
				<text>的用户给予好评，解决了他们的感情苦恼！</text>
				<text class="value">据大数据分析，你2021年姻缘婚姻会出现一些特别重要的情况！请一定要看！</text>
			</view>
			<view class="order-info__box">
				<view class="hd">支付方式</view>
				<view class="box">
					<view class="btn" @click="payShow = true">
						<text class="text">立即支付</text>
					</view>
					<!-- <view class="tips">微信支付成功后，为您揭晓八字事业运势！</view> -->
				</view>
			</view>
			<view class="order-preresult__hd">支付后您将获得以下结果</view>
			<view class="bazisyy-section__title">性格对感情的影响</view>
			<view class="order-preresult">
				<view class="order-preresult__box">
					<view class="item" @click="payShow = true">你的感情运势如何</view>
					<view class="item" @click="payShow = true">你的潜在感情喜好是怎么样的</view>
				</view>
			</view>
			<view class="bazisyy-section__title">姻缘走势</view>
			<view class="order-preresult">
				<view class="order-preresult__box">
					<view class="item" @click="payShow = true">你什么时候会遇到另一半</view>
					<view class="item" @click="payShow = true">未来十年姻缘发展是何种趋势</view>
				</view>
			</view>
			<view class="bazisyy-section__title">命定姻缘</view>
			<view class="order-preresult">
				<view class="order-preresult__box">
					<view class="item" @click="payShow = true">你的命中另一半是个怎么样的人</view>
					<view class="item" @click="payShow = true">你们会以何种方式相遇</view>
				</view>
			</view>
			<view class="bazisyy-section__title">姻缘点评</view>
			<view class="order-preresult">
				<view class="order-preresult__box">
					<view class="item" @click="payShow = true">如何提高你遇到良缘的几率</view>
					<view class="item" @click="payShow = true">有哪些方法可以让你早点遇到TA</view>
				</view>
			</view>
		</view>
		<view class="bottom-box" v-show="showBotBtn">
			<button class="btn" @click="payShow = true">付费解锁所有项</button>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="bzyy"
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
.bzyy-result {
	min-height: 100%;
	background-color: #fb8894;
	color: #333;
	font-size: 32rpx;
	line-height: 1.4;
	position: relative;
	.container {
		padding-bottom: 2rpx;
		background-color: #ffeedc;
	}
	.img {
		width: 100%;
	}
	.order-info__desc {
		margin: 20rpx;
		border-radius: 20rpx;
		padding: 20rpx;
		font-size: 30rpx;
		line-height: 1.8;
		background-color: #fff;
		position: relative;
		.value {
			color: #f94b6c;
			font-weight: bold;
		}
	}
	.order-info {
		height: 88rpx;
		background-color: #fed9af;
		display: flex;
		.left-box {
			flex: 1;
			height: 88rpx;
			text-align: center;
			background-color: #f83850;
			.price {
				color: #fff;
				font-weight: bold;
				.icon {
					font-size: 30rpx;
				}
				.value {
					font-size: 60rpx;
				}
			}
			.original {
				margin-left: 12rpx;
				color: #fff;
				font-size: 24rpx;
				.value {
					text-decoration: line-through;
				}
			}
		}
		.right-box {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			.time {
				color: #512c2c;
				font-size: 24rpx;
				.item {
					margin: 0 4rpx;
					padding: 0 4rpx;
					border-radius: 8rpx;
					color: #fa6470;
					font-size: 30rpx;
					font-weight: bold;
					line-height: 40rpx;
					text-align: center;
					background-color: #fff;
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
				border-radius: 10rpx;
				height: 80rpx;
				color: #fff;
				font-size: 36rpx;
				font-weight: bold;
				line-height: 80rpx;
				background-color: #3dd174;
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
		margin: 30rpx 0 40rpx;
		height: 90rpx;
		font-size: 46rpx;
		text-align: center;
		line-height: 90rpx;
		background-color: #fff;
	}
	.bazisyy-section__title {
		margin: 30rpx auto 0;
		width: 520rpx;
		height: 90rpx;
		color: #fff;
		font-size: 40rpx;
		font-weight: bold;
		text-align: center;
		line-height: 90rpx;
		background: url('https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/1_bg_title.png') no-repeat;
		background-size: 100% auto;
	}
	.order-preresult {
		padding: 30rpx;
		margin: 20rpx;
		background: url('data:image/png;base64,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') repeat-y;
		background-size: 100% 25%;
		.order-preresult__box {
			border-radius: 20rpx;
			padding: 24rpx 40rpx 40rpx;
			background-color: #fff;
			.item {
				padding-left: 50rpx;
				font-size: 32rpx;
				line-height: 60rpx;
				position: relative;
				&::before {
					content: '';
					position: absolute;
					top: 10rpx;
					left: 10rpx;
					width: 26rpx;
					height: 34rpx;
					background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAMAAAB2vTk8AAAAaVBMVEUAAADeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyPeIyMKQ0YHAAAAInRSTlMA2Jo5E/b6rpVGKTXjnnBZY+vd1c7Ho4aCfnhTTiAOBgNi8m7RwQAAAMZJREFUKM+t0dkKgzAURdFUjZmqdp7H/f8f2VQrRLlIH9xPBxcRNOqvfG1t7QW4G9rMfSy55pcOQylKWJ+dO6+jFQM6wK59UuzgMDgE+tHNh4b02BWyfmdwTaiGVb9XUCd0gabfDVwSeoPrt0veoHxu4RTytnACm/sWngYh84xkEbORljItI21k2kRayLSYgYxzRqZKxSqJyqK7U4leX3pJRNP9d4n0TambFgm223k+WabpS9nLtI8URCmDivljlY2qjl5N9QHuHEDThWCKWAAAAABJRU5ErkJggg==') no-repeat;
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
			border-radius: 100rpx;
			color: #fff;
			font-size: 44rpx;
			font-weight: bold;
			line-height: 100rpx;
			background: #ff6679;
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
