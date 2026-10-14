<template>
	<view class="feedback-page">
		<!-- #ifndef H5 -->
		<nav-bar title="意见反馈" placeholder autoBack></nav-bar>
		<!-- #endif -->
		
		<view class="container">
			<u-form :model="form" label-position="top" :rules="rules" ref="uForm">
				<u-form-item prop="content">
					<u-textarea v-model="form.content" placeholder="请描述您的意见或建议" border="none" height="200rpx" maxlength="500" count />
				</u-form-item>
			</u-form>
		</view>
		
		<view class="bottom-box">
			<button class="btn" @click="submit">提交</button>
		</view>
	</view>
</template>

<script>
	import { feedback } from '@/api/api.js'
	
	export default {
		data () {
			return {
				form: {
					content: '',
				},
				rules: {
					content: { required: true, message: '请描述您的意见或建议', trigger: 'blur' },
				},
			}
		},
		methods: {
			submit () {
				this.$refs.uForm.validate().then(valid => {
					if (valid) {
						uni.showLoading({ mask: true })
						feedback(this.form).then(res => {
							uni.hideLoading({ noConflict: true })
							
							if (res.code == 1) {
								uni.showToast({
									title: res.msg,
									icon: 'none'
								})
								
								setTimeout(() => {
									uni.navigateBack()
								}, 200)
							}
						})
					}
				}).catch(errors => {
					console.log('submit errors');
				})
			},
		}
	}
</script>

<style lang="scss">
.feedback-page {
	box-sizing: border-box;
	min-height: 100%;
	background-color: #f5f6fa;
	padding-bottom: 156rpx;
	padding-bottom: calc(156rpx + constant(safe-area-inset-bottom));
	padding-bottom: calc(156rpx + env(safe-area-inset-bottom));
	.container {
		position: relative;
		z-index: 6;
		padding: 38rpx 46rpx;
		::v-deep {
			.u-input {
				padding: 6px 9px !important;
				background-color: #fff;
			}
			.u-upload__button {
				background: #fff;
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		padding: 0 46rpx;
		height: 136rpx;
		background: #fff;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		display: flex;
		align-items: center;
		.btn {
			flex: 1;
			height: 88rpx;
			border-radius: 88rpx;
			color: #fff;
			font-size: 40rpx;
			font-weight: bold;
			line-height: 88rpx;
			background: $btn-bg-color;
		}
	}
}
</style>
