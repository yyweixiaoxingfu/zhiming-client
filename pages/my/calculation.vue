<template>
	<view class="calculation-page">
		<view class="list-box" v-if="list.length">
			<view class="item" v-for="(item, index) in list" :key="index" @click="goDetail(item)">
				<view class="top">
					<view class="info">
						<view class="title">[{{ item.cs_title }}]</view>
						<view class="status">
							<text class="status-0" v-if="item.status == 0">未付款</text>
							<text class="status-1" v-else-if="item.status == 1">已支付</text>
							<text class="status-2" v-else-if="item.status == -1">已取消</text>
						</view>
					</view>
					<view class="text">订单号：{{ item.order_no }}</view>
					<view class="text">下单时间：{{ item.create_time }}</view>
				</view>
				<view class="bottom">
					<view class="text">点击查看</view>
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
	import { getOrderList } from '@/api/api.js'

	export default {
		data () {
			return {
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				limit: 10,
				last_page: 1,
				
				// 0 未支付  1已支付 -1已取消
				order_status: 1,
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
				
				uni.showLoading({ mask: true })
				getOrderList({
					page: this.page,
					limit: this.limit,
					order_status: this.order_status,
				}).then(res => {
					uni.hideLoading({ noConflict: true })
				
					if (res.code == 1) {
						this.list = this.list.concat(res.data.order_list)
						
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
			goDetail (item) {
				if (item.status == 0) {
					uni.$u.route({
						url: '/pages/payment/' + item.p_model,
						params: {
							order_no: item.order_no,
							cate_type: item.cate_type,
							link_id: item.link_id,
						}
					})
				} else if (item.status == 1) {
					uni.$u.route({
						url: '/pages/result/' + item.p_model,
						params: {
							order_no: item.order_no,
						}
					})
				}
			},
		}
	}
</script>

<style lang="scss">
.calculation-page {
	min-height: 100%;
	background-color: #f8f8f8;
	.list-box {
		padding: 28rpx;
		.item {
			border-radius: 10rpx;
			border: 1px solid #dedede;
			background-color: #ffffff;
			overflow: hidden;
			& + .item {
				margin-top: 20rpx;
			}
			.top {
				padding: 0 24rpx 22rpx;
				.info {
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.title {
						flex: 1;
						color: #333;
						font-size: 30rpx;
						font-weight: bold;
					}
					.status {
						margin-left: 20rpx;
						font-size: 24rpx;
						.status-0 {
							color: #dc273f;
						}
						.status-1 {
							color: #029a4d;
						}
						.status-2 {
							color: #999;
						}
					}
				}
				.text {
					& + .text {
						margin-top: 8rpx;
					}
					color: #949494;
					font-size: 24rpx;
				}
			}
			.bottom {
				padding: 0 24rpx;
				border-top: 1px dotted #949494;
				line-height: 88rpx;
				background-color: #f5f0e9;
				.text {
					color: #333;
					font-size: 28rpx;
				}
			}
		}
	}
	.empty-box {
		padding: 40rpx 0;
	}
}
</style>
