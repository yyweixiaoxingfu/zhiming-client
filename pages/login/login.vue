<template>
	<view class="login-page">
		<!-- #ifndef H5 -->
		<u-navbar placeholder leftIconSize="0" bgColor="transparent"></u-navbar>
		<!-- #endif -->
		
		<view class="page-top">
			<image class="bg" src="https://csweb.tengsytech.com/image/top-bg.png" mode="widthFix"></image>
			<view class="mask"></view>
		</view>

		<view class="top-box">
			<image class="image" :src="systemConfigData.web_site_logo" mode="aspectFill"></image>
			<view class="label">{{ systemConfigData.web_site_title }}</view>
		</view>

		<view class="container">
			<view class="card-box">
				<!-- <view class="tabs-box">
					<view class="tabs-item" :class="{ 'active': tabCurrent === 1 }" @click="tabCurrent = 1">账号密码登录</view>
					<view class="tabs-item" :class="{ 'active': tabCurrent === 2 }" @click="tabCurrent = 2">验证码登录</view>
				</view> -->
				<u--form labelPosition="left" labelWidth="20rpx" :model="form" :rules="rules" ref="uForm">
					<u-form-item prop="mobile">
						<u--input v-model="form.mobile" border="none" placeholder="请输入邮箱账号"></u--input>
					</u-form-item>
					
					<view v-if="tabCurrent === 1">
						<u-form-item prop="loginpass">
							<u-input v-model="form.loginpass" border="none" :password="!showPassword" placeholder="请输入登陆密码">
								<template #suffix>
									<view @click="showPassword = !showPassword">
										<u-icon :name="showPassword ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
									</view>
								</template>
							</u-input>
						</u-form-item>
					</view>
					<view v-else-if="tabCurrent === 2">
						<u-form-item>
							<u--input v-model="imgCode" maxlength="4" border="none" placeholder="请输入图像验证码"></u--input>
							<view class="right-img" slot="right">
								<image class="img" :src="img_src" mode="heightFix" @click="requestImgCode"></image>
							</view>
						</u-form-item>
						<u-form-item prop="code">
							<u--input v-model="form.code" border="none" placeholder="请输入邮箱验证码"></u--input>
							<u-button slot="right" :text="tips" type="success" color="#fc4a4a" size="mini" @tap="getCode"></u-button>
						</u-form-item>
					</view>
				</u--form>

				<!-- <view class="fun-box">
					<view class="forget" @click="goForget">忘记密码？</view>
					<view class="register" @click="goRegister">
						<text class="text">去注册</text>
						<u-icon name="arrow-right" color="#fc4a4a" size="28rpx"></u-icon>
					</view>
				</view> -->
				<button class="btn" @click="loginSubmit">立即登录</button>
				<button class="no-login" @click="goIndex">暂不登录</button>
			</view>
		</view>
		
		<!-- <view class="protocol-radio" :class="{ 'active': protocol }" @click="protocol = !protocol">
			<view class="checkbox"></view>
			<view class="text">
				<text>我已阅读并同意</text>
				<text class="link" @click.stop="goProtocol(2)">《用户协议》</text>
				<text>与</text>
				<text class="link" @click.stop="goProtocol(1)">《隐私条款》</text>
			</view>
		</view> -->
		
		<u-code ref="uCode" seconds="60" @change="codeChange"></u-code>
	</view>
</template>

<script>
	import { login, codeLogin, getImgCode, sendSms } from '@/api/api.js'

	export default {
		data () {
			return {
				tabCurrent: 2,
				
				form: {
					mobile: '',
					loginpass: '',
					code: '',
				},
				rules: {
					mobile: [
						{required: true, message: '请输入账号', trigger: 'blur'},
						{ validator: (rule, value, callback) => { return uni.$u.test.email(value) },
							message: '账号不正确',
							trigger: 'blur',
						}
					],
					loginpass: { required: true, message: '请输入密码', trigger: 'blur' },
				},
				showPassword: false,
				
				protocol: true,
				
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
			/* 获取图像验证码 */
			requestImgCode () {
				getImgCode().then(res => {
					if (res.code == 1) {
						this.img_src = res.data.img_src
						this.uuid = res.data.uuid
					}
				})
			},
			
			/* 获取验证码 */
			codeChange (text) {
				this.tips = text
			},
			getCode () {
				if (this.imgCode.length != 4) {
					uni.$u.toast('请输入验证码')
					return
				}
				
				let params = {}
				
				if (uni.$u.test.mobile(this.form.mobile)) {
					params = {
						mobile: this.form.mobile,
						type: 'login',
						uuid: this.uuid,
						captcha: this.imgCode,
					}
				} else if (uni.$u.test.email(this.form.mobile)) {
					params = {
						email: this.form.mobile,
						type: 'login',
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
			
			/* 登录事件 */
			loginSubmit () {
				this.$refs.uForm.validate().then(valid => {
					if (valid) {
						if (this.tabCurrent === 1) {
							this.loginHandle()
						} else if (this.tabCurrent === 2) {
							this.codeLoginHandle()
						}
					}
				}).catch(errors => {
					console.log('loginSubmit errors');
				})
			},
			loginHandle () {
				uni.showLoading({ mask: true })
				
				let form = this.form
				
				/* 判断是否为邮箱 */
				if (uni.$u.test.email(this.form.mobile)) {
					form = {
						email: this.form.mobile,
						loginpass: this.form.loginpass,
					}
				}
				
				login(form).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.data) {
						uni.showToast({ title: res.msg, mask: true })
					
						uni.setStorageSync('token', res.data.token.access_token)
						setTimeout(() => {
							this.loginJump()
						}, 200)
					}
				})
			},
			codeLoginHandle () {
				uni.showLoading({ mask: true })
				
				let form = this.form
				
				/* 判断是否为邮箱 */
				if (uni.$u.test.email(this.form.mobile)) {
					form = {
						email: this.form.mobile,
						code: this.form.code,
					}
				}
				
				codeLogin(form).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.data) {
						uni.showToast({ title: res.msg, mask: true })
					
						uni.setStorageSync('token', res.data.token.access_token)
						setTimeout(() => {
							this.loginJump()
						}, 200)
					}
				})
			},
			loginJump () {
				const pages = getCurrentPages()
				let length = pages.length
				if (length > 1) {
					uni.navigateBack({
						fail: (err) => {
							console.log('navigateBack error', err)
						}
					})
				} else {
					uni.switchTab({
						url: '/pages/index/index',
						fail: (err) => {
							console.log('switchTab error', err)
						}
					})
				}
			},
			
			protocolToast () {
				uni.showToast({
					title: '请阅读并同意协议',
					icon: 'none'
				})
			},
			goProtocol (type) {
				uni.navigateTo({
					url: '/pages/my/protocol?type=' + type
				})
			},
			goForget () {
				uni.navigateTo({
					url: '/pages/login/resetPassword'
				})
			},
			goRegister () {
				uni.reLaunch({
					url: '/pages/login/register'
				})
			},
			goIndex () {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
.login-page {
	position: relative;
	min-height: 100%;
	background-color: $bg-color;
	.page-top {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		filter: blur(20px);
		.bg {
			width: 100%;
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
	.top-box {
		height: 332rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 4;
		.image {
			width: 134rpx;
			height: 134rpx;
		}
		.label {
			margin-top: 40rpx;
			color: #333;
			font-size: 32rpx;
			font-weight: bold;
		}
	}
	.container {
		padding: 0 32rpx 32rpx;
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
			.u-button {
				height: 48rpx !important;
			}
			.u-button__text {
				font-size: 26rpx !important;
			}
		}
		.tabs-box {
			margin-bottom: 52rpx;
			display: flex;
			align-items: center;
			.tabs-item {
				flex: 1;
				font-size: 28rpx;
				text-align: center;
				&.active {
					color: $primary-color;
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
		.fun-box {
			margin-top: 28rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.forget {
				color: #666;
				font-size: 28rpx;
			}
			.register {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.text {
					color: $primary-color;
					font-size: 28rpx;
				}
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
		.no-login {
			margin-top: 20rpx;
			height: 88rpx;
			color: #666;
			font-size: 32rpx;
			line-height: 88rpx;
			background-color: transparent;
		}
	}
	.protocol-radio {
		position: fixed;
		left: 32rpx;
		right: 32rpx;
		bottom: 80rpx;
		z-index: 6;
		display: flex;
		justify-content: center;
	}
}
</style>
