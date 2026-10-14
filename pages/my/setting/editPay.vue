<template>
	<view class="edit-pay">
		<view class="container">
			<view class="top-box">
				<text>您正在修改手机号{{ phoneFilter(userInfo.mobile) }}的</text>
				<text class="redText">支付密码</text>
			</view>
			<view class="form-box">
				<u--form labelPosition="left" labelWidth="20rpx" :model="form" :rules="rules" ref="uForm">
					<u-form-item borderBottom required>
						<u--input v-model="imgCode" maxlength="4" border="none" placeholder="请输入验证码"></u--input>
						<view class="right-img" slot="right">
							<image class="img" :src="img_src" mode="heightFix" @click="requestImgCode"></image>
						</view>
					</u-form-item>
					<u-form-item prop="code" borderBottom required>
						<u--input v-model="form.code" border="none" placeholder="请输入手机验证码"></u--input>
						<u-button slot="right" @tap="getCode" :text="tips" type="success" color="#fc4a4a" size="mini"></u-button>
					</u-form-item>
					<u-form-item prop="tradepass" borderBottom required>
						<u--input v-model="form.tradepass" border="none" :password="!showNewPassword" placeholder="请输入支付密码"></u--input>
						<view slot="right" @click="showNewPassword = !showNewPassword">
							<u-icon :name="showNewPassword ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
					</u-form-item>
					<u-form-item prop="quetradepass" required>
						<u--input v-model="form.quetradepass" border="none" :password="!showQuePassword" placeholder="请再次输入支付密码"></u--input>
						<view slot="right" @click="showQuePassword = !showQuePassword">
							<u-icon :name="showQuePassword ? 'eye-off' : 'eye-fill'" color="#666" size="36rpx"></u-icon>
						</view>
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
	import { getMaterial, getImgCode, sendSms } from '@/api/api.js'
	import { phoneFilter } from '@/utils/util.js'
	
	export default {
		data () {
			return {
				userInfo: {},
				
				form: {
					code: '',
					tradepass: '',
					quetradepass: '',
				},
				rules: {
					code: { required: true, message: '请输入手机验证码', trigger: 'blur' },
					tradepass: { required: true, message: '请输入支付密码', trigger: 'blur' },
					quetradepass: { required: true, message: '请再次输入支付密码', trigger: 'blur' },
				},
				showNewPassword: false,
				showQuePassword: false,
				
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
			this.initData()
			
			this.requestImgCode()
		},
		methods: {
			initData () {
				getMaterial().then(res => {
					if (res.code == 1) {
						this.userInfo = res.data.data
					}
				})
			},
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
				if (!uni.$u.test.mobile(this.userInfo.mobile)) {
					uni.$u.toast('手机号获取失败，请返回重试')
					return
				}
				
				if (this.imgCode.length != 4) {
					uni.$u.toast('请输入验证码')
					return
				}
			
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({ title: '正在获取验证码', mask: true })
					
					sendSms({
						mobile: this.userInfo.mobile,
						type: 'settrade',
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
						
					}
				}).catch(errors => {
					console.log('submit errors');
				})
			},
		},
		computed: {
			phoneFilter () {
				return (value) => {
					return phoneFilter(value)
				}
			}
		}
	}
</script>

<style lang="scss">
.edit-pay {
	box-sizing: border-box;
	min-height: 100%;
	padding-bottom: 156rpx;
	padding-bottom: calc(156rpx + constant(safe-area-inset-bottom));
	padding-bottom: calc(156rpx + env(safe-area-inset-bottom));
	background-color: #f8f8f8;
	.container {
		padding: 28rpx;
	}
	.top-box {
		padding: 20rpx;
		border-radius: 20rpx;
		color: #333;
		font-size: 28rpx;
		background-color: #fff;
	}
	.form-box {
		margin-top: 20rpx;
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