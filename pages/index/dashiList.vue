<template>
	<view class="dashi-list">
		<image class="banner" :src="banner" mode="widthFix"></image>
		
		<view class="container">
			<view class="item" v-for="(item, index) in list" :key="index" @click="goDetail(item)">
				<image class="bg" src="https://csweb.tengsytech.com/image/dashi/bg.png" mode="widthFix"></image>
				<view class="avatar-box">
					<image class="avatar-border" src="https://csweb.tengsytech.com/image/dashi/avatar-border.png" mode="widthFix"></image>
					<image class="avatar" :src="item.cover" mode="aspectFill"></image>
				</view>
				<view class="name-box">{{ item.name }}</view>
				<view class="content u-line-3">{{ item.desc }}</view>
			</view>
			
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	import { getDetailsInfo, getExpertList } from '@/api/api.js'
	
	export default {
		data () {
			return {
				banner: '',
				list: [],
				
				/* 分页 */
				status: 'loadmore',
				page: 0,
				last_page: 1,
			}
		},
		onLoad (options) {
			this.initData()
		},
		onReachBottom () {
			this.getExpertListData()
		},
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
				
				getExpertList({ page: this.page, limit: 20 }).then(res => {
					if (res.code == 1) {
						this.banner = res.data.expert_image
						this.list = this.list.concat(res.data.expert_list)
						
						this.last_page = res.data.total
						
						if (this.page >= this.last_page) {
							this.status = 'nomore'
						} else {
							this.status = 'loading'
						}
					}
				})
			},
			
			goDetail (item) {
				uni.$u.route({
					url: '/pages/index/expert',
					params: {
						cate_type: 4,
						link_id: item.id
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.dashi-list {
	min-height: 100%;
	background-color: #faecd9;
	.banner {
		width: 100%;
	}
	.container {
		padding: 64rpx 24rpx 70rpx 64rpx;
		.item {
			position: relative;
			& + .item {
				margin-top: 62rpx;
			}
			.bg {
				width: 100%;
			}
			.avatar-box {
				position: absolute;
				top: -44rpx;
				left: -28rpx;
				z-index: 2;
				.avatar-border {
					width: 188rpx;
					height: 188rpx;
				}
				.avatar {
					position: absolute;
					top: 10rpx;
					left: 10rpx;
					z-index: 3;
					width: 168rpx;
					height: 168rpx;
					border-radius: 50%;
				}
			}
			.name-box {
				border-radius: 56rpx;
				border: 2rpx solid #eac87a;
				padding: 0 22rpx;
				color: #fff;
				font-size: 28rpx;
				line-height: 56rpx;
				background-color: #ad3a2f;
				position: absolute;
				top: -24rpx;
				left: 188rpx;
				z-index: 4;
			}
			.content {
				position: absolute;
				top: 50rpx;
				left: 190rpx;
				right: 40rpx;
				z-index: 4;
				color: #5f1503;
				font-size: 28rpx;
			}
		}
	}
}
</style>