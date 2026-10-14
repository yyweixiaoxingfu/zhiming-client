<template>
	<view>
		<u-popup :show="show" mode="center" round="12rpx" closeable @close="close">
			<view class="pay-popup">
				<view class="public_pp_tit">解锁查看您的结果</view>
				<view class="public_pp_price">
					<text>{{ priceTitle }}：</text>
					<text class="value">￥{{ price }}</text>
				</view>
				<view class="public_pay_box">
					<scroll-view scroll-y class="scroll">
						<button class="btn ad" @click="confirm('ad')">
							<text class="custom-icon custom-icon-guanggao"></text>
							<text class="text">看广告(免费解锁本次测算)</text>
						</button>
						<button class="btn bonus" v-if="ciShow" @click="confirm('frequency')">
							<text class="custom-icon custom-icon-bonus"></text>
							<text class="text">立即测算(剩余{{ Number(credit.frequency) }}次)</text>
						</button>
						<block v-for="(item, index) in payList" :key="index">
							<block v-if="item.data.length && item.value == 1">
								<button class="btn" :class="itm.name" @click="payConfirm(itm)"  v-for="(itm, idx) in item.data" :key="idx">
									<text class="custom-icon" :class="'custom-icon-' + itm.name"></text>
									<text class="text">{{ itm.title }}</text>
								</button>
							</block>
							<block v-else-if="!$u.test.isEmpty(item.data) && item.value == 1">
								<button class="btn" :class="item.data.name" @click="payConfirm(item.data)">
									<text class="custom-icon" :class="'custom-icon-' + item.data.name"></text>
									<text class="text">{{ item.data.title }}</text>
								</button>
							</block>
							<!-- <button class="btn zhifubao" @click="confirm('alipay')" v-else-if="itm.name == 'alipay'">
								<text class="custom-icon custom-icon-zhifubao"></text>
								<text class="text">支付宝支付</text>
							</button>
							<button class="btn paypal" @click="confirm('paypal')" v-else-if="itm.name == 'paypal'">
								<text class="custom-icon custom-icon-paypal"></text>
								<text class="text">paypal支付</text>
							</button> -->
						</block>
					</scroll-view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { initiatePay, ePay, pay, getCredit, getPayList } from '@/api/api.js'

	export default {
		name: 'pay-popup',
		props: {
			// 是否展示弹窗
			show: {
				type: Boolean,
				default: false
			},
			/* 价格 */
			price: {
				type: [String, Number],
				default: '0.00'
			},
			number: {
				type: Number,
				default: 0
			},
			/* 价格标题 */
			priceTitle: {
				type: String,
				default: '统一鉴定价'
			},
			/* 是否展示按钮 */
			ciShow: {
				type: Boolean,
				default: true
			},
			
			/* 模型 */
			model: {
				type: String,
				default: ''
			},
			/* 订单号 */
			orderNo: {
				type: String,
				default: ''
			},
		},
		data () {
			return {
				credit: {},
				
				payList: [],
			}
		},
		watch: {
			show (newVal) {
				if (newVal) {
					this.initData()
				}
			},
		},
		mounted () {
			
		},
		methods: {
			initData () {
				getPayList().then(res => {
					if (res.code == 1) {
						this.payList = res.data
					}
				})
				
				getCredit().then(res => {
					if (res.code == 1) {
						this.credit = res.data
					}
				})
			},
			
			close () {
				this.$emit('close')
			},
			
			confirm (key) {
				if (key == 'frequency') {
					this.frequencyPay()
				}
			},
			payConfirm (item) {
				let key = item.name
				
				if (key == 'wxpay' || key == 'alipay' || key == 'paypal') {
					this.moneyPay(key)
				} else if (key == 'wxnative') {
					this.wxMoneyPay()
				} else if (key == 'aliweb') {
					this.aliMoneyPay()
				}
			},
			
			frequencyPay () {
				uni.showLoading({ mask: true })
				initiatePay({
					target: this.orderNo,
					target_type: 'CS',
					pay_type: 'frequency'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						this.payShow = false
						
						setTimeout(() => {
							uni.$u.route({
								type: 'redirectTo',
								url: '/pages/result/' + this.model,
								params: {
									order_no: this.orderNo,
								}
							})
						}, 200)
					}
				})
			},
			
			moneyPay (key) {
				uni.showLoading({ mask: true })
				ePay({
					target: this.orderNo,
					target_type: 'cs_order',
					pay_type: key,
					money: this.price,
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						this.payCall(res.data)
					}
				})
			},
			// 调起支付
			payCall (payParams) {
				const form = payParams
			
				const div = document.createElement('div')
				div.innerHTML = form
				document.body.appendChild(div)
				document.forms[0].submit()
				div.remove()
			},
			
			wxMoneyPay () {
				uni.showLoading({ mask: true })
				pay({
					target: this.orderNo,
					target_type: 'cs_order',
					pay_type: 'wxnative',
					money: this.price,
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						// this.payCall(res.data)
						uni.$u.route({
							url: '/pages/payment/wxPay',
							params: {
								code_url: res.data.payParams.code_url,
								money: res.data.bills.money
							}
						})
					}
				})
			},
			aliMoneyPay () {
				uni.showLoading({ mask: true })
				pay({
					target: this.orderNo,
					target_type: 'cs_order',
					pay_type: 'aliweb',
					money: 0.01,
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						this.payCall(res.data.payParams)
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.pay-popup {
	box-sizing: border-box;
	padding: 40rpx 20rpx 20rpx;
	width: 606rpx;
	color: #3a3a3a;
	font-size: 32rpx;
	text-align: center;
	line-height: 1.4;
	.public_pp_tit {
		padding: 20rpx 0 12rpx;
		font-size: 32rpx;
		font-weight: bold;
	}
	.public_pp_price {
		padding: 10rpx 0 20rpx;
		.value {
			color: #ce0000;
			font-size: 36rpx;
			font-weight: bolder;
		}
	}
	.public_pay_box {
		padding: 0 20rpx 16rpx;
		.scroll {
			max-height: 60vh;
		}
		.btn {
			margin: 0;
			padding: 0;
			height: 92rpx;
			border-radius: 60rpx;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			& + .btn {
				margin-top: 20rpx;
			}
			&.bonus {
				background-color: $primary-color;
			}
			&.wxpay, &.wechat, &.wxnative {
				background-color: $weinxinColor;
			}
			&.alipay, &.aliweb {
				background-color: $zhifubaoColor;
			}
			&.ad {
				background-color: $warning-color;
			}
			&.paypal {
				background-color: #113984;
			}
			.custom-icon {
				font-size: 46rpx;
			}
			.text {
				margin-left: 20rpx;
				font-size: 32rpx;
			}
		}
	}
}
</style>