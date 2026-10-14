<template>
	<view class="taluojixu-result">
		<view class="container">
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
						<view class="price-wrap">
							<view class="project-nam">咨询项目: 你和TA该继续吗？</view>
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
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="title-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/guide_title.png" mode="widthFix"></image>
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
							<!-- <view class="explan-box">
								<view class="explan-title">象征意义:</view>
								<view class="explan-text">敏感、安全感、沟通、潜在的问题</view>
								<view class="explan-title">对方想法:</view>
								<view class="explan-text">你抽到的是一张正位的恋人牌，牌面中央的拉斐尔天使祝福着身前的恋人，而恋人们彼...</view>
							</view> -->
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/blurry_01.png" mode="widthFix"></image>
								<view class="parse-box">
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
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
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/blurry_02.png" mode="widthFix"></image>
								<view class="parse-box">
									<view class="parse-list">
										<view class="item">对方心里有你吗？</view>
										<view class="item">你的付出值得吗？</view>
										<view class="item">你们之间<text class="value">真的合适吗</text>？</view>
									</view>
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
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
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/blurry_03.png" mode="widthFix"></image>
								<view class="parse-box">
									<view class="parse-list">
										<view class="item">你们的感情<text class="value">会有什么阻碍</text>？</view>
										<view class="item">你会因此失去TA吗？</view>
										<view class="item">应当如何面对这些阻碍？</view>
									</view>
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
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
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/blurry_04.png" mode="widthFix"></image>
								<view class="parse-box">
									<view class="parse-list">
										<view class="item">你们的感情能够维持多久？</view>
										<view class="item">你们的关系还能否更进一步？</view>
										<view class="item">你们还<text class="value">应该继续走下去吗</text>？</view>
									</view>
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
				</view>
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_top.png" mode="widthFix"></image>
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
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/jixu/image/border_bot.png" mode="widthFix"></image>
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
			:orderNo="order_no" model="taluojixu"
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
								url: '/pages/result/taluojixu',
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
.taluojixu-result {
	.container {
		background-color: #181210;
	}
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
				padding: 0 40rpx;
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
				.price-wrap {
					margin-top: 138rpx;
					.project-nam {
						padding: 12rpx 0;
						color: #fff;
						font-size: 36rpx;
						text-align: center;
						background: #db797a;
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
								margin: 80rpx auto 0;
								padding: 16rpx 12rpx;
								border-radius: 8rpx;
								border: 1px solid #c55353;
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
										background-color: #c55353;
										transform: rotate(45deg);
										position: absolute;
										left: 2rpx;
										top: 18rpx;
									}
									.value {
										color: #c55353;
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
						}
					}
				}
				.comment-title {
					color: #6a4025;
					font-size: 44rpx;
					font-weight: bold;
					text-align: center;
					.value {
						color: #ba5657;
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
						background-color: #7c6253;
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
						border: 1px solid #7c6253;
						color: #7c6253;
						font-size: 28rpx;
						line-height: 60rpx;
					}
				}
				::v-deep {
					#barrage-box .item {
						border-bottom: 1px solid #B9B9B9;
						.top {
							color: #7c6253;
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
