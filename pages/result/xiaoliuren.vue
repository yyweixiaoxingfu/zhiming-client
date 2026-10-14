<template>
	<view class="xiaoliuren-page">
		<image class="bg" src="https://csweb.tengsytech.com/image/xiaoliuren/bg.png" mode="aspectFill"></image>
		
		<view class="container">
			<view class="content">
				<view class="card-box">
					<image class="border top" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
					<view class="content-box">
						<view class="title-box">
							<text class="label">测算结果：</text>
							<text class="value">{{ returnData.inference_data.f_value }}</text>
						</view>
						<view class="title-box">
							<text class="label">六壬卦象：</text>
							<text class="value">{{ returnData.inference_data.f_name }}</text>
						</view>
						<view class="title-box">
							<text class="label">起卦时辰：</text>
							<text class="value">{{ returnData.th_dz_data }}</text>
						</view>
					</view>
					<image class="border bottom" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
				</view>
				<view class="card-box">
					<image class="border top" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
					<view class="content-box">
						<view class="title-box">
							<text class="label">卦情谶语：</text>
						</view>
						<view class="content">{{ returnData.inference_data.f_exp_title }}</view>
						<view class="title-box">
							<text class="label">卦象简述：</text>
						</view>
						<view class="content">{{ returnData.inference_data.f_exp_desc }}</view>
						<view class="title-box">
							<text class="label">综合说明：</text>
						</view>
						<view class="content">{{ returnData.inference_data.f_exp_note }}</view>
					</view>
					<image class="border bottom" src="https://csweb.tengsytech.com/image/xiaoliuren/card-top.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<back-home></back-home>
		
		<!-- #ifndef MP-WEIXIN -->
		<view class="language-box">
			<switch-language></switch-language>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				order_no: '',
				
				pageContent: {
					submit_data: {},
				},
				returnData: {
					inference_data: {},
				},
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.loadData()
		},
		methods: {
			loadData () {
				uni.showLoading({ mask: true })
				getOrderFind({ order_no: this.order_no }).then(res => {
					uni.hideLoading({ noConflict: true })

					if (res.code == 1) {
						this.pageContent = res.data
						this.returnData = res.data.return_data
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
		padding: 28rpx;
		position: relative;
		z-index: 10;
		.card-box {
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			position: relative;
			&:last-child {
				margin-bottom: 0;
			}
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
				.title-box {
					margin-top: 18rpx;
					color: #b67327;
					font-size: 30rpx;
					display: flex;
					&:first-child {
						margin-top: 0;
					}
					.value {
						flex: 1;
						color: #ed3200;
						font-weight: bold;
					}
				}
				.content {
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>
