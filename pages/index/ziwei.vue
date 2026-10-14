<template>
	<view class="ziwei-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="banner-box">
			<image class="img" :src="pageContent.img1" mode="widthFix"></image>
			<image class="img" :src="pageContent.img2" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="form-box">
				<view class="box">
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
				</view>
				<view class="btn-box" id="btnBox1">
					<button class="btn" @click="goResult">立即测算</button>
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
			</view>
			<view class="m-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="m-box" v-if="barrageList.length">
				<view class="title-box">
					<text class="title">真实案例</text>
				</view>
				<barrage-box :list="barrageList"></barrage-box>
			</view>
			<view class="m-box" v-if="hotList.length">
				<view class="title-box">
					<text class="title">热门推荐</text>
				</view>
				<hot-list :list="hotList"></hot-list>
			</view>
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<button class="btn" @click="pageScrollToTop">立即测算</button>
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
					this.cid = res.data.cid
					this.pageContent = res.data.p_content
					
					this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
					
					this.hotList = groupArray(res.data.rec_pro_data, 8)
					this.expertList = groupArray(res.data.rec_expert_data, 8)
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
							url: '/pages/payment/ziwei?order_no=' + order_no
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
.ziwei-page {
	background-color: #5e4537;
	.notice-box {
		background-color: rgba(58, 42, 38, 0.5);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.banner-box {
		.img {
			width: 100%;
		}
	}
	.container {
		margin-top: -30rpx;
		padding-bottom: 32rpx;
		position: relative;
		z-index: 10;
		.form-box {
			margin: 0 20rpx 20rpx;
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #d1bda1;
			.box {
				border-radius: 16rpx;
				border: 1px solid #e0d0bb;
				background-color: #fff;
				.item {
					display: flex;
					align-items: center;
					position: relative;
					& + .item {
						border-top: 1px solid #e0d0bb;
					}
					.label {
						width: 180rpx;
						font-size: 32rpx;
						text-align: center;
						line-height: 90rpx;
					}
					.input {
						flex: 1;
						height: 90rpx;
						font-size: 32rpx;
						line-height: 90rpx;
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
					height: 112rpx;
					border-radius: 112rpx;
					color: #fff;
					font-size: 48rpx;
					font-weight: bold;
					line-height: 112rpx;
					box-shadow: 0 6rpx 6rpx #978874;
					background: linear-gradient(to bottom,rgba(229,106,87,1) 0,rgba(191,58,53,1) 100%);
					animation: btnAnimate 1.5s linear infinite;
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #60463b;
				text-align: center;
				.text {
					font-size: 28rpx;
					.link {
						color: #60463b;
						text-decoration: underline;
					}
				}
			}
		}
		.m-box {
			margin: 0 20rpx 20rpx;
			border-radius: 20rpx;
			padding-bottom: 30rpx;
			background-color: #f7f3ec;
			overflow: hidden;
			.title-box {
				margin-bottom: 30rpx;
				height: 116rpx;
				color: #473227;
				font-size: 50rpx;
				font-weight: bold;
				text-align: center;
				line-height: 116rpx;
				background: linear-gradient(to bottom,rgba(244,224,196,1) 0,rgba(206,180,142,1) 100%);
				.title {
					display: inline-block;
					background-image: linear-gradient(0deg, #473227, #903b16);
					background-clip: text;
					-webkit-text-fill-color: transparent
				}
			}
			.img-box {
				padding: 0 20rpx;
			}
			.img {
				width: 100%;
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
			height: 112rpx;
			border-radius: 112rpx;
			color: #fff;
			font-size: 48rpx;
			font-weight: bold;
			line-height: 112rpx;
			box-shadow: 0 6rpx 6rpx #978874;
			background: linear-gradient(to bottom,rgba(229,106,87,1) 0,rgba(191,58,53,1) 100%);
			animation: btnAnimate 1.5s linear infinite;
		}
	}
}
</style>
