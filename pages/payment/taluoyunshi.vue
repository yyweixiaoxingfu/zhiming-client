<template>
	<view class="taluo-result">
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
					<view class="price-wrap">
						<view class="project-nam">咨询项目: 未来运势大解密</view>
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
								<view class="time-title">距优惠结束</view>
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
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
			</view>
			
			<block v-if="tarotData.length">
				<view class="content-box">
					<image class="title-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/guide_title.png" mode="widthFix"></image>
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
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_01.png" mode="widthFix"></image>
								<view class="parse-box">
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">爱情观剖析:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_02.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_10.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">新恋情的可能:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_03.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_11.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">命定之人的特征:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_04.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_12.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来感情运势:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_05.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_13.png" mode="widthFix" @click="openPay"></image>
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
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_06.png" mode="widthFix"></image>
								<view class="parse-box">
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">正财和偏财:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_07.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_up_20.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来财运状况:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_14.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_up_21.png" mode="widthFix" @click="openPay"></image>
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
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_10.png" mode="widthFix"></image>
								<view class="parse-box">
									<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/unlock.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">当前工作的发展性:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_11.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_up_30.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
							<view class="explan-box">
								<view class="explan-title">未来事业发展状况:</view>
							</view>
							<view class="card-desc">
								<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/mask_04.png" mode="widthFix"></image>
								<view class="parse-box flex-center">
									<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/item_up_31.png" mode="widthFix" @click="openPay"></image>
								</view>
							</view>
						</view>
					</view>
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
				</view>
			</block>
			
			<view class="content-box">
				<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_top2.png" mode="widthFix"></image>
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
				<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/yunshi/image/border_bot2.png" mode="widthFix"></image>
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
			:orderNo="order_no" model="taluoyunshi"
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
						let tarot_data = res.data.tarot_data
						
						if (tarot_data.length) {
							tarot_data.forEach(item => {
								item.title = item.title.split(' ')[0]
							})
						}
						this.tarotData = tarot_data
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
								url: '/pages/result/taluoyunshi',
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
.taluo-result {
	min-height: 100%;
	background: linear-gradient(to right, #662995 , #60298d);
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
				.price-wrap {
					margin-top: 80rpx;
					.project-nam {
						padding: 12rpx 0;
						color: #fff;
						font-size: 36rpx;
						text-align: center;
						background-color: #c06be4;
						white-space: nowrap;
					}
					.price-content {
						padding: 24rpx 48rpx;
						background-color: #ffffff;
						border: 1px solid #725b49;
						border-top: none;
						display: flex;
						justify-content: space-between;
						.left-box, .right-box {
							height: 132rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
						}
						.left-box {
							.false-price {
								color: #a4a39f;
								font-size: 32rpx;
								.through {
									text-decoration: line-through;
								}
							}
							.true-price {
								.discount {
									margin-right: 6rpx;
									padding: 3rpx 12rpx;
									border-radius: 8rpx;
									color: #fff;
									background-color: #f26c6d;
								}
								.price {
									font-size: 40rpx;
									font-weight: bold;
								}
							}
						}
						.right-box {
							text-align: center;
							.time-title {
							}
							.time-discount {
								text-align: center;
								::v-deep {
									.u-count-down__text {
										color: #f26c66;
										font-size: 32rpx;
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
						color: #f26c66;
					}
				}
				.btn-box {
					margin: 28rpx 0;
					.btn {
						height: 88rpx;
						color: #fff;
						font-size: 38rpx;
						line-height: 88rpx;
						background-color: #349a3e;
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
				.comment-title {
					color: #9647d3;
					font-size: 44rpx;
					font-weight: bold;
					text-align: center;
					.value {
						color: #e35f61;
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
						background-color: #a160d6;
						.value {
							color: #fce558;
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
						border: 1px solid #a160d6;
						color: #a160d6;
						font-size: 28rpx;
						line-height: 60rpx;
					}
				}
				::v-deep {
					#barrage-box .item {
						border-bottom: 1px solid #B9B9B9;
						.top {
							color: #893cc0;
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
