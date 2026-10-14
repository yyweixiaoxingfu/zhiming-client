<template>
	<view class="hehun-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/bazihehun/images/banner.png" mode="widthFix"></image>
		<view class="order-info">
			<view class="left-box">
				<view class="price">限时优惠￥19.9</view>
				<view class="original">
					<text>原价：</text>
					<text class="value">￥168</text>
				</view>
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
		<view class="order-pay">
			<view class="order-pay__number">
				<text>已为</text>
				<text class="value">3085596</text>
				<text>人进行合婚测算，</text>
				<text class="value">98%</text>
				<text>的用户反馈合婚后对自己以后的婚姻相处方式有对应的改善方法，使婚姻更幸福。</text>
			</view>
			<view class="order-pay__tip">报告生成后，只有您自己能查看，请放心领取！</view>
			<view class="public_pay_box">
				<view class="btn" @click="payShow = true">
					<text class="text">立即支付</text>
				</view>
			</view>
		</view>
		<view class="m-box">
			<view class="pay-title">支付后您将获得以下结果</view>
			<view class="lock-box">
				<view class="lock_title">你们的婚姻基础</view>
				<view class="lock-wrap">
					<view class="order-lock">
						<view class="item">分析对方性格特点</view>
						<view class="item">分析对方感情喜忌</view>
						<view class="item">分析双方性格和谐度</view>
					</view>
					<view class="lock-btn">
						<text class="ml-20" @click="payShow = true">立即解锁</text>
					</view>
				</view>
			</view>
			<view class="lock-box">
				<view class="lock_title">你们的相处情况</view>
				<view class="lock-wrap">
					<view class="order-lock">
						<view class="item">分析双方的恋爱状态</view>
						<view class="item">分析对方对你的感情</view>
						<view class="item">分析适合你们的相处模式</view>
					</view>
					<view class="lock-btn">
						<text class="ml-20" @click="payShow = true">立即解锁</text>
					</view>
				</view>
			</view>
			<view class="lock-box">
				<view class="lock_title">你们是否互旺</view>
				<view class="lock-wrap">
					<view class="order-lock">
						<view class="item">分析对方的旺夫/旺妻条件</view>
						<view class="item">分析你的旺夫/旺妻条件</view>
						<view class="item">分析你们在一起的互旺指数</view>
					</view>
					<view class="lock-btn">
						<text class="ml-20" @click="payShow = true">立即解锁</text>
					</view>
				</view>
			</view>
			<view class="lock-box">
				<view class="lock_title">你们的婚姻风险</view>
				<view class="lock-wrap">
					<view class="order-lock">
						<view class="item">分析对方是否花心易受诱惑</view>
						<view class="item">分析对方欲望是否很难知足</view>
						<view class="item">分析对方的异性缘和出轨几率</view>
					</view>
					<view class="lock-btn">
						<text class="ml-20" @click="payShow = true">立即解锁</text>
					</view>
				</view>
			</view>
			<view class="lock-box">
				<view class="lock_title">老师点评</view>
				<view class="lock-wrap">
					<view class="order-lock">
						<view class="item">你们的婚姻幸福秘籍是什么？</view>
						<view class="item">怎样促进你们的婚姻和谐？</view>
					</view>
					<view class="lock-btn">
						<text class="ml-20" @click="payShow = true">立即解锁</text>
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
			:orderNo="order_no" model="hehun"
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
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			
			if (scrollTop > 500) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.initData()
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
.hehun-result {
	min-height: 100%;
	background-color: #dc3644;
	.img {
		width: 100%;
	}
	.order-info {
		height: 88rpx;
		background-color: #ffd776;
		display: flex;
		.left-box {
			flex: 1;
			height: 88rpx;
			background-color: #ffbf25;
			display: flex;
			align-items: center;
			justify-content: center;
			.price {
				color: #ec2520;
				font-size: 30rpx;
				font-weight: bold;
			}
			.original {
				margin-left: 12rpx;
				color: #333;
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
					color: #fff;
					font-size: 30rpx;
					font-weight: bold;
					line-height: 40rpx;
					text-align: center;
					background-color: #dea416;
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
		padding-bottom: 40rpx;
		.pay-title {
			padding-top: 20rpx;
			color: #fee4c1;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
		}
		.lock-box {
			margin: 20rpx;
			border-radius: 20rpx;
			border: 1px solid #decdb7;
			background-color: #fff;
			.lock_title {
				height: 100rpx;
				color: #fff;
				font-size: 40rpx;
				font-weight: bold;
				text-align: center;
				line-height: 100rpx;
				background: linear-gradient(to bottom,#f85657,#dc3435);
			}
			.lock-wrap {
				padding: 40rpx 0;
				.order-lock {
					margin: 20rpx;
					border-radius: 20rpx;
					padding: 20rpx 20rpx 10rpx;
					background-color: #fff;
					.item {
						margin-bottom: 10rpx;
						padding-left: 80rpx;
						line-height: 66rpx;
						position: relative;
						&::before {
							content: '';
							width: 66rpx;
							height: 66rpx;
							background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAABTVBMVEUAAADnREXmODnnQkPlNzjpUVLmODnlODnmODnmNzjmOjvlNzjmOjvmOTrmOjvlNzjlNzjlODnlNzjmODnlODnmODnmOzzlNzjmOjvmPT7oTE3mPD3lNzjmQEHlNzjmOjvmOTrmOzznQULmODnlNzjmPj/nP0DrYWL////lNzjeNTbsRUblPj/gNzjpQkPiOjvuSEn4VFXxTk/wSkvpXV7//Pz1UVH+7e398/P96urrYWL96Oj74eLlWlvymJnnRUb7z8/0n5/wjY7saWrqUlPoS0z+9fX98PD71dX4xMT1srLzpaX3iYn5g4TvZWbnUFDmPD3+9/f73d33vr7zkJDvhITsbm/pVlf85OT62dn50tP8sLD5m5z4lpbxiovvfX3wcnP2a2vuYmPqWlv3WVnxUVL4ysrueHjqXV78xMTzubr7tbX1f4D5eXrfRUZ5BQaLAAAAKHRSTlMAFL4N9gXc57MzCdOnkCqdH/nw6+JGGs6KaSTXx8Ssgnx0YlA981cuzlYdDwAAA7tJREFUWMPNl1lb2kAUhiGGpSxVNve12jZfS22NJEFAdhSwFqogWvelatf/f1kEnMnEDESu+l7wMDOZ95nlzEnG9r/zYml+whUMed0LEc8w/e0LYVCCoy+fKxjxi0CpWS0n49refv4egPt5kmUXcFBRJEKqEUVg0WFZ4PAD998klo0mMGe3OgkB9R0yAkq2hvC0NcMcSmQIDNsFuF5amYWAUkoy5+sBXBbGMUoM5o6ZkUGGKUSPJD7xa/gGGF6KqNIOyvGfm7W1mz/HCt3dVbzqr5hDkxrKl2s9LsuksopQ3619g1KcbuKajiypLsDdZzlWXLppbDz03P1xePhj9+Gf9lh/WIdrmbedk0BBIjx0/NX9++tBRhqOEsCox/RoCkCarltSVdWTx8JJu5Ckq7wThXfsqWFsBjV9UB6r6g0RKjeqeixRUi2TOB13IqZJOk5VdVc3K1U9ZeLjACGDY2QGiS1Jz2dZPtUJZfkz06zcITzOKNy4jktGxQktnRAFcRQwoc8fS8gkpSeKHC3liILOpQi/bilF7LPtmvZblhvaRg+tIcu/NY195qiOF0Qxj3OmsXL5XZbX1+X2b5fv7VL797LCPJbGLEn2qDPTyK5zyTJHv4QISRF5xn7xicsF8+AO3F2DR8Qe03LFV1yxK1pHd2OXEZMYvrzn8oV98g5THYUfjWEV1V4OE1AZVnEEZ0cRhiHfXq1yuTKkYwQ6ChHbbENC16d4dlbUFRMSSxSdDAYoXMV5vL3u53xFBp1E+vrJKKKPtLoVLVLBGYXTuBYx0iPdi2RSYdj+LYhkRziK3ABFGd6OYhJpniLGqSAR3ouLCBIGxUdC5/DkadmgOOi92jxBpIwK2ieXY4psVgHs5id18yOXTUPCcD++iw35YvMDF0axncGKrYcP58MoziBwcqdVxS0Cb/UfJplD2lZ7x6VGn0pmsGDTMY+iRkfBV9BRbMUgOJi3mRfX5KT85Ct+EkMBTrvhve5EK0WC7q+54O8OiYgEwmNP3steZG4li2RLcE6bfLK6gfyWFYGSAwS76VfOIlAsWxjCPTDp4N1hvKgNHMcZ4Iz0+XqeQHOAYR/ioqfvXSqACqcvCagpW3+WsLrXx/A1QQ4nHx+JUxOUCxpQfDyzaCV5hju8fmvlauhFzXwu8QKCL6xdL2cRrZoYykWEWAMfjw+4MA4k3gAmxmyWeRUEmvpv4Y10BvA/6848PgrgOr+f2laU5G2uAEAgk7DKtD8EiuhbsQ2BIzIpOEUEXIL/zYjtv+cf7WncqveAxb0AAAAASUVORK5CYII=') no-repeat;
							background-size: 100%;
							position: absolute;
							top: 0;
							left: 0;
						}
					}
				}
				.lock-btn {
					margin: 0 auto 20rpx;
					border-radius: 76rpx;
					width: 310rpx;
					height: 76rpx;
					color: #fff;
					font-size: 32rpx;
					background: linear-gradient(to bottom,#f85657,#dc3435);
					display: flex;
					align-items: center;
					justify-content: center;
					&::before {
						content: '';
						width: 30rpx;
						height: 38rpx;
						background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAmCAMAAADkx9tQAAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAG3RSTlMA1B3fuPbQr5J1V+rIpJ2LQxkFmIN9bkooJBEqh5WIAAAA0ElEQVQ4y73S2Q6DIBRFUQqIgNapg8P5///spdIq1hv75H7ysEyMRvF3nStBla7b00Yhpppf7bGq36oEpf0weA1KbjgcPufLZ7gx1RGA/QxLY0zYAVn3fYUMcAlXgE6eVCWcA7dl3YB8y3ZZdstXoF5WDVxX2EpNB62MtXSzlm1EbzKEMsTiND5oA7aGuOS5JFY8K+ILz5czuaiqgud8EmLKOVbinWK4nrlm+D7zneGwwgHDsEEtOIZ5PMy5H5Xn49/B8GyIPc9eUK7Yx8KJo17WEUb1gDcRrQAAAABJRU5ErkJggg==') no-repeat;
						background-size: 100%;
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
			color: #f24445;
			font-size: 48rpx;
			font-weight: bold;
			background: linear-gradient(to bottom,#ffe5a8,#ffd189);
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
