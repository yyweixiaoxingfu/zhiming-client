<template>
	<view class="xmpd-result">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/xmpd/images/order_banner.jpg" mode="widthFix"></image>
		<view class="order-price">
			<view class="left">
				<text>限时优惠￥</text>
				<text class="value">{{ pageContent.pay_price }}</text>
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
		<view class="order-info">
			<view class="order-info__desc">
				<text>已为</text>
				<text class="value">1755796</text>
				<text>人提供姓名配对鉴定，</text>
				<text class="value">98.9%</text>
				<text>以上用户对分析结果非常满意！扫平感情障碍，你们的感情才能美满幸福！</text>
			</view>
			<view class="public_pay_tip">报告生成后，只有您自己能查看，请放心领取！</view>
			<view class="public_pay_box">
				<view class="btn" @click="payShow = true">
					<text class="text">立即支付</text>
				</view>
			</view>
		</view>
		<view class="order-preresult__hd">支付后可将获得以下内容</view>
		<view class="order-preresult">
			<view class="title">全面解析</view>
			<view class="box">
				<view class="content">
					<view class="item">你们的配对指数？</view>
					<view class="item">你们的性格相合吗？</view>
					<view class="item">你们的未来会怎么样？</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">TA的爱情特征</view>
			<view class="box">
				<view class="content">
					<view class="item">TA会主动表达内心情感吗</view>
					<view class="item">TA期望在爱情中获得什么</view>
					<view class="item">TA在喜欢的人面前什么表现</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">TA的心动类型</view>
			<view class="box">
				<view class="content">
					<view class="item">TA容易被什么样的异性吸引</view>
					<view class="item">TA的梦中情人是什么样子的</view>
					<view class="item">你是能令TA心动的那个人吗</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">与TA相处的技巧</view>
			<view class="box">
				<view class="content">
					<view class="item">做什么事会令TA生气</view>
					<view class="item">怎样做能令TA更爱你</view>
					<view class="item">如何让TA感觉到幸福</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">你们的配对点评</view>
			<view class="box">
				<view class="content">
					<view class="item">你们在一起会有结果吗</view>
					<view class="item">你们的缘分分数是高是低</view>
					<view class="item">你们存在什么样的感情隐患</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">你们的性格分析</view>
			<view class="box">
				<view class="content">
					<view class="item">你们的内在性格差异</view>
					<view class="item">你们在对方眼中的样子</view>
					<view class="item">你们要注意彼此的哪些缺点</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">你们的最佳相处方式</view>
			<view class="box">
				<view class="content">
					<view class="item">你们在一起最大的阻碍是什么</view>
					<view class="item">容易因为什么事争吵不休</view>
					<view class="item">处理矛盾冲突的最好方式</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="order-preresult">
			<view class="title">给你们的爱情建议</view>
			<view class="box">
				<view class="content">
					<view class="item">指出未来你们会遇到的难题</view>
					<view class="item">针对你们的配对情况给予建议</view>
					<view class="item">推荐增进你们感情的有效方法</view>
					<view class="lock" @click="payShow = true"></view>
				</view>
			</view>
		</view>
		<view class="bottom-box" v-show="showBotBtn">
			<view class="btn" @click="payShow = true">付费解锁所有项</view>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="xmpd"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getOrderFind, initiatePay } from '@/api/api.js'

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
.xmpd-result {
	min-height: 100%;
	background-color: #f9dbdd;
	.img {
		width: 100%;
	}
	.order-price {
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
		.left {
			width: 42%;
			color: #df4131;
			font-size: 30rpx;
			font-weight: bold;
			text-align: center;
			background-color: #ffd776;
			.value {
				font-size: 48rpx;
			}
		}
		.right {
			flex: 1;
			color: #333;
			font-size: 24rpx;
			text-align: center;
			background-color: #fff2d2;
			.time {
				.item {
					margin: 0 10rpx;
					border-radius: 6rpx;
					padding: 0 10rpx;
					font-size: 32rpx;
					font-weight: bold;
					background-color: #ffd776;
				}
			}
		}
	}
	.order-info {
		padding: 20rpx 20rpx 40rpx;
		background-color: #fff;
		.order-info__desc {
			padding: 20rpx;
			font-size: 30rpx;
			.value {
				color: #d83640;
			}
		}
		.public_pay_tip {
			color: #666;
			font-size: 26rpx;
			text-align: center;
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
	.order-preresult__hd {
		margin: 20rpx 0 0;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		font-size: 44rpx;
		border-bottom: 1px solid #e0c6b1;
		background-color: #fff;
	}
	.order-preresult {
		margin-bottom: 20rpx;
		padding: 20rpx 40rpx 40rpx;
		background-color: #fff;
		.title {
			margin: 0 auto;
			border-radius: 16rpx;
			width: 360rpx;
			height: 60rpx;
			color: #fff;
			font-size: 38rpx;
			text-align: center;
			line-height: 60rpx;
			background-color: #e54c3d;
		}
		.box {
			margin-top: 20rpx;
			padding: 30rpx 50rpx 40rpx 40rpx;
			background: url('data:image/png;base64,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') repeat-y;
			background-size: 100% 20%;
			.content {
				border-radius: 16rpx;
				padding: 20rpx 90rpx 20rpx 20rpx;
				background-color: #fff;
				position: relative;
				.item {
					color: #333;
					font-size: 32rpx;
					line-height: 2;
					&::before {
						content: '';
						display: inline-block;
						box-sizing: border-box;
						width: 0;
						height: 0;
						border-width: 10rpx 20rpx;
						border-style: solid;
						border-color: transparent transparent transparent #da3757;
					}
				}
				.lock {
					width: 90rpx;
					height: 100%;
					position: absolute;
					top: 0;
					right: 0;
					background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAArCAMAAADBoRE7AAAATlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEoqZZAAAAGXRSTlMA5r3PxSvr1UgcsquOYDPyglkUcaJ5alE6LWvTJwAAAOJJREFUOMvNk1sSgyAMRWPEiogPfLP/jVZgaEEEZjr98H5xwzGREMBV1xZSyoJ1cC9aS6ua3gGzdDWHwGZ2SlKaRVCp0mHeA0DP9bq6EKiCtjpVBm9S7B+7h0lW/ZGfcvWI9owIx4vTtx5R6qx+VeIRqlmN4xvVtkuOkCh/ICbHTx4hFsRB/Rl+RU4/IC7CHDSlFmCUaY1QZIgCXhnilc/xVAI5JolaT3IdJ4bJXNsQJTgY8SjR2fcbJTb7QKOEnV0SP8uogTHVD0Z7yp5wLyHxlznNEyxDMKgyRAVwkMQ+OeANdNFdL9V/z3QAAAAASUVORK5CYII=') no-repeat center center;
					background-size: 40rpx;
					&::before {
						content: '';
						width: 1px;
						background: linear-gradient(#fff,#ccc,#fff);
						position: absolute;
						top: 25%;
						bottom: 25%;
						left: 0;
					}
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
			height: 110rpx;
			color: #fff;
			font-size: 60rpx;
			text-align: center;
			line-height: 100rpx;
			letter-spacing: 4rpx;
			background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/xmpd/images/index_btn.png') no-repeat center center;
			background-size: auto 100%;
			animation: zoom 1.5s linear infinite;
		}
	}
}
</style>
