<template>
	<view class="taluobieren-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/banner1.png" mode="widthFix"></image>
		</view>
		<view class="content-wrap">
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
				<view class="content-panel">
					<view class="guide-wrap">
						<view class="guide">
							<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
							<view class="guide-text">
								<text>曾经亲密的爱人，为什么变的冷淡，TA对你还是一心一意的吗？关于TA的心里有没有别人，我将根据你所选择的</text>
								<text class="text">6张牌</text>
								<text>，给予进一步指引…</text>
							</view>
						</view>
					</view>
					<view class="card-group">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/cardcover.png?v=7.0" mode="widthFix"></image>
						<block v-if="tarotData.length">
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
							<view class="tarot-card">
								<image class="img" :src="tarotData[5].img" mode="widthFix"></image>
								<view class="card-name">{{ tarotData[5].title }}</view>
								<view class="directional">({{ tarotData[5].zf == 1 ? '正位' : '逆位' }})</view>
							</view>
						</block>
					</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
			</view>
			
			<block v-if="tarotData.length">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_01.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[0].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[0].title }}</text>
									<text class="text">({{ tarotData[0].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[0].des }}</view>
								<view class="explan-title">你们之前关系的状态是:</view>
								<view class="explan-text">{{ tarotData[0].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_02.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[1].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_02.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[1].title }}</text>
									<text class="text">({{ tarotData[1].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[1].des }}</view>
								<view class="explan-title">你的不安全都来源于:</view>
								<view class="explan-text">{{ tarotData[1].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_03.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[2].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_03.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[2].title }}</text>
									<text class="text">({{ tarotData[2].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[2].des }}</view>
								<view class="explan-title">TA变了吗？冷淡的原因是:</view>
								<view class="explan-text">{{ tarotData[2].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_04.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[3].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_04.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[3].title }}</text>
									<text class="text">({{ tarotData[3].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[3].des }}</view>
								<view class="explan-title">TA的心里到底有没有别人？</view>
								<view class="explan-text">{{ tarotData[3].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_05.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[4].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_05.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[4].title }}</text>
									<text class="text">({{ tarotData[4].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[4].des }}</view>
								<view class="explan-title">你可以这样做：</view>
								<view class="explan-text">{{ tarotData[4].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt_06.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[5].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/num_06.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[5].title }}</text>
									<text class="text">({{ tarotData[5].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面理解:</view>
								<view class="explan-text">{{ tarotData[5].des }}</view>
								<view class="explan-title">塔罗指引你的幸福方向：</view>
								<view class="explan-text">{{ tarotData[5].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
			</block>
			
			<!-- <view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
				<view class="content-panel">
					<view class="desc-subtitle">
						<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/navt07.png" mode="widthFix"></image>
					</view>
					<view class="tarot-box">
						<view class="card-image">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/angel_card.png" mode="widthFix"></image>
						</view>
						<view class="taluo_desc">你召唤了一位大天使，他正将神奇的力量注入你的精神力，他将守护你的是...</view>
						<view class="card-desc">
							<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry07.png" mode="widthFix"></image>
							<view class="parse-box">
								<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
							</view>
						</view>
					</view>
					<view class="lasttitle">~珍藏大天使牌，为你守护幸福~</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
			</view> -->
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
.taluobieren-detail {
	min-height: 100%;
	background-color: #2c1946;
	position: relative;
	.banner-box {
		margin-bottom: -84rpx;
		.banner {
			width: 100%;
		}
	}
	.content-wrap {
		padding: 0 17rpx 116rpx;
		position: relative;
		z-index: 10;
		.title-img {
			display: block;
			margin: 0 auto;
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
			margin-bottom: 60rpx;
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
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_mid-v=1.0.png') repeat-y;
				background-size: 100% 100%;
				.guide-wrap {
					font-size: 32rpx;
					margin-bottom: 22rpx;
					.frame-top {
						margin-bottom: -2px;
					}
					.frame-bot {
						margin-top: -2px;
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
							top: 13.2%;
							left: 174rpx;
						}
						&:nth-of-type(2) {
							top: 13.2%;
							left: 376rpx;
						}
						&:nth-of-type(3) {
							top: 38.2%;
							left: 40rpx;
						}
						&:nth-of-type(4) {
							top: 38.2%;
							left: 510rpx;
						}
						&:nth-of-type(5) {
							top: 63.2%;
							left: 174rpx;
						}
						&:nth-of-type(6) {
							top: 63.2%;
							left: 376rpx;
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
						width: 100%;
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
							height: 38rpx;
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
					.taluo_desc {
						padding: 18rpx 0;
						font-size: 32rpx;
						line-height: 50rpx;
					}
				}
				.lasttitle {
					margin-top: 20rpx;
					font-size: 18px;
					color: #5b00ff;
					font-weight: bold;
					text-align: center;
				}
			}
		}
	}
}
</style>