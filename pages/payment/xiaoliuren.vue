<template>
	<view class="xiaoliuren-page">
		<image class="bg" src="https://csweb.tengsytech.com/image/xiaoliuren/bg.png" mode="aspectFill"></image>
		
		<view class="container">
			<image class="banner" :src="pageContent.img1" mode="widthFix"></image>
			<view class="content">
				<view class="card-box">
					<image class="border top" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
					<view class="content-box">
						<view class="price-wrap">
							<view class="project-nam">咨询项目: 小六壬占卜</view>
							<view class="price-content">
								<view class="left-box">
									<view class="false-price">
										<text>原价：</text>
										<text class="through">￥{{ payContent.original_price }}</text>
									</view>
									<view class="true-price">
										<text class="discount">限时优惠</text>
										<text class="price">￥{{ pageData.p_price }}</text>
									</view>
								</view>
								<view class="right-box">
									<view class="time-title">距优惠结束</view>
									<view class="time-discount">
										<u-count-down :time="1200000" format="HH:mm:ss"></u-count-down>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="user-count">
							<view>
								<text>已有</text>
								<text class="value">1384938</text>
								<text>人测算</text>
							</view>
							<view>
								<text>好评率: </text>
								<text class="value">99.8%</text>
							</view>
						</view> -->
						<view class="btn-box" @click="openPay">
							<image class="btn-bg" :src="pageContent.button_img1" mode="widthFix"></image>
							<view class="text">立即支付</view>
						</view>
					</view>
					<image class="border bottom" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
				</view>
				<view class="introduction-box">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
			</view>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="payContent.pay_price"
			:orderNo="order_no" model="xiaoliuren"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getDetailsInfo, getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				cate_type: '',
				link_id: '',
				cid: '',
				order_no: '',
				
				pageContent: {},
				pageData: {},
				
				payContent: {},
				payShow: false,
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.pageData = res.data
						
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
					}
				})
				
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.payContent = res.data
					}
				})
			},
			openPay () {
				this.payShow = true
			},
		}
	}
</script>

<style lang="scss">
.xiaoliuren-page {
	position: relative;
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}
	.container {
		position: relative;
		z-index: 10;
		.banner {
			width: 100%;
		}
		.content {
			margin-top: -232rpx;
			padding: 0 24rpx;
			position: relative;
			z-index: 20;
			.card-box {
				display: flex;
				flex-direction: column;
				position: relative;
				.border {
					width: 100%;
					&.top {
						margin-bottom: -4rpx;
					}
					&.bottom {
						margin-top: -4rpx;
						transform: rotate(180deg);
					}
				}
				.content-box {
					padding: 20rpx 40rpx;
					background: url('https://csweb.tengsytech.com/image/xiaoliuren/card-border.png') repeat-y;
					background-size: 100% auto;
					.price-wrap {
						.project-nam {
							padding: 12rpx 0;
							color: #fff;
							font-size: 36rpx;
							text-align: center;
							background-color: #dd8653;
							white-space: nowrap;
						}
						.price-content {
							padding: 24rpx 48rpx;
							background-color: #ffffff;
							border: 1px solid #3b1e0d;
							border-top: none;
							display: flex;
							justify-content: space-between;
							.left-box, .right-box {
								height: 132rpx;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
							}
							.left-box {
								.false-price {
									color: #a4a39f;
									font-size: 32rpx;
									.through {
										text-decoration: line-through;
									}
								}
								.true-price {
									.discount {
										margin-right: 6rpx;
										padding: 3rpx 12rpx;
										border-radius: 8rpx;
										color: #fff;
										background-color: #f26c6d;
									}
									.price {
										font-size: 40rpx;
										font-weight: bold;
									}
								}
							}
							.right-box {
								text-align: center;
								.time-title {
								}
								.time-discount {
									text-align: center;
									::v-deep {
										.u-count-down__text {
											color: #f26c66;
											font-size: 32rpx;
										}
									}
								}
							}
						}
					}
					.user-count {
						margin-top: 6rpx;
						padding: 6rpx;
						font-size: 30rpx;
						display: flex;
						justify-content: space-between;
						.value {
							color: #f26c66;
						}
					}
					.btn-box {
						margin: 32rpx auto 0;
						width: 490rpx;
						position: relative;
						.btn-bg {
							width: 100%;
						}
						.text {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 10;
							display: flex;
							align-items: center;
							justify-content: center;
							color: #471400;
							font-size: 30rpx;
							font-weight: bold;
						}
					}
				}
			}
			.introduction-box {
				margin-top: 30rpx;
				padding: 0 12rpx;
				color: #471400;
				.title {
					font-size: 32rpx;
					font-weight: bold;
				}
				.box {
					margin-top: 12rpx;
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>
