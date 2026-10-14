<template>
	<view class="almanac">
		<view class="solar-date">{{ data.ynian }}年{{ data.yyue }}月{{ data.yri }}日</view>
		<view class="lunar-date">{{ data.nyue }}{{ data.nri }}</view>
		<view class="lunar-info">{{ data.ganzhinian }}年 {{ data.ganzhiyue }}月 {{ data.ganzhiri }}日 [属{{ data.shengxiao }}] 周{{ data.xingqi }} 第{{ data.YLWEEKNOY }}周</view>
		<view class="yiji-box">
			<view class="yiji-item">
				<view class="label">宜</view>
				<view class="text">{{ symbolHandle(data.yi) }}</view>
			</view>
			<view class="yiji-item">
				<view class="label">忌</view>
				<view class="text">{{ symbolHandle(data.ji) }}</view>
			</view>
		</view>
		<view class="table-box">
			<view class="row row1 flex">
				<view class="col">
					<text class="title">五行</text>
					<text>{{ data.riwuxing }}</text>
				</view>
				<view class="col">
					<text class="title">冲煞</text>
					<text>{{ chongshaHandle(data.xiangchong) }}</text>
				</view>
				<view class="col">
					<text class="title">值神</text>
					<text>{{ data.DAYTIANSHEN }}</text>
				</view>
			</view>
			<!-- <view class="row shichen flex">
				<view class="title">时辰吉凶</view>
				<view class="text">甲子凶</view>
				<view class="text">乙丑凶</view>
				<view class="text">丙寅吉</view>
				<view class="text">丁卯凶</view>
				<view class="text">戊辰吉</view>
				<view class="text">己巳吉</view>
				<view class="text">庚午凶</view>
				<view class="text">辛未凶</view>
				<view class="text">壬申吉</view>
				<view class="text">癸酉吉</view>
				<view class="text">甲戌凶</view>
				<view class="text">乙亥吉</view>
			</view> -->
			<view class="row jianchu flex">
				<view class="left flex">
					<view class="title">建除十二神</view>
					<view class="text">{{ data.ZHIXING }}日</view>
				</view>
				<view class="conter">
					<view class="top flex">
						<view class="top-item">
							<view class="title">吉神宜趋</view>
							<view>{{ symbolHandle(data.DAYJISHEN) }}</view>
						</view>
						<view class="top-item">
							<view class="title">今日胎神</view>
							<view>{{ data.taishen }}</view>
						</view>
						<view class="top-item">
							<view class="title">凶神宜忌</view>
							<view>{{ symbolHandle(data.DAYXIONGSHA) }}</view>
						</view>
					</view>
					<view class="bottom">
						<view class="title">彭祖百忌</view>
						<view>{{ data.pengzu }}</view>
					</view>
				</view>
				<view class="right flex">
					<view class="title">二十八星宿</view>
					<view class="text">{{ xingxiuHandle(data.xingxiu) }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'almanac',
		props: {
			data: {
				type: Object,
				default: () => {}
			}
		},
		data () {
			return {
				
			}
		},
		computed: {
			symbolHandle () {
				return (string) => {
					if (string) {
						return string.split('|').join(' ')
					}
					
					return ''
				}
			},
			chongshaHandle () {
				return (string) => {
					if (string) {
						let len = string.length
						let front = string.slice(0, 2)
						let back = string.slice(len - 2, len)
						
						return front + back
					}
					
					return ''
				}
			},
			xingxiuHandle () {
				return (string) => {
					if (string) {
						let front = string.indexOf('（')
						let back = string.indexOf('）')
						
						if (front != -1 && back != -1) {
							return string.slice(front + 1, back) + '星宿'
						}
						
						return string
					}
					
					return ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.almanac {
	.solar-date {
		color: #666;
		font-size: 24rpx;
		text-align: center;
	}
	.lunar-date {
		color: $primary-color;
		font-size: 66rpx;
		font-weight: bold;
		text-align: center;
	}
	.lunar-info {
		margin-top: 20rpx;
		color: #333;
		font-size: 26rpx;
		text-align: center;
	}
	.yiji-box {
		margin-top: 36rpx;
		.yiji-item {
			display: flex;
			align-items: center;
			& + .yiji-item {
				margin-top: 4rpx;
			}
			&:nth-child(1) {
				.label {
					background-color: $primary-color;
				}
			}
			.label {
				width: 52rpx;
				height: 36rpx;
				border-radius: 36rpx;
				color: #fff;
				font-size: 26rpx;
				text-align: center;
				line-height: 36rpx;
				background-color: #1e1f24;
			}
			.text {
				flex: 1;
				margin-left: 20rpx;
				color: #333;
				font-size: 28rpx;
				line-height: 1.4;
			}
		}
	}
	.table-box {
		margin-top: 30rpx;
		border-radius: 10rpx;
		border: 2rpx solid #edebe5;
		font-size: 30rpx;
		text-align: center;
		.title {
			color: #c69c70;
		}
		.row1 {
			line-height: 76rpx;
			.col {
				min-width: 200rpx;
				width: 200rpx;
				border-right: 2rpx solid #e3e0d8;
				&:nth-child(2) {
					flex: 1;
				}
				.title {
					margin-right: 20rpx;
				}
			}
		}
		.shichen {
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #e3e0d8;
			border-top: 2rpx solid #e3e0d8;
			padding: 18rpx 26rpx;
			.title {
				width: 66rpx;
			}
			.text {
				width: 33rpx;
			}
		}
		.jianchu {
			border-top: 2rpx solid #e3e0d8;
			.left, .right {
				box-sizing: border-box;
				padding: 33rpx 14rpx;
				width: 104rpx;
				align-items: center;
				.title {
					margin-right: 10rpx;
					width: 33rpx;
				}
				.text {
					width: 33rpx;
				}
			}
			.left {
				border-right: 2rpx solid #e3e0d8;
			}
			.right {
				border-left: 2rpx solid #e3e0d8;
				.text {
					writing-mode: vertical-rl;
				}
			}
			.conter {
				flex: 1;
				display: flex;
				flex-direction: column;
				.top {
					flex: 1;
					border-bottom: 2rpx solid #e3e0d8;
					.top-item {
						flex: 1;
						padding: 18rpx 22rpx 14rpx;
						border-right: 2rpx solid #e3e0d8;
						&:last-child {
							border-right: none;
						}
						.title {
							margin-bottom: 12rpx;
						}
					}
				}
				.bottom {
					padding: 16rpx 0 14rpx;
					.title {
						margin-bottom: 10rpx;
					}
				}
			}
		}
	}
}
</style>