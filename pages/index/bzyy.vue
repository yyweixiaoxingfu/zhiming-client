<template>
	<view class="bzyy-page">
		<view class="notice-box">
			<u-notice-bar
				:text="notice" icon=""
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="index-top">
				<text>已有</text>
				<text class="value">838445位</text>
				<text>有缘人领取</text>
			</view>
			<view class="index-bottom">
				<image class="index-juan" src="https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/0_img_bao.png" mode="aspectFill"></image>
				<view class="index-con-wrap">
					<view class="top-img">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/0_juan_t.png" mode="widthFix"></image>
					</view>
					<view class="index-con" v-show="formShow">
						<view class="index-form-top">情不知所起，一往而深；情不知所终，一往而殆</view>
						<view class="form-box">
							<view class="item">
								<view class="label">我的姓名</view>
								<input class="input" type="text" placeholder="请输入姓名（汉字）" />
							</view>
							<view class="item">
								<view class="label">我的性别</view>
								<view class="gender-box">
									<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
										<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
										<u-radio label="女" name="2"></u-radio>
									</u-radio-group>
								</view>
							</view>
							<view class="item">
								<view class="label">出生日期</view>
								<input class="input datetext" type="text" placeholder="请选择出生日期" disabled />
								<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
							</view>
							<view class="btn mt-20" @click="goResult">我的一生姻缘簿</view>
							<view class="protocol-radio" :class="{ 'active': protocol }" @click="protocol = !protocol">
								<view class="checkbox"></view>
								<view class="text">
									<text>我已阅读并同意</text>
									<text class="link" @click.stop="goProtocol">《服务声明及隐私条款》</text>
								</view>
							</view>
						</view>
					</view>
					<view class="index-con" v-show="!formShow">
						<view class="index-con__top">{{ displayText1 }}</view>
						<view class="text">{{ displayText2 }}</view>
						<view class="text">{{ displayText3 }}</view>
						<view class="text">{{ displayText4 }}</view>
						<view class="btn position" @click="formShow = true">我的一生姻缘簿</view>
					</view>
					<view class="bottom-img">
						<image class="img" src="https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/0_juan_b.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				notice: '本网页数据安全由阿里云提供，严格按照法律法规和用户协议对您的信息进行全方位保护，请放心使用，测试仅供娱乐！',
			
				textList: [
					'月老姻缘簿：',
					'你好有缘人...',
					'我是盘古开天辟地留下的一本姻缘簿，记录了人间多情人的前世、今生和来世的所有姻缘的数据',
					'有缘人，请点击查收属于你的一生姻缘命图',
				],
				displayText1: '',
				displayText2: '',
				displayText3: '',
				displayText4: '',
				
				formShow: false,
				form: {
					username: '',
					gender: '',
					datetext: '',
				},
				
				protocol: false,
			}
		},
		onLoad () {
			setTimeout(() => {
				this.initAnimation(0)
			}, 1100)
		},
		methods: {
			initAnimation (index) {
				let key = 'displayText' + (index + 1)
				
				let displayLength = this[key].length
				let textLength = this.textList[index].length
				
				if (displayLength != textLength) {
					setTimeout(() => {
						this[key] += this.textList[index][displayLength]
						this.initAnimation(index)
					}, 100)
				} else {
					setTimeout(() => {
						index++
						this.initAnimation(index)
					}, 1000)
				}
			},
			goResult () {
				uni.navigateTo({
					url: '/pages/payment/bzyy'
				})
			},
			goProtocol () {
				uni.navigateTo({
					url: '/pages/my/protocol'
				})
			}
		}
	}
</script>

<style lang="scss">
.bzyy-page {
	color: #333;
	font-size: 28rpx;
	line-height: 1.4;
	.img {
		width: 100%;
	}
	.notice-box {
		background-color: #23110f;
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		height: 100vh;
		background: #07091e url('https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/0_bg.jpg') no-repeat 50%;
		background-size: cover;
		position: relative;
		.index-top {
			padding-top: 40rpx;
			text-align: center;
			.value {
				color: #de354d;
				font-weight: bold;
			}
		}
		.index-bottom {
			position: absolute;
			left: 50%;
			bottom: 60rpx;
			transform: translateX(-50%);
			.index-juan {
				display: block;
				margin: 0 auto 120rpx;
				width: 266rpx;
				height: 376rpx;
				animation: bounce-down 3s linear infinite;
			}
			.index-con-wrap {
				width: 580rpx;
				position: relative;
				.top-img {
					position: absolute;
					left: -20rpx;
					right: -20rpx;
					top: -40rpx;
				}
				.index-con {
					height: 480rpx;
					padding: 20rpx 40rpx 40rpx;
					background-color: #f9f4eb;
					position: relative;
					&::before {
						content: '';
						display: block;
						border: 1px solid #eee1c9;
						position: absolute;
						top: 16rpx;
						left: 20rpx;
						right: 20rpx;
						bottom: 24rpx;
					}
					.index-form-top {
						margin-top: 6rpx;
						color: #fc586f;
						font-size: 28rpx;
						font-weight: bold;
						line-height: 44rpx;
					}
					.index-con__top {
						padding: 20rpx 0 12rpx;
						color: #fc586f;
						font-size: 40rpx;
						font-weight: bold;
					}
					.text {
						font-size: 28rpx;
						line-height: 48rpx;
					}
					.form-box {
						.item {
							display: flex;
							align-items: center;
							position: relative;
							.label {
								width: 168rpx;
								font-size: 32rpx;
								line-height: 74rpx;
							}
							.input {
								flex: 1;
								padding: 0 10rpx;
								border-radius: 8rpx;
								border: 1px solid #eee1c9;
								height: 60rpx;
								font-size: 28rpx;
								line-height: 60rpx;
								background: #fff !important;
								&.datetext {
									padding-right: 60rpx;
								}
							}
							.icon {
								position: absolute;
								top: 20rpx;
								right: 24rpx;
								width: 40rpx;
								height: 40rpx;
							}
						}
					}
					.btn {
						width: 480rpx;
						height: 92rpx;
						color: #fff;
						font-size: 40rpx;
						font-weight: bold;
						text-align: center;
						line-height: 92rpx;
						background: url('https://base2.tengsytech.com/statics/ffsm/app/hongxian/1/images/0_btn.png') no-repeat;
						background-size: 100% auto;
						animation: zoom 1.5s linear infinite;
						&.position {
							position: absolute;
							bottom: 30rpx;
							left: 50%;
							z-index: 10;
							margin-left: -240rpx;
						}
					}
					.protocol-radio {
						.text {
							color: #aeaaaa;
							font-size: 24rpx;
							.link {
								color: #aeaaaa;
								text-decoration: underline;
							}
						}
					}
				}
				.bottom-img {
					position: absolute;
					left: -10rpx;
					right: -10rpx;
					bottom: 0;
					display: flex;
				}
			}
		}
	}
}
</style>
