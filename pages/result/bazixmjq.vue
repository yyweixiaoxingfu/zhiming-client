<template>
	<view class="bazixmjq-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm_lg/index/images/5ee6d47f996be.jpg" mode="widthFix"></image>
		</view>
		<view class="carousel-info">
			<text>订单编号:</text>
			<text>{{ pageContent.order_no }}</text>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">您的姓名测算结果</view>
			</view>
			<view class="jb-content">
				<view class="n">{{ returnData.user.xm_name.xing }}{{ returnData.user.xm_name.ming }}（{{ returnData.user.sex }}）</view>
				<view>生日：{{ returnData.user.age.y }}年{{ returnData.user.age.m }}月{{ returnData.user.age.d }}日 {{ returnData.user.age.h }}时</view>
				<view>您的姓名三才五行组合：</view>
				<view class="jbc-gezi">
					<view class="jg-box jg-left">
						<view class="public-w">
							<view class="t">迁移宫</view>
							<view class="b">
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.waige }}</view>
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.waige_sancai }}</view>
							</view>
						</view>
						<view class="public-w">
							<view class="t">命宫</view>
							<view class="b">
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.zongge }}</view>
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.zongge_sancai }}</view>
							</view>
						</view>
					</view>
					<view class="jg-line"></view>
					<view class="jl-words">
						<view class="item">
							<block v-if="returnData.xmfx.xing2_data">{{ returnData.xmfx.xing1_data.xing1 }}</block>
						</view>
						<view class="item">{{ returnData.xmfx.xing2_data ? returnData.xmfx.xing2_data.xing2 : returnData.xmfx.xing1_data.xing1 }}</view>
						<view class="item">{{ returnData.xmfx.ming1_data.ming1 }}</view>
						<view class="item">
							<block v-if="returnData.xmfx.ming2_data">{{ returnData.xmfx.ming2_data.ming2 }}</block>
						</view>
					</view>
					<view class="jg-bihua">
						<view class="item">
							<block v-if="returnData.xmfx.xing2_data">{{ returnData.xmfx.xing1_data.xing_bihua1 }}</block>
							<block v-else>1</block>
						</view>
						<view class="item">{{ returnData.xmfx.xing2_data ? returnData.xmfx.xing2_data.xing_bihua2 : returnData.xmfx.xing1_data.xing_bihua1 }}</view>
						<view class="item">{{ returnData.xmfx.ming1_data.ming_bihua1 }}</view>
						<view class="item">
							<block v-if="returnData.xmfx.ming2_data">{{ returnData.xmfx.ming2_data.ming_bihua2 }}</block>
							<block v-else>1</block>
						</view>
					</view>
					<view class="jg-line2">
						<view class="item"></view>
						<view class="item"></view>
						<view class="item"></view>
					</view>
					<view class="jg-box jg-right">
						<view class="public-w">
							<view class="t">父母宫</view>
							<view class="b">
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.tiange }}</view>
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.tiange_sancai }}</view>
							</view>
						</view>
						<view class="public-w mt-40">
							<view class="t">疾厄宫</view>
							<view class="b">
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.renge }}</view>
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.renge_sancai }}</view>
							</view>
						</view>
						<view class="public-w mt-40">
							<view class="t">奴仆宫</view>
							<view class="b">
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.dige }}</view>
								<view class="b-item">{{ returnData.xmfx.tdrh_ge_data.dige_sancai }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">您的八字命盘</view>
			</view>
			<view class="jb-bzmp" v-if="returnData.info.nayin.length">
				<view class="words">下列是您的八字命盘。您是{{ returnData.info.nayin[2].whsx.sx }}，出生于{{ returnData.info.nayin[0].whsx.sx }}年。日天干代表您，所以您是属{{ returnData.info.nayin[3].layin }}。</view>
				<view class="bzmp-content">
					<view class="tr">
						<view class="th">年（祖先）</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[0].whsx.wh_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[0].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[0].layin }}</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[0].whsx.sx_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[0].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[0].whsx.sx }}</view>
					</view>
					<view class="tr">
						<view class="th">月（父母）</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[1].whsx.wh_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[1].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[1].layin }}</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[1].whsx.sx_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[1].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[1].whsx.sx }}</view>
					</view>
					<view class="tr">
						<view class="th">日（自己）</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[2].whsx.wh_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[2].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[2].layin }}</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[2].whsx.sx_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[2].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[2].whsx.sx }}</view>
					</view>
					<view class="tr">
						<view class="th">时（子孙）</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[3].whsx.wh_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[3].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[3].layin }}</view>
					</view>
					<view class="tr">
						<view class="th">
							<image class="icon" :src="returnData.info.nayin[3].whsx.sx_py_img" mode="aspectFill"></image>
						</view>
						<view class="th">{{ returnData.info.nayin[3].jiazi }}</view>
						<view class="th">{{ returnData.info.nayin[3].whsx.sx }}</view>
					</view>
				</view>
				<view class="words">八字命盘从阴阳干支三合历取得。上排是天干由五行“金水木火土”轮流排列。下排是地支用十二生肖顺序排列。十二生肖可转换成五行八字姓名详批是依据文字的音、形、义、意、数的原理，综合姓氏文化、文字阴阳五行，并结合测算者的八字信息，解读你的姓名中所暗藏的各项运势，让你更好的了解自己，掌握命运。</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">您的性格特征</view>
			</view>
			<view class="jb-bzmp">
				<view class="words">性格优缺点</view>
				<view class="bzmp-bottom">
					<view class="text">
						<text class="label">优点:</text>
						<text>{{ returnData.data.zonghe.yx }}</text>
					</view>
					<view class="text">
						<text class="label">缺点:</text>
						<text>{{ returnData.data.zonghe.qd }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">您的事业职业分析</view>
			</view>
			<view class="jb-bzmp">
				<view class="words">你的喜用神为:<text class="red">{{ returnData.data.xiyongshen.xishen }}</text></view>
				<view class="bzmp-bottom">
					<text>{{ returnData.data.xiyongshen.shiye }}</text>
				</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">命宫吉凶一生点评</view>
			</view>
			<view class="jb-bzmp">
				<view class="words">{{ returnData.xmfx.wgjx_data.as }}</view>
				<view class="bzmp-bottom">
					<u-parse :content="returnData.xmfx.wgjx_data.content"></u-parse>
				</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">您的健康运势解析</view>
			</view>
			<view class="jb-bzmp">
				<view class="words">从中医养生上来说，五行<text class="red">{{ returnData.info.tywh.wh }}</text>旺人。</view>
				<view class="bzmp-bottom">
					<text>{{ returnData.info.tywh.szwh }}</text>
					<u-parse :content="returnData.info.tywh.skzhyj"></u-parse>
					<text>{{ returnData.info.tywh.whzx }}</text>
				</view>
			</view>
		</view>
		<view class="jieming-box">
			<view class="jb-title">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/jieming/1/images/icon01.png" mode="aspectFill"></image>
				<view class="title">总格总结</view>
			</view>
			<view class="jb-bzmp">
				<view class="words">三才总结：<text class="red">{{ returnData.xmfx.tdrh_ge_data.sancai.yy }}</text></view>
				<view class="bzmp-bottom">
					<u-parse :content="returnData.xmfx.tdrh_ge_data.sancai.content"></u-parse>
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
					data: {
						zonghe: {},
						xiyongshen: {},
					},
					info: {
						nayin: [],
						tywh: {},
					},
					user: {
						xm_name: {},
						age: {},
					},
					xmfx: {
						tdrh_ge_data: {
							sancai: {},
						},
						ming1_data: {},
						ming2_data: {},
						xing1_data: {},
						xing2_data: {},
						wgjx_data: {},
					},
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
.bazixmjq-detail {
	min-height: 100%;
	color: #333;
	font-size: 28rpx;
	background: #e8e8e8;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.carousel-info {
		margin-top: 20rpx;
		padding: 20rpx;
		font-size: 28rpx;
		background-color: #fff;
	}
	.jieming-box {
		overflow: hidden;
		border-radius: 10rpx;
		margin: 20rpx 0px 20rpx 0px;
		background: #fff;
		font-size: 28rpx;
		line-height: 60rpx;
		.jb-title {
			padding: 0 14rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #d7d7d7;
			.icon {
				width: 60rpx;
				height: 60rpx;
			}
			.title {
				margin-left: 20rpx;
				color: #db8732;
				font-size: 36rpx;
			}
		}
		.jb-content {
			overflow: hidden;
			margin: 20rpx 14rpx;
			line-height: 60rpx;
			.n {
				color: #4b4b4b;
				font-weight: 700;
			}
			.jbc-gezi {
				margin: 60rpx auto;
				width: 540rpx;
				color: #db8732;
				display: flex;
				align-items: center;
				overflow: hidden;
				.jg-box {
					&.jg-right {
						margin-left: 20rpx;
					}
					.public-w {
						margin-bottom: 80rpx;
						width: 100rpx;
						height: 100rpx;
						border: 1rpx solid #db8732;
						background: #fff7ef;
						&:last-child {
							margin-bottom: 0;
						}
						view {
							height: 50rpx;
							line-height: 50rpx;
							text-align: center;
						}
						.t {
						    text-align: center;
						    border-bottom: 1px solid #db8732;
						}
						.b {
							display: flex;
							.b-item {
								flex: 1;
								border-right: 1px solid #db8732;
								&:last-child {
									border-right: none;
								}
							}
						}
					}
				}
				.jg-line {
					border: 1rpx solid #db8732;
					border-right: 0;
					width: 30rpx;
					height: 440rpx;
					margin-left: 20rpx;
				}
				.jl-words {
					.item {
						margin-bottom: 30rpx;
						width: 112rpx;
						height: 112rpx;
						font-size: 30px;
						font-weight: 700;
						line-height: 112rpx;
						text-align: center;
						background: url('https://base2.tengsytech.com/statics/ffsm/jieming/1/images/bg_words.jpg') no-repeat;
						background-size: 100% 100%;
						&:last-child {
							margin-bottom: 0;
						}
					}
				}
				.jg-bihua {
					margin-left: 20rpx;
					.item {
						margin-bottom: 90rpx;
						border: 1rpx solid #db8732;
						width: 50rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						background: #fff7ef;
						&:last-child {
							margin-bottom: 0;
						}
					}
				}
				.jg-line2 {
					margin-left: 20rpx;
					.item {
						border: 1rpx solid #db8732;
						border-left: 0;
						width: 30rpx;
						height: 130rpx;
						display: block;
						margin-bottom: 12px;
						&:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
		}
		.jb-bzmp {
			.words {
				padding: 20rpx;
				.red {
					color: #ff4632;
					font-weight: bold;
				}
			}
			.bzmp-content {
				border: 1rpx solid #9b7551;
				color: #6e5233;
				background: #f8ecd8;
				.tr {
					border-bottom: 1rpx solid #9b7551;
					display: flex;
					&:last-child {
						border-bottom: none;
					}
					.th {
						flex: 1;
						height: 60rpx;
						text-align: center;
						line-height: 60rpx;
						border-right: 1rpx solid #9b7551;
						&:last-child {
							border-right: none;
						}
						.icon {
							width: 50rpx;
							height: 40rpx;
						}
					}
				}
			}
			.bzmp-bottom {
				padding: 0 20rpx 30rpx;
				.text {
					.label {
						font-weight: bold;
					}
				}
			}
		}
	}
}
</style>