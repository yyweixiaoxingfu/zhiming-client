<template>
	<view
		class="uni-calendar-item__weeks-box"
		:class="{
			'uni-calendar-item--disable': weeks.disable,
			'uni-calendar-item--before-checked': weeks.beforeMultiple,
			'uni-calendar-item--multiple': weeks.multiple,
			'uni-calendar-item--after-checked': weeks.afterMultiple,
		}"
		@click="choiceDate(weeks)"
	>
		<view
			class="uni-calendar-item__weeks-box-item"
			:class="{ 'uni-calendar-item--checked': weeks.extraInfo && weeks.extraInfo.sign_in == 2 }"
		>
			<view v-if="weeks.extraInfo && weeks.extraInfo.sign_in == 2" class="icon-box green">
				<view class="uni-icon-box">
					<uni-icons type="checkmarkempty" size="32rpx" color="#fff"></uni-icons>
				</view>
			</view>
			<view v-else-if="weeks.extraInfo && weeks.extraInfo.sign_in == 0" class="icon-box red">
				<text class="icon-text">补</text>
			</view>
			<image v-else class="uni-calendar-item__weeks-box-icon" src="@/static/gold.png" mode="aspectFill"></image>
			<text
				class="uni-calendar-item__weeks-box-text"
				:class="{
					'uni-calendar-item--before-checked': weeks.beforeMultiple,
					'uni-calendar-item--multiple': weeks.multiple,
					'uni-calendar-item--after-checked': weeks.afterMultiple,
					'uni-calendar-item--disable': weeks.disable,
				}"
			>{{weeks.date}}</text>
		</view>
	</view>
</template>

<script>
	import { initVueI18n } from '@dcloudio/uni-i18n'
	import i18nMessages from './i18n/index.js'
	const { t } = initVueI18n(i18nMessages)

	export default {
		emits:['change'],
		props: {
			weeks: {
				type: Object,
				default () {
					return {}
				}
			},
			calendar: {
				type: Object,
				default: () => {
					return {}
				}
			},
			selected: {
				type: Array,
				default: () => {
					return []
				}
			},
			lunar: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			todayText() {
				return t("uni-calender.today")
			},
		},
		methods: {
			choiceDate(weeks) {
				this.$emit('change', weeks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	$uni-text-color:#333;
	$uni-font-size-sm:12px;
	$uni-color-error: #e43d33;
	$uni-opacity-disabled: 0.3;
	$uni-text-color-disable:#c0c0c0;
	$uni-primary: #1AAD19 !default;

	.uni-calendar-item__weeks-box {
		flex: 1;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.icon-box {
		width: 48rpx;
		height: 48rpx;
		margin-bottom: 6rpx;
		border-radius: 50%;
		background-color: #fff;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		&.green {
			background-color: #1AAD19;
		}
		&.red {
			background-color: #fc4a4a;
		}
		.uni-icon-box {
			margin-left: 4rpx;
		}
		.icon-text {
			color: #fff;
			font-size: 28rpx;
			font-weight: bold;
		}
	}
	
	.uni-calendar-item__weeks-box-icon {
		width: 48rpx;
		height: 48rpx;
		margin-bottom: 6rpx;
	}

	.uni-calendar-item__weeks-box-text {
		font-size: 24rpx;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-lunar-text {
		font-size: $uni-font-size-sm;
		color: $uni-text-color;
	}

	.uni-calendar-item__weeks-box-item {
		box-sizing: border-box;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100rpx;
		background-color: #fafafa;
	}

	.uni-calendar-item__weeks-box-circle {
		position: absolute;
		top: 5px;
		right: 5px;
		width: 8px;
		height: 8px;
		border-radius: 8px;
		background-color: $primary-color;
	}

	.uni-calendar-item--disable {
		background-color: rgba(249, 249, 249, $uni-opacity-disabled);
		color: $uni-text-color-disable;
		.uni-calendar-item__weeks-box-icon {
			opacity: 0.5;
		}
	}

	.uni-calendar-item--isDay-text {
		color: $uni-primary;
	}

	.uni-calendar-item--isDay {
		background-color: $uni-primary;
		opacity: 0.8;
		color: #fff;
	}

	.uni-calendar-item--extra {
		color: $primary-color;
	}

	.uni-calendar-item--checked {
		border-radius: 6rpx;
		border: 1rpx solid $uni-primary;
		background-color: rgba($color: $uni-primary, $alpha: 0.1);
	}

	.uni-calendar-item--multiple {
		background-color: $uni-primary;
		color: #fff;
		opacity: 0.8;
	}
	.uni-calendar-item--before-checked {
		background-color: #ff5a5f;
		color: #fff;
	}
	.uni-calendar-item--after-checked {
		background-color: #ff5a5f;
		color: #fff;
	}
</style>
