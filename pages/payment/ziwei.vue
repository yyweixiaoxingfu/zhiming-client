<template>
	<view class="ziwei-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_img_banner.png" mode="widthFix"></image>
		<view class="order-info">
			<view class="left-box">
				<view class="price">
					<text class="icon">￥</text>
					<text class="value">{{ pageContent.pay_price }}</text>
				</view>
				<view class="original">
					<text>原价：</text>
					<text class="value">￥{{ pageContent.original_price }}</text>
				</view>
			</view>
			<view class="right-box">
				<u-count-down :time="1200000" format="HH:mm:ss" @change="onChange">
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
		<view class="order-pay">
			<view class="order-pay__number">
				<text>已为</text>
				<text class="value">3048012</text>
				<text>人定制专属人生运程报告，帮助他们了解自己，更好把握未来发展之路！用户满意度高达</text>
				<text class="value">98%</text>
				<text>。</text>
			</view>
			<view class="order-pay__tip">报告生成后，只有您自己能查看，请放心领取！</view>
			<view class="public_pay_box">
				<view class="btn" @click="payShow = true">
					<text class="text">立即支付</text>
				</view>
			</view>
		</view>
		<view class="m-box">
			<view class="m-box__title">支付完成后你将获得以下内容</view>
			<view class="lock-box">
				<view class="lock-box__list">
					<view class="lock-box__list-title">
						<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_title.png" mode="aspectFill"></image>
						<view class="title">自我分析</view>
					</view>
					<view class="lock-box__list-words">你的先天性格是怎样的？</view>
					<view class="lock-box__list-words">你的一生发展情况如何？</view>
					<view class="lock-box__list-btn">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_suo.png" mode="aspectFill" @click="payShow = true"></image>
					</view>
				</view>
				<view class="lock-box__list">
					<view class="lock-box__list-title">
						<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_title.png" mode="aspectFill"></image>
						<view class="title">婚恋状况</view>
					</view>
					<view class="lock-box__list-words">你的感情状况如何？</view>
					<view class="lock-box__list-words">怎样的异性才适合你？</view>
					<view class="lock-box__list-words">你的恋爱婚姻会幸福吗？</view>
					<view class="lock-box__list-words">婚后你会成为哪种类型的老公/老婆？</view>
					<view class="lock-box__list-words">影响你婚姻幸福的因素有哪些？</view>
					<view class="lock-box__list-words">怎样获得婚姻幸福度？</view>
					<view class="lock-box__list-btn">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_suo.png" mode="aspectFill" @click="payShow = true"></image>
					</view>
				</view>
				<view class="lock-box__list">
					<view class="lock-box__list-title">
						<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_title.png" mode="aspectFill"></image>
						<view class="title">财富状况</view>
					</view>
					<view class="lock-box__list-words">你的先天财富格局？</view>
					<view class="lock-box__list-words">你一生财运状况？</view>
					<view class="lock-box__list-words">你是否能靠祖业获得？</view>
					<view class="lock-box__list-words">你有没有破财风险？</view>
					<view class="lock-box__list-words">适合你的理财方式有哪些？</view>
					<view class="lock-box__list-words">财运积累的关键期？</view>
					<view class="lock-box__list-words">如何加强个人财运？</view>
					<view class="lock-box__list-btn">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_suo.png" mode="aspectFill" @click="payShow = true"></image>
					</view>
				</view>
				<view class="lock-box__list">
					<view class="lock-box__list-title">
						<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_title.png" mode="aspectFill"></image>
						<view class="title">事业发展</view>
					</view>
					<view class="lock-box__list-words">你的先天事业发展情况如何？</view>
					<view class="lock-box__list-words">适合你发展领域有哪些？</view>
					<view class="lock-box__list-words">你适合在外发展吗？</view>
					<view class="lock-box__list-words">职场上你容易遇到路人还是阻碍？</view>
					<view class="lock-box__list-words">职场上你的先天优势有哪些？</view>
					<view class="lock-box__list-words">如何应对职场难题？</view>
					<view class="lock-box__list-btn">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_suo.png" mode="aspectFill" @click="payShow = true"></image>
					</view>
				</view>
				<view class="lock-box__list">
					<view class="lock-box__list-title">
						<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_title.png" mode="aspectFill"></image>
						<view class="title">2023年流年运程</view>
					</view>
					<view class="lock-box__list-btn">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_suo.png" mode="aspectFill" @click="payShow = true"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-box" v-show="showBotBtn">
			<button class="btn" @click="payShow = true">付费解锁所有项</button>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="ziwei"
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
.ziwei-result {
	min-height: 100%;
	background-color: #5e4537;
	.img {
		width: 100%;
	}
	.order-info {
		height: 88rpx;
		background-color: #fff;
		display: flex;
		.left-box {
			flex: 1;
			height: 88rpx;
			background-color: #ffd776;
			display: flex;
			align-items: center;
			justify-content: center;
			.price {
				color: #ec2520;
				font-size: 32rpx;
				.value {
					font-size: 48rpx;
					font-weight: bold;
				}
			}
			.original {
				margin-left: 12rpx;
				color: #333;
				font-size: 32rpx;
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
					color: #512c2c;
					font-size: 30rpx;
					font-weight: bold;
					line-height: 40rpx;
					text-align: center;
					background-color: #ffd776;
				}
			}
		}
	}
	.order-pay {
		padding: 20rpx;
		background-color: #ede3d4;
		.order-pay__number {
			color: #333;
			font-size: 32rpx;
			line-height: 48rpx;
			.value {
				color: #cf4e43;
				font-weight: bolder;
			}
		}
		.order-pay__tip {
			margin-top: 20rpx;
			color: #999;
			font-size: 24rpx;
			text-align: center;
		}
		.public_pay_box {
			margin-top: 20rpx;
			padding: 0 30rpx 16rpx;
			.btn {
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
		}
	}
	.m-box {
		margin: 20rpx;
		padding-bottom: 30rpx;
		border-radius: 20rpx;
		background-color: #f7f3ec;
		overflow: hidden;
		.m-box__title {
			color: #473227;
			font-size: 50rpx;
			font-weight: bold;
			text-align: center;
			line-height: 116rpx;
			background: linear-gradient(to bottom,rgba(244,224,196,1) 0,rgba(206,180,142,1) 100%);
		}
		.lock-box {
			margin-top: 30rpx;
			padding: 30rpx 72rpx 10rpx;
			background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/ziwei/images/1_bg_mask.png') repeat-y top center;
			background-size: auto 160rpx;
			.lock-box__list {
				margin-bottom: 20rpx;
				border-radius: 8rpx;
				padding: 30rpx 20rpx 20rpx;
				background-color: #fff;
				.lock-box__list-title {
					margin: 0 auto 18rpx;
					width: 286rpx;
					height: 66rpx;
					color: #fff;
					font-size: 32rpx;
					font-weight: bold;
					text-align: center;
					line-height: 66rpx;
					position: relative;
					.bg {
						width: 100%;
						height: 100%;
					}
					.title {
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						z-index: 10;
					}
				}
				.lock-box__list-words {
					position: relative;
					padding-left: 40rpx;
					color: #666;
					font-size: 32rpx;
					line-height: 52rpx;
					&::before {
						content: '';
						position: absolute;
						top: 18rpx;
						left: 10rpx;
						width: 16rpx;
						height: 16rpx;
						background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAADPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkPPTkO7o6b3AAAAGHRSTlMA+AgPx4dnSDjZvrickYNALNHKlWFVLhooL6ERAAAAYklEQVQY013N2w6AIAwD0A4UUFHwvv//UllCYPG8tVkzAE8cljGhCcRicqYWO1eTh8jcRTlyrMyl2Vg7gZU1slJo+TchA8faCCSdBwNYUl8tikXfi1DjEVBdJOsbnfX+beEDbLcPMk3ecwkAAAAASUVORK5CYII=') no-repeat;
						background-size: 100% 100%;
					}
				}
				.lock-box__list-btn {
					margin: 20rpx auto 10rpx;
					width: 244rpx;
					height: 62rpx;
					.image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	.bottom-box {
		padding: 0 20rpx;
		height: 160rpx;
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
			height: 120rpx;
			border-radius: 120rpx;
			color: #fff;
			font-size: 48rpx;
			font-weight: bold;
			background: linear-gradient(to bottom,rgba(229,106,87,1) 0,rgba(191,58,53,1) 100%);
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
