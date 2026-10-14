<template>
	<view class="xingzuo-page">
		<view class="container">
			<view class="banner-box">
				<image class="banner-bg" :src="pageContent.img1" mode="widthFix"></image>
				<view class="meteors">
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
					<view class="meteor"></view>
				</view>
				<view class="banner-content">
					<view class="switch-wrap">
						<view class="star-box">
							<text>当前星座:</text>
							<text class="value">{{ constellation }}</text>
						</view>
						<button class="btn" @click="popupShow = true">更换星座 ></button>
					</view>
					<view class="box">
						<image class="xinzuo-name" :src="xinzuoName" mode="widthFix"></image>
						<image class="banner" :src="pageContent.img2" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="btn-box" id="btnBox1" @click="goXuanze">
				<view class="btn">
					<image class="bg" :src="pageContent.img3" mode="widthFix"></image>
					<view class="text">立即分析{{ constellation }}运势</view>
				</view>
			</view>
			<view class="trouble-wrap">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="comment-wrap">
				<view class="comment-box">
					<view class="title">
						<text class="text">已爲超过</text>
						<text class="num">12万</text>
						<text class="text">人提供运势指引</text>
					</view>
					<view class="detail-data">
						<view class="data-item">
							<text>已测算人数: </text>
							<text class="value">1369362</text>
						</view>
						<view class="data-item">
							<text>好评率: </text>
							<text class="value">99.8%</text>
						</view>
					</view>
					<view class="labels">
						<view class="item">非常有用(2500)</view>
						<view class="item">符合现状(4185)</view>
						<view class="item">超级准(5210)</view>
						<view class="item">五星好评(2408)</view>
						<view class="item">具体(64543)</view>
					</view>
					<barrage-box :list="barrageList"></barrage-box>
				</view>
			</view>
			<view class="guide-wrap">
				<view class="guide-box">
					<view class="title">{{ systemConfigData.system_year }}年365天的</view>
					<view class="guide-labels">
						<view class="label">婚恋桃花</view>
						<view class="label">材富增长</view>
						<view class="label">升职加薪</view>
					</view>
					<view class="guide-desc">
						<text>只需</text>
						<text class="value">1分钟</text>
						<text>,详细解析立即获取</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-btn" v-if="showBotBtn">
			<view class="btn" @click="goXuanze">
				<image class="bg" :src="pageContent.img3" mode="widthFix"></image>
				<view class="text">立即分析{{ constellation }}运势</view>
			</view>
		</view>
		
		<u-popup :show="popupShow" mode="center" round="16rpx" closeable closeIconColor="#fff" :safeAreaInsetBottom="false" @close="popupShow = false">
			<view class="popuo-box">
				<view class="banner-box">
					<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/banner-v=1.0.png" mode="widthFix"></image>
					<view class="content">
						<view class="title">选择星座</view>
						<view class="text">查看对应星座的{{ systemConfigData.system_year }}运势</view>
					</view>
				</view>
				<view class="content-box">
					<view class="alert-item" v-for="(itm, idx) in constellations" :key="idx">
						<view class="item" @click="constellationChange(itm)">
							<image class="image" :src="itm.icon" mode="aspectFill"></image>
							<view class="name">{{ itm.xz }}</view>
							<view class="time">{{ itm.se_date }}</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { getDetailsInfo, starsListInfo, confirmOrder } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'
	
	export default {
		data () {
			return {
				popupShow: true,
				xinzuoName: '',
				xinzuoId: '',
				constellation: '白羊座',
				constellations: [],
				
				btnBottom: 0,
				showBotBtn: false,
				scrollTop: 0,
				
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {
					desc3: '',
					label_total: [],
				},
				hotList: [],
				expertList: [],
				barrageList: [],
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		onReady () {
			const query = uni.createSelectorQuery().in(this);
			query.select('#btnBox1').boundingClientRect((data) => {
				this.btnBottom = data.bottom
			}).exec()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			this.scrollTop = scrollTop
			
			if (scrollTop > this.btnBottom) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
						
						this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
						
						this.hotList = groupArray(res.data.rec_pro_data, 8)
						this.expertList = groupArray(res.data.rec_expert_data, 8)
					}
				})
				
				starsListInfo().then(res => {
					if (res.code == 1) {
						this.constellations = res.data
						
						this.xinzuoId = res.data[0].id
						this.xinzuoName = res.data[0].text_icon
						this.constellation = res.data[0].xz
					}
				})
			},
			constellationChange (item) {
				this.xinzuoId = item.id
				this.xinzuoName = item.text_icon
				this.constellation = item.xz
				
				this.popupShow = false
			},
			goXuanze () {
				let form = {
					stars_data: this.xinzuoId
				}
				
				uni.showLoading({ mask: true })
				confirmOrder({
					link_id: this.link_id,
					cate_type: this.cate_type,
					cs_data: JSON.stringify(form),
					cid: this.cid,
					order_type: '1'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						let order_no = res.data.order_no
							
						uni.$u.route({
							url: '/pages/index/xingzuointerim',
							params: {
								order_no: order_no,
								name: this.constellation,
								id: this.xinzuoId,
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.xingzuo-page {
	min-height: 100%;
	background-color: #1c1934;
	.container {
		padding-bottom: 60rpx;
		.banner-box {
			position: relative;
			.banner-bg {
				width: 100%;
			}
			.meteors {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
				overflow: hidden;
				pointer-events: none;
				.meteor {
					display: block;
					width: 2px;
					background: transparent;
					position: relative;
					opacity: 0;
					animation: star-fall 3s linear infinite;
					&::after {
						content: '';
						display: block;
						border: 0px solid #fff;
						border-width: 0px 90px 2px 90px;
						border-color: transparent transparent transparent rgba(255, 255, 255, .5);
						box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
						transform: rotate(-45deg) translate3d(1px, 3px, 0);
						transform-origin: 0% 100%;
					}
					&:nth-child(1) {
						top: 696rpx;
						left: 63%;
						animation-delay: 0s;
					}
					&:nth-child(2) {
						top: 174rpx;
						left: 69%;
						animation-delay: 0.8s;
					}
					&:nth-child(3) {
						top: 232rpx;
						left: 59%;
						animation-delay: 1.6s;
					}
					&:nth-child(4) {
						top: 232rpx;
						left: 47%;
						animation-delay: 2.4s;
					}
					&:nth-child(5) {
						top: 348rpx;
						left: 63%;
						animation-delay: 3.2s;
					}
					&:nth-child(6) {
						top: 232rpx;
						left: 64%;
						animation-delay: 4s;
					}
					&:nth-child(7) {
						top: -116rpx;
						left: 98%;
						animation-delay: 0s;
					}
					&:nth-child(8) {
						top: 522rpx;
						left: 75%;
						animation-delay: 5.6s;
					}
					&:nth-child(9) {
						top: -58rpx;
						left: 106%;
						animation-delay: 6.4s;
					}
					&:nth-child(10) {
						top: 232rpx;
						left: 44%;
						animation-delay: 7.2s;
					}
				}
			}
			.banner-content {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				z-index: 3;
				text-align: center;
				.switch-wrap {
					padding: 32rpx 23rpx 46rpx 23rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.star-box {
						color: #FFFFFF;
						font-size: 36rpx;
						.value {
							color: #f5ed64;
						}
					}
					.btn {
						margin: 0;
						padding: 0;
						border-radius: 62rpx;
						width: 232rpx;
						height: 62rpx;
						color: #2b294c;
						font-size: 32rpx;
						font-weight: bold;
						line-height: 62rpx;
						background-color: #16fce9;
					}
				}
				.box {
					position: relative;
					.xinzuo-name {
						width: 348rpx;
						height: 76rpx;
						position: absolute;
						top: 0;
						left: 50%;
						z-index: 4;
						transform: translateX(-50%);
					}
					.banner {
						width: 85%;
					}
				}
			}
		}
		.btn-box {
			margin-top: 58rpx;
			padding: 0 54rpx;
			.btn {
				width: 100%;
				animation: btnAnimate 1.5s linear infinite;
				position: relative;
				.bg {
					width: 100%;
				}
				.text {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					z-index: 2;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #7f2e0d;
					font-size: 46rpx;
					font-weight: bold;
				}
			}
		}
		.trouble-wrap {
			margin-top: 66rpx;
			padding: 0 22rpx;
		}
		.comment-wrap {
			margin-top: 66rpx;
			padding: 0 22rpx;
			.comment-box {
				padding: 22rpx 34rpx;
				border-radius: 22rpx;
				background-color: #1f1e3e;
				.title {
					margin-top: 12rpx;
					font-size: 48rpx;
					font-weight: bold;
					text-align: center;
					background-image: linear-gradient(0deg, rgb(115, 110, 255), rgb(255, 255, 255));
					background-clip: text;
					color: transparent;
					.num {
						color: #f5ed64;
					}
				}
				.detail-data {
					margin: 34rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.data-item {
						padding: 12rpx 22rpx;
						border-radius: 12rpx;
						color: #fff;
						font-size: 32rpx;
						background-color: #4c4c8a;
						.value {
							color: #f5ed64;
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
						border: 1px solid #44407a;
						color: #fff;
						font-size: 28rpx;
						line-height: 60rpx;
					}
				}
				
				::v-deep {
					#barrage-box .item {
						border-bottom: 1px solid #38365e;
						.top {
							color: #fea06a;
						}
					}
				}
			}
		}
		.guide-wrap {
			margin-top: 66rpx;
			padding: 0 22rpx;
			.guide-box {
				padding: 26rpx 38rpx;
				border-radius: 22rpx;
				background-color: #1f1e3e;
				display: flex;
				flex-direction: column;
				align-items: center;
				.title {
					margin: 22rpx 0 34rpx;
					font-size: 18px;
					font-weight: bold;
					color: #FFFFFF;
				}
				.guide-labels {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 22rpx;
					margin-bottom: 34rpx;
					.label {
						padding: 6rpx 16rpx;
						border-radius: 58rpx;
						border: 1rpx solid #f5ed64;
						color: #f5ed64;
						font-size: 32rpx;
					}
				}
				.guide-desc {
					color: #fff;
					font-size: 36rpx;
					.value {
						color: #16f7e7;
						font-size: 44rpx;
						font-weight: bold;
					}
				}
			}
		}
	}
	.bottom-btn {
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 50;
		margin: 0;
		padding: 0 40rpx;
		height: 130rpx;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			flex: 1;
			animation: btnAnimate 1.5s linear infinite;
			position: relative;
			.bg {
				width: 100%;
			}
			.text {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #7f2e0d;
				font-size: 46rpx;
				font-weight: bold;
			}
		}
	}
	
	.popuo-box {
		width: 696rpx;
		.banner-box {
			position: relative;
			.banner {
				width: 100%;
			}
			.content {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 2;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: #fff;
				.title {
					font-size: 40rpx;
					line-height: 1.5;
				}
				.text {
					font-size: 32rpx;
					line-height: 1.5;
				}
			}
		}
		.content-box {
			padding: 24rpx 0;
			display: flex;
			flex-wrap: wrap;
			.alert-item {
				box-sizing: border-box;
				width: 25%;
				padding: 16rpx 22rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.item {
					text-align: center;
					.image {
						width: 116rpx;
						height: 116rpx;
						border-radius: 50%;
						margin-bottom: 10rpx;
					}
					.name {
						color: #232323;
						font-size: 28rpx;
						line-height: 1.5;
					}
					.time {
						color: #232323;
						font-size: 24rpx;
						line-height: 1.5;
					}
				}
			}
		}
	}
}
</style>
