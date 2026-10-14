<template>
	<view class="xiaoliuren-page">
		<image class="bg" src="https://csweb.tengsytech.com/image/xiaoliuren/bg.png" mode="aspectFill"></image>
		
		<view class="container">
			<image class="banner" :src="pageContent.img1" mode="widthFix"></image>
			<view class="content">
				<view class="card-box">
					<image class="border top" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
					<view class="content-box">
						<view class="text">
							<text class="label">测试方法：</text>
							<text>{{ pageContent.desc2 }}</text>
						</view>
						<view class="input-box">
							<textarea class="input" type="text" v-model="content" placeholder="请输入所测之事" />
						</view>
						<view class="btn-box" @click="submit">
							<image class="btn-bg" :src="pageContent.button_img1" mode="widthFix"></image>
							<view class="text">{{ pageContent.desc1 }}</view>
						</view>
					</view>
					<image class="border bottom" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
				</view>
				<view class="introduction-box">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'

	export default {
		data () {
			return {
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {},
				
				content: '',
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
					}
				})
			},
			submit () {
				let form = {
					content: this.content
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
						let order_no = res.data.order_no
						
						uni.$u.route({
							url: '/pages/payment/xiaoliuren',
							params: {
								order_no: order_no,
								cate_type: this.cate_type,
								link_id: this.link_id,
							}
						})
					}
				})
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
					.text {
						color: #b67327;
						font-size: 30rpx;
						line-height: 48rpx;
						.label {
							color: #ed3200;
							font-weight: bold;
						}
					}
					.input-box {
						margin: 14rpx 26rpx 0;
						padding: 12rpx 28rpx;
						border-radius: 30rpx;
						background-color: #ebe8d3;
						.input {
							width: 100%;
							height: 192rpx;
							font-size: 30rpx;
							line-height: 46rpx;
						}
						.input-placeholder {
							color: #979178;
						}
					}
					.btn-box {
						margin: 22rpx auto 0;
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
