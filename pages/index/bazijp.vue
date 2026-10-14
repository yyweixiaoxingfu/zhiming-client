<template>
	<view class="bazijp-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<image class="img" :src="pageContent.img1" mode="widthFix"></image>
			<view class="xuan-box">
				<image class="img" :src="pageContent.img2" mode="widthFix"></image>
				<view class="xuan">
					<image class="xuan-img1" src="https://csweb.tengsytech.com/image/bazijp/0_xuan_1.png" mode="aspectFill"></image>
					<image class="xuan-img2" src="https://csweb.tengsytech.com/image/bazijp/0_xuan_2.png" mode="aspectFill"></image>
					<image class="xuan-img3" src="https://csweb.tengsytech.com/image/bazijp/m_xuan_center.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form-box">
				<view class="item">
					<view class="label">我的姓名</view>
					<input class="input" type="text" v-model="form.name" placeholder="请输入姓名（汉字）" />
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
				<view class="item" @click="show = true">
					<view class="label">出生日期</view>
					<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
					<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
				</view>
				<view class="btn-box" id="btnBox1">
					<view class="btn" @click="goResult">
						<image class="bg" :src="pageContent.button_img1" mode="widthFix"></image>
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
					<view class="text">{{ pageContent.desc2 }}</view>
				</view>
			</view>
			<view class="parse-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<!-- <view class="bottom-form">
				<view class="title-box">输入个人信息获取运势报告</view>
				<view class="form-list">
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
				<view class="btn-box">
					<view class="btn" @click="goResult">
						<image class="bg" :src="pageContent.button_img1" mode="widthFix"></image>
					</view>
				</view>
				<view class="protocol-box">
					<view class="protocol-radio" :class="{ 'active': protocol }" @click="protocol = !protocol">
						<view class="checkbox"></view>
						<view class="text">
							<text>我已阅读并同意</text>
							<text class="link" @click.stop>《服务声明及隐私条款》</text>
						</view>
					</view>
					<view class="text">{{ pageContent.desc2 }}</view>
				</view>
			</view> -->
			<view class="m-box">
				<view class="title-box">
					<image class="bg" src="https://csweb.tengsytech.com/image/bazijp/m_bg_title.png" mode="heightFix"></image>
					<view class="title">98%用户好评</view>
				</view>
				<barrage-box :list="barrageList"></barrage-box>
			</view>
			<view class="m-box">
				<view class="title-box">
					<image class="bg" src="https://csweb.tengsytech.com/image/bazijp/m_bg_title.png" mode="heightFix"></image>
					<view class="title">热门测算</view>
				</view>
				<hot-list :list="hotList"></hot-list>
			</view>
			<view class="m-box">
				<view class="title-box">
					<image class="bg" src="https://csweb.tengsytech.com/image/bazijp/m_bg_title.png" mode="heightFix"></image>
					<view class="title">推荐专家</view>
				</view>
				<expert-list :list="expertList"></expert-list>
			</view>
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<view class="btn" @click="pageScrollToTop">
				<image class="bg" :src="pageContent.button_img1" mode="widthFix"></image>
			</view>
		</view>
		
		<order-history></order-history>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'

	export default {
		data () {
			return {
				form: {
					name: '',
					sex: '',
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
				barrageList: [],
				
				show: false,
				
				btnBottom: 0,
				showBotBtn: false,
				
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
		onReady () {
			const query = uni.createSelectorQuery().in(this);
			query.select('#btnBox1').boundingClientRect((data) => {
				this.btnBottom = data.bottom
			}).exec()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			
			if (scrollTop > this.btnBottom) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
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
			pageScrollToTop () {
				uni.pageScrollTo({
					scrollTop: 100,
					duration: 200
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
							url: '/pages/payment/bazijp?order_no=' + order_no
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
.bazijp-page {
	background-color: #864a30;
	.notice-box {
		background-color: #5b354b;
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		padding-bottom: 32rpx;
		position: relative;
		.img {
			width: 750rpx;
		}
		.xuan-box {
			position: relative;
			.xuan {
				width: 404rpx;
				height: 404rpx;
				position: absolute;
				top: 0;
				left: 50%;
				z-index: 10;
				transform: translateX(-50%);
				.xuan-img1 {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					width: 404rpx;
					height: 404rpx;
					animation: rotate 20s linear infinite;
				}
				.xuan-img2 {
					position: absolute;
					top: 72rpx;
					left: 72rpx;
					z-index: 2;
					width: 260rpx;
					height: 260rpx;
					animation: rotate2 20s linear infinite;
				}
				.xuan-img3 {
					position: absolute;
					top: 105rpx;
					left: 105rpx;
					z-index: 3;
					width: 194rpx;
					height: 194rpx;
				}
			}
		}
		.form-box {
			margin: 20rpx;
			border-radius: 8rpx;
			padding: 40rpx 30rpx;
			background-color: #ffeec6;
			.item {
				margin-bottom: 30rpx;
				padding: 10rpx 24rpx;
				border: 1px solid #d5bb7e;
				border-radius: 40rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				position: relative;
				.label {
					width: 160rpx;
					font-size: 32rpx;
					line-height: 60rpx;
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
					top: 20rpx;
					right: 24rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
			.btn-box {
				margin-top: 20rpx;
				.btn {
					position: relative;
					animation: btnAnimate 1.5s linear infinite;
					.bg {
						width: 100%;
					}
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #666;
				text-align: center;
				.text {
					font-size: 28rpx;
				}
			}
		}
		.parse-box {
			padding: 0 20rpx 0;
		}
		.m-box {
			margin: 40rpx 20rpx 0;
			padding: 100rpx 10rpx 20rpx;
			border-radius: 12rpx;
			background-color: #ffeec6;
			position: relative;
			.title-box {
				position: absolute;
				top: -12rpx;
				left: 0;
				right: 0;
				height: 92rpx;
				text-align: center;
				.bg {
					width: 100%;
					height: 92rpx;
				}
				.title {
					position: absolute;
					top: 0;
					z-index: 2;
					width: 100%;
					color: #fff8e6;
					font-size: 36rpx;
					font-weight: bold;
					line-height: 92rpx;
				}
			}
			.img {
				width: 100%;
			}
		}
		.bottom-form {
			margin: 20rpx;
			.title-box {
				border-radius: 16rpx 16rpx 0 0;
				color: #fff;
				font-size: 36rpx;
				text-align: center;
				line-height: 62rpx;
				background-color: #b43b31;
			}
			.form-list {
				border-radius: 0 0 16rpx 16rpx;
				background-color: #ffeec6;
				.item {
					display: flex;
					align-items: center;
					position: relative;
					& + .item {
						border-top: 1px solid #864a30;
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
						top: 20rpx;
						right: 24rpx;
						width: 40rpx;
						height: 40rpx;
					}
				}
			}
			.btn-box {
				margin-top: 20rpx;
				.btn {
					position: relative;
					animation: btnAnimate 1.5s linear infinite;
					.bg {
						width: 100%;
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
		}
	}
	.bottom-btn {
		position: sticky;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 50;
		margin: 0;
		padding: 0 40rpx;
		height: 130rpx;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			flex: 1;
			position: relative;
			animation: btnAnimate 1.5s linear infinite;
			.bg {
				width: 100%;
			}
		}
	}
}
</style>
