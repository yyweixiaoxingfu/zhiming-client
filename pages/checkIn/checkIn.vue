<template>
	<view class="check-in">
		<view class="accumulated">
			<view class="days">
				<view class="item" v-for="(item, index) in days" :key="index">{{ item }}</view>
				<text class="text">天</text>
			</view>
			<view class="remark">
				<view>每日签到可获得积分奖励</view>
			</view>
		</view>
		<view class="calendar-box">
			<view class="title-box">
				<view class="title">签到领积分</view>
				<view class="right">
					<view class="btn in" @click="userSign" v-if="!today_sign">立即签到</view>
					<view class="btn out" v-else>已签到</view>
				</view>
			</view>
			<uni-calendar ref="calendar" insert :selected="selected" :showMonth="false" @change="calendarChange"></uni-calendar>
		</view>
		<view class="rule-box">
			<view class="title">签到规则说明</view>
			<view class="text">
				<text>{{ signDesc }}</text>
			</view>
		</view>
		
		<u-overlay :show="checkInShow" :opacity="0.65" @click="checkInShow = false">
			<view class="checkIn__warp" @tap.stop>
				<image class="checkIn__image" src="@/static/popupImage.png" mode="widthFix"></image>
				<view class="checkIn__title mt-52">
					<text>恭喜获得{{ base_reward }}积分</text>
					<text v-if="extra_reward > 0">和额外奖励{{ extra_reward }}积分</text>
				</view>
				<view class="checkIn__icon mt-52" @click="checkInShow = false">
					<u-icon name="close-circle" color="#fff" size="72rpx"></u-icon>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	import { signInData, signIn, getSignInStatus, getMaterial, repairSignIn } from '@/api/api.js'
	
	export default {
		data () {
			return {
				/* 用户id */
				user_id: 0,

				selected: [],
				
				/* 今天是否签到 */
				today_sign: 0,
				
				/* 累积签到 */
				days: '0000',
				
				/* 签到规则说明 */
				signDesc: '',
				
				/* 奖励 */
				base_reward: 0, // 今天签到的基础奖励
				extra_reward: 0, // 今天签到的额外奖励
				
				/* 奖励弹窗 */
				checkInShow: false,
			}
		},
		onShow () {
			this.initData()
		},
		methods: {
			initData () {
				getMaterial({}, { custom: { jump: false } }).then(res => {
					if (res.code == 1) {
						this.user_id = res.data.data.id
						
						this.getData()
					}
				})
				
				signInData({ user_id: this.user_id }).then(res => {
					if (res.code == 1) {
						this.selected = res.data.the_month
						this.signDesc = res.data.sign_desc
					}
				})
			},
			getData () {
				getSignInStatus().then(res => {
					if (res.code == 1) {
						this.today_sign = res.data.today_signed
						this.base_reward = res.data.base_reward
						this.extra_reward = res.data.extra_reward
						
						let days = res.data.continuous_days + ''
						this.days = days.padStart(4, '0')
					}
				})
			},
			/* 签到 */
			userSign () {
				uni.showLoading({ mask: true })
				signIn().then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						this.checkInShow = true
						
						this.getData()
					}
				})
			},
			calendarChange (e) {
				if (e.extraInfo.sign_in == 0) {
					uni.showModal({
						title: '看广告即可补签',
						confirmText: '看广告',
						success: (res) => {
							if (res.confirm) {
								this.supplement(e.fulldate)
							} else if (res.cancel) {
								console.log('用户点击取消')
							}
						}
					})
				}
			},
			/* 补签 */
			supplement (date) {
				uni.showLoading({ mask: true })
				repairSignIn({ repair_date: date }).then(res => {
					uni.hideLoading({ noConflict: true })

					if (res.code == 1) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						this.getData()
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.check-in {
	box-sizing: border-box;
	min-height: 100%;
	padding: 20rpx;
	padding-bottom: calc(var(--window-bottom) + 40rpx);
	background-color: $bg-color;
	.calendar-box {
		margin-top: 28rpx;
		padding: 28rpx 0;
		border-radius: 20rpx;
		background-color: #ffffff;
		.title-box {
			padding: 0 28rpx;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 66rpx;
			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
			.right {
				.btn {
					color: #ffffff;
					font-size: 26rpx;
					padding: 12rpx 20rpx;
					border-radius: 40rpx;
				}
				.in {
					background-color: $primary-color;
				}
				.out {
					background-color: #999;
				}
			}
		}
	}
	.accumulated {
		padding: 52rpx 32rpx;
		border-radius: 20rpx;
		text-align: center;
		background-color: #ffffff;
		.title {
			font-size: 28rpx;
			color: #333333;
		}
		.days {
			.item {
				display: inline-block;
				height: 116rpx;
				width: 80rpx;
				line-height: 116rpx;
				text-align: center;
				font-size: 62rpx;
				font-weight: 600;
				margin-right: 16rpx;
				color: #ffffff;
				background-color: $red-color;
				border-radius: 8rpx;
				vertical-align: bottom;
			}
			.text {
				vertical-align: bottom;
			}
		}
		.remark {
			color: #666666;
			font-size: 26rpx;
			margin-top: 40rpx;
		}
	}
	.rule-box {
		margin-top: 28rpx;
		padding: 32rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		.title {
			color: #333;
			font-size: 32rpx;
			font-weight: bold;
		}
		.text {
			margin-top: 10rpx;
			color: #333;
			font-size: 28rpx;
		}
	}
	.checkIn__warp {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 10;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		.checkIn__image {
			width: 200rpx;
		}
		.checkIn__title {
			width: 560rpx;
			color: #ffffff;
			font-size: 32rpx;
			text-align: center;
		}
		.checkIn__btn {
			width: 520rpx;
			color: #724001;
			font-size: 28rpx;
			font-weight: bold;
			text-align: center;
			line-height: 90rpx;
			border-radius: 90rpx;
			background-color: #ffec47;
		}
	}
}
</style>