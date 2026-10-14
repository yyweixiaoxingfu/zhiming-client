<template>
	<view class="bazixmjq-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="banner-box">
			<image class="img" :src="pageContent.img1" mode="widthFix"></image>
			<image class="img" src="https://csweb.tengsytech.com/image/bazixmjq/banner2.png" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="form-box">
				<view class="box">
					<view class="title">[ 马上查看你的姓名奥妙 ]</view>
					<view class="item">
						<view class="label">您的姓氏</view>
						<input class="input" type="text" v-model="form.xing" placeholder="请输入姓氏（汉字）" />
					</view>
					<view class="item">
						<view class="label">您的名字</view>
						<input class="input" type="text" v-model="form.name" placeholder="请输入名字（不包含姓氏）" />
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
				<view class="btn-box" id="btnBox1">
					<view class="btn" @click="goResult">
						<image class="bg" src="https://csweb.tengsytech.com/image/bazixmjq/m_btn.png" mode="heightFix"></image>
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
			<view class="parse-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="m-box" v-if="hotList.length">
				<view class="title-box">
					<view class="title">热门推荐</view>
					<image class="bg" src="https://csweb.tengsytech.com/image/bazixmjq/m_title.png" mode="heightFix"></image>
				</view>
				<hot-list :list="hotList"></hot-list>
			</view>
			<view class="m-box" v-if="expertList.length">
				<view class="title-box">
					<view class="title">推荐专家</view>
					<image class="bg" src="https://csweb.tengsytech.com/image/bazixmjq/m_title.png" mode="heightFix"></image>
				</view>
				<expert-list :list="expertList"></expert-list>
			</view>
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<view class="btn" @click="pageScrollToTop">
				<image class="bg" src="https://csweb.tengsytech.com/image/bazixmjq/m_btn.png" mode="heightFix"></image>
				<view class="text">{{ pageContent.desc1 }}</view>
			</view>
		</view>
		
		<order-history></order-history>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray } from '@/utils/util.js'

	export default {
		data () {
			return {
				form: {
					xing: '',
					name: '',
					sex: '',
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
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
							url: '/pages/payment/bazixmjq?order_no=' + order_no
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
.bazixmjq-page {
	background-color: #f4e9d9;
	.notice-box {
		background-color: #e7c699;
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
		padding-bottom: 32rpx;
		position: relative;
		z-index: 10;
		.form-box {
			margin: 0 20rpx 20rpx;
			.box {
				border-radius: 20rpx;
				background-color: #fff;
				.title {
					color: #ec745c;
					font-size: 32rpx;
					text-align: center;
					line-height: 80rpx;
					letter-spacing: 2px;
				}
				.item {
					border-top: 1px solid #fedbdd;
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
						height: 90rpx;
					}
					.text {
						position: absolute;
						top: 16rpx;
						left: 50%;
						z-index: 10;
						transform: translateX(-50%);
						color: #fff2e3;
						font-size: 36rpx;
					}
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #666;
				text-align: center;
				.text {
					font-size: 28rpx;
					.link {
						color: #ec745c;
						text-decoration: underline;
					}
				}
			}
		}
		.parse-box {
			margin: 20rpx;
		}
		.m-box {
			margin: 20rpx;
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #fff;
			.title-box {
				margin: 10rpx 0;
				text-align: center;
				position: relative;
				.bg {
					height: 84rpx;
				}
				.title {
					color: #fff;
					font-size: 40rpx;
					font-weight: bold;
					text-align: center;
					line-height: 84rpx;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					z-index: 10;
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
			position: relative;
			animation: btnAnimate 1.5s linear infinite;
			text-align: center;
			.bg {
				height: 90rpx;
			}
			.text {
				position: absolute;
				top: 16rpx;
				left: 50%;
				z-index: 10;
				transform: translateX(-50%);
				color: #fff2e3;
				font-size: 36rpx;
			}
		}
	}
}
</style>
