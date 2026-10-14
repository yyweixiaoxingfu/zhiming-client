<template>
	<view class="hehun-detail">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/mainb.jpg" mode="widthFix"></image>
		</view>
		<view class="order_wrapper">
			<view class="order_code">订单编号：{{ pageContent.order_no }}</view>
			<view class="user_info">
				<view class="item">
					<view class="name">{{ pageContent.return_data.m_username }}</view>
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/big_man.jpg" mode="widthFix"></image>
					<view class="time">{{ pageContent.return_data.m_gongli }}</view>
				</view>
				<view class="center">
					<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/icon_hehun.png" mode="widthFix"></image>
				</view>
				<view class="item">
					<view class="name">{{ pageContent.return_data.g_username }}</view>
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/big_woman.jpg" mode="widthFix"></image>
					<view class="time">{{ pageContent.return_data.g_gongli }}</view>
				</view>
			</view>
		</view>
		<view class="result-box">
			<view class="words">{{ pageContent.return_data.m_username }}与{{ pageContent.return_data.g_username }}的合婚结果</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第一：{{ pageContent.return_data.m_username }}先生的命格</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box list">
				<view class="text">
					<text>生肖：</text>
					<text class="value">{{ pageContent.return_data.m_shengxiao }} </text>
					<!-- <text>命宫：</text>
					<text class="value">{{ pageContent.return_data.m_shengxiao }}</text> -->
				</view>
				<view class="text">
					<text>十神：</text>
					<text class="value">{{ pageContent.return_data.m_shishen1 }} </text>
					<text> | </text>
					<text class="value">{{ pageContent.return_data.m_shishen2 }} </text>
				</view>
				<view class="text">
					<text>乾造：</text>
					<text v-for="(item, index) in stringSplit(pageContent.return_data.m_qianzao)" :key="index">
						<text v-if="index != 0"> | </text>
						<text class="value">{{ item }}</text>
					</text>
				</view>
				<view class="text">
					<text>十神：</text>
					<text v-for="(item, index) in stringSplit(pageContent.return_data.m_shishen_for)" :key="index">
						<text v-if="index != 0"> | </text>
						<text class="value">{{ item }}</text>
					</text>
				</view>
				<view class="text">最佳坐向：{{ pageContent.return_data.m_nfw }}</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第二：{{ pageContent.return_data.g_username }}小姐的命格</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box list">
				<view class="text">
					<text>生肖：</text>
					<text class="value">{{ pageContent.return_data.g_shengxiao }} </text>
				</view>
				<view class="text">
					<text>十神：</text>
					<text class="value">{{ pageContent.return_data.g_shishen1 }} </text>
					<text> | </text>
					<text class="value">{{ pageContent.return_data.g_shishen2 }} </text>
				</view>
				<view class="text">
					<text>乾造：</text>
					<text v-for="(item, index) in stringSplit(pageContent.return_data.g_qianzao)" :key="index">
						<text v-if="index != 0"> | </text>
						<text class="value">{{ item }}</text>
					</text>
				</view>
				<view class="text">
					<text>十神：</text>
					<text v-for="(item, index) in stringSplit(pageContent.return_data.g_shishen_for)" :key="index">
						<text v-if="index != 0"> | </text>
						<text class="value">{{ item }}</text>
					</text>
				</view>
				<view class="text">最佳坐向：{{ pageContent.return_data.g_vfw }}</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第三：从生肖角度论配婚吉凶（合婚指数）</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box">
				<view class="content">{{ pageContent.return_data.haar_data1 }}</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第四：从星座角度分析{{ pageContent.return_data.g_username }}与{{ pageContent.return_data.m_username }}的合婚</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box">
				<view class="content">
					<view class="title">配对指数</view>
					<u-parse :content="pageContent.return_data.constellation_data.shorttxt"></u-parse>
					<view class="title">配对分析</view>
					<u-parse :content="pageContent.return_data.constellation_data.content"></u-parse>
				</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第五：从正五行角度论配婚吉凶（合婚指数）</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box">
				<view class="content">{{ pageContent.return_data.haar_data2 }}</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第六：从婚姻宫角度论配婚吉凶（合婚指数）</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box">
				<view class="content">{{ pageContent.return_data.haar_data3 }}</view>
			</view>
			<view class="title-box">
				<image class="left" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
				<view class="center">
					<view class="text">第七：从子女宫角度论配婚吉凶（合婚指数）</view>
					<u-icon name="arrow-right" color="#fff" size="28rpx"></u-icon>
				</view>
				<image class="right" src="https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/title_edge.png" mode="aspectFill"></image>
			</view>
			<view class="content-box">
				<view class="content">{{ pageContent.return_data.haar_data4 }}</view>
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
					return_data: {
						constellation_data: {}
					}
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
					}
				})
			},
		},
		computed: {
			stringSplit () {
				return (value) => {
					if (value) {
						return value.split('|')
					}
					return []
				}
			},
		}
	}
</script>

<style lang="scss">
.hehun-detail {
	color: #333;
	font-size: 28rpx;
	position: relative;
	.banner-box {
		.banner {
			width: 100%;
		}
	}
	.order_wrapper {
		padding-bottom: 30rpx;
		border-bottom: 1px solid #ebd3c0;
		.order_code {
			padding: 20rpx;
			border-bottom: 1px solid #ebd3c0;
		}
		.user_info {
			padding: 20rpx;
			font-size: 26rpx;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.item {
				box-sizing: border-box;
				padding: 10rpx 10rpx 20rpx;
				border-radius: 10rpx;
				width: 292rpx;
				background-color: #f0e6c1;
				.name {
					margin: 20rpx 0;
					font-size: 32rpx;
				}
				.image {
					margin: 10rpx 0;
					width: 100%;
					height: 300rpx;
				}
			}
			.center {
				.icon {
					width: 92rpx;
				}
			}
		}
	}
	.result-box {
		margin-top: 10rpx;
		border-top: 1px solid #ebd3c0;
		.words {
			padding: 20rpx 0;
			border-bottom: 1px solid #ebd3c0;
			font-size: 38rpx;
			text-align: center;
		}
		.title-box {
			display: flex;
			margin: 30rpx 0px 16rpx;
			height: 76rpx;
			line-height: 76rpx;
			.left, .right {
				width: 40rpx;
				height: 76rpx;
			}
			.right {
				transform: scaleX(-1);
			}
			.center {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: url('https://base2.tengsytech.com/statics/ffsm/bazihehun/1/images/bg_title_center.png') repeat-x;
				background-size: 1px 76rpx;
				.text {
					color: #fff;
				}
			}
		}
		.content-box {
			padding: 0 20rpx;
			&.list {
				font-size: 30rpx;
				line-height: 70rpx;
			}
			.value {
				color: #ff698c;
				font-weight: 400;
			}
			.content {
				margin: 30rpx 0;
				font-size: 34rpx;
				line-height: 70rpx;
				text-indent: 1.2em;
				.title {
					margin: 30rpx 0;
					color: #00b98d;
					font-size: 34rpx;
					font-weight: bold;
				}
			}
		}
	}
}
</style>