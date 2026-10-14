<template>
	<view class="article-page">
		<view class="top-box">
			<view class="title">{{article_info.title}}</view>
			<view class="info">
				<text class="label label_head">{{article_info.author}}</text>
				<text class="time">{{article_info.click_count}}预览</text>
			</view>
		</view>
		<view class="parse">
			<u-parse :content="article_info.content"></u-parse>
		</view>
		
		<view class="bottom-box">
			<view class="user-info">
				<image class="avatar" :src="article_info.cover" mode="aspectFill"></image>
				<view class="name">{{article_info.author}}</view>
			</view>
			<view class="interaction-bar">
				<view class="sns_opr_btn" :class="{ 'active': article_info.is_like }" @click="thumbChange">
					<text v-if="article_info.is_like" class="custom-icon custom-icon-dianzan1"></text>
					<text v-else class="custom-icon custom-icon-dianzan"></text>
					<view class="label" v-if="article_info.like_count">{{ article_info.like_count }}</view>
					<view class="label" v-else>赞</view>
				</view>
				<view class="sns_opr_btn" :class="{ 'active': article_info.is_collect }" @click="collectChange">
					<text v-if="article_info.is_collect" class="custom-icon custom-icon-shoucang1"></text>
					<text v-else class="custom-icon custom-icon-shoucang"></text>
					<view class="label" v-if="article_info.collect_count">{{ article_info.collect_count }}</view>
					<view class="label" v-else>收藏</view>
				</view>
				<view class="sns_opr_btn" @click="share">
					<text class="custom-icon custom-icon-fenxiangzhuanfa"></text>
					<view class="label">分享</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getDetailsInfo, clickLike, getMaterial } from '@/api/api.js'
	import { navigatorShare } from '@/utils/navigatorShare.js'
	
	export default {
		data () {
			return {
				/* 用户id */
				user_id: 0,
				showType: 0,
				
				cate_type: '',
				link_id: '',
				
				article_info: {},
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		onShow () {
			if (this.showType == 1) {
				this.initData()
			}
			
			this.showType = 1
		},
		methods: {
			initData () {
				getMaterial({}, { custom: { jump: false } }).then(res => {
					if (res.code == 1) {
						this.user_id = res.data.data.id
						
						this.getData()
					} else {
						this.getData()
					}
				})
			},
			getData () {
				getDetailsInfo({
					cate_type: this.cate_type,
					link_id: this.link_id,
					user_id: this.user_id,
				}).then(res => {
					if (res.code == 1) {
						this.article_info = res.data
						
						uni.setNavigationBarTitle({
							title: res.data.title
						})
					}
				})
			},
			share () {
				let share = {
					title: this.article_info.title,
					text: this.article_info.title,
					url: location.href,
				}
				
				navigatorShare(share)
			},
			thumbChange () {
				clickLike({
					cate_type: this.cate_type,
					link_id: this.link_id,
					cid: this.article_info.cid,
					ls_type: '1',
				}).then(res => {
					if (res.code == 1) {
						this.getData()
					}
				})
			},
			collectChange () {
				clickLike({
					cate_type: this.cate_type,
					link_id: this.link_id,
					cid: this.article_info.cid,
					ls_type: '2',
				}).then(res => {
					if (res.code == 1) {
						this.getData()
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.article-page {
	padding: 28rpx 36rpx 136rpx;
	.title {
		font-size: 36rpx;
	}
	.info {
		margin-top: 20rpx;
		font-size: 26rpx;
		.label {
			&_head {
				color: $primary-color;
			}
			&_system {
				color: $red-color;
			}
		}
		.time {
			margin-left: 36rpx;
			color: #999;
		}
	}
	.parse {
		margin-top: 32rpx;
	}
	
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		height: 110rpx;
		padding: 0 36rpx;
		border-top: 1rpx solid rgba(0, 0, 0, .1);
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.user-info {
			display: flex;
			align-items: center;
			.avatar {
				width: 62rpx;
				height: 62rpx;
				border-radius: 50%;
			}
			.name {
				margin-left: 16rpx;
				color: #333;
				font-size: 28rpx;
			}
		}
		.interaction-bar {
			display: flex;
			.sns_opr_btn {
				color: #333;
				width: 86rpx;
				text-align: center;
				&.active {
					color: $primary-color;
				}
				.custom-icon {
					font-size: 40rpx;
				}
				.label {
					font-size: 24rpx;
					line-height: 1.5;
				}
			}
		}
	}
}
</style>
