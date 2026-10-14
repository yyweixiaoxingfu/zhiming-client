<template>
	<view class="hehun-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="banner-box">
				<image :src="pageContent.img1" mode="widthFix"></image>
			</view>
			<view class="form-box">
				<view class="box">
					<view class="box-left">男方信息</view>
					<view class="box-right">
						<view class="item">
							<view class="label">男方姓名</view>
							<input class="input" type="text" v-model="form.male_name" placeholder="请输入男方姓名（汉字）" />
						</view>
						<view class="item" @click="openDatePicker('male_birthday')">
							<view class="label">出生日期</view>
							<input class="input datetext" type="text"  v-model="form.male_birthday" placeholder="请选择日期" disabled />
							<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="box">
					<view class="box-left">女方信息</view>
					<view class="box-right">
						<view class="item">
							<view class="label">女方姓名</view>
							<input class="input" type="text" v-model="form.female_name" placeholder="请输入女方姓名（汉字）" />
						</view>
						<view class="item" @click="openDatePicker('female_birthday')">
							<view class="label">出生日期</view>
							<input class="input datetext" type="text" v-model="form.female_birthday" placeholder="请选择日期" disabled />
							<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
						</view>
					</view>
				</view>
				<view class="btn-box" id="btnBox1">
					<button class="btn" @click="goResult">{{ pageContent.desc1 }}</button>
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
			<view class="index-pic">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="hot-box" v-if="hotList.length">
				<view class="title">精品测算</view>
				<view class="content">
					<hot-list :list="hotList"></hot-list>
				</view>
			</view>
		</view>
		<view class="bottom-btn" v-show="showBotBtn">
			<button class="btn" @click="pageScrollToTop">{{ pageContent.desc1 }}</button>
		</view>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray } from '@/utils/util.js'

	export default {
		data () {
			return {
				/* 表单 */
				form: {
					male_name: '',
					male_sex: '1',
					male_birthday: '',
					male_calendar_type: 1,
					
					female_name: '',
					female_sex: '2',
					female_birthday: '',
					female_calendar_type: 1,
				},
				protocol: false,
				
				show: false,
				dateKey: '',
				
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
			openDatePicker (key) {
				this.dateKey = key
				
				this.show = true
			},
			dataConfirm (e) {
				let hour = '时辰未知'
				if (e.hour.solar != -1) {
					hour = e.hour.tiem
				}
				this.form[this.dateKey] = `${e.solarYear}-${e.solarMonth}-${e.solarDay} ${hour}`
			
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
							url: '/pages/payment/hehun?order_no=' + order_no
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
.hehun-page {
	background-color: #dc3644;
	.notice-box {
		background-color: rgba(111, 111, 111, 0.77);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.container {
		padding-bottom: 46rpx;
		position: relative;
		.banner-box {
			image {
				width: 100%;
			}
		}
		.form-box {
			padding: 0 20rpx;
			.box {
				margin-bottom: 20rpx;
				border-radius: 20rpx;
				border: 1rpx solid #decdb7;
				display: flex;
				background: linear-gradient(to bottom, #f85657, #dc3435);
				overflow: hidden;
				.box-left {
					box-sizing: border-box;
					padding: 0 20rpx;
					width: 72rpx;
					color: #fff;
					font-size: 26rpx;
					text-align: center;
					line-height: 32rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.box-right {
					flex: 1;
					background-color: #fff;
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
			}
			.btn-box {
				.btn {
					margin: 0;
					padding: 0;
					border-radius: 112rpx;
					height: 112rpx;
					color: #f24445;
					font-size: 60rpx;
					font-weight: bold;
					text-align: center;
					line-height: 112rpx;
					background: linear-gradient(to bottom, #ffe5a8, #ffd189);
					box-shadow: 0 2px 2px #714229;
					transform: scale(0.8);
					animation: btnAnimate 1.5s linear infinite;
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #fff;
				text-align: center;
				.text {
					font-size: 28rpx;
					.link {
						color: #fff;
					}
				}
			}
		}
		.index-pic {
			margin-top: 20rpx;
			image {
				width: 100%;
			}
		}
		.hot-box {
			margin: 20rpx;
			border-radius: 20rpx;
			border: 1px solid #decdb7;
			background-color: #fff;
			overflow: hidden;
			.title {
				height: 100rpx;
				color: #fee4c1;
				font-size: 40rpx;
				font-weight: bold;
				text-align: center;
				line-height: 100rpx;
				background: linear-gradient(to bottom, #f85657, #dc3435);
			}
			.content {
				padding: 20rpx;
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
		padding: 0 10rpx;
		height: 130rpx;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			flex: 1;
			margin: 0;
			padding: 0;
			border-radius: 100rpx;
			height: 100rpx;
			color: #f24445;
			font-size: 52rpx;
			font-weight: bold;
			text-align: center;
			line-height: 100rpx;
			background: linear-gradient(to bottom, #ffe5a8, #ffd189);
			box-shadow: 0 2px 2px #714229;
			transform: scale(0.8);
			animation: btnAnimate 1.5s linear infinite;
		}
	}
}
</style>
