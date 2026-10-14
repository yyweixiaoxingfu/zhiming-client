<template>
	<view class="xmpd-page">
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
				<view class="box man">
					<view class="box-left">男方</view>
					<view class="box-right">
						<view class="item">
							<view class="label">姓</view>
							<input class="input" type="text" v-model="form.male_xing" placeholder="请输入姓氏" />
						</view>
						<view class="item">
							<view class="label">名</view>
							<input class="input" type="text" v-model="form.male_name" placeholder="请输入名字(不含姓)" />
						</view>
					</view>
				</view>
				<view class="box">
					<view class="box-left">女方</view>
					<view class="box-right">
						<view class="item">
							<view class="label">姓</view>
							<input class="input" type="text" v-model="form.female_xing" placeholder="请输入姓氏" />
						</view>
						<view class="item">
							<view class="label">名</view>
							<input class="input" type="text" v-model="form.female_name" placeholder="请输入名字(不含姓)" />
						</view>
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
			<view class="xmpd-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
		</view>
		
		<view class="bottom-btn" v-show="showBotBtn">
			<view class="btn" @click="pageScrollToTop">
				<image class="bg" :src="pageContent.button_img1" mode="heightFix"></image>
				<view class="text">{{ pageContent.desc1 }}</view>
			</view>
		</view>
		
		<order-history></order-history>
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
					female_name: '',
					female_xing: '',
					
					male_name: '',
					male_xing: '',
				},
				protocol: false,
				
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
							url: '/pages/payment/xmpd?order_no=' + order_no
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
.xmpd-page {
	background-color: #f9dbdd;
	.notice-box {
		background-color: #292424;
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
		padding-bottom: 32rpx;
		position: relative;
		z-index: 10;
		.form-box {
			padding: 0 20rpx;
			.box {
				margin-bottom: 20rpx;
				border-radius: 20rpx;
				border: 1rpx solid #decdb7;
				display: flex;
				background: #cb3619;
				overflow: hidden;
				&.man {
					background: #dc9b4e;
				}
				.box-left {
					box-sizing: border-box;
					padding: 0 20rpx;
					width: 76rpx;
					color: #fff;
					font-size: 36rpx;
					font-weight: bold;
					text-align: center;
					line-height: 1.2;
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
							width: 80rpx;
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
					position: relative;
					animation: btnAnimate 1.5s linear infinite;
					text-align: center;
					.bg {
						height: 110rpx;
					}
					.text {
						position: absolute;
						top: 48rpx;
						z-index: 10;
						transform: translateY(-50%);
						width: 100%;
						color: #fff;
						font-size: 50rpx;
						font-weight: bold;
						text-align: center;
						text-shadow: 0 0 10rpx #752f01;
					}
				}
			}
			.protocol-box {
				padding: 16rpx 20rpx;
				color: #333;
				text-align: center;
				.text {
					font-size: 28rpx;
					.link {
						color: #854225;
					}
				}
			}
		}
		.xmpd-box {
			margin: 40rpx 40rpx 20rpx;
			padding: 20rpx 20rpx 40rpx;
			border-radius: 6rpx;
			background-color: #fff;
			position: relative;
			.top {
				position: absolute;
				top: -10rpx;
				left: 6rpx;
				right: 6rpx;
				z-index: 10;
				height: 10rpx;
				.img {
					position: absolute;
					top: 0;
				}
			}
			.bottom {
				position: absolute;
				bottom: -6rpx;
				left: 8rpx;
				right: 8rpx;
				z-index: 10;
				height: 10rpx;
				border-radius: 6rpx;
				background-color: #fff;
			}
			.title-box {
				margin: 20rpx 0;
				text-align: center;
				position: relative;
				.bg {
					width: 100%;
					height: 84rpx;
				}
				.title {
					position: absolute;
					top: 0;
					z-index: 2;
					width: 100%;
					color: #fff;
					font-size: 48rpx;
					font-weight: bold;
					line-height: 84rpx;
				}
			}
			.img {
				width: 100%;
			}
			.hot-box {
				padding: 20rpx 0;
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
			position: relative;
			animation: btnAnimate 1.5s linear infinite;
			text-align: center;
			.bg {
				height: 110rpx;
			}
			.text {
				position: absolute;
				top: 48rpx;
				z-index: 10;
				transform: translateY(-50%);
				width: 100%;
				color: #fff;
				font-size: 50rpx;
				font-weight: bold;
				text-align: center;
				text-shadow: 0 0 10rpx #752f01;
			}
		}
	}
}
</style>
