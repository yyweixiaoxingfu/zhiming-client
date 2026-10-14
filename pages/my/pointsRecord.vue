<template>
	<view class="points-record">
		<view class="data-card">
			<view class="item flex-1">
				<view class="title">积分</view>
				<view class="number">{{ creditTotal }}</view>
			</view>
			<button class="btn" size="mini" @click="goNumber">去兑换</button>
		</view>
		
		<view class="list-box" v-if="list.length">
			<view class="title-box">
				<view class="title">积分明细</view>
			</view>
			
			<view class="item" v-for="(item, index) in list" :key="index">
				<view class="content">
					<view class="title">{{ item.info }}</view>
					<view class="time">{{ item.create_time }}</view>
				</view>
				<view class="num sub" v-if="item.num < 0">{{ item.num }}</view>
				<view class="num add" v-else>+{{ item.num }}</view>
			</view>
			
			<u-loadmore :status="status" />
		</view>
		<view class="empty-box" v-else>
			<u-empty mode="list"></u-empty>
		</view>
	</view>
</template>

<script>
	import { creditLogs } from '@/api/api.js'
	
	export default {
		data () {
			return {
				creditTotal: 0,
				
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				last_page: 1,
				limit: 20,
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
				
				creditLogs({ type: 'points' ,page: this.page, limit: this.limit }).then(res => {
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
			goNumber () {
				uni.navigateTo({
					url: '/pages/my/number'
				})
			}
		}
	}
</script>

<style lang="scss">
.points-record {
	box-sizing: border-box;
	padding: 28rpx;
	min-height: 100%;
	background-color: #f8f8f8;
	.data-card {
		padding: 40rpx;
		border-radius: 12rpx;
		background: $btn-bg-color;
		box-shadow: 0 4rpx 20rpx rgba($color: $primary-color, $alpha: 0.4);
		display: flex;
		align-items: center;
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
		.btn {
			background: #fff;
		}
	}
	.list-box {
		margin-top: 40rpx;
		.title-box {
			padding-left: 20rpx;
			margin-bottom: 20rpx;
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
					font-size: 28rpx;
					font-weight: bold;
				}
				.time {
					margin-top: 12rpx;
					color: #666666;
					font-size: 28rpx;
				}
			}
			.num {
				font-size: 28rpx;
				font-weight: bold;
				&.sub {
					color: #26a600;
				}
				&.add {
					color: $primary-color;
				}
			}
		}
	}
	.empty-box {
		padding: 40rpx 0;
	}
}
</style>
