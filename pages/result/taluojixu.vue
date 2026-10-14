<template>
	<view class="taluojixu-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/banner.png" mode="widthFix"></image>
		</view>
		<view class="content-wrap">
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
				<view class="content-panel">
					<image class="main-title" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/main_title.png" mode="widthFix"></image>
					<view class="guide-wrap">
						<view class="guide">
							<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
							<view class="guide-text">你心中的那个人，真的适合你吗？你们能够一起携手到老吗？关于你们能否走到最后，我将根据你所选择的4张牌，给予进一步指引...</view>
						</view>
					</view>
					<view class="card-group">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/card_wall2.png" mode="widthFix"></image>
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
						</block>
					</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
			</view>

			<block v-if="tarotData.length">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/nav_01.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[0].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/zuihou/img/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[0].title }}</text>
									<text class="text">({{ tarotData[0].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[0].des }}</view>
								<view class="explan-title">对方想法:</view>
								<view class="explan-text">{{ tarotData[0].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/nav_02.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[1].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/zuihou/img/num_02.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[1].title }}</text>
									<text class="text">({{ tarotData[1].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[1].des }}</view>
								<view class="explan-title">双方姻缘:</view>
								<view class="explan-text">{{ tarotData[1].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/nav_03.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[2].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/zuihou/img/num_03.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[2].title }}</text>
									<text class="text">({{ tarotData[2].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[2].des }}</view>
								<view class="explan-title">感情阻碍:</view>
								<view class="explan-text">{{ tarotData[2].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/nav_04.png" mode="widthFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[3].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/zuihou/img/num_04.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[3].title }}</text>
									<text class="text">({{ tarotData[3].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">{{ tarotData[3].des }}</view>
								<view class="explan-title">塔罗指引:</view>
								<view class="explan-text">{{ tarotData[3].content }}</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
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
						this.tarotData = res.data.return_data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.taluojixu-detail {
	min-height: 100%;
	background-color: #181210;
	position: relative;
	.banner-box {
		margin-bottom: -846rpx;
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
			width: 580rpx;
			margin-top: -30rpx;
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
				padding: 0 40rpx 88rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_mid-v=1.1.png') repeat-y;
				background-size: 100% 100%;
				.main-title {
					width: 100%;
				}
				.guide-wrap {
					font-size: 32rpx;
					margin-top: 22rpx;
					margin-bottom: 22rpx;
					.guide-text {
						line-height: 1.5;
						text-align: justify;
						.text {
							color: #bc695a;
						}
					}
				}
				.card-group {
					margin-bottom: 12rpx;
					position: relative;
					.tarot-card {
						position: absolute;
						margin-left: -46rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						&:nth-of-type(1) {
							top: 11%;
							left: 50%;
						}
						&:nth-of-type(2) {
							top: 37.2%;
							left: 13%;
						}
						&:nth-of-type(3) {
							top: 37.2%;
							right: 4%;
						}
						&:nth-of-type(4) {
							top: 73.5%;
							left: 50%;
						}
						.img {
							width: 92rpx;
						}
						.card-name {
							color: #783bb0;
							font-size: 30rpx;
						}
						.directional {
							font-size: 22rpx;
						}
					}
				}
				.desc-subtitle {
					margin-bottom: 24rpx;
					text-align: center;
					.subtitle {
						width: 602rpx;
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
				}
			}
		}
	}
}
</style>