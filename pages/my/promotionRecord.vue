<template>
	<view class="promotion-record">
		<view class="data-card">
			<view class="item flex-1">
				<view class="title">团队人数</view>
				<view class="number">{{ team }}</view>
			</view>
			<view class="item flex-1">
				<view class="title">直推人数</view>
				<view class="number">{{ zhi }}</view>
			</view>
		</view>
		
		<view class="list-box" v-if="list.length">
			<view class="title-box">
				<view class="title">团队明细</view>
			</view>
			
			<view class="item" v-for="(item, index) in list" :key="index">
				<image class="avatar" :src="item.avatar" mode="aspectFill"></image>
				<view class="content">
					<view class="name">{{ item.name }}</view>
					<view class="bottom" v-if="item.mobile">{{ item.mobile }}</view>
					<view class="bottom" v-else-if="item.email">{{ item.email }}</view>
				</view>
			</view>
			
			<u-loadmore :status="status" />
		</view>
		<view class="empty-box" v-else>
			<u-empty mode="list"></u-empty>
		</view>
	</view>
</template>

<script>
	import { teamList } from '@/api/api.js'
	
	export default {
		data () {
			return {
				team: 0,
				zhi: 0,
				
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
				
				teamList({ page: this.page, limit: this.limit }).then(res => {
					if (res.code == 1) {
						this.team = res.data.team
						this.zhi = res.data.zhi
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
		},
		computed: {
			hideName () {
				return (value) => {
					if (value) {
						return value[0] + '*'
					} else {
						return ''
					}
				}
			},
			hidePhone () {
				return (value) => {
					if (value) {
						return value.slice(0, 3) + '********'
					} else {
						return ''
					}
				}
			},
		}
	}
</script>

<style lang="scss">
.promotion-record {
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
			height: 138rpx;
			padding: 0 36rpx;
			border-radius: 20rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			& + .item {
				margin-top: 20rpx;
			}
			.avatar {
				width: 84rpx;
				height: 84rpx;
				border-radius: 50%;
			}
			.content {
				flex: 1;
				margin-left: 26rpx;
				.name {
					color: #333;
					font-size: 30rpx;
				}
				.bottom {
					margin-top: 8rpx;
					color: #666;
					font-size: 26rpx;
				}
			}
		}
	}
	.empty-box {
		padding: 40rpx 0;
	}
}
</style>
