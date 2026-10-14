<template>
	<view class="zidian-page" v-if="isShowContent">
		<view class="banner-box">
			<image class="banner" :src="pageContent.img1" mode="widthFix"></image>
			<image class="icon image1" src="https://csweb.tengsytech.com/image/zidian/jin.png" mode="aspectFill"></image>
			<image class="icon image2" src="https://csweb.tengsytech.com/image/zidian/mu.png" mode="aspectFill"></image>
			<image class="icon image3" src="https://csweb.tengsytech.com/image/zidian/shui.png" mode="aspectFill"></image>
			<image class="icon image4" src="https://csweb.tengsytech.com/image/zidian/huo.png" mode="aspectFill"></image>
			<image class="icon image5" src="https://csweb.tengsytech.com/image/zidian/tu.png" mode="aspectFill"></image>
		</view>
		
		<view class="container">
			<view class="search-box">
				<input class="input" type="text" v-model="search" :placeholder="pageContent.desc2" />
				<button class="btn" @click="goSearch">{{ pageContent.desc1 }}</button>
			</view>
			<view class="card-box">
				<image class="border top" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
				<view class="content-box">
					<view class="text">1.输入要查询的文字。例如：瑞</view>					<view class="text">2.输入要查询的拼音。例如：yi</view>					<view class="text">3.输入要查询的笔画。例如：5</view>					<view class="text">4.输入要查询的关键字。例如：智慧，聪明</view>
				</view>
				<image class="border bottom" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
			</view>
			<view class="tips">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
		</view>
		
		<pay-popup :show="payShow" :price="pageContent.p_price" :ciShow="false" priceTitle="定价" @close="payShow = false"></pay-popup>
	</view>
</template>

<script>
	import { getDetailsInfo, getZidianStatus, confirmOrder } from '@/api/api.js'
	
	export default {
		data() {
			return {
				isShowContent: false,
				
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {},
				
				payShow: false,
				order_no: '',
				
				search: '',
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
						
						this.isShowContent = true
					}
				})
			},
			goSearch () {
				if (this.search.trim() != '') {
					let zidianKey = uni.getStorageSync('zidianKey') || ''
					getZidianStatus({ key: zidianKey }).then(res => {
						if (res.code) {
							let is_status = res.data.is_status
							
							if (is_status == 1) {
								uni.setStorageSync('zidianKey', res.data.key)
								
								uni.navigateTo({
									url: '/pages/payment/zidian?search=' + this.search
								})
							} else {
								uni.showModal({
									title: '您暂无查询权限，请购买',
									confirmText: '购买',
									success: (res) => {
										if (res.confirm) {
											this.placeOrder()
										}
									}
								})
							}
						}
					})
				} else {
					uni.showToast({
						title: '请输入要查询的文字或拼音',
						icon: 'none'
					})
				}
			},
			placeOrder () {
				let form = {
					zidian_data: 1
				}
				
				uni.showLoading({ mask: true })
				confirmOrder({
					link_id: this.link_id,
					cate_type: this.cate_type,
					cs_data: JSON.stringify(form),
					cid: this.cid,
					order_type: '1'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						this.order_no = res.data.order_no
						
						this.payShow = true
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.zidian-page {
	min-height: 100%;
	background-color: #dc3d2f;
	.banner-box {
		position: relative;
		.banner {
			width: 100%;
		}
		.icon {
			width: 120rpx;
			height: 120rpx;
			position: absolute;
			left: 310rpx;
			top: 242rpx;
			z-index: 24;
			opacity: 0;
		}
		.image1 {
			animation: text1 1s linear forwards;
		}
		.image2 {
			animation: text2 1s linear 1s forwards;
		}
		.image3 {
			animation: text3 1s linear 2s forwards;
		}
		.image4 {
			animation: text4 1s linear 3s forwards;
		}
		.image5 {
			animation: text5 1s linear 4s forwards;
		}
		
		@keyframes text1 {
			0%, 40%, 50% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(1);
			}
			20% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(2);
			}
			100% {
				top: 132rpx;
				left: 34rpx;
				opacity: 1;
				transform: scale(1);
			}
		}
		@keyframes text2 {
			0%, 40%, 50% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(1);
			}
			20% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(2);
			}
			100% {
				top: 86rpx;
				left: 170rpx;
				opacity: 1;
				transform: scale(1);
			}
		}
		@keyframes text3 {
			0%, 40%, 50% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(1);
			}
			20% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(2);
			}
			100% {
				top: 52rpx;
				left: 310rpx;
				opacity: 1;
				transform: scale(1);
			}
		}
		@keyframes text4 {
			0%, 40%, 50% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(1);
			}
			20% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(2);
			}
			100% {
				top: 86rpx;
				left: 450rpx;
				opacity: 1;
				transform: scale(1);
			}
		}
		@keyframes text5 {
			0%, 40%, 50% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(1);
			}
			20% {
				left: 310rpx;
				top: 242rpx;
				opacity: 1;
				transform: scale(2);
			}
			100% {
				top: 132rpx;
				left: 586rpx;
				opacity: 1;
				transform: scale(1);
			}
		}
	}
	.container {
		position: relative;
		z-index: 10;
		margin-top: -52rpx;
		padding: 34rpx 18rpx;
		border-radius: 50rpx 50rpx 0 0;
		background-color: #dc3d2f;
		.search-box {
			padding: 8rpx 8rpx 8rpx 40rpx;
			border-radius: 44rpx;
			border: 4rpx solid #d28f57;
			background-color: #faecd9;
			display: flex;
			align-items: center;
			.input {
				flex: 1;
				height: 62rpx;
				color: #6e3017;
				font-size: 32rpx;
				line-height: 62rpx;
			}
			.input-placeholder {
				color: #6e3017;
			}
			.btn {
				margin: 0;
				padding: 0;
				border-radius: 60rpx;
				width: 156rpx;
				height: 62rpx;
				color: #fff;
				font-size: 32rpx;
				line-height: 62rpx;
				background: linear-gradient(90deg, #fa9602, #da0d14);
			}
		}
		.card-box {
			margin-top: 20rpx;
			.border {
				width: 100%;
				&.top {
					margin-bottom: -18rpx;
				}
				&.bottom {
					margin-top: -18rpx;
					transform: rotate(180deg);
				}
			}
			.content-box {
				padding: 20rpx 40rpx;
				background: url('https://csweb.tengsytech.com/image/zidian/card-border.png') repeat-y;
				background-size: 100% auto;
				.text {
					color: #6e3017;
					font-size: 30rpx;
					line-height: 48rpx;
				}
			}
		}
		.tips {
			margin-top: 20rpx;
			padding: 0 12rpx;
			color: #faecd9;
			font-size: 30rpx;
			line-height: 46rpx;
		}
	}
}
</style>
