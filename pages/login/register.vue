<template>
	<view class="register-page">
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
				<view class="tabs-box">
					<view class="tabs-item" :class="{ 'active': tabCurrent === 1 }" @click="tabChange(1)">手机号注册</view>
					<view class="tabs-item" :class="{ 'active': tabCurrent === 2 }" @click="tabChange(2)">邮箱注册</view>
				</view>
				<u--form labelPosition="left" labelWidth="20rpx" :model="form" :rules="rules" ref="uForm">
					<u-form-item prop="mobile" borderBottom required v-if="tabCurrent === 1">
						<u--input v-model="form.mobile" border="none" placeholder="请输入手机号"></u--input>
					</u-form-item>
					<u-form-item prop="email" borderBottom required v-else-if="tabCurrent === 2">
						<u--input v-model="form.email" border="none" placeholder="请输入邮箱"></u--input>
					</u-form-item>
					
					<u-form-item borderBottom required>
						<u--input v-model="imgCode" maxlength="4" border="none" placeholder="请输入图像验证码"></u--input>
						<view class="right-img" slot="right">
							<image class="img" :src="img_src" mode="heightFix" @click="requestImgCode"></image>
						</view>
					</u-form-item>
					<u-form-item prop="code" borderBottom required>
						<u--input v-model="form.code" border="none" placeholder="请输入验证码"></u--input>
						<u-button slot="right" @tap="getCode" :text="tips" type="success" color="#fc4a4a" size="mini" :disabled="codeDisabled"></u-button>
					</u-form-item>
					<u-form-item prop="account" borderBottom required>
						<u--input v-model="form.account" border="none" placeholder="请输入用户名（至少三个字符）"></u--input>
					</u-form-item>
					<u-form-item prop="loginpass" borderBottom required>
						<u--input v-model="form.loginpass" border="none" :password="!showNewPassword" placeholder="请输入登陆密码"></u--input>
						<view slot="right" @click="showNewPassword = !showNewPassword">
							<u-icon :name="showNewPassword ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
					</u-form-item>
					<u-form-item prop="quepass" required>
						<u--input v-model="form.quepass" border="none" :password="!showQuePassword" placeholder="请再次输入登陆密码"></u--input>
						<view slot="right" @click="showQuePassword = !showQuePassword">
							<u-icon :name="showQuePassword ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
					</u-form-item>
					<u-form-item>
						<u--input v-model="form.regcode" border="none" placeholder="请输入邀请码"></u--input>
					</u-form-item>
				</u--form>
				<view class="protocol-radio" :class="{ 'active': protocol }" @click="protocol = !protocol">
					<view class="checkbox"></view>
					<view class="text">
						<text>我已阅读并同意</text>
						<text class="link" @click.stop="goProtocol">《注册协议》</text>
					</view>
				</view>
				<button class="btn" @click="registerSubmit" :disabled="!protocol">立即注册</button>
				<view class="register" @click="goLogin">
					<text class="text">去登录</text>
					<u-icon name="arrow-right" color="#fc4a4a" size="28rpx"></u-icon>
				</view>
			</view>
		</view>
		
		<u-code ref="uCode" @change="codeChange" seconds="60" @start="codeDisabled = true" @end="codeDisabled = false"></u-code>
	</view>
</template>

<script>
	import { register, getImgCode, sendSms } from '@/api/api'

	export default {
		data () {
			return {
				tabCurrent: 1,
				
				form: {
					mobile: '',
					code: '',
					account: '',
					email: '',
					loginpass: '',
					quepass: '',
					regcode: '',
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
					account: [
						{ required: true, message: '请输入账号', trigger: 'blur' },
						{ min: 3, message: '至少输入 3 个字符', trigger: 'blur' }
					],
					email: [
						{ required: true, message: '请输入邮箱', trigger: 'blur' },
						{ validator: (rule, value, callback) => { return uni.$u.test.email(value) },
							message: '邮箱不正确',
							trigger: 'blur',
						}
					],
					loginpass: { required: true, message: '请输入密码', trigger: 'blur' },
					quepass: { required: true, message: '请再次输入密码', trigger: 'blur' },
				},
				showNewPassword: false,
				showQuePassword: false,
				
				protocol: false,
				
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
					if (res.code == 1) {
						this.img_src = res.data.img_src
						this.uuid = res.data.uuid
					}
				})
			},
			
			tabChange (index) {
				this.tabCurrent = index
				
				this.$refs.uForm.clearValidate()
			},
			
			/* 获取验证码 */
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.imgCode.length != 4) {
					uni.$u.toast('请输入验证码')
					return
				}
				
				let params = {}
				
				if (this.tabCurrent === 1) {
					if (!uni.$u.test.mobile(this.form.mobile)) {
						uni.$u.toast('请输入正确的手机号')
						return
					}
					
					params = {
						mobile: this.form.mobile,
						type: 'register',
						uuid: this.uuid,
						captcha: this.imgCode,
					}
				}
				
				if (this.tabCurrent === 2) {
					if (!uni.$u.test.email(this.form.email)) {
						uni.$u.toast('请输入正确的邮箱')
						return
					}
					
					params = {
						email: this.form.email,
						type: 'register',
						uuid: this.uuid,
						captcha: this.imgCode,
						driver: 'email',
					}
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
			
			/* 注册 */
			registerSubmit () {
				this.$refs.uForm.validate().then(valid => {
					if (valid) {
						uni.showLoading({ mask: true })
						
						register(this.form).then(res => {
							if (res) {
								uni.hideLoading({ noConflict: true })
								uni.showToast({ title: res.msg, mask: true })
								
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
			},
			goProtocol (type) {
				uni.navigateTo({
					url: '/pages/login/registerProtocol'
				})
			},
			goLogin () {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
.register-page {
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
			.u-form-item__body__left__content__required {
				left: 0px;
				top: -9px;
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
		.btn {
			margin-top: 32rpx;
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
		.register {
			margin-top: 8rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.text {
				color: $primary-color;
				font-size: 28rpx;
			}
		}
		.protocol-radio {
			margin-top: 52rpx;
			text-align: center;
			.text {
				font-size: 24rpx;
			}
		}
	}
}
</style>
