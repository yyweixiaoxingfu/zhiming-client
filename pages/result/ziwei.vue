<template>
	<view class="ziwei-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/ziwei/1/images/img_banner.png" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="public-box">
				<view class="bg-top"></view>
				<view class="ziwei-disc">
					<view class="box">
						<view class="tr top">
							<view class="item" @click="lookDetail(ziweiGong(8), 'xiongdi_g')">
								<view class="red">{{ ziweiGong(8) }}</view>
								<view class="">
									<text>{{ returnData.tg[9] }}</text>
									<text class="red">{{ returnData.dz[5] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(9), 'ming_g')">
								<text class="red">★{{ ziweiGong(9) }}</text>
								<view class="">
									<text>{{ returnData.tg[0] }}</text>
									<text class="red">{{ returnData.dz[6] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(10), 'fuwu_g')">
								<text class="red">{{ ziweiGong(10) }}</text>
								<view class="">
									<text>{{ returnData.tg[1] }}</text>
									<text class="red">{{ returnData.dz[7] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(11), 'defu_g')">
								<text class="red">{{ ziweiGong(11) }}</text>
								<view class="">
									<text>{{ returnData.tg[2] }}</text>
									<text class="red">{{ returnData.dz[8] }}</text>
								</view>
							</view>
						</view>
						<view class="tr center">
							<view class="left">
								<view class="item" @click="lookDetail(ziweiGong(7), 'fuqi_g')">
									<text class="red">{{ ziweiGong(7) }}</text>
									<view class="">
										<text>{{ returnData.tg[8] }}</text>
										<text class="red">{{ returnData.dz[4] }}</text>
									</view>
								</view>
								<view class="item" @click="lookDetail(ziweiGong(6), 'zinv_g')">
									<text class="red">{{ ziweiGong(6) }}</text>
									<view class="">
										<text>{{ returnData.tg[7] }}</text>
										<text class="red">{{ returnData.dz[3] }}</text>
									</view>
								</view>
							</view>
							<view class="content">
								<view class="bazi">
									<view class="text" v-for="(item, index) in quanzao">{{ item }}</view>
								</view>
								<view class="nayin">
									<view class="text" v-for="(item, index) in nayinarr">{{ item }}</view>
								</view>
								<view class="nongli">{{ returnData.NongLi }}</view>
							</view>
							<view class="right">
								<view class="item" @click="lookDetail(ziweiGong(0), 'tianzhai_g')">
									<text class="red">{{ ziweiGong(0) }}</text>
									<view class="">
										<text>{{ returnData.tg[3] }}</text>
										<text class="red">{{ returnData.dz[9] }}</text>
									</view>
								</view>
								<view class="item" @click="lookDetail(ziweiGong(1), 'guanlu_g')">
									<text class="red">{{ ziweiGong(1) }}</text>
									<view class="">
										<text>{{ returnData.tg[4] }}</text>
										<text class="red">{{ returnData.dz[10] }}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="tr bottom">
							<view class="item" @click="lookDetail(ziweiGong(5), 'caibo_g')">
								<text class="red">{{ ziweiGong(5) }}</text>
								<view class="">
									<text>{{ returnData.tg[6] }}</text>
									<text class="red">{{ returnData.dz[2] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(4), 'jibing_g')">
								<text class="red">{{ ziweiGong(4) }}</text>
								<view class="">
									<text>{{ returnData.tg[7] }}</text>
									<text class="red">{{ returnData.dz[1] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(3), 'qianyi_g')">
								<text class="red">{{ ziweiGong(3) }}</text>
								<view class="">
									<text>{{ returnData.tg[6] }}</text>
									<text class="red">{{ returnData.dz[0] }}</text>
								</view>
							</view>
							<view class="item" @click="lookDetail(ziweiGong(2), 'xiongdi_g')">
								<text class="red">{{ ziweiGong(2) }}</text>
								<view class="">
									<text>{{ returnData.tg[5] }}</text>
									<text class="red">{{ returnData.dz[11] }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<u-popup :show="show" mode="center" round="20rpx" closeable :safeAreaInsetBottom="false" @close="show = false">
			<view class="popup-box">
				<view class="title-box">{{ popupTitle }}</view>
				<view class="content-box">
					<scroll-view scroll-y class="scroll">
						<view>{{ popupContent }}</view>
					</scroll-view>
				</view>
			</view>
		</u-popup>
		
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
					dz: [],
					tg: [],
					pan: [],
					mingzhum_data: {},
					shenzhum_data: {},
				},
				
				pans: [],
				quanzao: [],
				nayinarr: [],
				
				show: false,
				popupTitle: '',
				popupContent: '',
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
						
						let pan = res.data.return_data.pan
						if (pan.length) {
							this.pans = pan.map(item => {
								return item.split('|')
							})
						}
						
						let quanzao = res.data.return_data.quanzao
						if (quanzao) {
							this.quanzao = quanzao.split('　　')
						}
						
						let nayinarr = res.data.return_data.nayinarr
						if (nayinarr) {
							this.nayinarr = nayinarr.split('　')
						}
					}
				})
			},
			lookDetail (title, key) {
				this.popupTitle = title
				this.popupContent = this.returnData.mingzhum_data[key]
				
				this.show = true
			},
		},
		computed: {
			ziweiGong () {
				return (index) => {
					let arr = this.pans[index]
					
					if (arr) {
						let value = arr[arr.length - 2]
						return value.replaceAll('&nbsp', '')
					}
					
					return ''
				}
			}
		}
	}
</script>

<style lang="scss">
.ziwei-detail {
	min-height: 100%;
	background-color: #f3eeff;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.container {
		padding: 10rpx;
		.public-box {
			font-size: 30rpx;
			line-height: 64rpx;
			background-color: #fff;
			.bg-top {
				width: 100%;
				height: 44rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/ziwei/1/images/bg_top.jpg') repeat-x;
				background-size: 50rpx 44rpx;
			}
			.title {
				margin-top: 10rpx;
				width: 100%;
				height: 56rpx;
				color: #856ac3;
				font-size: 36rpx;
				text-align: center;
				line-height: 56rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/ziwei/1/images/bg_title_2.png') center center no-repeat;
				background-size: 650rpx 34rpx;
			}
			.ziwei-disc {
				padding: 20rpx;
				font-size: 28rpx;
				.box {
					border: 1rpx solid #ddd;
					.tr {
						border-bottom: 1rpx solid #ddd;
						display: flex;
						&:last-child {
							border-bottom: none;
						}
						.item {
							box-sizing: border-box;
							padding: 10rpx;
							flex: 1;
							border-right: 1rpx solid #ddd;
							height: 160rpx;
							&:last-child {
								border-right: none;
							}
							.red {
								color: #e6132f;
							}
						}
					}
					.center {
						.left, .right {
							flex: 1;
							.item {
								border-right: none;
								border-bottom: 1rpx solid #ddd;
								&:last-child {
									border-bottom: none;
								}
							}
						}
						.content {
							box-sizing: border-box;
							width: 50%;
							padding: 10rpx;
							border-left: 1rpx solid #ddd;
							border-right: 1rpx solid #ddd;
							.bazi {
								display: flex;
								color: #e6132f;
								.text {
									margin-right: 10rpx;
									width: 28rpx;
									line-height: 1.6;
								}
							}
							.nayin {
								margin-top: 6rpx;
								display: flex;
								.text {
									margin-right: 10rpx;
									width: 28rpx;
									line-height: 1.6;
								}
							}
							.nongli {
								margin-top: 6rpx;
							}
						}
					}
				}
			}
		}
	}
	
	.popup-box {
		width: 660rpx;
		.title-box {
			height: 88rpx;
			font-size: 32rpx;
			font-weight: bold;
			line-height: 88rpx;
			text-align: center;
			border-bottom: 1rpx solid #eee;
		}
		.content-box {
			padding: 28rpx;
			.scroll {
				max-height: 70vh;
			}
		}
	}
}
</style>