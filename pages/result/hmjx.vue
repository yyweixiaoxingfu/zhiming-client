<template>
	<view class="hmjx-detail">
		<view class="order_title">
			<text>订单号：</text>
			<text class="value">{{ pageContent.order_no }}</text>
		</view>
		<view class="container">
			<view class="table-box">
				<view class="tr">
					<view class="th">您的号码</view>
					<view class="th">{{ pageContent.submit_data.number }}</view>
				</view>
				<view class="tr">
					<view class="th">数字磁场组合</view>
					<view class="th">({{ returnData.word_z1 }}){{ returnData.tel_jx[0].jx }}、({{ returnData.word_z3 }}){{ returnData.tel_jx[2].jx }}</view>
				</view>
				<view class="tr">
					<view class="th">({{ returnData.word_z1 }})磁场特性</view>
					<view class="th">{{ returnData.tel_jx[0].content }}</view>
				</view>
				<view class="tr">
					<view class="th">({{ returnData.word_z3 }})磁场特性</view>
					<view class="th">{{ returnData.tel_jx[2].content }}</view>
				</view>
			</view>
			<view class="result_content">
				<view class="li">
					<view class="title">
						<text class="text">从您号码中的({{ returnData.word_z1 }})数字磁场分析您的婚姻：</text>
					</view>
					<view class="content">
						<u-parse :content="returnData.hy"></u-parse>
					</view>
				</view>
				<view class="li">
					<view class="title">
						<text class="text">从您号码中的({{ returnData.word_z2 }})数字磁场分析您的财运：</text>
					</view>
					<view class="content">
						<u-parse :content="returnData.cy"></u-parse>
					</view>
				</view>
				<view class="li">
					<view class="title">
						<text class="text">从您号码中的({{ returnData.word_z3 }})数字磁场分析您的事业：</text>
					</view>
					<view class="content">
						<u-parse :content="returnData.sy"></u-parse>
					</view>
				</view>
				<view class="li">
					<view class="title">
						<text class="text">从您号码中的({{ returnData.word_z4 }})数字磁场分析您的健康：</text>
					</view>
					<view class="content">
						<u-parse :content="returnData.jk"></u-parse>
					</view>
				</view>
				<view class="li">
					<view class="title">
						<text class="text">您的号码对您的影响总体分析：</text>
					</view>
					<view class="content">{{ returnData.tel_jx[2].content }}</view>
				</view>
				<view class="li">
					<view class="title">
						<text class="text">根据您的号码尾数({{ returnData.word_z6 }})起卦结果分析：</text>
					</view>
					<view class="content">
						<view class="gua">{{ returnData.gua_ci.gua_xiang }}</view>
						<view class="gua-text">
							<text class="label">卦意：</text>
							<text>{{ returnData.gua_ci.duanyi_text }}</text>
						</view>
						<view class="gua-text">
							<text class="label">解释：</text>
							<text>{{ returnData.gua_ci.baihua_text }}</text>
						</view>
					</view>
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
				
				returnData: {
					seo: {},
					tel_jx: [],
					gua_ci: {},
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
						
						this.returnData = res.data.return_data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.hmjx-detail {
	min-height: 100%;
	background-color: #fffcf4;
	position: relative;
	.order_title {
		padding: 20rpx 0;
		color: #999999;
		font-size: 32rpx;
		text-align: center;
		font-weight: 400;
		background-color: #fff;
		.value {
			color: #292929;
		}
	}
	.container {
		padding: 20rpx;
		.table-box {
			border: 1rpx solid #e6d7b3;
			.tr {
				display: flex;
				background-color: #fff;
				&:nth-child(even) {
					background-color: #F7EFDC;
				}
				&:last-child {
					.th {
						border-bottom: none;
					}
				}
				.th {
					padding: 10rpx 20rpx;
					color: #333333;
					border-right: 1px solid #e6d7b3;
					border-bottom: 1px solid #e6d7b3;
					&:first-child {
						width: 30%;
						font-size: 28rpx;
						font-weight: bold;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					&:last-child {
						border-right: none;
						flex: 1;
						font-size: 26rpx;
					}
				}
			}
		}
		.result_content {
			margin-top: 30rpx;
			.li {
				margin-bottom: 30rpx;
				border: 1rpx solid #E6D7B3;
				font-size: 30rpx;
				color: #333333;
				.title {
					padding: 0 20rpx;
					height: 60rpx;
					background-color: #f7efdc;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.text {
						color: #3b1b06;
						font-size: 28rpx;
						font-weight: bold;
					}
				}
				.content {
					padding: 10rpx 20rpx;
					font-size: 26rpx;
					background-color: #fff;
					.gua {
						color: #e81b34;
						font-size: 36rpx;
						font-weight: bold;
						text-align: center;
					}
					.gua-text {
						margin-top: 20rpx;
						.label {
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}
</style>