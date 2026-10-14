<template>
	<view class="shengxiao-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<image class="bg" src="https://csweb.tengsytech.com/image/shengxiao/wrap-bg.png" mode="widthFix"></image>
			<view class="banner-box">
				<image class="top" :src="pageContent.img1" mode="widthFix"></image>
				<view class="plate">
					<image class="img1" src="https://csweb.tengsytech.com/image/shengxiao/plate1.png" mode="aspectFill"></image>
					<image class="img2" src="https://csweb.tengsytech.com/image/shengxiao/plate2.png" mode="aspectFill"></image>
				</view>
				<image class="dragon" src="https://csweb.tengsytech.com/image/shengxiao/ma.png" mode="aspectFit"></image>
				<image class="keyword" :src="pageContent.img2" mode="widthFix"></image>
				<view class="text">
					<image class="text1" src="https://csweb.tengsytech.com/image/shengxiao/text1.png" mode="aspectFill"></image>
					<image class="text2" src="https://csweb.tengsytech.com/image/shengxiao/text2.png" mode="aspectFill"></image>
					<image class="text3" src="https://csweb.tengsytech.com/image/shengxiao/text3.png" mode="aspectFill"></image>
					<image class="text4" src="https://csweb.tengsytech.com/image/shengxiao/text4.png" mode="aspectFill"></image>
					<image class="text5" src="https://csweb.tengsytech.com/image/shengxiao/text5.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="form-box">
				<view class="img-box">
					<image class="top-img" src="https://csweb.tengsytech.com/image/shengxiao/m_box_t.png" mode="widthFix"></image>
				</view>
				<view class="box">
					<view class="item">
						<view class="label">我的姓名：</view>
						<input class="input" v-model="form.name" type="text" placeholder="请输入姓名（汉字）" />
					</view>
					<view class="item">
						<view class="label">我的性别：</view>
						<view class="gender-box">
							<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
								<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="女" name="2"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item" @click="show = true">
						<view class="label">出生日期：</view>
						<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
						<image class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAAQlBMVEUAAADRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnRLjnUJr9VAAAAFXRSTlMAL2l3O4dVRKodD/XowZ8lkc2xXZnNdifYAAAA8UlEQVQ4y+3TyXKEIBSF4YOCIoM4nfd/1TBYJVqdhOpFKov+FuC99S/cgIuyGk+H6/GCISlwJ+LOvGinuJe4k3E3oWK6WWsdcmt0zeQ2xK+5M4hGx0RO5ahNshyJG4Fg2dTSBsxsbDnDsdix0hnJmjSOK3YWDjytMKPBxtqWdytPuc28NELzTgsjPa+2WW77FmeLFm+2QXwvPFo1Jl03ZstYj+rRdkiEBK4JUpTp0/5pe6hk1irzKtNzvo5/+L+ftrR9plS5l3NcVNK/+eanhnRKrSVVQ6tIC09y24ef7VusPAa2GoCFbRZEg7f8jfUD8AVRrDT0zHU1YAAAAABJRU5ErkJggg==" mode="aspectFill"></image>
					</view>
				</view>
				<view class="img-box img-bottom">
					<image class="bottom-img" src="https://csweb.tengsytech.com/image/shengxiao/m_box_t.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="btn-box" @click="goResult">
				<image class="img" :src="pageContent.button_img1" mode="aspectFill"></image>
				<view class="text">{{ pageContent.desc1 }}</view>
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
			<view class="picture-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<!-- <view class="index-wei">
				<image class="bg-img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/img03.png" mode="widthFix"></image>
				<view class="content">
					<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/wei1.png" mode="aspectFill"></image>
					<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/wei2.png" mode="aspectFill"></image>
					<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/wei3.png" mode="aspectFill"></image>
					<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/wei4.png" mode="aspectFill"></image>
				</view>
			</view> -->
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<button class="btn" @click="pageScrollToTop">{{ pageContent.desc1 }}</button>
		</view>
		
		<order-history></order-history>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray } from '@/utils/util.js'
	
	export default {
		data() {
			return {
				form: {
					name: '',
					sex: '',
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
				btnBottom: 0,
				showBotBtn: false,
				
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
		onReady () {
			const query = uni.createSelectorQuery().in(this);
			query.select('.btn-box').boundingClientRect((data) => {
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
							url: '/pages/payment/shengxiao?order_no=' + order_no
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
.shengxiao-page {
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
		background-color: #3e1232;
		position: relative;
		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
		.banner-box {
			height: 1100rpx;
			position: relative;
			z-index: 10;
			.top {
				width: 100%;
			}
		}
		.plate {
			.img1 {
				position: absolute;
				top: 360rpx;
				left: 120rpx;
				z-index: 20;
				width: 520rpx;
				height: 520rpx;
			}
			.img2 {
				position: absolute;
				top: 476rpx;
				left: 236rpx;
				z-index: 21;
				width: 300rpx;
				height: 300rpx;
				animation: plate2 15s linear infinite;
			}
		}
		.dragon {
			position: absolute;
			top: 332rpx;
			left: 42rpx;
			z-index: 22;
			width: 688rpx;
			height: 632rpx;
		}
		.keyword {
			position: absolute;
			top: 440rpx;
			z-index: 23;
			width: 100%;
		}
		.text {
			image {
				width: 160rpx;
				height: 160rpx;
				position: absolute;
				left: 30rpx;
				top: 1050rpx;
				z-index: 24;
				opacity: 0;
			}
			.text1 {
				animation: text1 1s linear forwards;
			}
			.text2 {
				animation: text2 1s linear 1s forwards;
			}
			.text3 {
				animation: text3 1s linear 2s forwards;
			}
			.text4 {
				animation: text4 1s linear 3s forwards;
			}
			.text5 {
				animation: text5 1s linear 4s forwards;
			}
		}
		.form-box {
			margin-top: 20rpx;
			padding: 0 20rpx;
			position: relative;
			z-index: 50;
			.img-box {
				height: 36rpx;
				overflow: hidden;
				&.img-bottom {
					transform: rotate(180deg);
				}
			}
			.top-img, .bottom-img {
				width: 100%;
			}
			.box {
				padding: 0 30rpx;
				border: 2px solid #e6a74d;
				border-top: 0;
				border-bottom: 0;
				background-color: #fff9ed;
				.item {
					height: 84rpx;
					padding: 0 20rpx;
					border-radius: 16rpx;
					line-height: 84rpx;
					background-color: #fff;
					display: flex;
					position: relative;
					& + .item {
						margin-top: 30rpx;
					}
					.label {
						width: 188rpx;
						color: #aa3e0d;
						font-size: 32rpx;
						font-weight: bold;
					}
					.input {
						flex: 1;
						height: 84rpx;
						font-size: 32rpx;
						line-height: 84rpx;
						&.datetext {
							padding-right: 60rpx;
						}
					}
					.gender-box {
						flex: 1;
						display: flex;
						align-items: center;
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
		}
		.btn-box {
			margin: 50rpx 0 20rpx;
			text-align: center;
			position: relative;
			animation: zoom 1.5s linear infinite;
			.img {
				width: 524rpx;
				height: 110rpx;
			}
			.text {
				width: 524rpx;
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 10;
				color: #5b1f1f;
				font-size: 50rpx;
				font-weight: bold;
				transform: translate(-50%, -50%);
			}
		}
		.protocol-box {
			padding: 16rpx 20rpx;
			color: #f4d7a0;
			text-align: center;
			.text {
				font-size: 28rpx;
			}
		}
		.picture-box {
			padding: 0 36rpx;
			.img {
				width: 100%;
			}
		}
		.index-wei {
			padding: 0 36rpx;
			position: relative;
			.bg-img {
				width: 100%;
			}
			.content {
				position: absolute;
				top: 0;
				left: 36rpx;
				z-index: 10;
				.img {
					position: absolute;
					width: 218rpx;
					height: 218rpx;
					animation: weiZoom 12s linear infinite;
					&:nth-child(1) {
						left: 32rpx;
						top: 644rpx;
					}
					&:nth-child(2) {
						left: 232rpx;
						top: 644rpx;
						animation-delay: 3s;
					}
					&:nth-child(3) {
						left: 434rpx;
						top: 864rpx;
						animation-delay: 6s;
					}
					&:nth-child(4) {
						left: 32rpx;
						top: 1074rpx;
						animation-delay: 9s;
					}
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
		padding: 0 80rpx;
		height: 130rpx;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			width: 100%;
			height: 110rpx;
			border-radius: 110rpx;
			color: #5b1f1f;
			font-size: 50rpx;
			font-weight: bold;
			text-align: center;
			line-height: 110rpx;
			box-shadow: 1px 1px 3px 0 rgba(0,0,0,.5);
			background: radial-gradient(farthest-side at 50% 0,#ffe469,#ffdc3e);
			animation: zoom 1.5s linear infinite;
			transform: scale(.8);
		}
	}
}

@keyframes plate2 {
	from {}
	to {
		transform: rotate(360deg);
	}
}
@keyframes text1 {
	0%, 40%, 50% {
		left: 310rpx;
		top: 550rpx;
		opacity: 1;
		transform: scale(1);
	}
	20% {
		left: 310rpx;
		top: 550rpx;
		opacity: 1;
		transform: scale(2);
	}
	100% {
		left: 316rpx;
		top: 262rpx;
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes text2 {
	0%, 40%, 50% {
		left: 310rpx;
		top: 550rpx;
		opacity: 1;
		transform: scale(1);
	}
	20% {
		left: 310rpx;
		top: 550rpx;
		opacity: 1;
		transform: scale(2);
	}
	100% {
		left: 580rpx;
		top: 460rpx;
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes text3 {
	0%, 40%, 50% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(1);
	}
	20% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(2);
	}
	100% {
		left: 262px;
		top: 360px;
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes text4 {
	0%, 40%, 50% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(1);
	}
	20% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(2);
	}
	100% {
		left: 11px;
		top: 230px;
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes text5 {
	0%, 40%, 50% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(1);
	}
	20% {
		left: 155px;
		top: 275px;
		opacity: 1;
		transform: scale(2);
	}
	100% {
		left: 45px;
		top: 370px;
		opacity: 1;
		transform: scale(1);
	}
}
@keyframes weiZoom {
	0%, 12.5%, 25%, 100% {
		transform: scale(1);
	}
	6.25%, 18.75% {
		transform: scale(1.2);
		z-index: 20;
	}
}
</style>
