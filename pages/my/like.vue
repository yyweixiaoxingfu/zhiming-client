<template>
	<view class="collect-page">
		<view class="list-box" v-if="list.length">
			<view class="item" v-for="(item, index) in list" :key="index" @click="goDetail(item)">
				<image class="image" :src="item.content_info.cover" mode="aspectFill"></image>
				<view class="content">
					<view class="title u-line-2">{{ item.content_info.title }}</view>
					<view class="time">点赞时间：{{ item.create_time }}</view>
				</view>
			</view>
		</view>
		<view class="empty-box" v-else>
			<u-empty mode="list"></u-empty>
		</view>
	</view>
</template>

<script>
	import { clickLikeList } from '@/api/api.js'
	
	export default {
		data () {
			return {
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				last_page: 1,
			}
		},
		onLoad () {
			this.initData()
		},
		// onReachBottom () {
		// 	this.getExpertListData()
		// },
		methods: {
			initData () {
				this.page = 0
				this.last_page = 1
				this.list = []
				this.getExpertListData()
			},
			getExpertListData () {
				if (this.page >= this.last_page) return
			
				this.status = 'loading'
				this.page = ++this.page
				
				clickLikeList({ ls_type: '1', page: this.page, limit: 20 }).then(res => {
					if (res.code == 1) {
						this.list = res.data
					}
					// this.list = this.list.concat(res.data.data.data)
					
					// this.last_page = res.data.data.total
					
					// if (this.page >= this.last_page) {
					// 	this.status = 'nomore'
					// } else {
					// 	this.status = 'loading'
					// }
				})
			},
			goDetail (item) {
				uni.$u.route({
					url: '/pages/index/article',
					params: {
						cate_type: item.cate_type,
						link_id: item.link_id
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.collect-page {
	min-height: 100%;
	background-color: #f8f8f8;
	.list-box {
		padding: 28rpx;
		.item {
			padding: 28rpx;
			border-radius: 20rpx;
			background-color: #fff;
			display: flex;
			&:not(:last-of-type) {
				margin-bottom: 16rpx;
			}
			.image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 12rpx;
			}
			.content {
				margin-left: 20rpx;
				flex: 1;
				display: flex;
				flex-direction: column;
				.title {
					color: #333;
					font-size: 28rpx;
					font-weight: bold;
				}
				.time {
					margin-top: auto;
					color: #666;
					font-size: 24rpx;
				}
			}
		}
	}
	.empty-box {
		padding: 40rpx 0;
	}
}
</style>