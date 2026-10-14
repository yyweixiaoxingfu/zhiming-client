<template>
	<view class="taluoyunshi-detail">
		<view class="banner-box">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/banner.png" mode="widthFix"></image>
		</view>
		<view class="content-wrap">
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_top2.png" mode="widthFix"></image>
				<view class="content-panel">
					<view class="guide-wrap">
						<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
						<view class="guide-text">运势决定了未来人生的走向，而预知运网势发展能够让我们避免坎坷、掌握好运。关于你未来的运势，我将根据你所选择的3张牌，给予进一步指引...</view>
					</view>
					<view class="card-group">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/card_wall.png" mode="widthFix"></image>
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
						</block>
					</view>
				</view>
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
			</view>
			
			<block v-if="tarotData.length">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_top2.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/nav_01.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[0].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/num_01.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[0].title }}</text>
									<text class="text">({{ tarotData[0].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面解析:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[0].des"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">爱情观剖析:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[0].c1"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">新恋情的可能:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[0].c2"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">命定之人的特征:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[0].c3"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来感情运势:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[0].c4"></u-parse>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
				</view>
				<view class="content-box cash">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_top2.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/nav_02.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[1].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/num_02.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[1].title }}</text>
									<text class="text">({{ tarotData[1].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面解析:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[1].des"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">正财和偏财:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[1].c1"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来财运状况:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[1].c2"></u-parse>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
				</view>
				<view class="content-box cause">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_top2.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="desc-subtitle">
							<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/nav_03.png" mode="heightFix"></image>
						</view>
						<view class="tarot-box">
							<view class="card-image">
								<image class="image" :src="tarotData[2].img" mode="widthFix"></image>
							</view>
							<view class="card-intro">
								<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/num_03.png" mode="aspectFill"></image>
								<view class="name">
									<text>{{ tarotData[2].title }}</text>
									<text class="text">({{ tarotData[2].zf == 1 ? '正位' : '逆位' }})</text>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">牌面解析:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[2].des"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">当前工作的发展性:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[2].c1"></u-parse>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来事业发展状况:</view>
								<view class="explan-text">
									<u-parse :content="tarotData[2].c2"></u-parse>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
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
.taluoyunshi-detail {
	min-height: 100%;
	background: linear-gradient(to right, #662995 , #60298d);
	position: relative;
	.banner-box {
		margin-bottom: -174rpx;
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
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_mid2-v=1.3.png') repeat-y;
				background-size: 100% 100%;
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
							top: 12%;
							left: 50%;
						}
						&:nth-of-type(2) {
							top: 50%;
							left: 15%;
						}
						&:nth-of-type(3) {
							top: 50%;
							right: 5.3%;
						}
						.img {
							width: 120rpx;
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
						height: 116rpx;
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
							height: 28rpx;
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
							.start-btn-mid {
								margin-top: 56rpx;
								width: 550rpx;
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