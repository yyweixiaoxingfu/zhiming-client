<template>
	<view class="taluofenshou-result">
		<view class="container">
			<view class="banner-box">
				<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/banner.png" mode="widthFix"></image>
			</view>
			<view class="content-wrap">
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="guide-wrap">
							<view class="guide">
								<view class="guide-text">亲爱的<text class="text">测试者</text>：</view>
								<view class="guide-text">
									你抽到的每张塔罗牌，都有着神圣且独特的意义！接下来，我将透过你所选择的
									<text class="text">4张牌</text>
									，揭示你和昔日的爱人是否应该分手...
								</view>
							</view>
						</view>
						<view class="card-group">
							<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/card_wall.png" mode="widthFix"></image>
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
						<view class="price-wrap">
							<view class="project-nam">咨询项目: 你和TA该分手吗？</view>
							<view class="price-content">
								<view class="left-box">
									<view class="false-price">
										<text>原价：</text>
										<text class="through">￥88.89</text>
									</view>
									<view class="true-price">
										<text class="discount">限时优惠</text>
										<text class="price">￥19.9</text>
									</view>
								</view>
								<view class="right-box">
									<view class="time-title">距离优惠结束</view>
									<view class="time-discount">
										<u-count-down :time="1200000" format="HH:mm:ss"></u-count-down>
									</view>
								</view>
							</view>
						</view>
						<view class="user-count">
							<view>
								<text>已有</text>
								<text class="value">1384938</text>
								<text>人测算</text>
							</view>
							<view>
								<text>好评率: </text>
								<text class="value">99.8%</text>
							</view>
						</view>
						<view class="btn-box">
							<button class="btn" @click="openPay">立即支付</button>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
				</view>
				
				<block v-if="tarotData.length">
					<view class="content-box">
						<image class="title-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/guide_title.png" mode="widthFix"></image>
						<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
						<view class="content-panel">
							<view class="desc-subtitle">
								<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/nav_01.png" mode="widthFix"></image>
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
									<view class="explan-title">对方想法:</view>
									<!-- <view class="explan-text">你抽到的是一张逆位的高塔牌，高塔逆位时国王和皇后又重新回到了高塔之中，但是压...</view> -->
								</view>
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/blurry_01.png" mode="widthFix"></image>
									<view class="parse-box">
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
								</view>
							</view>
						</view>
						<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
					</view>
					<view class="content-box">
						<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
						<view class="content-panel">
							<view class="desc-subtitle">
								<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/nav_02.png" mode="widthFix"></image>
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
									<view class="explan-title">感情现状:</view>
								</view>
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/blurry_02.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">目前感情还有挽回的必要吗？</view>
											<view class="item">感情的根本问题到底在哪？</view>
											<view class="item">为什么总是付出得不到回报？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
								</view>
							</view>
						</view>
						<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
					</view>
					<view class="content-box">
						<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
						<view class="content-panel">
							<view class="desc-subtitle">
								<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/nav_03.png" mode="widthFix"></image>
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
									<view class="explan-title">是否分手:</view>
								</view>
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/blurry_03.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">你们的感情走向会如何？</view>
											<view class="item">是否还会在一起？</view>
											<view class="item">到底应该分手吗？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
								</view>
							</view>
						</view>
						<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
					</view>
					<view class="content-box">
						<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
						<view class="content-panel">
							<view class="desc-subtitle">
								<image class="subtitle" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/nav_04.png" mode="widthFix"></image>
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
									<view class="explan-title">塔罗指引:</view>
								</view>
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/blurry_04.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">如何调整自己当下的心态？</view>
											<view class="item">如何改善你们当前的相处模式？</view>
											<view class="item">怎样改变消极的感情现状？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
								</view>
							</view>
						</view>
						<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
					</view>
				</block>
				
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_top.png" mode="widthFix"></image>
					<view class="content-panel">
						<view class="comment-title">
							<text>{{ pageContent.comment_title }}</text>
						</view>
						<view class="detail-data">
							<view class="data-item">
								<text>已测算人数: </text>
								<text class="value">{{ pageContent.cs_count }}</text>
							</view>
							<view class="data-item">
								<text>好评率: </text>
								<text class="value">{{ pageContent.g_comment_rate }}</text>
							</view>
						</view>
						<view class="labels">
							<view class="item" v-for="(item, index) in pageContent.label_total" :key="index">{{ item }}</view>
						</view>
						<barrage-box :list="barrageList"></barrage-box>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_bot.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<view class="hot-box" v-if="hotList.length">
			<view class="title-box">
				<image class="img" src="https://base2.tengsytech.com/statics/img/rmyc.png" mode="aspectFill"></image>
			</view>
			<hot-list :list="hotList"></hot-list>
		</view>
		<u-back-top
			:scroll-top="scrollTop"
			icon="arrow-up" right="10"
			:customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
			:iconStyle="{ color: '#fff', fontWeight: 'bold' }"
		></u-back-top>
		
		<pay-popup
			:show="payShow"
			:price="payContent.pay_price"
			:orderNo="order_no" model="taluofenshou"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getDetailsInfo, tarotInfo, getOrderFind, initiatePay } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'

	export default {
		data () {
			return {
				pageContent: {
					desc3: '',
					label_total: [],
				},
				barrageList: [],
				hotList: [],
				
				scrollTop: 0,
				payShow: false,
				
				order_no: '',
				cate_type: '',
				link_id: '',
				
				tarotData: [],
				
				payContent: {},
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			this.scrollTop = scrollTop
		},
		methods: {
			initData () {
				tarotInfo({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.tarotData = res.data.tarot_data
					}
				})
				
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.pageContent = res.data.p_content
						this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
						this.hotList = groupArray(res.data.rec_pro_data, 8)
					}
				})
				
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.payContent = res.data
					}
				})
			},
			openPay () {
				this.payShow = true
			},
			payConfirm () {
				uni.showLoading({ mask: true })
				initiatePay({
					target: this.order_no,
					target_type: 'CS',
					pay_type: 'frequency'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						this.payShow = false
						
						setTimeout(() => {
							uni.$u.route({
								type: 'redirectTo',
								url: '/pages/result/taluozuihou',
								params: {
									order_no: this.order_no,
								}
							})
						}, 200)
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.taluofenshou-result {
	.container {
		background-color: #3a2d30;
	}
	.banner-box {
		margin-bottom: -232rpx;
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
				background: url('https://base2.tengsytech.com/statics/ffsm/taluo/fenshou/img/border_mid.png') repeat-y;
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
						margin-left: -58rpx;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						&:nth-of-type(1) {
							top: 9.8%;
							left: 50%;
						}
						&:nth-of-type(2) {
							top: 40%;
							left: 13%;
						}
						&:nth-of-type(3) {
							top: 40%;
							right: 4%;
						}
						&:nth-of-type(4) {
							top: 74.5%;
							left: 50%;
						}
						.img {
							width: 116rpx;
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
				.price-wrap {
					margin-top: 138rpx;
					.project-nam {
						padding: 12rpx 0;
						color: #fff;
						font-size: 36rpx;
						text-align: center;
						background: #a5717d;
						white-space: nowrap;
					}
					.price-content {
						padding: 22rpx 46rpx;
						background-color: #fffbed;
						border: 1px solid #d2d1d1;
						display: flex;
						justify-content: space-between;
						.left-box, .right-box {
							height: 132rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						}
						.left-box {
							width: 290rpx;
							.false-price {
								color: #a4a39f;
								font-size: 32rpx;
								.through {
									text-decoration: line-through;
								}
							}
							.true-price {
								display: flex;
								align-items: center;
								.discount {
									margin-right: 6rpx;
									padding: 3rpx 12rpx;
									border-radius: 8rpx;
									color: #fff;
									background-color: #f47241;
								}
								.price {
									font-size: 40rpx;
									font-weight: bold;
								}
							}
						}
						.right-box {
							.time-discount {
								::v-deep {
									.u-count-down__text {
										color: #fa6f46;
										font-size: 32rpx;
										text-align: right;
									}
								}
							}
						}
					}
				}
				.user-count {
					margin-top: 6rpx;
					padding: 6rpx;
					font-size: 30rpx;
					display: flex;
					justify-content: space-between;
					.value {
						color: #eb5e2c;
					}
				}
				.btn-box {
					margin: 28rpx 0;
					.btn {
						height: 88rpx;
						color: #fff;
						font-size: 38rpx;
						line-height: 88rpx;
						background-color: #45b850;
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
								margin: 58rpx auto 0;
								padding: 10rpx 12rpx;
								border-radius: 8rpx;
								border: 1px solid #8d5765;
								width: 90%;
								background-color: #fff;
								.item {
									padding-left: 30rpx;
									font-size: 30rpx;
									line-height: 50rpx;
									text-align: left;
									position: relative;
									&::before {
										content: '';
										display: flex;
										width: 14rpx;
										height: 14rpx;
										background-color: #8d5765;
										transform: rotate(45deg);
										position: absolute;
										left: 2rpx;
										top: 18rpx;
									}
									.value {
										color: #8d5765;
									}
								}
							}
							.start-btn-mid {
								margin-top: 80rpx;
								width: 550rpx;
							}
							.item-img {
								width: 100%;
							}
						}
					}
				}
				.comment-title {
					color: #9d606f;
					font-size: 44rpx;
					font-weight: bold;
					text-align: center;
					.value {
						color: #cf625d;
					}
				}
				.detail-data {
					margin: 34rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-around;
					.data-item {
						height: 60rpx;
						padding: 0 16rpx;
						border-radius: 12rpx;
						color: #fff;
						font-size: 32rpx;
						line-height: 60rpx;
						background-color: #9d606f;
						.value {
							color: #ffe65b;
						}
					}
				}
				.labels {
					margin-bottom: 20rpx;
					display: flex;
					flex-wrap: wrap;
					gap: 12rpx;
					.item {
						padding: 0 10rpx;
						border-radius: 60rpx;
						border: 1px solid #9d606f;
						color: #9d606f;
						font-size: 28rpx;
						line-height: 60rpx;
					}
				}
				::v-deep {
					#barrage-box .item {
						border-bottom: 1px solid #B9B9B9;
						.top {
							color: #9d606f;
						}
					}
				}
			}
		}
	}
	
	.hot-box {
		padding: 40rpx 0;
		background-color: #fff;
		.title-box {
			margin-bottom: 20rpx;
			text-align: center;
			.img {
				width: 260rpx;
				height: 68rpx;
			}
		}
	}
}
</style>
