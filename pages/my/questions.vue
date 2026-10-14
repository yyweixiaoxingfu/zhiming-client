<template>
	<view class="questions-page">
		<u-collapse :border="false" accordion :value="0">
			<u-collapse-item v-for="(item, index) in list" :key="index" :title="item.name">
				<view class="list-box">
					<view class="item" v-for="(itm, idx) in item.help_center" :key="idx" @click="goDetail(itm.id)">{{ itm.name }}</view>
				</view>
			</u-collapse-item>
		</u-collapse>
	</view>
</template>

<script>
	import { helpCenter } from '@/api/api.js'
	
	export default {
		data () {
			return {
				list: []
			}
		},
		onLoad () {
			uni.showLoading({ mask: true })
			helpCenter().then(res => {
				uni.hideLoading({ noConflict: true })
				
				if (res.code == 1) {
					this.list = res.data.data
				}
			})
		},
		methods: {
			goDetail (id) {
				uni.navigateTo({
					url: '/pages/my/questionsDetail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
.questions-page {
	box-sizing: border-box;
	padding: 28rpx;
	min-height: 100%;
	background-color: #f5f5f5;
	::v-deep {
		.u-collapse-item {
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
			.u-cell {
				border-bottom: 1rpx solid #eee;
			}
		}
	}
	.list-box {
		.item {
			padding: 8rpx 0;
			margin-bottom: 12rpx;
			font-size: 28rpx;
			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>