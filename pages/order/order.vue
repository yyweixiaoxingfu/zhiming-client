<template>
	<view class="order-page">
		<view class="tabs-box">
			<u-tabs
				:list="tabList"
				:current="tabCurrent"
				:scrollable="false"
				lineColor="#fc4a4a"
				:activeStyle="{ color: '#fc4a4a' }"
				@change="tabChange"
			></u-tabs>
		</view>
		<view class="container">
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
						<!-- 支付类型 pay_type: deposit， 余额 points 积分， frequency 体验次数 -->
					</view>
					<view class="bottom" v-if="item.status == 0">
						<view class="text">去付款</view>
					</view>
					<view class="bottom" v-else-if="item.status == 1">
						<view class="text">点击查看</view>
					</view>
				</view>
				
				<u-loadmore :status="status" />
			</view>
			<view class="empty-box" v-else>
				<u-empty mode="list"></u-empty>
			</view>
			<!-- <view class="query-box" v-else-if="tabCurrent == 2">
				<view class="search-box">
					<input class="input" type="text" placeholder="请输入订单号" />
					<button class="btn">查询</button>
				</view>
				<view class="order-info">
					<view class="top">
						<view class="info">
							<view class="title">[塔罗运势] .公历--</view>
							<view class="status">未付款</view>
						</view>
						<view class="text">订单号：2620250904111756955863638</view>
						<view class="text">下单时间：2025-09-04 11:17:43</view>
					</view>
					<view class="bottom">
						<view class="text">去付款</view>
					</view>
				</view>
				<view class="tips-box">温馨提示：忘记或找不到订单号？请按照下方操作获取</view>
				<view class="tutorial-box">
					<view class="item">
						<view class="title">微信支付获取订单号</view>
						<image class="img" src="https://base2.tengsytech.com/statics/img/cx_wx.jpg" mode="widthFix"></image>
					</view>
					<view class="item">
						<view class="title">支付宝支付获取订单号</view>
						<image class="img" src="https://base2.tengsytech.com/statics/img/cx_zfb.jpg" mode="widthFix"></image>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import { getOrderList } from '@/api/api.js'
	
	export default {
		data () {
			return {
				tabCurrent: 0,
				tabList: [{
					name: '未付款'
				}, {
					name: '已付款'
				}, {
					name: '已取消'
				}],
				
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				limit: 10,
				last_page: 1,
				// 0 未支付  1已支付 -1已取消
				order_status: 0,
			}
		},
		onShow () {
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
			
			tabChange (e) {
				let index = e.index
				this.tabCurrent = index
				
				if (index == 2) {
					this.order_status = -1
				} else {
					this.order_status = index
				}
				
				this.initData()
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
.order-page {
	padding-bottom: var(--window-bottom);
	.tabs-box {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: 1px solid #f0f0f0;
	}
	.list-box {
		padding: 20rpx;
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
	.query-box {
		padding: 20rpx;
		.search-box {
			display: flex;
			.input {
				flex: 1;
				box-sizing: border-box;
				padding: 0 20rpx;
				border-radius: 16rpx;
				border: 1px solid #dbdbdb;
				height: 72rpx;
				font-size: 26rpx;
			}
			.btn {
				margin: 0 0 0 20rpx;
				padding: 0;
				border-radius: 16rpx;
				width: 176rpx;
				height: 72rpx;
				color: #fff;
				font-size: 26rpx;
				line-height: 72rpx;
				background-color: #dc273f;
			}
		}
		.order-info {
			margin-top: 20rpx;
			border-radius: 10rpx;
			border: 1px solid #dedede;
			background-color: #ffffff;
			overflow: hidden;
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
					& + .item {
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
		.tips-box {
			margin-top: 20rpx;
			border: 1px solid #d3d3d3;
			border-radius: 10rpx;
			padding: 20rpx;
			color: #333;
			font-size: 34rpx;
			background: #fff;
		}
		.tutorial-box {
			margin-top: 20rpx;
			.item {
				& + .item {
					margin-top: 20rpx;
				}
				.title {
					border-radius: 10rpx;
					color: #03ab54;
					font-size: 30rpx;
					font-weight: bold;
					text-align: center;
					line-height: 72rpx;
					background-color: #eeeeee;
				}
				.img {
					margin-top: 10rpx;
					width: 100%;
				}
			}
		}
	}
}
</style>
