<template>
	<view class="edit-phone">
		<view class="container">
			<view class="form-box">
				<u--form labelPosition="left" labelWidth="20rpx" :model="form" :rules="rules" ref="uForm">
					<u-form-item prop="mobile" borderBottom required>
						<u--input v-model="form.mobile" border="none" placeholder="请输入手机号"></u--input>
					</u-form-item>
					<u-form-item borderBottom required>
						<u--input v-model="imgCode" maxlength="4" border="none" placeholder="请输入图像验证码"></u--input>
						<view class="right-img" slot="right">
							<image class="img" :src="img_src" mode="heightFix" @click="requestImgCode"></image>
						</view>
					</u-form-item>
					<u-form-item prop="code" required>
						<u--input v-model="form.code" border="none" placeholder="请输入手机验证码"></u--input>
						<u-button slot="right" @tap="getCode" :text="tips" type="success" color="#fc4a4a" size="mini"></u-button>
					</u-form-item>
				</u--form>
			</view>
		</view>
		
		<view class="bottom-box">
			<button class="btn" @click="submit">提交</button>
		</view>
		
		<u-code ref="uCode" @change="codeChange" seconds="60"></u-code>
	</view>
</template>

<script>
	import { getImgCode, sendSms } from '@/api/api.js'

	export default {
		data() {
			return {
				form: {
					mobile: '',
					code: '',
				},
				rules: {
					mobile: [
						{required: true, message: '请输入 11 位手机号', trigger: 'blur'},
						{ validator: (rule, value, callback) => { return uni.$u.test.mobile(value) },
							message: '手机号码不正确',
							trigger: 'blur',
						}
					],
					code: { required: true, message: '请输入手机验证码', trigger: 'blur' },
				},
				
				/* 获取验证码 */
				tips: '',
				imgCode: '',
				img_src: '',
				uuid: '',
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules)
		},
		onLoad () {
			this.requestImgCode()
		},
		methods: {
			requestImgCode () {
				getImgCode().then(res => {
					this.img_src = res.data.img_src
					this.uuid = res.data.uuid
				})
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (!uni.$u.test.mobile(this.form.mobile)) {
					uni.$u.toast('请输入正确的手机号')
					return
				}
				
				if (this.imgCode.length != 4) {
					uni.$u.toast('请输入验证码')
					return
				}
			
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({ title: '正在获取验证码', mask: true })
					
					sendSms({
						mobile: this.form.mobile,
						type: 'modify',
						uuid: this.uuid,
						captcha: this.imgCode,
					}).then(res => {
						uni.hideLoading({ noConflict: true })
			
						if (res) {
							uni.$u.toast(res.msg)
							this.$refs.uCode.start()
						}
					}).catch(() => {
						uni.hideLoading({ noConflict: true })
					})
				} else {
					uni.$u.toast('倒计时结束后再发送')
				}
			},
			
			submit () {
				this.$refs.uForm.validate().then(valid => {
					if (valid) {
						uni.showLoading({ mask: true })
						
						changeMobile(this.form).then(res => {
							if (res) {
								uni.hideLoading({ noConflict: true })
								uni.showToast({ title: res.msg, mask: true })
								
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/my/my'
									})
								}, 200)
							}
						})
					}
				}).catch(errors => {
					
				})
			},
		}
	}
</script>

<style lang="scss">
.edit-phone {
	box-sizing: border-box;
	min-height: 100%;
	padding-bottom: 156rpx;
	padding-bottom: calc(156rpx + constant(safe-area-inset-bottom));
	padding-bottom: calc(156rpx + env(safe-area-inset-bottom));
	background-color: #f8f8f8;
	.container {
		padding: 28rpx;
	}
	.form-box {
		padding: 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		::v-deep {
			.u-form-item__body__left__content__required {
				left: 0px;
				top: -9px;
			}
		}
		.right-img {
			margin-left: 20rpx;
			.img {
				width: 196rpx;
				height: 60rpx;
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