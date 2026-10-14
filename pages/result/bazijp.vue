<template>
	<view class="bazijp-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/bazimf/images/banner2.jpg" mode="widthFix"></image>
		</view>
		<view class="material-box">
			<view class="top">
				<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazimf/images/pic4L.png" mode="scaleToFill"></image>
				<view class="title">您输入的个人资料</view>
				<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazimf/images/pic4R.png" mode="scaleToFill"></image>
			</view>
			<view class="center">
				<view class="infor">
					<view class="item">
						<text>性别：</text>
						<text class="value">{{ bazizh.user.sex }}</text>
					</view>
					<view class="item">
						<text>生肖：</text>
						<text class="value">{{ bazizh.user.zodiac }}</text>
					</view>
				</view>
				<view class="infor-data">
					<view class="label">生辰：</view>
					<view class="value">
						<view class="">{{ bazizh.user.age.y }}年{{ bazizh.user.age.m }}月{{ bazizh.user.age.d }}日 {{ bazizh.user.age.h }}时</view>
						<view class="">{{ bazizh.user.lDate }}</view>
					</view>
				</view>
				<view class="infor-table">
					<view class="">您的五行八字资料</view>
					<view class="table-box">
						<view class="tr">
							<view class="th">八字</view>
							<view class="th">年柱</view>
							<view class="th">月柱</view>
							<view class="th">日柱</view>
							<view class="th">时柱</view>
						</view>
						<view class="tr">
							<view class="th">天干</view>
							<block v-for="(item, index) in bazizh.user.bazi" :key="index">
								<view class="th" v-if="index % 2 == 0">{{ item }}</view>
							</block>
						</view>
						<view class="tr">
							<view class="th">地支</view>
							<block v-for="(item, index) in bazizh.user.bazi" :key="index">
								<view class="th" v-if="index % 2 == 1">{{ item }}</view>
							</block>
						</view>
					</view>
					<view class="">本命属{{ bazizh.user.zodiac }}，胎元：{{ bazipp.taiyuan }}、纳音胎元：{{ bazipp.nayintaiyua }}、命宫：{{ bazipp.minggong }}、纳音命宫：{{ bazipp.nayinminggong }}，生于{{ bazizh.user.season }}季。</view>
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="title-box">命盘图解</view>
			<view class="list-box">
				<view class="title">
					<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/bazimf/images/icon1.png" mode="aspectFill"></image>
					<view class="text">八字排盘</view>
				</view>
				<view class="list-text">
					<text class="label">提示:</text>
					<text>八字命盘从阴阳干支三合历取得。上排是天干，由五行「金水木火土」轮流排列。下排是地支，用十二生肖顺序排列。十二生肖可转换成五行。</text>
				</view>
				<view class="table-box">
					<view class="tr">
						<view class="th">八字</view>
						<view class="th">年柱</view>
						<view class="th">月柱</view>
						<view class="th">日柱</view>
						<view class="th">时柱</view>
					</view>
					<view class="tr">
						<view class="th">天干</view>
						<view class="th">{{ bazizh.user.bazi[0] }}/<text class="text">{{ bazipp.shishen1 }}</text></view>
						<view class="th">{{ bazizh.user.bazi[2] }}/<text class="text">{{ bazipp.shishen2 }}</text></view>
						<view class="th">{{ bazizh.user.bazi[4] }}/<text class="text">{{ bazipp.shishen3 }}</text></view>
						<view class="th">{{ bazizh.user.bazi[6] }}/<text class="text">{{ bazipp.shishen4 }}</text></view>
					</view>
					<view class="tr">
						<view class="th">地支</view>
						<view class="th">
							<view>{{ bazizh.user.bazi[1] }}/<text class="text">{{ bazipp.ysshen1 }} {{ bazipp.ysshen2 }} {{ bazipp.ysshen3 }}</text></view>
						</view>
						<view class="th">
							<view>{{ bazizh.user.bazi[3] }}/<text class="text">{{ bazipp.msshen1 }} {{ bazipp.msshen2 }} {{ bazipp.msshen3 }}</text></view>
						</view>
						<view class="th">
							<view>{{ bazizh.user.bazi[5] }}/<text class="text">{{ bazipp.rsshen1 }} {{ bazipp.rsshen2 }} {{ bazipp.rsshen3 }}</text></view>
						</view>
						<view class="th">
							<view>{{ bazizh.user.bazi[7] }}/<text class="text">{{ bazipp.hsshen1 }} {{ bazipp.hsshen2 }} {{ bazipp.hsshen3 }}</text></view>
						</view>
					</view>
					<view class="tr">
						<view class="th">藏干</view>
						<view class="th">{{ bazipp.zanggan1 }}</view>
						<view class="th">{{ bazipp.zanggan2 }}</view>
						<view class="th">{{ bazipp.zanggan3 }}</view>
						<view class="th">{{ bazipp.zanggan4 }}</view>
					</view>
					<view class="tr">
						<view class="th">命宫</view>
						<view class="th" style="flex: 1;">{{ bazipp.minggong }}</view>
					</view>
					<view class="tr">
						<view class="th">胎元</view>
						<view class="th" style="flex: 1;">{{ bazipp.taiyuan }}</view>
					</view>
					<view class="tr">
						<view class="th">胎息</view>
						<view class="th" style="flex: 1;">{{ bazizh.data.sxth.shi }}</view>
					</view>
				</view>
				<view class="title">
					<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/bazimf/images/icon3.png" mode="aspectFill"></image>
					<view class="text">五行综述</view>
				</view>
				<view class="table-box">
					<view class="tr">
						<view class="th">八字</view>
						<view class="th">{{ bazizh.user.bazi[0] }}{{ bazizh.user.bazi[1] }}</view>
						<view class="th">{{ bazizh.user.bazi[2] }}{{ bazizh.user.bazi[3] }}</view>
						<view class="th">{{ bazizh.user.bazi[4] }}{{ bazizh.user.bazi[5] }}</view>
						<view class="th">{{ bazizh.user.bazi[6] }}{{ bazizh.user.bazi[7] }}</view>
					</view>
					<view class="tr">
						<view class="th">五行</view>
						<view class="th">{{ bazizh.user.wh[0] }}{{ bazizh.user.wh[1] }}</view>
						<view class="th">{{ bazizh.user.wh[2] }}{{ bazizh.user.wh[3] }}</view>
						<view class="th">{{ bazizh.user.wh[4] }}{{ bazizh.user.wh[5] }}</view>
						<view class="th">{{ bazizh.user.wh[6] }}{{ bazizh.user.wh[7] }}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content-box">
			<view class="title-box">八字详批</view>
			<view class="content-warp">
				<view class="text-box">
					<view class="title">●性格分析:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazizh.info.sxgx.sxgx"></u-parse>
						</view>
					</view>
					<view class="title">●健康分析:</view>
					<view class="warp-text">
						<view class="">请注意可能会有{{ bazizh.info.wharr.whjk.jb }}</view>
					</view>
					<view class="title">●<text class="text">{{ bazipp.shishen1 }}</text>分析【年柱】:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazipp.shishenfx_y"></u-parse>
						</view>
					</view>
					<view class="title">●<text class="text">{{ bazipp.shishen2 }}</text>分析【月柱】:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazipp.shishenfx_m"></u-parse>
						</view>
					</view>
					<view class="title">●<text class="text">{{ bazipp.shishen4 }}</text>分析【时柱】:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazipp.shishenfx_d"></u-parse>
						</view>
					</view>
					<view class="title">●爱情分析:</view>
					<view class="warp-text">
						<view class="">您命中有:红艳桃花{{ bazizh.data.zonghe.th }}朵</view>
						<view class="">
							<u-parse :content="bazizh.data.rgxx.aqfx"></u-parse>
						</view>
					</view>
					<view class="title">●事业分析:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazizh.data.rgxx.syfx"></u-parse>
							<u-parse :content="bazizh.info.tywh.hyhw"></u-parse>
						</view>
					</view>
					<view class="title">●健康分析:</view>
					<view class="warp-text">
						<view class="">{{ bazizh.data.rgxx.jkfx }}</view>
						<view>易患疾病:{{ bazizh.info.wharr.whjk.jb }}</view>
						<view>易发症状:{{ bazizh.info.wharr.whjk.zz }}</view>
						<view>从中医养生上来说，您基本上是<text style="color: #ff4632;">{{ bazizh.info.wharr.whjk.wh }}</text>型人。</view>
						<view>养生要点:{{ bazizh.info.wharr.whjk.yd }}</view>
						<view>生活起居:{{ bazizh.info.wharr.whjk.sh }}</view>
						<view>饮食调养:{{ bazizh.info.wharr.whjk.ys }}</view>
						<view>保健膳食:{{ bazizh.info.wharr.whjk.bj }}</view>
					</view>
					<view class="title">●财运分析:</view>
					<view class="warp-text">
						<u-parse :content="bazizh.data.rgxx.cyfx"></u-parse>
					</view>
					<view class="title">●三命通会:</view>
					<view class="warp-text">
						<view class="">{{ bazizh.data.sxth.tf1 }}</view>
						<view class="">{{ bazizh.data.sxth.tf2 }}</view>
					</view>
					<view class="title">●未来一年:</view>
					<view class="warp-text">
						<view class="">
							<u-parse :content="bazism.myq_text"></u-parse>
						</view>
					</view>
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
				
				bazizh: {
					data: {
						zonghe: {},
						sxth: {},
						rgxx: {},
					},
					user: {
						age: {},
						bazi: [],
						wh: [],
					},
					info: {
						sxgx: {},
						wharr: {
							whjk: {},
						},
						tywh: {},
					},
				},
				bazipp: {},
				bazism: {},
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
						this.bazizh = res.data.return_data.bazi_zh
						this.bazism = res.data.return_data.bazi_sm
						
						let bazi_pp = res.data.return_data.bazi_pp
						if (bazi_pp) {
							bazi_pp = JSON.stringify(bazi_pp)
							bazi_pp = bazi_pp.replaceAll('(', '')
							bazi_pp = bazi_pp.replaceAll(')', '')
							
							this.bazipp = JSON.parse(bazi_pp)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.bazijp-detail {
	color: #333;
	font-size: 28rpx;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.material-box {
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.image {
				width: 180rpx;
				height: 70rpx;
			}
			.title {
				color: #ce1e38;
				font-size: 36rpx;
				text-align: center;
				font-weight: bold;
			}
		}
		.center {
			padding: 20rpx;
			font-size: 36rpx;
			.infor {
				display: flex;
				.item {
					&:first-child {
						margin-right: 140rpx;
					}
				}
			}
			.infor-data {
				margin: 30rpx 0;
				display: flex;
				.value {
					flex: 1;
					font-size: 34rpx;
				}
			}
			.value {
				color: #f31b34;
			}
		}
	}
	.table-box {
		margin: 20rpx 0;
		border: 1px solid #b09589;
		font-size: 32rpx;
		text-align: center;
		.tr {
			display: flex;
			background-color: #f5f0ee;
			&:first-child {
				background-color: #ebc9bd;
				font-size: 36rpx;
				font-weight: bold;
			}
			&:last-child {
				.th {
					border-bottom: none;
				}
			}
			.th {
				flex: 1;
				height: 76rpx;
				line-height: 76rpx;
				border-right: 1px solid #b09589;
				border-bottom: 1px solid #b09589;
				&:last-child {
					border-right: none;
				}
			}
		}
	}
	.content-box {
		margin-top: 32rpx;
		padding-bottom: 68rpx;
		.title-box {
			height: 70rpx;
			color: #781f00;
			font-size: 40rpx;
			line-height: 70rpx;
			text-align: center;
			background: url('https://base2.tengsytech.com/statics/ffsm/bazimf/images/pic6.png') repeat-x 0 bottom;
		}
		.list-box {
			padding: 10rpx;
			.title {
				height: 80rpx;
				font-size: 36rpx;
				border-bottom: 1px dashed #81594b;
				display: flex;
				align-items: center;
				.icon {
					width: 60rpx;
					height: 60rpx;
				}
				.text {
					margin-left: 20rpx;
					font-weight: 500;
				}
			}
			.list-text {
				margin-top: 30rpx;
				font-size: 32rpx;
				line-height: 52rpx;
				.label {
					color: #ff0000;
				}
			}
			.table-box {
				.tr {
					.th {
						box-sizing: border-box;
						flex: none;
						width: 20%;
						padding: 12rpx 6rpx;
						height: auto;
						line-height: inherit;
						display: flex;
						align-items: center;
						justify-content: center;
						&:first-child {
							background-color: #ebc9bd;
						}
						.text {
							color: blue;
						}
					}
				}
			}
		}
		.content-warp {
			padding: 0 20rpx;
			.text-box {
				.title {
					margin-top: 20rpx;
					font-size: 36rpx;
					font-weight: bold;
					line-height: 70rpx;
					.text {
						color: blue;
					}
				}
				.warp-text {
					font-size: 32rpx;
					line-height: 64rpx;
				}
			}
		}
	}
}
</style>