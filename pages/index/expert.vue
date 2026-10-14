<template>
	<view class="expert-page">
		<view class="top-box">
			<image class="bg" src="https://csweb.tengsytech.com/image/dashi/detail-banner.png" mode="widthFix"></image>
			<view class="content">
				<view class="left">
					<view class="name">{{article_info.name}}</view>
					<view class="text">
						<text selectable decode>{{ article_info.desc }}</text>
					</view>
				</view>
				<view class="avatar-box">
					<image class="avatar" :src="article_info.cover" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<view class="container">
			<image class="border" src="https://csweb.tengsytech.com/image/dashi/border-top.png" mode="widthFix"></image>
			<view class="content">
				<u-parse :content="article_info.content"></u-parse>
				<scroll-view scroll-x class="scroll">
					<view class="list-box">
						<image
							v-for="(item, index) in article_info.images" :key="index"
							class="image"
							:src="item"
							mode="widthFix"
							@click="previewImage(article_info.images, index)"
						></image>
					</view>
				</scroll-view>
			</view>
			<image class="border" src="https://csweb.tengsytech.com/image/dashi/border-bottom.png" mode="widthFix"></image>
		</view>
		<view class="bottom-box">
			<view class="order-info">
				<view class="left-box">价格：￥{{ article_info.price }}</view>
				<view class="right-box">VIP价：￥{{ vipProce }}</view>
			</view>
			<button class="btn" @click="payShow = true">支付</button>
		</view>
		
		<pay-popup :show="payShow" price="18.8" @close="payShow = false" @confirm="payConfirm"></pay-popup>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'

	export default {
		data () {
			return {
				cate_type: '',
				link_id: '',
				
				article_info: {
					price: 0,
					vip_discount: 0,
					images: [],
				},
				
				timeData: {},
				
				payShow: false,
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		onHide () {
			this.payShow = false
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.article_info = res.data
					}
				})
			},
			onChange (e) {
				this.timeData = e
			},
			previewImage (urls, current) {
				uni.previewImage({
					urls,
					current,
				})
			},
			payConfirm () {
				uni.showLoading({ mask: true })
				confirmOrder({
					link_id: this.link_id,
					cate_type: this.cate_type,
					cs_data: '',
					cid: this.article_info.cid,
					order_type: '1'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						console.log(res)
					}
				})
			},
		},
		computed: {
			labelList () {
				if (this.article_info.label) {
					return this.article_info.label.split(',')
				} else {
					return []
				}
			},
			vipProce () {
				if (this.article_info.vip_discount == 0) {
					return this.article_info.price
				} else {
					return this.article_info.price * this.article_info.vip_discount
				}
			},
		}
	}
</script>

<style lang="scss">
.expert-page {
	box-sizing: border-box;
	padding-bottom: 140rpx;
	min-height: 100%;
	background-color: #fff6e4;
	.top-box {
		position: relative;
		.bg {
			width: 100%;
		}
		.content {
			position: absolute;
			top: 96rpx;
			left: 52rpx;
			right: 52rpx;
			z-index: 10;
			display: flex;
			justify-content: space-between;
			.left {
				width: 330rpx;
				.name {
					color: #000;
					font-size: 54rpx;
				}
				.text {
					margin-top: 12rpx;
					font-size: 24rpx;
					// text-shadow: 1px 0 #fff,
					// 			-1px 0 #fff,
					// 			0 1px #fff,
					// 			0 -1px #fff,
					// 			1px 1px #fff,
					// 			-1px -1px #fff,
					// 			1px -1px #fff,
					// 			-1px 1px #fff;
					display: -webkit-box !important;
					overflow: hidden;
					text-overflow: ellipsis;
					word-break: break-all;
					-webkit-line-clamp: 11;
					-webkit-box-orient: vertical !important;
				}
			}
			.avatar-box {
				margin-top: 30rpx;
				width: 276rpx;
				height: 276rpx;
				border-radius: 50%;
				border: 6rpx solid #333;
				.avatar {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
		}
	}
	.container {
		padding: 60rpx 60rpx;
		.border {
			width: 100%;
		}
		.content {
			padding: 12rpx 30rpx;
			.scroll {
				margin-top: 12rpx;
				width: 100%;
				.list-box {
					white-space: nowrap;
					.image {
						width: 180rpx;
						border-radius: 12rpx;
						& + .image {
							margin-left: 20rpx;
						}
					}
				}
			}
		}
	}
	.bottom-box {
		height: 140rpx;
		background: linear-gradient(180deg, #b1a284, #ffebc6);
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		justify-content: center;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		.order-info {
			width: 640rpx;
			font-size: 36rpx;
			font-weight: bold;
			display: flex;
			justify-content: space-between;
		}
		.btn {
			margin-top: 6rpx;
			width: 540rpx;
			height: 64rpx;
			color: #000;
			font-size: 48rpx;
			line-height: 64rpx;
			letter-spacing: 2rpx;
			background-color: #fff6e1;
			box-shadow: 5rpx 5rpx 5rpx rgba(0, 0, 0, 0.3);
		}
	}
	
	
	// .order-info {
	// 	height: 88rpx;
	// 	background-color: #fff6e1;
	// 	display: flex;
	// 	.left-box {
	// 		flex: 1;
	// 		height: 88rpx;
	// 		background-color: #ffde91;
	// 		display: flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		.original {
	// 			color: #333;
	// 			font-size: 32rpx;
	// 			.value {
	// 				font-size: 38rpx;
	// 				font-weight: bold;
	// 			}
	// 		}
	// 	}
	// 	.right-box {
	// 		flex: 1;
	// 		display: flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		.price {
	// 			color: #ec2520;
	// 			font-size: 32rpx;
	// 			.value {
	// 				font-size: 38rpx;
	// 				font-weight: bold;
	// 			}
	// 		}
	// 	}
	// }
	// .order-pay {
	// 	padding: 28rpx 36rpx;
	// 	background-color: #ede6db;
	// 	.text {
	// 		padding: 20rpx;
	// 		border-radius: 20rpx;
	// 		background-color: #f7efe1;
	// 		color: #333;
	// 		font-size: 26rpx;
	// 	}
	// 	.public_pay_box {
	// 		margin-top: 28rpx;
	// 		.btn {
	// 			border-radius: 10rpx;
	// 			height: 80rpx;
	// 			color: #fff;
	// 			font-size: 36rpx;
	// 			font-weight: bold;
	// 			line-height: 80rpx;
	// 			background-color: #3dd174;
	// 			display: flex;
	// 			align-items: center;
	// 			justify-content: center;
	// 		}
	// 	}
	// }
	// .parse {
	// 	padding: 20rpx;
	// 	.box {
	// 		border-radius: 20rpx;
	// 		background-color: #f7f3ec;
	// 		overflow: hidden;
	// 		& + .box {
	// 			margin-top: 20rpx;
	// 		}
	// 		.title {
	// 			color: #473227;
	// 			font-size: 32rpx;
	// 			font-weight: bold;
	// 			text-align: center;
	// 			line-height: 92rpx;
	// 			background: linear-gradient(to bottom, rgba(244,224,196,1) 0, rgba(206,180,142,1) 100%);
	// 		}
	// 		.content {
	// 			padding: 24rpx;
				
	// 		}
	// 	}
	// }
}
</style>
