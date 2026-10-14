<template>
	<view class="xingzuo-detail">
		<view class="banner-box">
			<image class="xinzuo-name" :src="returnData.stars_base_data.text_icon" mode="widthFix"></image>
			<image class="first-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/main_01.png" mode="heightFix"></image>
			<image class="bg" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/banner.png" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/base_01.png" mode="heightFix"></image>
				<view class="list-box">
					<view class="item">
						<text class="label">个人特点：</text>
						<text>{{ returnData.stars_base_data.td }}</text>
					</view>
					<view class="item">
						<text class="label">四象属性：</text>
						<text>{{ returnData.stars_base_data.sixiang }}</text>
					</view>
					<view class="item">
						<text class="label">掌管宫位：</text>
						<text>{{ returnData.stars_base_data.gongwei }}</text>
					</view>
					<view class="item">
						<text class="label">阴阳属性：</text>
						<text>{{ returnData.stars_base_data.yinyang }}</text>
					</view>
					<view class="item">
						<text class="label">最强特征：</text>
						<text>{{ returnData.stars_base_data.strong }}</text>
					</view>
					<view class="item">
						<text class="label">守 护 星：</text>
						<text>{{ returnData.stars_base_data.shouhu }}</text>
					</view>
					<view class="item">
						<text class="label">吉祥饰物：</text>
						<text>{{ returnData.stars_base_data.jixiang }}</text>
					</view>
					<view class="item">
						<text class="label">开运金属：</text>
						<text>{{ returnData.stars_base_data.jinshu }}</text>
					</view>
					<view class="item">
						<text class="label">幸运数字：</text>
						<text>{{ returnData.stars_base_data.number }}</text>
					</view>
					<view class="item">
						<text class="label">幸运颜色：</text>
						<text>{{ returnData.stars_base_data.yanse }}</text>
					</view>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/base_02.png" mode="heightFix"></image>
				<view class="overview-box">
					<view class="overview">
						<view class="title">性格关键字：</view>
						<view class="text">{{ returnData.stars_base_data.keyword }}</view>
					</view>
					<view class="overview">
						<view class="title">基础性格：</view>
						<view class="text">{{ returnData.stars_base_data.xingge }}</view>
					</view>
					<view class="overview">
						<view class="title">优点缺点：</view>
						<view class="text">{{ returnData.stars_base_data.youquedian }}</view>
					</view>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/base_03.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_base_data.zhongyao"></u-parse>
				</view>
			</view>
			
			<view class="title-wrap">
				<image class="guide-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/main_02.png" mode="heightFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/love_01.png" mode="heightFix"></image>
				<view class="view-box view-love">
					<view class="line">
						<view class="label">综合评分：</view>
						<u-rate :value="returnData.stars_ai_data.star" allowHalf inactiveIcon="star-fill" activeColor="#e6727a" inactiveColor="#3c3b60"></u-rate>
					</view>
					<view class="line">
						<view class="label">星座匹配：</view>
						<view class="text">
							<text class="value">{{ returnData.stars_ai_data.xz }}</text>
							<text>配</text>
							<text class="value">{{ returnData.stars_ai_data.peidui }}</text>
						</view>
					</view>
					<view class="line">
						<view class="label">主动被动：</view>
						<view class="text">
							<text>你仅有</text>
							<text class="value">{{ returnData.stars_ai_data.master }}%</text>
							<text>的主动权</text>
						</view>
					</view>
					<view class="line">
						<view class="label">简短总评：</view>
						<view class="text">{{ returnData.stars_ai_data.txt }}</view>
					</view>
				</view>
				<image class="star_line" :src="returnData.stars_ai_data.line" mode="widthFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/love_02.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_ai_data.jiyu"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/love_03.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_ai_data.taohua"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/love_04.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_ai_data.ganqing"></u-parse>
				</view>
			</view>
			
			<view class="title-wrap">
				<image class="guide-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/main_03.png" mode="heightFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/cash_01.png" mode="heightFix"></image>
				<view class="view-box view-cash">
					<view class="line">
						<view class="label">综合评分：</view>
						<u-rate :value="returnData.stars_cy_data.star" allowHalf inactiveIcon="star-fill" activeColor="#e2cb7d" inactiveColor="#3c3b60"></u-rate>
					</view>
					<view class="line">
						<view class="label">财运高点：</view>
						<view class="text">
							<u-parse :content="returnData.stars_cy_data.gaodian" :tagStyle="cyStyle"></u-parse>
						</view>
					</view>
					<view class="line">
						<view class="label">低谷时期：</view>
						<view class="text">
							<u-parse :content="returnData.stars_cy_data.didian" :tagStyle="cyStyle"></u-parse>
						</view>
					</view>
					<view class="line">
						<view class="label">简短总评：</view>
						<view class="text">
							<u-parse :content="returnData.stars_cy_data.txt" :tagStyle="cyStyle"></u-parse>
						</view>
					</view>
				</view>
				<image class="star_line" :src="returnData.stars_cy_data.line" mode="widthFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/cash_02.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_cy_data.zong"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/cash_03.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_cy_data.touzi"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/cash_04.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_cy_data.zhichu"></u-parse>
				</view>
			</view>
			
			<view class="title-wrap">
				<image class="guide-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/main_04.png" mode="heightFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/job_01.png" mode="heightFix"></image>
				<view class="view-box view-job">
					<view class="line">
						<view class="label">综合评分：</view>
						<u-rate :value="returnData.stars_sy_data.star" allowHalf inactiveIcon="star-fill" activeColor="#6ebdfb" inactiveColor="#3c3b60"></u-rate>
					</view>
					<view class="line">
						<view class="label">遇到贵人：</view>
						<view class="text">
							<u-parse :content="returnData.stars_sy_data.guiren"></u-parse>
						</view>
					</view>
					<view class="line">
						<view class="label">低谷时期：</view>
						<view class="text">
							<u-parse :content="returnData.stars_sy_data.didian"></u-parse>
						</view>
					</view>
					<view class="line">
						<view class="label">简短总评：</view>
						<view class="text">
							<u-parse :content="returnData.stars_sy_data.txt"></u-parse>
						</view>
					</view>
				</view>
				<image class="star_line" :src="returnData.stars_sy_data.line" mode="widthFix"></image>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/job_02.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_sy_data.zong"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/job_03.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_sy_data.work"></u-parse>
				</view>
			</view>
			<view class="content-box">
				<image class="base-title" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/job_04.png" mode="heightFix"></image>
				<view class="char-box">
					<u-parse :content="returnData.stars_sy_data.zy"></u-parse>
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
					stars_base_data: {},
					stars_ss_data: {},
					stars_ai_data: {},
					stars_cy_data: {},
					stars_sy_data: {},
					stars_zh_data: {},
					star_ys_data: [],
				},
				
				cyStyle: {
					em: 'color: #e2cb7d; font-style: normal;',
				}
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
.xingzuo-detail {
	min-height: 100%;
	font-size: 32rpx;
	background-color: #201e3e;
	position: relative;
	.banner-box {
		position: relative;
		.xinzuo-name {
			position: absolute;
			top: 20rpx;
			left: 50%;
			z-index: 3;
			width: 348rpx;
			transform: translateX(-50%);
		}
		.first-title {
			position: absolute;
			top: 52rpx;
			left: 50%;
			z-index: 2;
			height: 116rpx;
			transform: translateX(-50%);
		}
		.bg {
			width: 100%;
		}
	}
	.container {
		padding: 20rpx;
		.title-wrap {
			.guide-title {
				display: block;
				height: 116rpx;
				margin: 22rpx auto 34rpx auto;
			}
		}
		.content-box {
			margin-bottom: 34rpx;
			padding: 20rpx;
			border-radius: 20rpx;
			border: 4rpx solid #524f7e;
			background-color: #262448;
			.base-title {
				display: block;
				height: 62rpx;
				margin: 6rpx auto 29rpx;
			}
			.list-box {
				color: #c6c4db;
				font-size: 32rpx;
				line-height: 1.4;
				display: flex;
				flex-wrap: wrap;
				.item {
					margin-bottom: 22rpx;
					&:nth-child(odd) {
						width: 55%;
					}
					&:nth-child(even) {
						width: 45%;
					}
					&:nth-last-child(-n+2) {
						margin-bottom: 0;
					}
					.label {
						color: #cac5fb;
						font-size: 18px;
					}
				}
			}
			.overview-box {
				.overview {
					margin-bottom: 22rpx;
					line-height: 1.4;
					&:last-child {
						margin-bottom: 0;
					}
					.title {
						color: #ffdc6c;
						font-size: 36rpx;
						font-weight: 600;
					}
					.text {
						color: #c6c4db;
						font-size: 32rpx;
					}
				}
			}
			.char-box {
				color: #c6c4db;
				font-size: 32rpx;
				line-height: 1.4;
			}
			.view-box{
				&.view-love .line .label {
					color: #e6727a;
				}
				&.view-cash .line .label {
					color: #e2cb7d;
				}
				&.view-job .line .label {
					color: #6ebdfb;
				}
				.line {
					display: flex;
					margin-bottom: 22rpx;
					&:last-child {
						margin-bottom: 0;
					}
					.label {
						font-size: 36rpx;
						font-weight: bold;
						line-height: 1.4;
					}
					.text {
						flex: 1;
						color: #c6c4db;
						font-size: 32rpx;
						line-height: 1.4;
						.value {
							color: #e2cb7d;
						}
					}
				}
			}
			.star_line {
				margin-top: 30rpx;
				width: 100%;
			}
		}
	}
}
</style>