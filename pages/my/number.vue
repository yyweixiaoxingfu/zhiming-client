<template>
	<view class="number-page">
		<view class="container">
			<view class="detail-box">
				<view class="item">
					<view class="title">次数</view>
					<view class="number">{{ creditTotal }}</view>
				</view>
			</view>
			<view class="list-box">
				<view
					class="item" :class="{ active: active === 0 }"
					@click="activeChange(0, 1)"
				>
					<view class="label">1次</view>
					<view class="price">{{ points(1) }}积分</view>
				</view>
				<view
					class="item" :class="{ active: active === 1 }"
					@click="activeChange(1, 3)"
				>
					<view class="label">3次</view>
					<view class="price">{{ points(3) }}积分</view>
				</view>
				<view
					class="item" :class="{ active: active === 2 }"
					@click="activeChange(2, 4)"
				>
					<view class="label">5次</view>
					<view class="price">{{ points(4) }}积分</view>
				</view>
			</view>
			<view class="title-box">
				<view class="title">使用明细</view>
			</view>
			<view class="detail-list" v-if="list.length">
				<view class="item" v-for="(item, index) in list" :key="index">
					<view class="content">
						<view class="title u-line-1">{{ item.info }}</view>
						<view class="time">{{ item.create_time }}</view>
					</view>
					<view class="num sub" v-if="item.num < 0">{{ item.num }}</view>
					<view class="num add" v-else>+{{ item.num }}</view>
				</view>
				
				<u-loadmore :status="status" />
			</view>
			<view class="empty" v-else>
				<u-empty mode="list" marginTop="50"></u-empty>
			</view>
		</view>
		
		<view class="bottom-box">
			<button class="btn" @click="openPayType">兑换</button>
		</view>
		
		<u-popup :show="show" mode="center" round="20rpx" closeable @close="show = false">
			<view class="popup-box">
				<view class="title-box">支付方式</view>
				<view class="content">
					<button class="btn bonus">
						<text class="custom-icon custom-icon-bonus"></text>
						<text class="text">积分支付</text>
					</button>
					<button class="btn weixin">
						<text class="custom-icon custom-icon-weixin"></text>
						<text class="text">微信支付</text>
					</button>
					<button class="btn zhifubao">
						<text class="custom-icon custom-icon-zhifubao"></text>
						<text class="text">支付宝支付</text>
					</button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { creditLogs, pointsExchange } from '@/api/api.js'

	export default {
		data() {
			return {
				active: 0,
				frequencyNum: 1,
				
				creditTotal: 0,
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				last_page: 1,
				limit: 20,
				
				show: false,
			}
		},
		onLoad () {
			this.initData()
		},
		onReachBottom () {
			this.getListData()
		},
		methods: {
			initData () {
				this.page = 0
				this.last_page = 1
				this.list = []
				this.getListData()
			},
			getListData () {
				if (this.page >= this.last_page) return
			
				this.status = 'loading'
				this.page = ++this.page
				
				creditLogs({ type: 'frequency' ,page: this.page, limit: this.limit }).then(res => {
					if (res.code == 1) {
						this.creditTotal = res.data.credit_total
						this.list = this.list.concat(res.data.data)
						
						let total = res.data.total
						this.last_page = Math.ceil(total / this.limit)
						
						if (this.page >= this.last_page) {
							this.status = 'nomore'
						} else {
							this.status = 'loading'
						}
					}
				})
			},
			
			activeChange (index, num) {
				this.active = index
				this.frequencyNum = num
			},
			
			openPayType () {
				uni.showModal({
					title: '确认兑换吗？',
					success: (res) => {
						if (res.confirm) {
							this.exchange()
						}
					}
				})
			},
			exchange () {
				uni.showLoading({ mask: true })
				
				pointsExchange({ frequency_num: this.frequencyNum }).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						uni.showToast({
							title: res.msg
						})
						this.initData()
					}
				})
			},
		},
		computed: {
			points () {
				return (number) => {
					if (this.systemConfigData.points_frequency) {
						return this.systemConfigData.points_frequency * number
					} else {
						return ''
					}
				}
			},
		}
	}
</script>

<style lang="scss">
.number-page {
	box-sizing: border-box;
	padding-bottom: 136rpx;
	min-height: 100%;
	background-color: $bg-color;
	.container {
		padding: 28rpx;
		.detail-box {
			padding: 40rpx;
			border-radius: 12rpx;
			background: $btn-bg-color;
			box-shadow: 0 4rpx 20rpx rgba($color: $primary-color, $alpha: 0.4);
			display: flex;
			.item {
				color: #FFFFFF;
				.title {
					font-size: 28rpx;
				}
				.number {
					font-size: 46rpx;
					font-weight: bold;
					margin-top: 8rpx;
					.decimal {
						font-size: 24rpx;
					}
				}
			}
		}
		.list-box {
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;
			gap: 20rpx;
			.item {
				box-sizing: border-box;
				flex: 1;
				height: 160rpx;
				border-radius: 14rpx;
				border: 1rpx solid #fff;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				&.active {
					border-color: $primary-color;
					box-shadow: 0 0 10rpx rgba($color: $primary-color, $alpha: 0.4);
				}
				.label {
					color: #333;
					font-size: 30rpx;
					font-size: 30rpx;
				}
				.price {
					margin-top: 10rpx;
					color: #888;
					font-size: 24rpx;
				}
			}
		}
		.title-box {
			margin-top: 46rpx;
			margin-bottom: 20rpx;
			padding-left: 20rpx;
			position: relative;
			&::before {
				content: '';
				display: block;
				width: 8rpx;
				border-radius: 8rpx;
				background-color: $primary-color;
				position: absolute;
				left: 0;
				top: 8rpx;
				bottom: 6rpx;
			}
			.title {
				color: #333;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.detail-list {
			margin-top: 16rpx;
			.item {
				height: 132rpx;
				padding: 0 36rpx;
				border-radius: 20rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				&:not(:last-of-type) {
					margin-bottom: 16rpx;
				}
				.content {
					flex: 1;
					margin-right: 28rpx;
					.title {
						color: #333333;
						font-size: 30rpx;
						font-weight: bold;
					}
					.time {
						margin-top: 8rpx;
						color: #666666;
						font-size: 28rpx;
					}
				}
				.num {
					font-size: 28rpx;
					&.sub {
						color: #2dc300;
					}
					&.add {
						color: $primary-color;
					}
				}
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		height: 136rpx;
		background: #fff;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			width: 670rpx;
			height: 88rpx;
			border-radius: 88rpx;
			color: #fff;
			font-size: 32rpx;
			font-weight: bold;
			line-height: 88rpx;
			background: $primary-color;
		}
	}
	
	.popup-box {
		width: 600rpx;
		.title-box {
			font-size: 32rpx;
			text-align: center;
			line-height: 88rpx;
			border-bottom: 1rpx solid #eee;
		}
		.content {
			padding: 28rpx;
			.btn {
				margin: 0;
				padding: 0;
				height: 92rpx;
				border-radius: 60rpx;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				& + .btn {
					margin-top: 20rpx;
				}
				&.bonus {
					background-color: $primary-color;
				}
				&.weixin {
					background-color: $weinxinColor;
				}
				&.zhifubao {
					background-color: $zhifubaoColor;
				}
				.custom-icon {
					font-size: 46rpx;
				}
				.text {
					margin-left: 20rpx;
					font-size: 32rpx;
				}
			}
		}
	}
}
</style>