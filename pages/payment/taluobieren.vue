<template>
	<view class="taluobieren-result">
		<view class="container">
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
						<view class="price-wrap">
							<view class="project-nam">咨询项目: 塔罗-他心里有别人吗？</view>
							<view class="price-content">
								<image class="img" src="https://base2.tengsytech.com/statics/ffsm/taluo/fuhe/img/price-wall.png" mode="widthFix"></image>
								<view class="wall-content">
									<view class="left-box">
										<view class="false-price">
											<text>原价：</text>
											<text class="through">￥88.89</text>
										</view>
										<view class="true-price">
											<text class="discount">限时价</text>
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
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
				</view>
				
				<block v-if="tarotData.length">
					<view class="content-box">
						<image class="title-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/previewtitle.png" mode="widthFix"></image>
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
									<view class="explan-title">象征意义:</view>
									<!-- <view class="explan-text">你抽到的是一张正位的月亮牌，这是大阿...</view>
									<view class="explan-title">牌面理解:</view>
									<view class="explan-text">月亮是人类心灵中原始的无意识恐惧，这种求生本能的恐惧记忆储存在我们的细胞中，...</view> -->
								</view>
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry01.png" mode="widthFix"></image>
									<view class="parse-box">
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry02.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">TA对你是什么感觉？</view>
											<view class="item">你们之间存在什么问题？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry03.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">TA心里有你吗？</view>
											<view class="item">TA为什么越来越冷淡？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry04.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">TA心里是否有了别人？</view>
											<view class="item">究竟是什么让你不安？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry05.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">你应该怎样把握这段关系？</view>
											<view class="item">主动出击还是矜持为佳？</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
								<view class="card-desc">
									<image class="blur-img" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/blurry06.png" mode="widthFix"></image>
									<view class="parse-box">
										<view class="parse-list">
											<view class="item">专业占卜师建议</view>
											<view class="item">让你占据TA的心！</view>
										</view>
										<image class="start-btn-mid" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/unlock.png" mode="widthFix" @click="openPay"></image>
									</view>
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
				<view class="content-box">
					<image class="img border-top" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_top.png" mode="widthFix"></image>
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
					<image class="img border-bot" src="https://base2.tengsytech.com/statics/ffsm/taluo/aiqing/img/border_bot.png" mode="widthFix"></image>
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
			:orderNo="order_no" model="taluobieren"
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
								url: '/pages/result/taluobieren',
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
.taluobieren-result {
	.container {
		background-color: #2c1946;
	}
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
				.price-wrap {
					margin-top: 22rpx;
					.project-nam {
						padding: 12rpx 0;
						color: #7f57a5;
						font-size: 40rpx;
						font-weight: bold;
						text-align: center;
						white-space: nowrap;
					}
					.price-content {
						position: relative;
						.wall-content {
							position: absolute;
							top: 0;
							left: 0;
							z-index: 2;
							box-sizing: border-box;
							width: 100%;
							height: 100%;
							padding: 40rpx 64rpx 0 19rpx;
							display: flex;
							align-items: center;
							justify-content: space-between;
						}
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
								display: flex;
								justify-content: space-between;
								.through {
									text-decoration: line-through;
								}
							}
							.true-price {
								display: flex;
								align-items: center;
								justify-content: space-between;
								.discount {
									margin-right: 6rpx;
									padding: 3rpx 12rpx;
									border-radius: 8rpx;
									color: #fff;
									background-color: #f2753d;
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
										color: #f2753d;
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
								margin: 58rpx auto 0;
								padding: 18rpx 12rpx;
								border-radius: 8rpx;
								border: 1px solid #bb7117;
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
								margin-top: 80rpx;
								width: 464rpx;
							}
							.item-img {
								width: 100%;
							}
						}
					}
				}
				.lasttitle {
					margin-top: 20rpx;
					font-size: 18px;
					color: #5b00ff;
					font-weight: bold;
					text-align: center;
				}
				.comment-title {
					color: #715ae4;
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
						background-color: #8c76e5;
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
						border: 1px solid #fad1ba;
						background-color: #fad1ba;
						color: #333;
						font-size: 28rpx;
						line-height: 60rpx;
					}
				}
				::v-deep {
					#barrage-box .item {
						border-bottom: 1px solid #B9B9B9;
						.top {
							color: #8749E3;
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
