<template>
	<view class="taluofuhe-detail">
		<view class="banner-box">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/banner.png" mode="widthFix"></image>
		</view>
		<view class="content-wrap">
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_top.png" mode="widthFix"></image>
				<view class="content-panel">
					<view class="guide-wrap">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/frame_top.png" mode="widthFix"></image>
						<view class="guide">
							<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
							<view class="guide-text">运势决定了未来人生的走向，而预知运网势发展能够让我们避免坎坷、掌握好运。关于你未来的运势，我将根据你所选择的3张牌，给予进一步指引...</view>
						</view>
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/frame_bot.png" mode="widthFix"></image>
					</view>
					<view class="card-group">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/card_wall.png" mode="widthFix"></image>
						<block v-if="returnData.length">
							<view class="tarot-card">
								<image class="img" :src="returnData[0].img" mode="widthFix"></image>
								<view class="card-name">{{ returnData[0].title }}</view>
								<view class="directional">({{ returnData[0].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="returnData[1].img" mode="widthFix"></image>
								<view class="card-name">{{ returnData[1].title }}</view>
								<view class="directional">({{ returnData[1].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="returnData[2].img" mode="widthFix"></image>
								<view class="card-name">{{ returnData[2].title }}</view>
								<view class="directional">({{ returnData[2].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
							<view class="tarot-card">
								<image class="img" :src="returnData[3].img" mode="widthFix"></image>
								<view class="card-name">{{ returnData[3].title }}</view>
								<view class="directional">({{ returnData[3].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
						</block>
					</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_bot.png" mode="widthFix"></image>
			</view>
			<block v-if="returnData.length">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/subtitle_01.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="returnData[0].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ returnData[0].title }}</text>
									<text class="text">({{ returnData[0].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ returnData[0].des }}</view>
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ returnData[0].c1 }}</view>
								<view class="explan-title">对方想法:</view>
								<view class="explan-text">{{ returnData[0].c2 }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box cash">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/subtitle_02.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="returnData[1].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ returnData[1].title }}</text>
									<text class="text">({{ returnData[1].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ returnData[1].des }}</view>
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ returnData[1].c1 }}</view>
								<view class="explan-title">当前阻碍:</view>
								<view class="explan-text">{{ returnData[1].c2 }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box cause">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/subtitle_03.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="returnData[2].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ returnData[2].title }}</text>
									<text class="text">({{ returnData[2].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ returnData[2].des }}</view>
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ returnData[2].c1 }}</view>
								<view class="explan-title">复合机率:</view>
								<view class="explan-text">{{ returnData[2].c2 }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box cause">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/subtitle_04.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="returnData[3].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ returnData[3].title }}</text>
									<text class="text">({{ returnData[3].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ returnData[3].des }}</view>
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ returnData[3].c1 }}</view>
								<view class="explan-title">塔罗指引:</view>
								<view class="explan-text">{{ returnData[3].c2 }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_bot.png" mode="widthFix"></image>
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
				returnData: [],
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
.taluofuhe-detail {
	min-height: 100%;
	background: #34115a;
	position: relative;
	.banner-box {
		margin-bottom: -382rpx;
		.img {
			width: 100%;
		}
	}
	.content-wrap {
		padding: 0 26rpx 116rpx;
		position: relative;
		z-index: 10;
		.title-img {
			display: block;
			margin: 0 auto;
			width: 580rpx;
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
				padding: 0 40rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/border_mid.png') repeat-y;
				background-size: 100% 100%;
				.guide-wrap {
					font-size: 32rpx;
					margin-bottom: 22rpx;
					.guide {
						padding: 0 18rpx;
					}
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
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						&:nth-of-type(1) {
							top: 92rpx;
							left: 264rpx;
						}
						&:nth-of-type(2) {
							top: 214rpx;
							left: 64rpx;
						}
						&:nth-of-type(3) {
							top: 214rpx;
							left: 470rpx;
						}
						&:nth-of-type(4) {
							top: 412rpx;
							right: 264rpx;
						}
						.img {
							width: 92rpx;
						}
						.card-name {
							color: #783bb0;
							font-size: 28rpx;
						}
						.directional {
							font-size: 20rpx;
						}
					}
				}
				.desc-subtitle {
					margin-bottom: 24rpx;
					text-align: center;
					.subtitle {
						width: 580rpx;
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
							height: 42rpx;
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
					.rate {
						display: block;
						margin: 20rpx auto -12rpx;
						width: 580rpx;
					}
					.explan-box {
						margin-top: 22rpx;
						.explan-title {
							color: #d75016;
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
										background-color: #bb7117;
										transform: rotate(45deg);
										position: absolute;
										left: 2rpx;
										top: 22rpx;
									}
									.value {
										color: #7544e9;
									}
								}
							}
							.start-btn-mid {
								margin-top: 116rpx;
								width: 464rpx;
							}
							.item-img {
								width: 100%;
							}
						}
					}
				}
			}
		}
	}
}
</style>