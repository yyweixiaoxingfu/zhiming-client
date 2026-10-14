<template>
	<view class="yinyuan-result">
		<view class="box-result-wrap">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/yunyincs/images/1_img_banner.png" mode="widthFix"></image>
			<view class="box-info">
				<view class="box-info__top">
					<view class="left">
						<text>限时优惠￥</text>
						<text class="value">19.9</text>
					</view>
					<view class="right">
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
				<view class="box-info__txt">
					<text>已有</text>
					<text class="value">2104135</text>
					<text>位用户成功领取了姻缘分析报告，姻缘分析帮助TA们正确的</text>
					<text class="value">解读了自己一生的感情状况</text>
					<text>，并在寻爱路上走向了正轨。</text>
				</view>
			</view>
			<view class="box-choise">
				<view class="box-choise__title">支付</view>
				<view class="public_pay_box">
					<view class="btn" @click="payShow = true">
						<text class="text">立即支付</text>
					</view>
				</view>
			</view>
			<view class="lock-big-title">
				<text class="title">测算后您将获得以下结果</text>
			</view>
			<view class="lock-box">
				<view class="lock-title">
					<text class="title">结婚前您的感情状况</text>
				</view>
				<view class="lock-con">
					<view class="lock-con__box">
						<view class="lock-con__box-words" @click="payShow = true">桃花运数</view>
						<view class="lock-con__box-txt">解读魅力，告知你至今还是单身的原因</view>
						<view class="lock-con__box-words" @click="payShow = true">脱单结婚</view>
						<view class="lock-con__box-txt">分析你在哪一年脱单和结婚</view>
						<view class="lock-con__box-words" @click="payShow = true">配偶情况</view>
						<view class="lock-con__box-txt">另一半的性格外貌及相处情况</view>
						<view class="lock-con__box-words" @click="payShow = true">婚姻稳定</view>
						<view class="lock-con__box-txt">婚姻前景如何，是甜蜜幸福还是争吵不休</view>
					</view>
				</view>
			</view>
			<view class="lock-box">
				<view class="lock-title">
					<text class="title">结婚后您的感情状况</text>
				</view>
				<view class="lock-con">
					<view class="lock-con__box">
						<view class="lock-con__box-words" @click="payShow = true">幸福指数</view>
						<view class="lock-con__box-txt">婚后会不会幸福，有什么矛盾存在</view>
						<view class="lock-con__box-words" @click="payShow = true">互帮助旺</view>
						<view class="lock-con__box-txt">两个人的结合对双方有什么帮助</view>
						<view class="lock-con__box-words" @click="payShow = true">未来子女</view>
						<view class="lock-con__box-txt">子女运程的好坏分析</view>
						<view class="lock-con__box-words" @click="payShow = true">综合评价</view>
						<view class="lock-con__box-txt">一生感情状况分析及相对应的建议</view>
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
			:orderNo="order_no" model="yinyuancs"
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
				order_no: '',
				
				timeData: {},
				
				showBotBtn: false,
				payShow: false,
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
.yinyuan-result {
	min-height: 100%;
	background-color: #be1e05;
	.img {
		width: 100%;
	}
	.box-result-wrap {
		background-color: #ffeced;
	}
	.box-info {
		margin: -212rpx 20rpx 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		overflow: hidden;
		position: relative;
		z-index: 1;
		.box-info__top {
			display: flex;
			height: 80rpx;
			line-height: 80rpx;
			.left {
				flex: 1;
				color: #df4131;
				font-size: 30rpx;
				font-weight: bold;
				text-align: center;
				background-color: #ffd65f;
				.value {
					font-size: 48rpx;
				}
			}
			.right {
				flex: 1;
				color: #fde7a6;
				font-size: 32rpx;
				text-align: center;
				background-color: #df4131;
				.time {
					.item {
						font-weight: bold;
					}
				}
			}
		}
		.box-info__txt {
			padding: 20rpx;
			color: #333;
			font-size: 32rpx;
			line-height: 1.7;
			.value {
				color: #fd3a40;
				font-weight: bold;
			}
		}
	}
	.box-choise {
		margin: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		overflow: hidden;
		position: relative;
		z-index: 1;
		.box-choise__title {
			height: 80rpx;
			border-bottom: 1px solid #ffedee;
			color: #333;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
			line-height: 80rpx;
		}
		.public_pay_box {
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
		}
	}
	.lock-big-title {
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		position: relative;
		&::after {
			content: '';
			height: 1px;
			background-color: #fabfc2;
			position: absolute;
			top: 50%;
			left: 20rpx;
			right: 20rpx;
		}
		.title {
			display: inline-block;
			padding: 0 20rpx;
			font-size: 36rpx;
			font-weight: bold;
			background-color: #ffedee;
			position: relative;
			z-index: 1;
		}
	}
	.lock-box {
		overflow: hidden;
		.lock-title {
			margin: 10rpx 0 20rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/yunyincs/images/m_title.png') no-repeat center center;
			background-size: auto 100rpx;
			color: #000;
			.title {
				font-size: 40rpx;
				font-weight: bold;
				background: -webkit-gradient(linear,left 0,right 0,from(#f9f6c2),to(#f5ce82));
				background-clip: text;
				color: transparent;
			}
		}
		.lock-con {
			margin: 0 20rpx 20rpx;
			padding: 20rpx;
			background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/yunyincs/images/1_bg_mask.png') repeat-y top center;
			background-size: 100% auto;
			.lock-con__box {
				border-radius: 20rpx;
				padding: 40rpx 30rpx 40rpx 50rpx;
				background-color: #fff;
				overflow: hidden;
				.lock-con__box-words {
					display: inline-block;
					margin-bottom: 20rpx;
					border-radius: 40rpx;
					padding: 10rpx 20rpx 10rpx 64rpx;
					font-size: 32rpx;
					background-color: #ffedee;
					position: relative;
					&::before {
						content: '';
						width: 66rpx;
						height: 66rpx;
						background: url('data:image/png;base64,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') no-repeat;
						background-size: 100%;
						position: absolute;
						top: 0;
						left: -10rpx;
					}
				}
				.lock-con__box-txt {
					font-size: 28rpx;
					margin-bottom: 20rpx;
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
			color: #f24445;
			font-size: 48rpx;
			font-weight: bold;
			background: linear-gradient(to bottom,#ffe5a8,#ffd189);
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
