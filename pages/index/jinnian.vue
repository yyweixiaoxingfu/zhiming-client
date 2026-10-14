<template>
	<view class="jinnian-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="container">
			<view class="banner-box">
				<image class="img" :src="pageContent.img1" mode="widthFix"></image>
				<image class="img" :src="pageContent.img2" mode="widthFix"></image>
				<view class="id-words">
					<image class="icon-1" src="https://csweb.tengsytech.com/image/jinnian/jinnian-word-1.png" mode="aspectFill"></image>
					<image class="icon-2" src="https://csweb.tengsytech.com/image/jinnian/jinnian-word-2.png" mode="aspectFill"></image>
					<image class="icon-3" src="https://csweb.tengsytech.com/image/jinnian/jinnian-word-3.png" mode="aspectFill"></image>
				</view>
				<view class="index-wheel">
					<image class="bg" src="https://csweb.tengsytech.com/image/jinnian/0_yuan.png" mode="aspectFill"></image>
					<view class="outer" :style="[outerStyle]">
						<view class="item" :class="{ 'active': outerItemIndex === 0 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/shu-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/shu-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 1 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/niu-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/niu-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 2 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/hu-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/hu-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 3 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/tu-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/tu-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 4 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/long-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/long-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 5 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/she-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/she-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 6 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/ma-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/ma-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 7 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/yang-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/yang-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 8 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/hou-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/hou-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 9 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/ji-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/ji-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 10 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/gou-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/gou-2.png" mode="aspectFill"></image>
						</view>
						<view class="item" :class="{ 'active': outerItemIndex === 11 }">
							<image class="before" src="https://csweb.tengsytech.com/image/jinnian/zhu-1.png" mode="aspectFill"></image>
							<image class="after" src="https://csweb.tengsytech.com/image/jinnian/zhu-2.png" mode="aspectFill"></image>
						</view>
					</view>
					<image class="inner" src="https://csweb.tengsytech.com/image/jinnian/0-banner-arrow.png" mode="aspectFill"></image>
					<u-transition :show="tagShow">
						<view class="tag">{{ tag }}</view>
					</u-transition>
				</view>
			</view>
			<view class="form-box">
				<image class="top-img" src="https://csweb.tengsytech.com/image/jinnian/0_form_t.png" mode="widthFix"></image>
				<view class="form-list">
					<view class="item">
						<view class="label">姓氏</view>
						<input class="input" type="text" v-model="form.xing" placeholder="请输入姓氏" />
					</view>
					<view class="item">
						<view class="label">名字</view>
						<input class="input" type="text" v-model="form.name" placeholder="请输入名字(不含姓)" />
					</view>
					<view class="item">
						<view class="label">性别</view>
						<view class="gender-box">
							<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
								<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="女" name="0"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item" @click="show = true">
						<view class="label">出生日期</view>
						<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
					</view>
				</view>
				<view class="btn-box">
					<view class="btn" @click="goResult">
						<image class="bg" :src="pageContent.button_img1" mode="widthFix"></image>
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
				<image class="bottom-img" src="https://csweb.tengsytech.com/image/jinnian/0_form_b.png" mode="widthFix"></image>
			</view>
			<view class="m-box">
				<view class="title-box">
					<image class="bg" src="https://csweb.tengsytech.com/image/jinnian/m_title.png" mode="heightFix"></image>
					<view class="title">热门测算</view>
				</view>
				<image class="img" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
				<view class="content-box">
					<u-parse :content="pageContent.content1"></u-parse>
				</view>
				<image class="img rotate" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
			</view>
			<view class="m-box">
				<image class="img" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
				<view class="content-box">
					<hot-list :list="hotList"></hot-list>
				</view>
				<image class="img rotate" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
			</view>
			<view class="m-box">
				<image class="img" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
				<view class="content-box">
					<expert-list :list="expertList"></expert-list>
				</view>
				<image class="img rotate" src="https://csweb.tengsytech.com/image/jinnian/m_box_t.png" mode="widthFix"></image>
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
				/* 顶部轮盘动画 */
				sx: 0,
				innerAngel: 0,
				outerAngel: 0,
				tag: '',
				tagList: ['合太岁年', '犯太岁年', '吉星飞临', '吉星欠奉', '破太岁年', '吉星驾临', '害太岁年', '冲太岁年', '吉星临门', '流年半合', '刑太岁年', '吉星相助'],
				tagShow: false,
				outerItemIndex: -1,
				timer: null,
				
				/* 表单 */
				form: {
					xing: '',
					name: '',
					sex: '',
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
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
			
			setTimeout(() => {
				this.rotate()
				
				this.timer = setInterval(() => {
					this.rotate()
				}, 6000)
			}, 2000)
		},
		onUnload () {
			clearInterval(this.timer)
			this.timer = null
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
			rotate () {
				this.innerAngel += 480
				
				let t = Math.floor(10 * Math.random()) + 10
				this.sx += t
				this.outerAngel += 30 * t
				
				setTimeout(() => {
					let index = (this.sx + 1) % 12
					this.outerItemIndex = index
				}, 2200)
				setTimeout(function() {
					this.outerItemIndex = -1
				}, 5800)
				
				setTimeout(() => {
					let index = (this.sx + 1) % 12
					this.tag = this.tagList[index]
					this.tagShow = true
				}, 4000)
				setTimeout(() => {
					this.tagShow = false
				}, 5800)
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
							url: '/pages/payment/jinnian?order_no=' + order_no
						})
					}
				})
			},
			goProtocol () {
				uni.navigateTo({
					url: '/pages/my/protocol'
				})
			}
		},
		computed: {
			outerStyle () {
				return {
					transform: `rotate(-${this.outerAngel}deg)`
				}
			}
		}
	}
</script>

<style lang="scss">
.jinnian-page {
	background-color: #d8b990;
	.notice-box {
		background-color: #703626;
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
			.img {
				width: 100%;
			}
			.id-words {
				image {
					width: 160rpx;
					height: 160rpx;
					position: absolute;
				}
				.icon-1 {
					top: 140rpx;
					right: 240rpx;
					animation: wordsAnimate 10s linear 4s infinite;
				}
				.icon-2 {
					top: 350rpx;
					right: 250rpx;
					animation: wordsAnimate 10s linear 7s infinite;
				}
				.icon-3 {
					top: 520rpx;
					right: 120rpx;
					animation: wordsAnimate 10s linear 1s infinite;
				}
			}
			.index-wheel {
				width: 460rpx;
				height: 460rpx;
				position: absolute;
				top: 110rpx;
				right: -230rpx;
				.bg {
					width: 460rpx;
					height: 460rpx;
				}
				.outer {
					position: absolute;
					top: 14rpx;
					right: 14rpx;
					z-index: 10;
					width: 432rpx;
					height: 432rpx;
					transition: all 3s linear;
					.item {
						position: absolute;
						top: 16rpx;
						right: 50%;
						z-index: 2;
						width: 90rpx;
						height: 90rpx;
						margin-right: -55rpx;
						transform-origin: 36rpx 200rpx;
						&:nth-child(1) {
							transform: rotate(0);
						}
						&:nth-child(2) {
							transform: rotate(30deg);
						}
						&:nth-child(3) {
							transform: rotate(60deg);
						}
						&:nth-child(4) {
							transform: rotate(90deg);
						}
						&:nth-child(5) {
							transform: rotate(120deg);
						}
						&:nth-child(6) {
							transform: rotate(150deg);
						}
						&:nth-child(7) {
							transform: rotate(180deg);
						}
						&:nth-child(8) {
							transform: rotate(210deg);
						}
						&:nth-child(9) {
							transform: rotate(240deg);
						}
						&:nth-child(10) {
							transform: rotate(270deg);
						}
						&:nth-child(11) {
							transform: rotate(300deg);
						}
						&:nth-child(12) {
							transform: rotate(330deg);
						}
						.after, .before {
							position: absolute;
							top: 0;
							right: 0;
							width: 90rpx;
							height: 90rpx;
							transition: all .8s linear;
						}
						.after {
							opacity: 0;
							transition: all .8s linear .8s;
							transform: scale(2)
						}
						&.active {
							.after {
								opacity: 1;
								transform: scale(1)
							}
						}
					}
				}
				.inner {
					width: 250rpx;
					height: 250rpx;
					position: absolute;
					top: 90rpx;
					right: 100rpx;
					z-index: 20;
					animation: show 1s linear;
				}
				.tag {
					position: absolute;
					top: -16rpx;
					right: 270rpx;
					padding: 0 0 112rpx 100rpx;
					width: 132rpx;
					height: 48rpx;
					color: #fff1c7;
					font-size: 28rpx;
					text-align: center;
					line-height: 48rpx;
					font-weight: bold;
					text-shadow: 0 .03rem .03rem #cc2011;
					transform: rotate(-32deg);
				}
			}
		}
		.form-box {
			position: relative;
			z-index: 1;
			margin: -24rpx 20rpx 100rpx;
			font-size: 32rpx;
			padding-top: 140rpx;
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsYAAAD5BAMAAADW9e7XAAAAIVBMVEX79uj0zL/00MP0z8H11sj10sX22cv44tT228733tH56NorTdWuAAAEaElEQVR42uzdXW7aQBSG4YNtjMldyg6ceAHgZAeOxXUEWUGLyApQua5SvAJgBVGzyio3qcCeu/mkHul9l/BodDwefsb+Nbq9NYrQtSXGn2HsMIxD6Y3TOcYY+4lZ0Qtjh2EcTD+PMcbYURgPxTz2Fsa9MHYYxr0wdhjGvTB2GMa9MHYYxr0wdhjGvTB2GMa9MHYYxqH0xmmNsdz4rjbSGicYm964NBIblxhj7CeMQ+mNs2eM9cYLI63xmFnBPHYU6ziY3nj9bCQ2Xj0ZiY2bxkhrnDUHI61xvjwbiY23JyPxrFh2RuJ13O2NtMbTM8Z6452R1niyezfC2EvBWXFkHsuNd8zjeMY1xuJGswXG4ka3w8YFezf5rCiOGKufecWRczf9rOD8ON4zrxo2PrVGkYy/rWyo/MfKKJLxog181oRxrNLHrQ2VtHz2H834/nV4fVd3RpGMH7b8rklc+tjy32Pi0rJhHYtL1hirGzctxuKytsP4MowdlmN8HcYOw1hf9vIbY3HJPcbqkgdmhbqk4kxI3bjiPU9d3mwwFjc5nTEWd7PbYXwZxg7DWN9k9xNjcRPW8XUYO2x6xlhd0R0xFlcceAdRV5wxVjflmSdv8s7+WN3NB8ZXCYz/YHwd69hdnFcMxb7CW5P9B8aXYeywKcby8iPG6rJuj7G47BVjddmWvZu6bMkZvbqsPWAsLt/wvc2rMHZYxvc25Y2Dv+WdGcUpLauAMfdARjOelcPGM+7EilPYclRzl1CcwnN3tKiMvtLcfVyujcTGrGPTGzOP5cY1ezeM/RS+J5398VfcZ/rfh3E/jP0VNOYdRG6cVhhj7CeMA3Em5Kqg8QJjzt38FDRmfyw3TnjmyY3Ha4wx9lPYmHtu5PN43RiJjVfcOyafFautkdi4wVhvzKzQzwqeeRj7KTwrNkZa46zlXl69MfsKuTF7N70xezfTnwm9GGmNkxJjjP3ErAilN844o9cbP2Ecq5S9WyC9cXHgXTqa8Txg3J2N1OsYY7VxvumMOHfzUtB4g7HcmFkhNx63GKuNEz5r+ozvYjlpNOc7herSOnRegXE043IeeM/7bhSnpKxtqOnpzShOacj48MsoRuH/tCnemBV/27uD0wZiKIqik4kN3qeDGBcQ0kKSAlxEaknZAeONedZOWjw4t4TDIPS1+DOrl6Hx96Zo6i7I0697xTzj98HbprNitfHhh/Hqs+JoBpn4XvHceL9cN80y/hzcN86bZhm/DWYTxrfsd6toZHy8Ml5tfPgy5000NoMMWm18+vO26TvuyXk8ar3x7n58zz76hsbG/u020dj/8x5jXBjjiHFhjCPGhTGOGBfGOGJcGOOIcWGMI8aFMY4YF8Y4YlwY44hxYYwjxoUxjhgXxjhiXBjjiHFhjCPGhTGOGBfGOGJcGOOIcWGMI8aFMY4YF8Y4YlwY44hxYYwjxoUxjhgXxjhiXBjjiHFhI8tXxuuNPxivNt7td2Nc1ND4bMf0euPLJsYtPRj/AwM5qGoW0gtcAAAAAElFTkSuQmCC) repeat-y top center;
			background-size: 100% auto;
			.top-img {
				position: absolute;
				top: 40rpx;
				left: 0;
				width: 100%;
			}
			.form-list {
				padding: 10rpx 50rpx 0;
			}
			.item {
				display: flex;
				align-items: center;
				position: relative;
				margin-bottom: 20rpx;
				padding: 10rpx 0;
				border-radius: 10rpx;
				border: 1px solid #ecc7a2;
				background-color: #fff;
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
						padding-right: 0rpx;
					}
				}
				.icon {
					position: absolute;
					top: 26rpx;
					right: 10rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
			.btn-box {
				margin-top: 10rpx;
				margin-bottom: 20rpx;
				padding: 0 80rpx;
				.btn {
					position: relative;
					animation: btnAnimate 1.5s linear infinite;
					.bg {
						width: 100%;
					}
					.text {
						position: absolute;
						top: 50%;
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
				color: #b98874;
				text-align: center;
				.text {
					font-size: 28rpx;
				}
			}
			.bottom-img {
				position: absolute;
				left: 0;
				width: 100%;
			}
		}
		.m-box {
			margin: 0 20rpx 40rpx;
			position: relative;
			.title-box {
				position: absolute;
				top: -12rpx;
				left: 0;
				z-index: 10;
				right: 0;
				height: 80rpx;
				text-align: center;
				.bg {
					width: 100%;
					height: 80rpx;
				}
				.title {
					position: absolute;
					top: 0;
					z-index: 2;
					width: 100%;
					color: #fff8e6;
					font-size: 40rpx;
					font-weight: bold;
					line-height: 80rpx;
				}
			}
			.content-box {
				padding: 40rpx 20rpx 0;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsYAAAACAgMAAAAm4PKtAAAADFBMVEUAAAD/+e36n3//9Ofa0K6QAAAAAXRSTlMAQObYZgAAABJJREFUGNNjWB06tEBWwxB0MgCNw3dhhXK5cQAAAABJRU5ErkJggg==) 0% 0% / 100% repeat-y;
			}
			.img {
				width: 100%;
				&.rotate {
					transform: rotate(180deg);
				}
			}
		}
	}
}

@keyframes wordsAnimate {
	0% {
		transform: scale(1)
	}
	5% {
		transform: scale(1.2)
	}
	10% {
		transform: scale(1)
	}
	15% {
		transform: scale(1.2)
	}
	20% {
		transform: scale(1)
	}
	25% {
		transform: scale(1.2)
	}
	30% {
		transform: scale(1)
	}
	to {
		transform: scale(1)
	}
}
@keyframes show {
	0% {
		transform: scale(1)
	}
	50% {
		transform: scale(1.2)
	}
	100% {
		transform: scale(1)
	}
}
</style>
