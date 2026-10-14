<template>
	<view class="user-info">
		<form @submit="userSubmit">
			<view class="form-box">
				<!-- #ifdef MP-WEIXIN -->
				<button class="avatar-box" open-type="chooseAvatar" @chooseavatar="chooseavatar">
					<u--image :src="form.avatar" width="128rpx" height="128rpx" shape="circle"></u--image>
					<view class="camera">
						<u-icon name="camera-fill" color="#000" size="32rpx"></u-icon>
					</view>
				</button>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<button class="avatar-box" @click="chooseImage">
					<u--image :src="form.avatar" width="128rpx" height="128rpx" shape="circle"></u--image>
					<view class="camera">
						<u-icon name="camera-fill" color="#000" size="32rpx"></u-icon>
					</view>
				</button>
				<!-- #endif -->
				<view class="name-box mt-40">
					<view class="form-item">
						<view class="label">昵称</view>
						<input class="input" type="nickname" name="name" v-model="form.name" placeholder="请输入昵称" />
					</view>
				</view>
				<view class="name-box">
					<view class="form-item">
						<view class="label">性别</view>
						<u-radio-group v-model="form.sex" placement="row">
							<u-radio label="未知" :name="0" :customStyle="{marginRight: '20rpx'}"></u-radio>
							<u-radio label="男" :name="1" :customStyle="{marginRight: '20rpx'}"></u-radio>
							<u-radio label="女" :name="2" :customStyle="{marginRight: '20rpx'}"></u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="name-box">
					<view class="form-item">
						<view class="label">账号</view>
						<input class="input" v-model="form.account" placeholder="只能输入字母、数字和下划线，大于6位" />
					</view>
				</view>
			</view>
			<view class="bottom-box">
				<button class="btn" type="default" form-type="submit">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import { uploadURL } from '@/api/config.js'
	import { changeUserInfo, getMaterial } from '@/api/api.js'
	
	export default {
		data () {
			return {
				form: {
					avatar: '',
					name: '',
					sex: '',
					account: '',
				},
			}
		},
		onLoad () {
			this.initData()
		},
		methods: {
			initData () {
				getMaterial().then(res => {
					if (res.code == 1) {
						this.form.name = res.data.data.name
						this.form.avatar = res.data.data.avatar
						this.form.sex = res.data.data.sex
						this.form.account = res.data.data.account
					}
				})
			},
			
			chooseImage () {
				uni.chooseImage({
					count: 1,
					sourceType: ['album'], //从相册选择
					success: (res) => {
						const filePath = res.tempFilePaths[0]
						this.imageUpload(filePath)
					}
				})
			},
			imageUpload (filePath) {
				uni.uploadFile({
					url: uploadURL,
					filePath: filePath,
					name: 'img',
					success: (fileRes) => {
						const data = JSON.parse(fileRes.data)
						if (data.code == 1) {
							this.form.avatar = data.path
						} else {
							uni.showToast({
								title: data.info,
								icon: 'none'
							})
						}
					},
					fail: (fileErr) => {
						console.log('uploadFile fail', fileErr)
					}
				})
			},
			userSubmit (e) {
				if (!this.form.avatar) {
					uni.showToast({
						title: '请选择头像',
						icon: 'none'
					})
					return
				}
				
				if (!e.detail.value.name) {
					uni.showToast({
						title: '请输入昵称',
						icon: 'none'
					})
					return
				}
			
				this.form.name = e.detail.value.name
			
				uni.showLoading({ mask: true })
				changeUserInfo(this.form).then(res => {
					uni.hideLoading({ noConflict: true })
					if (res) {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/my/my'
							})
						}, 200)
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.user-info {
	box-sizing: border-box;
	padding: 28rpx;
	min-height: 100%;
	background-color: #f8f8f8;
	.form-box {
		padding: 70rpx 30rpx 60rpx;
		border-radius: 20rpx;
		background-color: #fff;
		.avatar-box {
			margin: 0 auto;
			padding: 0;
			width: 128rpx;
			height: 128rpx;
			border-radius: 50%;
			overflow: hidden;
			position: relative;
			.avatar {
				width: 100%;
				height: 100%;
			}
			.camera {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 10;
				height: 38rpx;
				background-color: rgba(255, 255, 255, 0.5);
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.name-box {
			.form-item {
				height: 92rpx;
				display: flex;
				align-items: center;
				&:not(:last-child) {
					border-bottom: 1rpx solid #eee;
				}
				.label {
					width: 100rpx;
					color: #333333;
					font-size: 32rpx;
					font-weight: bold;
				}
				.input {
					flex: 1;
				}
				.input-placeholder {
					font-size: 26rpx;
				}
				.btn {
					margin: 0 0 0 20rpx;
					padding: 0;
					border-radius: 10rpx;
					width: 140rpx;
					height: 58rpx;
					color: #fff;
					font-size: 20rpx;
					line-height: 58rpx;
					background-color: #5749f7;
				}
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 120rpx;
		border-top: 1rpx solid #EEEEEE;
		padding: 0 20rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.btn {
			flex: 1;
			border-radius: 80rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			line-height: 80rpx;
			text-align: center;
			background: $primary-color;
		}
	}
}
</style>
