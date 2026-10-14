<template>
	<view class="yinyuancs-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<image class="bg-img" :src="pageContent.img1" mode="widthFix"></image>
		<view class="container">
			<view class="form-box">
				<view class="box">
					<view class="title">输入信息，马上了解你的姻缘</view>
					<view class="item">
						<view class="label">{{ pageContent.fields.name }}</view>
						<input class="input" type="text" v-model="form.name" placeholder="请输入姓名（汉字）" />
					</view>
					<view class="item">
						<view class="label">{{ pageContent.fields.sex }}</view>
						<view class="gender-box">
							<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
								<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="女" name="2"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item" @click="show = true">
						<view class="label">{{ pageContent.fields.birthday }}</view>
						<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
						<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
					</view>
				</view>
				<view class="btn-box" id="btnBox1">
					<view class="btn" @click="goResult">
						<image class="bg" :src="pageContent.button_img1" mode="heightFix"></image>
						<view class="text">{{ pageContent.desc1 }}</view>
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
			<view class="img-box">
				<view class="parse-box">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
				<view class="box-item" v-if="barrageList.length">
					<view class="title-box">
						<image class="img" src="https://csweb.tengsytech.com/image/yinyuancs/m_title.png" mode="widthFix"></image>
						<view class="title">用户评价</view>
					</view>
					<barrage-box :list="barrageList"></barrage-box>
				</view>
				<view class="box-item" v-if="hotList.length">
					<view class="title-box">
						<image class="img" src="https://csweb.tengsytech.com/image/yinyuancs/m_title.png" mode="widthFix"></image>
						<view class="title">热门推荐</view>
					</view>
					<hot-list :list="hotList"></hot-list>
				</view>
			</view>
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<view class="btn" @click="pageScrollToTop">
				<image class="bg" :src="pageContent.button_img1" mode="heightFix"></image>
				<view class="text">{{ pageContent.desc1 }}</view>
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
					fields: {
						birthday: '出生日期',
						calendar_type: '日期类型',
						name: '姓名',
						sex: '性别',
					}
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
							url: '/pages/payment/yinyuancs?order_no=' + order_no
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
.yinyuancs-page {
	background-color: #be1e05;
	.notice-box {
		background-color: #380a0a;
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.bg-img {
		width: 100%;
	}
	.container {
		margin-top: -234rpx;
		padding-bottom: 32rpx;
		position: relative;
		z-index: 10;
		.form-box {
			padding: 0 22rpx;
			.box {
				border-radius: 22rpx;
				background-color: #fdfaf4;
				overflow: hidden;
				.title {
					height: 72rpx;
					color: #e3140e;
					font-size: 36rpx;
					text-align: center;
					line-height: 72rpx;
					background-color: #ffd8a1;
				}
				.item {
					display: flex;
					align-items: center;
					position: relative;
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
					position: relative;
					animation: btnAnimate 1.5s linear infinite;
					text-align: center;
					.bg {
						height: 118rpx;
					}
					.text {
						position: absolute;
						top: 20rpx;
						left: 50%;
						z-index: 10;
						transform: translateX(-50%);
						color: #e3140e;
						font-size: 44rpx;
						font-weight: bold;
					}
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #fff;
				text-align: center;
				.text {
					font-size: 28rpx;
					.link {
						color: #ffc24c;
					}
				}
			}
		}
		.img-box {
			.parse-box {
				margin: 20rpx;
			}
			.box-item {
				margin: 20rpx;
				padding: 20rpx;
				border-radius: 20rpx;
				background-color: #fdfaf4;
				.title-box {
					margin-top: 10rpx;
					margin-bottom: 20rpx;
					position: relative;
					.title {
						width: 100%;
						position: absolute;
						top: 20rpx;
						z-index: 10;
						color: #f5ce82;
						font-size: 40rpx;
						font-weight: bold;
						text-align: center;
						background-image: linear-gradient(90deg, #f9f6c2, #f5ce82);
						background-clip: text;
						-webkit-text-fill-color: transparent
					}
				}
				.img {
					width: 100%;
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
			position: relative;
			animation: btnAnimate 1.5s linear infinite;
			text-align: center;
			.bg {
				height: 118rpx;
			}
			.text {
				position: absolute;
				top: 20rpx;
				left: 50%;
				z-index: 10;
				transform: translateX(-50%);
				color: #e3140e;
				font-size: 44rpx;
				font-weight: bold;
			}
		}
	}
}
</style>
