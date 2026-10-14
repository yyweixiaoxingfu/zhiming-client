<template>
	<view class="sc-result">
		<view class="notice-box">
			<u-notice-bar
				:text="notice" icon=""
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="order_box_pay">
			<view class="obp_user">
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/1_img_1.png" mode="widthFix"></image>
				<view class="obp_txt">
					<button class="btn">命主：{{ pageContent.submit_data.name }}({{ pageContent.submit_data.sex == 1 ? '男' : '女' }})</button>
					<view class="time">{{ pageContent.submit_data.birthday }}</view>
				</view>
			</view>
			<view class="obp_price">
				<view class="price-box">
					<text class="del">原价：￥{{ pageContent.original_price }}</text>
					<text class="price">吉时特价：￥{{ pageContent.pay_price }}</text>
				</view>
				<view class="time-item">
					<u-count-down :time="7200000" format="HH:mm:ss" @change="onChange">
						<view class="time">
							<text>倒计时：</text>
							<text>{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
							<text>小时</text>
							<text>{{ timeData.minutes }}</text>
							<text>分</text>
							<text>{{ timeData.seconds }}</text>
							<text>秒</text>
						</view>
					</u-count-down>
				</view>
				<view class="public_pay_box">
					<view class="weixin" @click="payShow = true">
						<text class="text">立即支付</text>
					</view>
				</view>
			</view>
			<view class="order-info">
				<view class="number">订单编号：{{ pageContent.order_no }}</view>
				<view class="obp_tip">
					<text>已有</text>
					<text class="value">23302574</text>
					<text>人进行了测试知晓了自己</text>
					<text class="value">事业财运、婚姻情感</text>
					<text>的情况，并根据老师建议做出调整，产生显著效果，</text>
					<text class="value">98.6%</text>
					<text>用户觉得本测试有帮助！</text>
				</view>
			</view>
			<view class="box_lock" @click="payShow = true">
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock01.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock02.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock03.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock04.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock05.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock06.jpg" mode="widthFix"></image>
				<image class="img" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_lock07.jpg" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="bottom-box" v-show="showBotBtn">
			<button class="btn" @click="payShow = true">付费解锁所有项</button>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="bazizh"
			@close="payShow = false"
		></pay-popup>
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
				
				showBotBtn: false,
				payShow: false,
				
				order_no: '',
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
.sc-result {
	min-height: 100%;
	background-color: #263653;
	.img {
		width: 100%;
	}
	.notice-box {
		background-color: rgba(0, 0, 0, 0.7);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.order_box_pay {
		padding-top: 40rpx;
		padding-bottom: 36rpx;
		.obp_user {
			.obp_txt {
				margin-top: 40rpx;
				color: #2b2b2b;
				text-align: center;
				line-height: 48rpx;
				.btn {
					width: 80%;
					border-radius: 6rpx;
					color: #fff;
					font-size: 36rpx;
					font-weight: bold;
					line-height: 80rpx;
					background-color: #c12c2b;
				}
				.time {
					margin: 20rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}
		}
		.obp_price {
			margin: 0;
			color: #fff;
			font-size: 32rpx;
			text-align: center;
			.price-box {
				line-height: 60rpx;
				.del {
					display: inline-block;
					text-decoration: line-through;
					vertical-align: middle;
				}
				.price {
					margin-left: 40rpx;
					display: inline-block;
					color: #ff0000;
					font-size: 44rpx;
					font-weight: bold;
					vertical-align: middle;
				}
			}
			.time-item {
				margin-top: 10rpx;
				.time {
					font-size: 28rpx;
					line-height: 92rpx;
				}
			}
			.public_pay_box {
				padding: 20rpx;
				.weixin {
					margin: 0 auto;
					border-radius: 80rpx;
					width: 580rpx;
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
		.order-info {
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			.number {
				line-height: 90rpx;
			}
			.obp_tip {
				padding: 20rpx;
				line-height: 50rpx;
				.value {
					color: #d23037;
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
