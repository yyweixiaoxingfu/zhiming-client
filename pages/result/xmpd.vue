<template>
	<view class="xmpd-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/banner_result.jpg" mode="widthFix"></image>
			<view class="number">订单号: {{ pageContent.order_no }}</view>
		</view>
		<view class="container">
			<view class="order-info">
				<view class="oi-name">
					<view class="left">
						<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/male_icon.png" mode="aspectFill"></image>
						<view class="name">{{ returnData.nan_data.nan_name }}</view>
						<view class="label">男主角</view>
					</view>
					<view class="con">
						<view class="vs">VS</view>
						<view class="label">配对</view>
					</view>
					<view class="right">
						<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/female_icon.png" mode="aspectFill"></image>
						<view class="name">{{ returnData.nv_data.nv_name }}</view>
						<view class="label">女主角</view>
					</view>
				</view>
				<view class="oi-num">
					<view class="label">匹配默契度</view>
					<view class="start">
						<u-rate :count="5" allowHalf :value="returnData.pd_pingfen" size="60rpx"></u-rate>
					</view>
				</view>
			</view>
			<view class="order-grid">
				<view class="basetit">男女姓名婚姻五格</view>
				<view class="order-content">
					<view class="og-tit">男主角：{{ returnData.nan_data.nan_name }}</view>
					<view class="og-con">
						<view class="og-name">
							<view class="i l"></view>
							<view class="i c"></view>
							<view class="i r"></view>
							<view class="item">
								<block v-if="returnData.nan_xing2_data">{{ returnData.nan_xing1_data.nan_xing1 }}</block>
								<view v-else class="text" >1</view>
							</view>
							<view class="item">{{ returnData.nan_xing2_data ? returnData.nan_xing2_data.nan_xing2 : returnData.nan_xing1_data.nan_xing1 }}</view>
							<view class="item">{{ returnData.nan_ming1_data.nan_ming1 }}</view>
							<view class="item">
								<block v-if="returnData.nan_ming2_data">{{ returnData.nan_ming2_data.nan_ming2 }}</block>
								<view v-else class="text" >1</view>
							</view>
						</view>
						<view class="og-txt">
							<text>天格:{{ returnData.nan_tdrh_ge_data.nan_tiange }}</text>
							<text>人格:{{ returnData.nan_tdrh_ge_data.nan_renge }}</text>
							<text>地格:{{ returnData.nan_tdrh_ge_data.nan_dige }}</text>
						</view>
						<view class="og-all">
							<view class="text">外格:{{ returnData.nan_tdrh_ge_data.nan_waige }}</view>
						</view>
						<view class="og-txt">
							<text>总格:{{ returnData.nan_tdrh_ge_data.nan_zongge }}</text>
						</view>
					</view>
					<view class="og-tit">女主角：{{ returnData.nv_data.nv_name }}</view>
					<view class="og-con og-con-2">
						<view class="og-name">
							<view class="i l"></view>
							<view class="i c"></view>
							<view class="i r"></view>
							<view class="item">
								<block v-if="returnData.nv_xing2_data">{{ returnData.nv_xing1_data.nv_xing1 }}</block>
								<view v-else class="text" >1</view>
							</view>
							<view class="item">{{ returnData.nv_xing2_data ? returnData.nv_xing2_data.nv_xing2 : returnData.nv_xing1_data.nv_xing1 }}</view>
							<view class="item">{{ returnData.nv_ming1_data.nv_ming1 }}</view>
							<view class="item">
								<block v-if="returnData.nv_ming2_data">{{ returnData.nv_ming2_data.nv_ming2 }}</block>
								<view v-else class="text" >1</view>
							</view>
						</view>
						<view class="og-txt">
							<text>天格:{{ returnData.nv_tdrh_ge_data.nv_tiange }}</text>
							<text>人格:{{ returnData.nv_tdrh_ge_data.nv_renge }}</text>
							<text>地格:{{ returnData.nv_tdrh_ge_data.nv_dige }}</text>
						</view>
						<view class="og-all">
							<view class="text">外格:{{ returnData.nv_tdrh_ge_data.nv_waige }}</view>
						</view>
						<view class="og-txt">
							<text>总格:{{ returnData.nv_tdrh_ge_data.nv_zongge }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bilateral-character">
				<view class="basetit">双方性格</view>
				<view class="bc-box">
					<view class="item">
						<view class="bc-img">
							<image class="image" :src="'https://base2.tengsytech.com//statics/ffsm/xmpeidui/2/images/wx_' + returnData.nan_tdrh_ge_data.nan_yuanshen.wh_ + '.jpg'" mode="widthFix"></image>
							<view class="">元神：{{ returnData.nan_tdrh_ge_data.nan_yuanshen.yuanshen }}</view>
						</view>
						<view class="bc-tit">
							<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/male_icon.png" mode="aspectFill"></image>
							<text class="text">男主角：</text>
						</view>
						<view class="bc-con">{{ returnData.nan_data.nan_xg }}</view>
					</view>
					<view class="item mt-32">
						<view class="bc-img">
							<image class="image" :src="'https://base2.tengsytech.com//statics/ffsm/xmpeidui/2/images/wx_' + returnData.nv_tdrh_ge_data.nv_yuanshen.wh_ + '.jpg'" mode="widthFix"></image>
							<view class="">元神：{{ returnData.nv_tdrh_ge_data.nv_yuanshen.yuanshen }}</view>
						</view>
						<view class="bc-tit">
							<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/female_icon.png" mode="aspectFill"></image>
							<text class="text">女主角：</text>
						</view>
						<view class="bc-con">{{ returnData.nv_data.nv_xg }}</view>
					</view>
				</view>
			</view>
			<view class="love-fate">
				<view class="basetit">双方爱情宿命</view>
				<view class="bc-box">
					<view class="item">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/male_img.png" mode="widthFix"></image>
						<view class="label">男主角：</view>
						<view class="text">{{ returnData.nan_tdrh_ge_data.nan_yuanshen.msg }}「一旦认定对方，就会全心全意付出」这是你最迷人的地方。虽然不是最浪漫的情人，但是，绝对是最能带给伴侣安全感的好男人！</view>
					</view>
					<view class="item female mt-32">
						<image class="image" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/female_img.png" mode="widthFix"></image>
						<view class="label">女主角：</view>
						<view class="text">{{ returnData.nv_tdrh_ge_data.nv_yuanshen.msg }}你从不吝於向另一半表达心目中浓浓爱意。即使处在暧昧不明的暗恋阶段，你的心仪对象，也绝对逃不过你那热情放送的强力电波。面对爱情，你的态度勇敢而直接，走出失恋/苦恋阴霾的速度，往往快得吓人。</view>
					</view>
				</view>
			</view>
			<view class="gua-as">
				<view class="basetit">姓名相合卦象</view>
				<view class="gua-box">
					<view class="top mb-20">
						<view class="left">
							<view class="item">
								<view class="name">{{ returnData.nan_data.nan_name }}</view>
								<view class="gua">{{ guaCapture(returnData.gua2.gua_xiang, 0) }}</view>
							</view>
							<view class="item nv mt-32">
								<view class="name">{{ returnData.nv_data.nv_name }}</view>
								<view class="gua">{{ guaCapture(returnData.gua2.gua_xiang, 1) }}</view>
							</view>
						</view>
						<view class="right">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/gua_img.png" mode="widthFix"></image>
							<view class="label">{{ returnData.gua.title }}</view>
						</view>
					</view>
					<view class="ga-txt">姓名相合卦象：{{ returnData.gua.title }}({{ returnData.gua.title_txt }})</view>
					<view class="ga-txt">卦象等级：{{ returnData.gua.guayi }} {{ returnData.gua.lv }}</view>
					<view class="ga-num">
						<view class="">评分：</view>
						<u-rate :count="5" :value="returnData.pd_pingfen" allowHalf size="40rpx"></u-rate>
					</view>
					<view class="ga-txt">
						<view>解析：</view>
						<view>{{ returnData.gua.msg }}</view>
					</view>
				</view>
			</view>
			<view class="base-block">
				<view class="basetit">爱情危机</view>
				<view class="box">
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/img_1.jpg" mode="widthFix"></image>
					<view class="">{{ returnData.gua.weiji }}</view>
				</view>
			</view>
			<view class="base-block">
				<view class="basetit">爱情建议</view>
				<view class="box">
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/xmpeidui/2/images/img_2.jpg" mode="widthFix"></image>
					<view class="">{{ returnData.gua.jianyi }}</view>
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
					nan_data: {},
					nv_data: {},
					
					nan_tdrh_ge_data: {
						nan_yuanshen: {},
						nan_sancai: {},
					},
					nv_tdrh_ge_data: {
						nv_yuanshen: {},
						nv_sancai: {},
					},
					
					nan_xing1_data: {},
					nan_xing2_data: {},
					nan_ming1_data: {},
					nan_ming2_data: {},
					
					nv_xing1_data: {},
					nv_xing2_data: {},
					nv_ming1_data: {},
					nv_ming2_data: {},
					
					gua: {},
					gua2: {},
					
					pd_pingfen: 0,
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
		},
		computed: {
			guaCapture () {
				return (str, index) => {
					if (str) {
						let start = str.indexOf('(')
						let end = str.indexOf(')')
						
						if (start != -1 && end != -1) {
							let val = str.slice(start + 1, end)
							let arr = val.split('')
							return arr[index]
						}
						
						return ''
					}
					
					return ''
				}
			}
		}
	}
</script>

<style lang="scss">
.xmpd-detail {
	color: #333;
	min-height: 100%;
	background-color: #a50028;
	position: relative;
	.banner-box {
		position: relative;
		.banner {
			width: 100%;
		}
		.number {
			position: absolute;
			bottom: 4rpx;
			left: 50%;
			z-index: 10;
			transform: translateX(-50%);
			width: 560rpx;
			border-radius: 24rpx;
			font-size: 28rpx;
			line-height: 48rpx;
			text-align: center;
			background-color: #ffc505;
		}
	}
	.container {
		padding: 20rpx;
		.order-info {
			padding: 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
			.oi-name {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left, .right {
					width: 200rpx;
					text-align: center;
					.icon {
						width: 76rpx;
						height: 76rpx;
					}
					.name {
						color: #2b2b2b;
						font-size: 48rpx;
						line-height: 60rpx;
					}
					.label {
						font-size: 32rpx;
						color: #ababab;
						line-height: 40rpx;
					}
				}
				.con {
					color: #2b2b2b;
					font-size: 16px;
					text-align: center;
					line-height: 20px;
					.vs {
						font-size: 60rpx;
						line-height: 60rpx;
						font-weight: 400;
					}
				}
			}
			.oi-num {
				margin-top: 40rpx;
				border: 1rpx solid #f6bdc7;
				height: 100rpx;
				border-radius: 24rpx;
				position: relative;
				.label {
					position: absolute;
					top: -20rpx;
					left: 50%;
					margin-left: -100rpx;
					width: 200rpx;
					height: 40rpx;
					font-size: 16px;
					line-height: 40rpx;
					text-align: center;
					background-color: #fff;
				}
				.start {
					margin-top: 28rpx;
					display: flex;
					justify-content: center;
				}
			}
		}
		.order-grid {
			margin-top: 20rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.basetit {
				padding: 12rpx 0;
				border-bottom: 1px solid #d7d7d7;
				color: #e9193c;
				font-size: 40rpx;
				text-align: center;
			}
			.order-content {
				overflow: hidden;
				padding: 0 20rpx 20rpx;
				.og-tit {
					padding: 20rpx 0 16rpx;
					color: #262626;
					font-size: 32rpx;
				}
				.og-con {
					padding: 20rpx;
					border: 1px solid #57a8b5;
					background-color: #e9fcff;
					&.og-con-2 {
						border-color: #f59e9e;
						background-color: #ffe9e9;
						.og-name {
							.i {
								border-color: #e9193c;
								&:after {
									border-top-color: #e9193c;
								}
								&:before {
									border-top-color: #ffe9e9;
								}
							}
							.item {
								color: #e9193c;
							}
						}
						.og-all {
							border-color: #e9193c;
							&:after {
								border-top-color: #e9193c;
							}
							&:before {
								border-top-color: #ffe9e9;
							}
						}
					}
					.og-name {
						font-size: 0;
						text-align: center;
						position: relative;
						padding: 0 0 20rpx;
						.i {
							width: 100rpx;
							border: 1rpx solid #2fb7cd;
							height: 12rpx;
							border-top: none;
							position: absolute;
							bottom: 0;
							left: 50%;
							border-bottom-left-radius: 12rpx;
							border-bottom-right-radius: 12rpx;
							&:after, &:before {
								content: '';
								width: 0;
								height: 0;
								border-left: 6rpx solid transparent;
								border-right: 6rpx solid transparent;
								position: absolute;
								left: 44rpx;
							}
							&:after {
								border-top: 12rpx solid #2fb7cd;
								bottom: -12rpx;
							}
							&:before {
								border-top: 12rpx solid #e9fcff;
								bottom: -8rpx;
								z-index: 2;
							}
							&.l {
								margin-left: -170rpx;
							}
							&.c {
								margin-left: -50rpx;
							}
							&.r {
								margin-left: 70rpx;
							}
						}
						.item {
							display: inline-block;
							margin: 0 20rpx;
							width: 80rpx;
							height: 80rpx;
							color: #2fb7cd;
							font-size: 72rpx;
							text-align: center;
							line-height: 80rpx;
							.text {
								display: block;
								border: 1px solid #d7d7d7;
								background-color: #fff;
							}
						}
					}
					.og-txt {
						padding: 16rpx 0;
						font-size: 32rpx;
						text-align: center;
						text {
							padding: 0 16rpx;
						}
					}
					.og-all {
						width: 280rpx;
						border: 1px solid #2fb7cd;
						height: 72rpx;
						border-top: none;
						margin: 12rpx auto 0;
						border-bottom-left-radius: 12rpx;
						border-bottom-right-radius: 12rpx;
						line-height: 80rpx;
						text-align: center;
						position: relative;
						&:after, &:before {
							content: '';
							width: 0;
							height: 0;
							border-left: 6rpx solid transparent;
							border-right: 6rpx solid transparent;
							position: absolute;
							left: 134rpx;
						}
						&:after {
							border-top: 12rpx solid #2fb7cd;
							bottom: -12rpx;
						}
						&:before {
							border-top: 12rpx solid #e9fcff;
							bottom: -8rpx;
							z-index: 2;
						}
					}
				}
			}
		}
		.bilateral-character {
			margin-top: 20rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.basetit {
				padding: 12rpx 0;
				border-bottom: 1px solid #d7d7d7;
				color: #e9193c;
				font-size: 40rpx;
				text-align: center;
			}
			.bc-box {
				overflow: hidden;
				padding: 32rpx 20rpx;
				.item {
					.bc-img {
						float: right;
						margin-left: 20rpx;
						border: 1rpx solid #d7d7d7;
						padding: 4rpx;
						width: 30%;
						text-align: center;
						background-color: #f3f3f3;
						.image {
							width: 100%;
						}
					}
					.bc-tit {
						margin-bottom: 12rpx;
						height: 60rpx;
						display: flex;
						align-items: center;
						.icon {
							width: 60rpx;
							height: 60rpx;
						}
						.text {
							margin-left: 10rpx;
						}
					}
				}
			}
		}
		.love-fate {
			margin-top: 20rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.basetit {
				padding: 12rpx 0;
				border-bottom: 1px solid #d7d7d7;
				color: #e9193c;
				font-size: 40rpx;
				text-align: center;
			}
			.bc-box {
				overflow: hidden;
				padding: 32rpx 20rpx;
				.item {
					&.female {
						.image {
							float: left;
							width: 30%;
							margin-left: 0;
							margin-right: 12rpx;
						}
						.label {
							color: #e9193c;
						}
					}
					.image {
						float: right;
						width: 30%;
						margin-left: 12rpx;
					}
					.label {
						color: #0c95aa;
					}
				}
			}
		}
		.gua-as {
			margin-top: 20rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.basetit {
				padding: 12rpx 0;
				border-bottom: 1px solid #d7d7d7;
				color: #e9193c;
				font-size: 40rpx;
				text-align: center;
			}
			.gua-box {
				padding: 32rpx 20rpx;
				overflow: hidden;
				.top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left {
						width: 300rpx;
						.item {
							display: flex;
							align-items: center;
							color: #0c95aa;
							&.nv {
								color: #e9193c;
							}
							.name {
								margin: 0 20rpx;
								width: 50rpx;
								font-size: 44rpx;
								font-weight: bold;
								line-height: 66rpx;
							}
							.gua {
								font-size: 200rpx;
								font-weight: bold;
								line-height: 200rpx;
							}
						}
					}
					.right {
						width: 332rpx;
						position: relative;
						.image {
							width: 100%;
						}
						.label {
							width: 60rpx;
							font-size: 26px;
							color: #e9193c;
							font-weight: 700;
							text-align: center;
							line-height: 30px;
							text-shadow: 2rpx 0 #F5B129,
										-2rpx 0 #F5B129,
										0 2rpx #F5B129,
										0 -2rpx #F5B129,
										2rpx 2rpx #F5B129,
										-2rpx -2rpx #F5B129,
										2rpx -2rpx #F5B129,
										-2rpx 2rpx #F5B129;
							display: flex;
							align-items: center;
							justify-content: center;
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							z-index: 10;
						}
					}
				}
				.ga-num {
					display: flex;
					align-items: center;
				}
			}
		}
		.base-block {
			margin-top: 20rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.basetit {
				padding: 12rpx 0;
				border-bottom: 1px solid #d7d7d7;
				color: #e9193c;
				font-size: 40rpx;
				text-align: center;
			}
			.box {
				padding: 20rpx;
				overflow: hidden;
				.image {
					width: 35%;
					margin: 8rpx 0 8rpx 8rpx;
					float: right;
				}
			}
		}
	}
}
</style>