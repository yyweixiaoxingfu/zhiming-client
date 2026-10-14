<template>
	<view class="ffqm-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/ffqm/images/img_banner_yd.jpg" mode="widthFix"></image>
		</view>
		<view class="carousel-info">
			<text style="color:#da3028;">订单编号:</text>
			<text>{{ pageContent.order_no }}</text>
		</view>
		<view class="content-box">
			<view class="table-box">
				<view class="tr">
					<view class="th">
						<view class="">性别</view>
					</view>
					<view class="th">
						<text v-if="pageContent.submit_data.sex == 1">男</text>
						<text v-else-if="pageContent.submit_data.sex == 2">女</text>
						<text v-else>未出生</text>
					</view>
				</view>
				<view class="tr">
					<view class="th">
						<view class="">姓氏</view>
					</view>
					<view class="th">{{ pageContent.submit_data.xing }}</view>
				</view>
				<view class="tr">
					<view class="th">
						<view class="">出生日期</view>
					</view>
					<view class="th">{{ pageContent.submit_data.birthday }}</view>
				</view>
			</view>
			<view class="info-box">
				<view class="text">您的五行八字资料</view>
				<view class="info-table">
					<view class="tr">
						<view class="th">八字</view>
						<view class="th">年柱</view>
						<view class="th">月柱</view>
						<view class="th">日柱</view>
						<view class="th">时柱</view>
					</view>
					<view class="tr">
						<view class="th">天干</view>
						<view class="th">{{ baziwh.bazi[0] }}</view>
						<view class="th">{{ baziwh.bazi[2] }}</view>
						<view class="th">{{ baziwh.bazi[4] }}</view>
						<view class="th">{{ baziwh.bazi[6] }}</view>
					</view>
					<view class="tr">
						<view class="th">地支</view>
						<view class="th">{{ baziwh.bazi[1] }}</view>
						<view class="th">{{ baziwh.bazi[3] }}</view>
						<view class="th">{{ baziwh.bazi[5] }}</view>
						<view class="th">{{ baziwh.bazi[7] }}</view>
					</view>
				</view>
				<view class="text">本命属{{ baziwh.zodiac }}，胎元：{{ bazipp.taiyuan }}、纳音胎元：{{ bazipp.nayintaiyua }}、命宫：{{ bazipp.minggong }}、纳音命宫：{{ bazipp.nayinminggong }}，生于{{ baziwh.season }}季。</view>
			</view>
			<view class="title-primary">为你推荐如下美名</view>
			<view class="name-list">
				<view class="item" v-for="(item, index) in nameList" :key="index">
					{{ item.name }}
				</view>
			</view>
		</view>
		
		<back-home></back-home>
		
		<!-- #ifndef MP-WEIXIN -->
		<view class="language-box">
			<switch-language></switch-language>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				order_no: '',
				
				pageContent: {
					submit_data: {},
				},
				
				nameList: [],
				bazipp: {
					ygz: '',
				},
				baziwh: {
					bazi: [],
					zodiac: '',
					season: '',
				},
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.loadData()
		},
		methods: {
			loadData () {
				uni.showLoading({ mask: true })
				getOrderFind({ order_no: this.order_no }).then(res => {
					uni.hideLoading({ noConflict: true })
			
					if (res.code == 1) {
						this.pageContent = res.data
						this.nameList = res.data.return_data.name_list
						this.bazipp = res.data.return_data.bazipp
						this.baziwh = res.data.return_data.baziwh
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.ffqm-detail {
	min-height: 100%;
	color: #333;
	font-size: 28rpx;
	background: #f5f5f5;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.carousel-info {
		margin-bottom: 40rpx;
		color: #999;
		padding: 20rpx;
		background-color: #fff;
	}
	.content-box {
		padding-bottom: 20rpx;
		background-color: #fff;
		.table-box {
			.tr {
				display: flex;
				border-bottom: 1rpx solid #ddd;
				&:last-child {
					border-bottom: none;
				}
				.th {
					box-sizing: border-box;
					color: #999;
					line-height: 1.8;
					padding: 20rpx 16rpx;
					display: flex;
					align-items: center;
					&:first-child {
						width: 224rpx;
						color: #00B2B6;
						border-right: 1rpx solid #ddd;
					}
					&:last-child {
						flex: 1;
					}
				}
			}
		}
		.info-box {
			padding: 20rpx;
			.text {
				padding: 0 16rpx;
				color: #fd7d9c;
				font-size: 28rpx;
				line-height: 1.8;
			}
			.info-table {
				margin: 20rpx 0;
				border: 1px solid #b09589;
				font-size: 32rpx;
				text-align: center;
				.tr {
					display: flex;
					&:first-child {
						color: #fff;
						background-color: #fd7d9c;
					}
					&:last-child {
						.th {
							border-bottom: none;
						}
					}
					.th {
						flex: 1;
						height: 76rpx;
						line-height: 76rpx;
						border-right: 1px solid #b09589;
						border-bottom: 1px solid #b09589;
						&:last-child {
							border-right: none;
						}
					}
				}
			}
		}
		.title-primary {
			padding-bottom: 30rpx;
			padding-top: 20rpx;
			color: #f00;
			font-size: 36rpx;
			text-align: center;
		}
		.name-list {
			padding: 0 10rpx;
			display: flex;
			flex-wrap: wrap;
			gap: 10rpx;
			.item {
				width: 170rpx;
				height: 62rpx;
				border: 1rpx solid #e6e6e6;
				color: #00b98d;
				font-size: 28rpx;
				text-align: center;
				line-height: 60rpx;
			}
		}
	}
}
</style>