<template>
	<view class="taluobieren-page">
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
			<view class="m-box">
				<view class="btn-box" id="btnBox1" @click="goXuanze">
					<image class="btn" :src="pageContent.button_img1" mode="widthFix"></image>
				</view>
				<view class="box mt-28">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
				<view class="box mt-48">
					<image class="img top" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/border_top.png" mode="widthFix"></image>
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
					<image class="img bottom" src="https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/border_bot.png" mode="widthFix"></image>
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
				radiovalue: '1',
				
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
					url: '/pages/index/taluobierenFind',
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
.taluobieren-page {
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
		background-color: #2a1f5a;
		.banner-box {
			margin-bottom: -220rpx;
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
			margin: 22rpx 0 10rpx;
			.btn {
				width: 100%;
				animation: btnAnimate 1.5s linear infinite;
			}
		}
		.m-box {
			position: relative;
			z-index: 10;
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
				.parse-intro-text {
					margin-top: -22rpx;
				}
				.content {
					padding: 0 38rpx;
					background: url('https://base2.tengsytech.com/statics/ffsm/taluo/bieren/img/border_mid.png') repeat-y;
					background-size: 100% 100%;
					.title {
						color: #715ae4;
						font-size: 44rpx;
						font-weight: bold;
						text-align: center;
						.num {
							color: #e0804a;
						}
					}
					.detail-data {
						margin: 34rpx 0;
						display: flex;
						align-items: center;
						justify-content: space-around;
						.data-item {
							height: 60rpx;
							padding: 0 16rpx;
							border-radius: 12rpx;
							color: #fff;
							font-size: 32rpx;
							line-height: 60rpx;
							background-color: #8c76e5;
							.value {
								color: #ffff00;
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
							border: 1px solid #fad1ba;
							background-color: #fad1ba;
							color: #333;
							font-size: 28rpx;
							line-height: 60rpx;
						}
					}
					.status-title {
						display: block;
						margin: 0 auto;
						width: 556rpx;
					}
					.radio-wrap {
						margin: 10rpx 0;
						padding: 34rpx 10rpx;
						border-bottom: 1rpx solid #E0E0E0;
						font-size: 30rpx;
						display: flex;
						align-items: center;
						.label {
							margin-right: 34rpx;
						}
					}
					
					::v-deep {
						#barrage-box .item {
							border-bottom: 1px solid #B9B9B9;
							.top {
								color: #6e57e3;
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