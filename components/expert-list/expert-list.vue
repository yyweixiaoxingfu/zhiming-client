<template>
	<view class="expert-list">
		<swiper :current="menuCurrent" autoplay :style="{ height: menuHeight + 'px' }" @change="menuChange">
			<swiper-item v-for="(item, index) in list" :key="index">
				<view class="swiper-item">
					<view class="item" v-for="(itm, idx) in item" :key="idx" @click="goExpert(itm)">
						<image class="icon" :src="itm.cover" mode="aspectFill"></image>
						<view class="label">{{ itm.name }}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="swiper-indicator" v-if="list.length > 1">
			<u-swiper-indicator
				:length="list.length"
				:current="menuCurrent"
				indicatorActiveColor="rgba(0, 0, 0, 0.8)"
				indicatorInactiveColor="rgba(0, 0, 0, 0.4)"
				indicatorMode="dot"
			></u-swiper-indicator>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'expert-list',
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				menuCurrent: 0,
				menuHeight: 0,
			}
		},
		watch: {
			list () {
				this.getMenuHeight()
			}
		},
		methods: {
			getMenuHeight () {
				this.$nextTick(() => {
					const query = uni.createSelectorQuery().in(this)
					query.select('.swiper-item').boundingClientRect((data) => {
						if (data) {
							this.menuHeight = data.height
						}
					}).exec()
				})
			},
			menuChange (e) {
				this.menuCurrent = parseInt(e.detail.current)
			},
			goExpert (item) {
				uni.$u.route({
					url: '/pages/index/expert',
					params: {
						cate_type: 4,
						link_id: item.id
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.expert-list {
	.swiper-item {
		display: flex;
		flex-wrap: wrap;
	}
	.item {
		width: 25%;
		padding: 10rpx 0;
		text-align: center;
		.icon {
			width: 140rpx;
			height: 140rpx;
			border-radius: 60rpx;
		}
		.label {
			color: #222;
			font-size: 28rpx;
			line-height: 52rpx;
		}
	}
	.swiper-indicator {
		margin-top: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>