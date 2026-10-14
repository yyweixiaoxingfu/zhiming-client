<template>
	<view class="reset-password">
		<!-- #ifndef H5 -->
		<u-navbar placeholder leftIconSize="0" bgColor="transparent"></u-navbar>
		<!-- #endif -->
		
		<view class="page-top">
			<image class="bg" src="https://csweb.tengsytech.com/image/top-bg.png" mode="widthFix"></image>
			<view class="mask"></view>
		</view>
		
		<view class="container">
			<view class="card-box">
				<u--form labelPosition="left" labelWidth="20rpx" :model="form" :rules="rules" ref="uForm">
					<u-form-item prop="mobile">
						<u--input v-model="form.mobile" border="none" placeholder="请输入账号"></u--input>
					</u-form-item>
					<u-form-item>
						<u--input v-model="imgCode" maxlength="4" border="none" placeholder="请输入验证码"></u--input>
						<view class="right-img" slot="right">
							<image class="img" :src="img_src" mode="heightFix" @click="requestImgCode"></image>
						</view>
					</u-form-item>
					<u-form-item prop="code">
						<u--input v-model="form.code" border="none" placeholder="请输入验证码"></u--input>
						<u-button slot="right" @tap="getCode" :text="tips" type="success" color="#fc4a4a" size="mini" :disabled="codeDisabled"></u-button>
					</u-form-item>
					<u-form-item prop="loginpass">
						<u--input v-model="form.loginpass" border="none" :password="!showPassword.loginpass" placeholder="请输入新密码"></u--input>
						<view slot="right" @click="showPassword.loginpass = !showPassword.loginpass">
							<u-icon :name="showPassword.loginpass ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
					</u-form-item>
					<u-form-item prop="quepass">
						<u--input v-model="form.quepass" border="none" :password="!showPassword.quepass" placeholder="请再次输入新密码"></u--input>
						<view slot="right" @click="showPassword.quepass = !showPassword.quepass">
							<u-icon :name="showPassword.quepass ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
					</u-form-item>
				</u--form>
				<button class="btn" @click="onSubmit">确 认</button>
			</view>
		</view>
		
		<u-code ref="uCode" @change="codeChange" seconds="60" @start="codeDisabled = true" @end="codeDisabled = false"></u-code>
	</view>
</template>

<script>
	import { forgetPass, getImgCode, sendSms } from '@/api/api'

	export default {
		data () {
			return {
				form: {
					mobile: '',
					code: '',
					loginpass: '',
					quepass: ''
				},
				rules: {
					mobile: [
						{required: true, message: '请输入账号', trigger: 'blur'},
						{ validator: (rule, value, callback) => { return uni.$u.test.mobile(value) || uni.$u.test.email(value) },
							message: '账号不正确',
							trigger: 'blur',
						}
					],
					code: { required: true, message: '请输入验证码', trigger: 'blur' },
					loginpass: { required: true, message: '请输入新密码', trigger: 'blur' },
					quepass: { required: true, message: '请再次输入新密码', trigger: 'blur' }
				},
				showPassword: {
					oldpass: false,
					loginpass: false,
					quepass: false
				},
				
				/* 获取验证码 */
				tips: '',
				codeDisabled: false,
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
				if (this.imgCode.length != 4) {
					uni.$u.toast('请输入验证码')
					return
				}
				
				let params = {}
				
				if (uni.$u.test.mobile(this.form.mobile)) {
					params = {
						mobile: this.form.mobile,
						type: 'forget',
						uuid: this.uuid,
						captcha: this.imgCode,
					}
				} else if (uni.$u.test.email(this.form.mobile)) {
					params = {
						email: this.form.mobile,
						type: 'forget',
						uuid: this.uuid,
						captcha: this.imgCode,
						driver: 'email',
					}
				} else {
					uni.$u.toast('请输入正确的账号')
					return
				}
			
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({ title: '正在获取验证码', mask: true })
					
					sendSms(params).then(res => {
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
			onSubmit () {
				this.$refs.uForm.validate().then(valid => {
					if (valid) {
						uni.showLoading({ mask: true })
						
						let form = this.form
						
						/* 判断是否为邮箱 */
						if (uni.$u.test.email(this.form.mobile)) {
							form = {
								email: this.form.mobile,
								code: this.form.code,
								loginpass: this.form.loginpass,
								quepass: this.form.quepass,
							}
						}

						forgetPass(form).then(res => {
							uni.hideLoading({ noConflict: true })
							if (res) {
								uni.showToast({
									title: res.msg
								})
								uni.removeStorageSync('token')
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/login/login'
									})
								}, 200)
							}
						})
					}
				}).catch(errors => {
					
				})
			}
		}
	}
</script>

<style lang="scss">
.reset-password {
	position: relative;
	min-height: 100%;
	background-color: $bg-color;
	.page-top {
		width: 750rpx;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		filter: blur(20px);
		.bg {
			width: 750rpx;
		}
		.mask {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 60rpx;
			background-image: linear-gradient(0deg, #f1f7ff, rgba($color: #f1f7ff, $alpha: 0));
		}
	}
	.container {
		padding: 32rpx;
		position: relative;
		z-index: 4;
	}
	.card-box {
		padding: 52rpx 42rpx;
		border-radius: 20rpx;
		background-color: #fff;
		::v-deep {
			.u-form-item {
				&:not(:last-child) {
					margin-bottom: 24rpx;
				}
				.u-form-item__body {
					padding: 20rpx;
					border-radius: 72rpx;
					background-color: #f7f7f7;
				}
				.u-form-item__body__right__message {
					margin-top: 8rpx;
				}
			}
		}
		.right-img {
			margin-left: 20rpx;
			.img {
				width: 196rpx;
				height: 60rpx;
			}
		}
		.btn {
			margin-top: 52rpx;
			border-radius: 88rpx;
			height: 88rpx;
			color: #fff;
			font-size: 32rpx;
			line-height: 88rpx;
			background-color: $primary-color;
			box-shadow: 0 0 24rpx rgba($color: $primary-color, $alpha: 0.2);
			&[disabled] {
				background-color: rgba($color: $primary-color, $alpha: 0.4);
				box-shadow: none;
			}
		}
	}
}
</style>
