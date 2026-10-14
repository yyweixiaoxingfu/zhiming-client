<template>
	<view class="bazizh-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/bazizh/images/img_banner.jpg" mode="widthFix"></image>
		</view>
		<view class="pay-box">订单编号: {{ pageContent.order_no }}</view>
		<view class="result-box">
			<view class="title-box">您的八字命盘</view>
			<view class="content-box">
				<view class="base_info">
					<view class="text">
						<text class="label">姓名:</text>
						<text class="value">{{ pageContent.submit_data.name }}</text>
					</view>
					<view class="text">
						<text class="label">性别:</text>
						<text class="value">{{ bazizh.user.sex }}</text>
					</view>
					<view class="text">
						<text class="label">公历:</text>
						<text class="value">{{ bazizh.user.age.y }}年{{ bazizh.user.age.m }}月{{ bazizh.user.age.d }}日 {{ bazizh.user.age.h }}时</text>
					</view>
					<view class="text">
						<text class="label">农历:</text>
						<text class="value">{{ bazizh.user.lDate }}</text>
					</view>
				</view>
				<view class="detail_info">
					<view class="li head">
						<view class="item"></view>
						<view class="item">年柱</view>
						<view class="item">月柱</view>
						<view class="item">日柱</view>
						<view class="item">时柱</view>
					</view>
					<view class="li">
						<view class="item">十神</view>
						<view class="item" style="color: blue;">{{ bazipp.shishen1 }}</view>
						<view class="item" style="color: blue;">{{ bazipp.shishen2 }}</view>
						<view class="item" style="color: blue;">{{ bazipp.shishen3 }}</view>
						<view class="item" style="color: blue;">{{ bazipp.shishen4 }}</view>
					</view>
					<view class="li">
						<view class="item">八</view>
						<block v-for="(item, index) in bazizh.user.bazi" :key="index">
							<view class="item" v-if="index % 2 == 0">{{ item }}</view>
						</block>
					</view>
					<view class="li">
						<view class="item">字</view>
						<block v-for="(item, index) in bazizh.user.bazi" :key="index">
							<view class="item" v-if="index % 2 == 1">{{ item }}</view>
						</block>
					</view>
					<view class="li">
						<view class="item">藏干</view>
						<view class="item">{{ bazipp.zanggan1 }}</view>
						<view class="item">{{ bazipp.zanggan2 }}</view>
						<view class="item">{{ bazipp.zanggan3 }}</view>
						<view class="item">{{ bazipp.zanggan4 }}</view>
					</view>
					<view class="li">
						<view class="item">纳音</view>
						<view
							class="item"
							v-for="(item, index) in bazizh.info.nayin" :key="index"
						>{{ item.layin }}</view>
					</view>
				</view>
				<view class="main_info">
					<view class="item">
						<text class="label">胎元:</text>
						<text>{{ bazipp.taiyuan }}</text>
					</view>
					<view class="item">
						<text class="label">命宫:</text>
						<text>{{ bazipp.minggong }}</text>
					</view>
				</view>
			</view>
			<view class="title-box">您的性格分析</view>
			<view class="content-box">
				<view class="infos">您出生于农历{{ bazizh.user.lDate }}，五行生肖为:{{ bazizh.user.zodiac }}</view>
				<view class="con_word">
					<u-parse :content="bazizh.info.sxgx.sxgx"></u-parse>
				</view>
				<view class="public_title">性格优缺点</view>
				<view class="con_word">
					<view class="text">
						<text class="label">优点</text>
						<text>:{{ bazizh.data.zonghe.yx }}</text>
					</view>
					<view class="text">
						<text class="label">缺点</text>
						<text>:{{ bazizh.data.zonghe.qd }}</text>
					</view>
				</view>
			</view>
			<view class="title-box">您的财运分析</view>
			<view class="content-box">
				<view class="public_title">流年财运</view>
				<view class="con_word">
					<u-parse :content="bazizh.data.zonghe.lncy"></u-parse>
				</view>
				<view class="public_title">先天财运</view>
				<view class="con_word">
					<u-parse :content="bazizh.data.zonghe.xtcy"></u-parse>
				</view>
				<view class="public_title">注意事项</view>
				<view class="con_word">
					<u-parse :content="bazizh.data.zonghe.zhuyi"></u-parse>
				</view>
			</view>
			<view class="title-box">您的爱情恋爱建议</view>
			<view class="content-box">
				<view class="public_title">爱情分析</view>
				<view class="con_word">
					<u-parse :content="bazizh.data.zonghe.aqfx"></u-parse>
				</view>
				<!-- <view class="public_title">命带多少桃花运</view>
				<view class="con_word">您命中有:红艳桃花{{ bazizh.data.zonghe.th }}朵</view>
				<view class="detail">
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587dbda116fc0.png" mode="aspectFill"></image>
					<view class="list_t">红艳桃花</view>
					<view>高雅优美追求者众</view>
					<view>顾名思义，红艳给人感受如同花开美好又灿烂，主众人见你心喜，本人气质出众，有特殊的魅力与好人缘，以至于本人在爱情追求上如虎添翼。红艳桃花，全名红艳桃花煞。命带红艳桃花，象征当事人外缘极佳，感情世界丰富。除了吸引异性欣赏，命带红艳桃花者，本身性情亦属浪漫多情，面对追求者示爱，很容易动情而接受对方。在你的八字格局里有红艳桃花，象征你发生一见锺情的机率很高，往往会在电石火光间遇到了那个对的人与恋人的发展关系往往是激情四射，当然这样的感情来得快也去得快。因为命带红艳桃花，象征本人异性缘佳，且生性多情。即使身旁已有交往对象，仍会吸引其他异性追求，若本身意志不坚，很容易就风流韵事不断，造成爱情运势不稳、感情容易生变。</view>
				</view> -->
			</view>
			<view class="title-box">您的健康建议</view>
			<view class="content-box">
				<view class="con_word">
					<text>从中医养生上来说，您基本上是</text>
					<text class="value">{{ bazizh.info.wharr.whjk.wh }}</text>
					<text>型人。</text>
				</view>
				<view class="bazi_pic">
					<view class="item">
						<view class="box">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587c34d949d33.png" mode="widthFix"></image>
						</view>
						<view class="">金</view>
					</view>
					<view class="item">
						<view class="box">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587c34f569f63.png" mode="widthFix"></image>
						</view>
						<view class="">木</view>
					</view>
					<view class="item">
						<view class="box">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587c3506773e3.png" mode="widthFix"></image>
						</view>
						<view class="">水</view>
					</view>
					<view class="item">
						<view class="box">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587c3516d9b1d.png" mode="widthFix"></image>
						</view>
						<view class="">火</view>
					</view>
					<view class="item">
						<view class="box">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazijingpi/1/images/587c35274db39.png" mode="widthFix"></image>
						</view>
						<view class="">土</view>
					</view>
				</view>
				<view class="con_word">
					<view class="">{{ bazizh.info.wharr.whjk.jb }}</view>
					<view class="">{{ bazizh.info.wharr.whjk.zz }}</view>
				</view>
				<view class="public_title">养生要点</view>
				<view class="con_word">{{ bazizh.info.wharr.whjk.yd }}</view>
				<view class="public_title">生活起居</view>
				<view class="con_word">{{ bazizh.info.wharr.whjk.sh }}</view>
				<view class="public_title">饮食调节</view>
				<view class="con_word">{{ bazizh.info.wharr.whjk.ys }}</view>
				<view class="public_title">保健膳食</view>
				<view class="con_word">{{ bazizh.info.wharr.whjk.bj }}</view>
			</view>
			<view class="title-box">未来一年运程</view>
			<view class="content-box">
				<u-parse :content="bazism.myq_text"></u-parse>
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
					},
					user: {
						age: {},
						bazi: []
					},
					info: {
						sxgx: {},
						wharr: {
							whjk: {},
						},
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
						this.bazizh = res.data.return_data.bazizh
						this.bazipp = res.data.return_data.bazipp
						this.bazism = res.data.return_data.bazism
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.bazizh-detail {
	box-sizing: border-box;
	padding-bottom: 20rpx;
	color: #333;
	font-size: 28rpx;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.pay-box {
		border-bottom: 1px solid #e2ccb0;
		padding: 20rpx;
		color: #333;
	}
	.result-box {
		.title-box {
			margin-top: 30rpx;
			height: 50rpx;
			color: #000;
			font-size: 32rpx;
			text-align: center;
			    background: url('https://base2.tengsytech.com/statics/ffsm/bazizh/images/bg_title.jpg') no-repeat;
			background-size: 100% 50rpx;
		}
		.content-box {
			padding: 0 20rpx;
			.base_info {
				padding: 20rpx 0;
				border-bottom: 1px dashed #000;
				line-height: 60rpx;
				.text {
					.label {
						color: #8c0000;
					}
				}
			}
			.detail_info {
				padding: 20rpx 0;
				border-bottom: 1px dashed #000;
				font-size: 32rpx;
				.li {
					padding: 16rpx 0;
					line-height: 40rpx;
					display: flex;
					&.head {
						color: #8c0000;
					}
					.item {
						width: 20%;
						text-align: center;
						&:first-child {
							color: #8c0000;
						}
					}
				}
			}
			.main_info {
				padding: 20rpx 0;
				font-size: 32rpx;
				display: flex;
				.item {
					width: 37%;
					.label {
						color: #8c0000;
					}
				}
			}
			.infos {
				padding-top: 20rpx;
				color: #8c0000;
				font-size: 32rpx;
				line-height: 42rpx;
			}
			.con_word {
				padding: 30rpx 0 10rpx;
				.text {
					line-height: 44rpx;
					.label {
						color: #ff4632;
					}
				}
				.value {
					color: #ff4632;
				}
			}
			.public_title {
				color: #ff003b;
				line-height: 64rpx;
				border-bottom: 1px solid #d4b993;
			}
			.detail {
				padding: 30rpx 10rpx;
				line-height: 24px;
				.image {
					width: 160rpx;
					height: 160rpx;
					float: left;
					margin-right: 10rpx;
				}
				.list_t {
					color: #8c0000;
					font-size: 36rpx;
				}
			}
			.bazi_pic {
				display: flex;
				text-align: center;
				.item {
					flex: 1;
					.box {
						height: 164rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						.image {
							width: 60%;
						}
					}
				}
			}
		}
	}
}
</style>