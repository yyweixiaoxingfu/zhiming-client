<template>
	<view class="taluoanlian-detail">
		<view class="banner-box">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/banner3.png" mode="widthFix"></image>
		</view>
		<view class="content-wrap">
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
				<view class="content-panel taluo">
					<view class="guide-wrap">
						<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
						<view class="guide-text">你所抽中的每张塔罗牌都有着神圣且重大的意义！接下来，我将透过你所选择的5张塔罗牌，揭示你未来3个月内是否能脱单！</view>
					</view>
					<view class="card-group">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/card_wall.png" mode="widthFix"></image>
						<block v-if="tarotData.tuodan_ratio">
							<view class="tarot-card">
								<image class="img" :src="tarotData[0].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[0].title }}</view>
								<view class="directional">({{ tarotData[0].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="tarotData[1].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[1].title }}</view>
								<view class="directional">({{ tarotData[1].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="tarotData[2].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[2].title }}</view>
								<view class="directional">({{ tarotData[2].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="tarotData[3].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[3].title }}</view>
								<view class="directional">({{ tarotData[3].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="tarotData[4].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[4].title }}</view>
								<view class="directional">({{ tarotData[4].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
						</block>
					</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
			</view>
			
			<block v-if="tarotData.tuodan_ratio">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_01.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[0].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/num1_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[0].title }}</text>
									<text class="text">({{ tarotData[0].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[0].des }}</view>
								<view class="explan-title">能否脱单:</view>
								<view class="explan-text">{{ tarotData[0].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_05.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[1].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/num1_02.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[1].title }}</text>
									<text class="text">({{ tarotData[1].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="rate-box">
								<image class="rate" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/rate.png" mode="widthFix"></image>
								<view class="rate-text">脱单成功率: {{ tarotData[1].bili }}%</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[1].des }}</view>
								<view class="explan-title">为何单身:</view>
								<view class="explan-text">{{ tarotData[1].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_06.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="explain-box">
								<view class="explain-text">以下是近3个月你的爱情运最佳的日子（阳历），也是你邂逅爱情、成功表白的吉日，请好好把握！</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/months.png" mode="widthFix"></image>
								<view class="parse-box">
									<view class="month-list">
										<view class="list-item" v-for="(item, index) in tarotData.tuodan_day" :key="index">
											<!-- <text class="value">05</text>
											<text>月</text>
											<text class="value">??</text>
											<text>日</text> -->
											{{ item }}
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_02.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[2].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/num1_03.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[2].title }}</text>
									<text class="text">({{ tarotData[2].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[2].des }}</view>
								<view class="explan-title">桃花特征:</view>
								<view class="explan-text">{{ tarotData[2].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_03.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[3].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/num1_04.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[3].title }}</text>
									<text class="text">({{ tarotData[3].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[3].des }}</view>
								<view class="explan-title">脱单阻碍:</view>
								<view class="explan-text">{{ tarotData[3].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/nav2_04.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[4].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/num1_05.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[4].title }}</text>
									<text class="text">({{ tarotData[4].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[4].des }}</view>
								<view class="explan-title">塔罗指引:</view>
								<view class="explan-text">{{ tarotData[4].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_bot.png" mode="widthFix"></image>
				</view>
			</block>
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
				tarotData: [],
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
						
						let tarot_data = res.data.return_data
						if (tarot_data.length) {
							tarot_data.forEach(item => {
								item.title = item.title.split(' ')[0]
							})
						}
						this.tarotData = tarot_data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.taluoanlian-detail {
	min-height: 100%;
	background: linear-gradient(to right, #662995 , #60298d);
	position: relative;
	.banner-box {
		margin-bottom: -300rpx;
		.img {
			width: 100%;
		}
	}
	.content-wrap {
		padding: 0 34rpx 116rpx;
		position: relative;
		z-index: 10;
		.title-img {
			width: 100%;
			margin-bottom: 34rpx;
		}
		.img {
			width: 100%;
			&.border-top {
				margin-bottom: -1px;
			}
			&.border-bot {
				margin-top: -1px;
			}
		}
		.content-box {
			margin-bottom: 32rpx;
			display: flex;
			flex-direction: column;
			&.cash {
				.content-panel .tarot-box .explan-box .explan-title {
					color: #d56d06;
				}
			}
			&.cause {
				.content-panel .tarot-box .explan-box .explan-title {
					color: #9278f7;
				}
			}
			.content-panel {
				padding: 0 30rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/taluotuodan/image/border_mid-v=1.0.png') repeat-y;
				background-size: 100% 100%;
				&.taluo {
					padding: 0 30rpx 168rpx;
				}
				.guide-wrap {
					font-size: 32rpx;
					margin-bottom: 22rpx;
					.guide-text {
						line-height: 1.5;
						text-align: justify;
						.text {
							color: #f36431;
						}
					}
				}
				.card-group {
					margin-bottom: 12rpx;
					position: relative;
					.tarot-card {
						position: absolute;
						margin-left: -60rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						&:nth-of-type(1) {
							top: 10%;
							left: 50%;
						}
						&:nth-of-type(2) {
							top: 32%;
							left: 13%;
						}
						&:nth-of-type(3) {
							top: 32%;
							right: 4%;
						}
						&:nth-of-type(4) {
							top: 82.5%;
							left: 33%;
						}
						&:nth-of-type(5) {
							top: 82.5%;
							right: 24%;
						}
						.img {
							width: 116rpx;
						}
						.card-name {
							color: #783bb0;
							font-size: 14px;
						}
						.directional {
							font-size: 20rpx;
						}
					}
				}
				.desc-subtitle {
					margin-bottom: 34rpx;
					text-align: center;
					.subtitle {
						height: 132rpx;
					}
				}
				.tarot-box {
					.card-image {
						margin-bottom: 18rpx;
						text-align: center;
						.image {
							width: 162rpx;
						}
					}
					.card-intro {
						display: flex;
						align-items: center;
						justify-content: center;
						.icon {
							margin-right: 12rpx;
							width: 34rpx;
							height: 40rpx;
						}
						.name {
							color: #af50d0;
							font-size: 32rpx;
							.text {
								margin-left: 8rpx;
								font-size: 28rpx;
							}
						}
					}
					.rate-box {
						margin-top: 20rpx;
						position: relative;
						.rate {
							width: 100%;
						}
						.rate-text {
							position: absolute;
							left: 80rpx;
							top: 8rpx;
							z-index: 10;
							color: #fff;
							font-size: 34rpx;
						}
					}
					.explan-box {
						margin-top: 22rpx;
						.explan-title {
							color: #e44b5f;
							font-size: 36rpx;
							line-height: 1.6;
						}
						.explan-text {
							color: #000;
							font-size: 32rpx;
							line-height: 1.5;
						}
					}
					.card-desc {
						margin-top: 22rpx;
						position: relative;
						.blur-img {
							width: 100%;
						}
						.parse-box {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							z-index: 10;
							text-align: center;
							&.flex-center {
								height: 100%;
								display: flex;
								align-items: center;
							}
							.parse-list {
								box-sizing: border-box;
								margin: 116rpx auto 0;
								padding: 18rpx 12rpx;
								border-radius: 8rpx;
								border: 1px solid #e7c08f;
								width: 90%;
								background-color: #fffcf1;
								.item {
									padding-left: 30rpx;
									font-size: 32rpx;
									line-height: 59rpx;
									text-align: left;
									position: relative;
									&::before {
										content: '';
										display: flex;
										width: 14rpx;
										height: 14rpx;
										background-color: #a774fe;
										transform: rotate(45deg);
										position: absolute;
										left: 2rpx;
										top: 22rpx;
									}
									.value {
										color: #a774fe;
									}
								}
							}
							.start-btn-mid {
								margin-top: 92rpx;
								width: 550rpx;
							}
							.item-img {
								width: 100%;
							}
							.month-list {
								padding-top: 80rpx;
								.list-item {
									color: #e0665b;
									font-size: 36rpx;
									line-height: 84rpx;
									.value {
										font-weight: bold;
									}
								}
							}
						}
					}
					.explain-box {
						margin-top: 22rpx;
						.explain-text {
							color: #000;
							font-size: 32rpx;
							line-height: 1.5;
						}
					}
				}
			}
		}
	}
}
</style>