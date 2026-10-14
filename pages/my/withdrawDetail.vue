<template>
	<view class="withdraw-detail">
		<view class="list-box">
			<view class="item" v-for="(item, index) in 10" :key="index">
				<view class="left">
					<view class="text">提现</view>
					<view class="time">2025-09-05 16:36</view>
				</view>
				<view class="value">-30</view>
			</view>
		</view>
		
		<view class="empty-box">
			<u-empty mode="list"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.withdraw-detail {
	min-height: 100%;
	background-color: #f8f8f8;
	.list-box {
		padding: 28rpx;
		.item {
			padding: 28rpx;
			border-radius: 10rpx;
			border: 1px solid #dedede;
			background-color: #ffffff;
			display: flex;
			& + .item {
				margin-top: 18rpx;
			}
			.left {
				margin-right: 20rpx;
				flex: 1;
				color: #666666;
				font-size: 30rpx;
				.time {
					margin-top: 6rpx;
				}
			}
			.value {
				color: #ee4f2c;
				font-size: 30rpx;
			}
		}
	}
	.empty-box {
		padding: 40rpx 0;
	}
}
</style>
