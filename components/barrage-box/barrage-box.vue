<template>
	<view>
		<view id="barrage-box" class="barrage-box">
			<view class="transition" :style="[transitionStyle]">
				<view id="barrageMTop">
					<view class="item" v-for="(item, index) in list" :key="index">
						<view class="top">
							<text class="info">
								<text>{{ item.name }}</text>
								<text class="phone" v-if="item.phone">{{ item.phone }}</text>
							</text>
							<text class="type" v-if="item.suanming">{{ item.suanming }}</text>
						</view>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
				<view>
					<view class="item" v-for="(item, index) in list" :key="index">
						<view class="top">
							<text class="info">{{ item.name }} {{ item.phone }}</text>
							<text class="type">{{ item.suanming }}</text>
						</view>
						<view class="text">{{ item.text }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'barrage-box',
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				marginTop: 0,
				transitionTime: 0,
				barrageHeight: 0,
				barrageBoxHeight: 0,
			}
		},
		watch: {
			list: {
				immediate: true,
				handler () {
					this.$nextTick(() => {
						this.barrageInit()
					})
				}
			},
		},
		methods: {
			async barrageInit() {
				const barrage = await this.getRect('#barrageMTop')
				const barrageBox = await this.getRect('#barrage-box')
			
				this.barrageHeight = barrage.height
				this.barrageBoxHeight = barrageBox.height
			
				let time = barrage.height * 40
				this.transitionTime = time / 1000
				this.timeValue = time
			
				this.animationFunc()
			},
			animationFunc() {
				this.marginTop = 0,
				this.transitionTime = 0
			
				setTimeout(() => {
					this.marginTop = this.barrageHeight
					this.transitionTime = (this.barrageHeight * 40) / 1000
			
					setTimeout(this.animationFunc, this.timeValue)
				}, 20)
			},
			getRect(selector) {
				return new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this)
					query.select(selector).boundingClientRect(rect => {
						if (rect) {
							resolve(rect)
						} else {
							reject()
						}
					}).exec()
				})
			},
		},
		computed: {
			transitionStyle() {
				return {
					transform: `translateY(-${ this.marginTop }px)`,
					transition: `transform ${ this.transitionTime }s linear`,
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.barrage-box {
	margin: 0 20rpx;
	height: 560rpx;
	overflow: hidden;
	.transition {
		min-height: 560rpx;
	}
	.item {
		padding: 20rpx 0;
		border-bottom: 1px dotted #e2caa8;
		.top {
			color: #da3c2e;
			font-size: 28rpx;
			.info {
				font-weight: bold;
				.phone {
					margin-left: 8rpx;
				}
			}
			.type {
				margin-left: 20rpx;
			}
		}
		.text {
			margin-top: 10rpx;
			color: #333;
			font-size: 28rpx;
		}
	}
}
</style>