<template>
	<view class="share-page">
		<view class="image-box">
			<image class="image" :src="banner" mode="aspectFit"></image>
		</view>
		<view class="bottom-box">
			<button class="btn share" @click="downloadImage">保存海报</button>
			<button class="btn download" @click="setClipboardData">复制链接</button>
		</view>
	</view>
</template>

<script>
	import { inviteFriends } from '@/api/api.js'
	
	export default {
		data() {
			return {
				banner: '',
				link_sign: '',
			}
		},
		onLoad () {
			uni.showLoading({ mask: true })
			inviteFriends().then(res => {
				uni.hideLoading({ noConflict: true })
				
				if (res.code == 1) {
					this.banner = res.data.poster
					this.link_sign = res.data.url
				}
			})
		},
		methods: {
			downloadImage () {
				// #ifdef H5
				let oA = document.createElement('a')
				oA.download = ''
				oA.href = this.banner
				document.body.appendChild(oA)
				oA.click()
				oA.remove()
				// #endif
				
				// #ifdef MP-WEIXIN
				uni.authorize({
					scope: 'scope.writePhotosAlbum',
					success: () => {
						uni.saveImageToPhotosAlbum({
							filePath: this.banner,
							success: (res) => {
								uni.showToast({
									title: '保存成功'
								})
							}
						})
					},
					fail () {
						uni.showModal({
							title: '请开启保存到相册权限',
							success (res) {
								if (res.confirm) {
									uni.openSetting()
								}
							}
						})
					}
				})
				// #endif
			},
			setClipboardData () {
				uni.setClipboardData({
					data: this.link_sign,
					success: () => {
						console.log('success')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.share-page {
	box-sizing: border-box;
	height: 100vh;
	background-color: $bg-color;
	display: flex;
	flex-direction: column;
	.image-box {
		padding: 20rpx;
		height: calc(100% - 120rpx);
		.image {
			width: 100%;
			height: 100%;
		}
	}
	.bottom-box {
		height: 120rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.btn {
			margin: 0;
			padding: 0;
			border-radius: 80rpx;
			width: 300rpx;
			height: 80rpx;
			color: #fff;
			font-size: 28rpx;
			line-height: 80rpx;
			&.share {
				background-color: #28c445;
			}
			&.download {
				background-color: #5749f7;
			}
		}
	}
	
	#shareImageCanvas {
		position: fixed;
		left: 10000px;
	}
}
</style>
