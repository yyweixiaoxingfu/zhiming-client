<template>
	<view class="bazizh-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="banner-box">
				<image class="bg" :src="pageContent.img1" mode="widthFix"></image>
				<view class="content">
					<image class="bottom" src="https://csweb.tengsytech.com/image/bazizh/bottom.png" mode="aspectFill"></image>
					<image class="middle" src="https://csweb.tengsytech.com/image/bazizh/middle.png" mode="aspectFill"></image>
					<image class="taiji" src="https://csweb.tengsytech.com/image/bazizh/taiji.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form-box">
				<view class="box">
					<view class="item">
						<view class="label">您的姓名</view>
						<input class="input" type="text" v-model="form.name" placeholder="请输入姓名（汉字）" />
					</view>
					<view class="item">
						<view class="label">您的性别</view>
						<view class="gender-box">
							<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
								<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="女" name="2"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item" @click="show = true">
						<view class="label">出生日期</view>
						<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
						<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
					</view>
				</view>
				<view class="protocol-box">
					<view class="protocol-radio" :class="{ 'active': protocol }" @click="protocol = !protocol">
						<view class="checkbox"></view>
						<view class="text">
							<text>我已阅读并同意</text>
							<text class="link" @click.stop="goProtocol">《服务声明及隐私条款》</text>
						</view>
					</view>
					<view class="text">已有213960人测算过，满意率98.7%</view>
				</view>
				<view class="btn-box">
					<image class="btn" :src="pageContent.button_img1" mode="widthFix" @click="goResult"></image>
				</view>
			</view>
			<view class="img-box">
				<view class="box-item">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
			</view>
			<view class="barrage-box" v-if="barrageList.length">
				<view class="title-box">
					<image class="img" src="https://csweb.tengsytech.com/image/bazizh/bg_title.jpg" mode="widthFix"></image>
					<view class="text">{{ pageContent.comment_title }}</view>
				</view>
				<view class="content">
					<barrage-box :list="barrageList"></barrage-box>
				</view>
			</view>
		</view>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'

	export default {
		data () {
			return {
				/* 表单 */
				form: {
					name: '',
					sex: '',
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
				barrageList: [],
				
				show: false,
				
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {
					desc3: '',
				},
				hotList: [],
				expertList: [],
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
						
						this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
						
						this.hotList = groupArray(res.data.rec_pro_data, 8)
						this.expertList = groupArray(res.data.rec_expert_data, 8)
					}
				})
			},
			dataConfirm (e) {
				let hour = '时辰未知'
				if (e.hour.solar != -1) {
					hour = e.hour.tiem
				}
				this.form.birthday = `${e.solarYear}-${e.solarMonth}-${e.solarDay} ${hour}`
			
				this.show = false
			},
			goResult () {
				if (!this.protocol) {
					uni.showToast({
						title: '请阅读并同意协议',
						icon: 'none'
					})
					return
				}
				
				uni.showLoading({ mask: true })
				confirmOrder({
					link_id: this.link_id,
					cate_type: this.cate_type,
					cs_data: JSON.stringify(this.form),
					cid: this.cid,
					order_type: '1'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						let order_no = res.data.order_no

						uni.navigateTo({
							url: '/pages/payment/bazizh?order_no=' + order_no
						})
					}
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
.bazizh-page {
	background-color: #263653;
	.notice-box {
		background-color: #263653;
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		padding-bottom: 32rpx;
		position: relative;
		.banner-box {
			position: relative;
			.bg {
				width: 100%;
			}
			.content {
				position: absolute;
				top: 138rpx;
				left: 360rpx;
				z-index: 10;
				width: 700rpx;
				height: 700rpx;
				.bottom {
					width: 700rpx;
					height: 700rpx;
					animation: bottomRorating 5s linear infinite;
				}
				.middle {
					position: absolute;
					top: 76rpx;
					left: 76rpx;
					z-index: 10;
					width: 548rpx;
					height: 548rpx;
					animation: middleRorating 5s linear infinite;
				}
				.taiji {
					position: absolute;
					top: 175rpx;
					left: 175rpx;
					z-index: 11;
					width: 350rpx;
					height: 350rpx;
				}
			}
		}
		.form-box {
			padding: 20rpx 20rpx 0;
			.box {
				border-radius: 20rpx;
				border: 4rpx solid #B39569;
				background-color: #F9F5EF;
				.item {
					display: flex;
					align-items: center;
					position: relative;
					padding: 10rpx 0;
					& + .item {
						border-top: 1px solid #e2ccb0;
					}
					.label {
						margin-right: 20rpx;
						width: 160rpx;
						height: 80rpx;
						color: #333;
						font-size: 32rpx;
						text-align: center;
						line-height: 80rpx;
					}
					.input {
						flex: 1;
						height: 60rpx;
						font-size: 32rpx;
						line-height: 60rpx;
						&.datetext {
							padding-right: 60rpx;
						}
					}
					.icon {
						position: absolute;
						top: 28rpx;
						right: 24rpx;
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #fff;
				text-align: center;
				.text {
					font-size: 28rpx;
				}
			}
			.btn-box {
				padding: 0 10rpx;
				.btn {
					width: 100%;
				}
			}
		}
		.img-box {
			.box-item {
				margin: 20rpx;
				.img {
					width: 100%;
				}
			}
		}
		.barrage-box {
			margin: 20rpx;
			border-radius: 20rpx;
			overflow: hidden;
			.title-box {
				position: relative;
				.img {
					width: 100%;
				}
				.text {
					position: absolute;
					top: 50%;
					left: 50%;
					z-index: 10;
					transform: translate(-50%, -50%);
					color: #000;
					font-size: 32rpx;
				}
			}
			.content {
				padding: 20rpx;
				background-color: #fefeff;
			}
		}
	}
}

@keyframes bottomRorating {
	0% {
		transform:rotate(0)
	}
	to {
		transform:rotate(1turn)
	}
}
@keyframes middleRorating {
	0% {
		transform:rotate(0)
	}
	to {
		transform:rotate(-1turn)
	}
}
</style>
