<template>
	<view class="taluofuhe-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="banner-box">
				<image class="banner" :src="pageContent.img1" mode="widthFix"></image>
			</view>
			<view class="guide-text">默想对方的样子,做好占卜前的准备</view>
			<view class="btn-box" id="btnBox1" @click="goXuanze">
				<image class="btn" :src="pageContent.button_img1" mode="widthFix"></image>
			</view>
			<view class="m-box">
				<u-parse :content="pageContent.content1"></u-parse>
				<view class="box mt-48">
					<image class="img top" src="https://csweb.tengsytech.com/image/taluofuhe/border_top.png" mode="widthFix"></image>
					<view class="content big">
						<view class="title">
							<text>{{ pageContent.comment_title }}</text>
						</view>
						<view class="detail-data">
							<view class="data-item">
								<text>已测算人数: </text>
								<text class="value">{{ pageContent.cs_count }}</text>
							</view>
							<view class="data-item">
								<text>好评率: </text>
								<text class="value">{{ pageContent.g_comment_rate }}</text>
							</view>
						</view>
						<view class="labels">
							<view class="item" v-for="(item, index) in pageContent.label_total" :key="index">{{ item }}</view>
						</view>
						<barrage-box :list="barrageList"></barrage-box>
					</view>
					<image class="img bottom" src="https://csweb.tengsytech.com/image/taluofuhe/border_bot.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="hot-box" v-if="hotList.length">
			<view class="title-box">
				<image class="img" src="https://csweb.tengsytech.com/image/rmyc.png" mode="aspectFill"></image>
			</view>
			<hot-list :list="hotList"></hot-list>
		</view>
		<view class="bottom-btn" v-if="showBotBtn">
			<view class="btn" @click="goXuanze">
				<image class="bg" :src="pageContent.button_img1" mode="widthFix"></image>
			</view>
		</view>
		<u-back-top
			:scroll-top="scrollTop"
			icon="arrow-up" right="10"
			:customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
			:iconStyle="{ color: '#fff', fontWeight: 'bold' }"
		></u-back-top>
	</view>
</template>

<script>
	import { getDetailsInfo } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'
	
	export default {
		data () {
			return {
				barrageList: [],
				
				btnBottom: 0,
				showBotBtn: false,
				scrollTop: 0,
				
				cate_type: '',
				link_id: '',
				pageContent: {
					desc3: '',
					label_total: [],
				},
				hotList: [],
				expertList: [],
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		onReady () {
			const query = uni.createSelectorQuery().in(this);
			query.select('#btnBox1').boundingClientRect((data) => {
				this.btnBottom = data.bottom
			}).exec()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			this.scrollTop = scrollTop
			
			if (scrollTop > this.btnBottom) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					this.pageContent = res.data.p_content
					
					this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
					
					this.hotList = groupArray(res.data.rec_pro_data, 8)
					this.expertList = groupArray(res.data.rec_expert_data, 8)
				})
			},
			goXuanze () {
				uni.$u.route({
					url: '/pages/index/taluofuheFind',
					params: {
						cate_type: this.cate_type,
						link_id: this.link_id,
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.taluofuhe-page {
	.notice-box {
		background-color: rgba(0, 0, 0, 0.9);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		padding-bottom: 46rpx;
		background-color: #34115a;
		.banner-box {
			.banner {
				width: 100%;
			}
		}
		.guide-text {
			margin: 22rpx 0 6rpx;
			color: #fff;
			font-size: 36rpx;
			text-align: center;
			line-height: 90rpx;
		}
		.btn-box {
			padding: 0 56rpx;
			.btn {
				width: 100%;
				animation: btnAnimate 1.5s linear infinite;
			}
		}
		.m-box {
			position: relative;
			z-index: 10;
			margin-top: 34rpx;
			padding: 0 34rpx;
			.box {
				display: flex;
				flex-direction: column;
				.title-box {
					padding: 46rpx 0 22rpx;
					text-align: center;
					.title {
						width: 580rpx;
					}
				}
				.img {
					width: 100%;
					&.top {
						margin-bottom: -1rpx;
					}
					&.bottom {
						margin-top: -1rpx;
					}
				}
				.content {
					padding: 0 38rpx;
					background: url('https://csweb.tengsytech.com/image/taluofuhe/border_mid.png') repeat-y;
					background-size: 100% 100%;
					.title {
						color: #9647d3;
						font-size: 44rpx;
						font-weight: bold;
						text-align: center;
						.num {
							color: #e35f61;
						}
					}
					.detail-data {
						margin: 34rpx 0;
						display: flex;
						align-items: center;
						justify-content: space-around;
						.data-item {
							height: 98rpx;
							padding: 0 16rpx;
							border-radius: 12rpx;
							color: #fff;
							font-size: 32rpx;
							line-height: 98rpx;
							background-color: #a160d6;
							.value {
								color: #fce558;
							}
						}
					}
					.labels {
						margin-bottom: 20rpx;
						display: flex;
						flex-wrap: wrap;
						gap: 12rpx;
						.item {
							padding: 0 10rpx;
							border-radius: 60rpx;
							border: 1px solid #a160d6;
							color: #a160d6;
							font-size: 28rpx;
							line-height: 60rpx;
						}
					}
					
					::v-deep {
						#barrage-box .item {
							border-bottom: 1px solid #B9B9B9;
							.top {
								color: #893cc0;
							}
						}
					}
				}
			}
		}
	}
	.hot-box {
		padding: 40rpx 0;
		background-color: #fff;
		.title-box {
			margin-bottom: 20rpx;
			text-align: center;
			.img {
				width: 260rpx;
				height: 68rpx;
			}
		}
	}
	.bottom-btn {
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 50;
		margin: 0;
		padding: 0 40rpx;
		height: 130rpx;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			flex: 1;
			position: relative;
			animation: btnAnimate 1.5s linear infinite;
			.bg {
				width: 100%;
			}
		}
	}
}
</style>
