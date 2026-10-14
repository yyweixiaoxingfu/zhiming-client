<template>
	<view class="xingzuo-result">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/banner_2.png" mode="widthFix"></image>
			<view class="content">
				<view class="switch-wrap">
					<view class="star-box">
						<text>当前星座:</text>
						<text class="value">{{ constellation }}</text>
					</view>
					<!-- <button class="btn" @click="popupShow = true">更换星座 ></button> -->
				</view>
				<image class="xinzuo-name" :src="xinzuoName" mode="widthFix"></image>
			</view>
		</view>
		<view class="pay-wrap">
			<view class="pay-box">
				<image class="guide-text" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/guide_text.png" mode="widthFix"></image>
				<view class="price-box">
					<view class="left-box">
						<view class="false-price">
							<text>原价：</text>
							<text class="through">￥138.9</text>
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
				<button class="btn" id="btnBox1" @click="payShow = true">立即支付</button>
			</view>
		</view>
		<view class="title-wrap">
			<image class="iamge" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/guide_title.png" mode="widthFix"></image>
		</view>
		<view class="items-wrap love-wrap">
			<view class="items-box">
				<view class="items-title">{{ systemConfigData.system_year }}爱情运势详解</view>
				<view class="month-wrap">
					<view class="rate-box">
						<text class="rate-title">综合评分：</text>
						<u-rate count="5" :value="4" inactiveIcon="star-fill" activeColor="#e6727a" inactiveColor="#3c3b60"></u-rate>
					</view>
					<image class="month-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/month_love.png" mode="widthFix"></image>
				</view>
				<view class="item-box">
					<view class="item">
						<view class="item-title">你的感情态度：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_01.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">单身桃花运势：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_02.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">情侣感情运势：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_03.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="items-wrap cash-wrap">
			<view class="items-box">
				<view class="items-title">{{ systemConfigData.system_year }}财富运势详解</view>
				<view class="month-wrap">
					<view class="rate-box">
						<text class="rate-title">综合评分：</text>
						<u-rate count="5" :value="4.5" allowHalf inactiveIcon="star-fill" activeColor="#e2cb7d" inactiveColor="#3c3b60"></u-rate>
					</view>
					<image class="month-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/month_cash.png" mode="widthFix"></image>
				</view>
				<view class="item-box">
					<view class="item">
						<view class="item-title">财运总评：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_04.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">投资状况：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_05.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">支出详解：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_06.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="items-wrap job-wrap">
			<view class="items-box">
				<view class="items-title">{{ systemConfigData.system_year }}事业运势详解</view>
				<view class="month-wrap">
					<view class="rate-box">
						<text class="rate-title">综合评分：</text>
						<u-rate count="5" :value="4" allowHalf inactiveIcon="star-fill" activeColor="#e2cb7d" inactiveColor="#6ebdfb"></u-rate>
					</view>
					<image class="month-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/month_job.png" mode="widthFix"></image>
				</view>
				<view class="item-box">
					<view class="item">
						<view class="item-title">事业运势总评：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_07.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">工作学习情况：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_08.png" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="item-title">职场学业发展：</view>
						<image class="item-img" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/item_09.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bottom-btn" v-if="showBotBtn">
			<view class="btn" @click="payShow = true">查看完整解析( ￥19.9 )</view>
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
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="xingzuo"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { starsListInfo, getOrderFind, getDetailsInfo, initiatePay } from '@/api/api.js'

	export default {
		data () {
			return {
				popupShow: false,
				xinzuoName: '',
				xinzuoId: '',
				constellation: '白羊座',
				constellations: [],
				
				btnBottom: 0,
				showBotBtn: false,
				scrollTop: 0,
				
				payShow: false,
				
				pageContent: {
					submit_data: {},
				},
				order_no: '',
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			this.constellation = options.name
			this.xinzuoId = options.id
			
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
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.pageContent = res.data
					}
				})
				
				starsListInfo().then(res => {
					if (res.code == 1) {
						this.constellations = res.data
						
						const xingzuo = this.constellations.find((item => {
							return item.id == this.xinzuoId
						}))
						if (xingzuo) {
							this.xinzuoName = xingzuo.text_icon
							this.constellation = xingzuo.xz
						}
					}
				})
			},
			constellationChange (item) {
				this.xinzuoName = item.text_icon
				this.constellation = item.xz
				
				this.popupShow = false
			},
		}
	}
</script>

<style lang="scss">
.xingzuo-result {
	min-height: 100%;
	background-color: #201e3e;
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
			z-index: 2;
			.switch-wrap {
				padding: 28rpx 22rpx;
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
			.xinzuo-name {
				display: block;
				margin: 0 auto;
				width: 348rpx;
				height: 76rpx;
			}
		}
	}
	.pay-wrap {
		margin-top: -28rpx;
		padding: 0 22rpx;
		position: relative;
		z-index: 2;
		.pay-box {
			padding: 32rpx;
			border-radius: 22rpx;
			border: 4rpx solid #524f7e;
			background-color: #29264c;
			.guide-text {
				width: 100%;
			}
			.price-box {
				margin-top: 44rpx;
				margin-bottom: 32rpx;
				padding: 22rpx 32rpx;
				border-radius: 12rpx;
				border: 2rpx solid #4e4890;
				background-color: #302e5f;
				display: flex;
				align-items: center;
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
						color: #9c9ea3;
						font-size: 32rpx;
						.through {
							text-decoration: line-through;
						}
					}
					.true-price {
						display: flex;
						align-items: center;
						justify-content: space-between;
						color: #fff;
						.discount {
							margin-right: 6rpx;
							padding: 3rpx 12rpx;
							border-radius: 8rpx;
							background-color: #fd5757;
						}
						.price {
							font-size: 40rpx;
							font-weight: bold;
						}
					}
				}
				.right-box {
					color: #fff;
					.time-discount {
						::v-deep {
							.u-count-down__text {
								color: #d19042;
								font-size: 36rpx;
								text-align: right;
							}
						}
					}
				}
			}
			.btn {
				height: 92rpx;
				color: #fff;
				font-size: 32rpx;
				line-height: 92rpx;
				background-color: #349a3e;
			}
		}
	}
	.title-wrap {
		padding: 46rpx 22rpx;
		.iamge {
			width: 100%;
		}
	}
	.items-wrap {
		padding: 0 22rpx;
		margin-bottom: 68rpx;
		font-size: 36rpx;
		&.love-wrap {
			color: #e6727a;
			.items-title {
				border: 1px solid #e6727a;
			}
		}
		&.cash-wrap {
			color: #e2cb7d;
			.items-title {
				border: 1px solid #e2cb7d;
			}
		}
		&.job-wrap {
			color: #6ebdfb;
			.items-title {
				border: 1px solid #6ebdfb;
			}
		}
		.items-box {
			padding: 22rpx;
			border-radius: 22rpx;
			border: 4rpx solid #524f7e;
			background-color: #29264c;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			.items-title {
				font-size: 40rpx;
				font-weight: bold;
				margin-top: 10rpx;
				margin-bottom: 46rpx;
				padding: 8rpx 34rpx;
				border-radius: 58rpx;
			}
			.month-wrap {
				width: 100%;
				margin-bottom: 34rpx;
				.rate-box {
					margin-bottom: 22rpx;
					display: flex;
					align-items: center;
					.rate-title {
						margin-right: 10rpx;
					}
				}
				.month-img {
					width: 100%;
				}
			}
			.item-box {
				width: 100%;
				.item {
					margin-bottom: 22rpx;
					.item-title {
						line-height: 58rpx;
					}
					.item-img {
						width: 100%;
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
			height: 96rpx;
			border-radius: 96rpx;
			color: #7f2e0d;
			font-size: 36rpx;
			font-weight: bold;
			line-height: 96rpx;
			text-align: center;
			background: linear-gradient(90deg, #ffe25a, #fcaa32);
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
