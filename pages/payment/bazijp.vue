<template>
	<view class="bazijp-result">
		<view class="bg-box">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_bg_top.png" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="main">
				<view class="main-title" v-show="mainTitShow">张三的八字终生运排盘</view>
				<view class="main-content">
					<view class="item" v-show="mainShow0">
						<view class="fade-in delay250">
							<text>姓名：{{ pageContent.submit_data.xing }}{{ pageContent.submit_data.name }}</text>
							<text class="order-sex">性别：{{ pageContent.submit_data.sex == 1 ? '男' : '女' }}</text>
						</view>
					</view>
					<view class="item item-bazi" v-show="baziShow">
						<view class="fade-in delay1000 order-bz">
							<view class="order-bz__sub">
								<view class="label">年</view>
								<view class="value">*</view>
							</view>
						</view>
						<view class="fade-in delay3000 order-bz">
							<view class="order-bz__sub">
								<view class="label">月</view>
								<view class="value">*</view>
							</view>
						</view>
						<view class="fade-in delay5000 order-bz">
							<view class="order-bz__sub">
								<view class="label">日</view>
								<view class="value">*</view>
							</view>
						</view>
						<view class="fade-in delay7000 order-bz">
							<view class="order-bz__sub">
								<view class="label">时</view>
								<view class="value">*</view>
							</view>
						</view>
					</view>
					<view class="item item11" v-show="mainShow11">
						<view class="fade-in delay250 order-top-title">{{ pageContent.submit_data.xing }}{{ pageContent.submit_data.name }}的终生运势报告</view>
						<view class="fade-in delay250 order-top-words">欠缺五行：五行缺*</view>
						<view class="fade-in delay750 order-top-words">姻缘财禄贵荣，尽在终生运势报告</view>
					</view>
				</view>
			</view>
			<view class="order-loading">{{ orderLoading }}</view>
			<u-transition :show="orderWheelShow" mode="fade" :duration="orderWheelDuration">
				<view class="order-wheel__wrap">
					<view class="order-wheel">
						<view class="order-wheel__outer" :style="{ transform: `rotate(${outerRotate}deg)` }">
							<view
								v-for="(item, index) in shichen" :key="index"
								:title="item.text"
								:class="{ active: item.active, selected: item.selected }"
							></view>
						</view>
						<view class="order-wheel__inner" :style="{ transform: `rotate(${innerRotate}deg)` }">
							<view
								v-for="(item, index) in heavenlyStems" :key="index"
								:title="item.text"
								:class="{ active: item.active, selected: item.selected }"
							></view>
						</view>
						<view class="order-wheel__center">
							<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/m_xuan_center.png" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</u-transition>
			<view class="order-wrap" v-show="orderWrap">
				<view class="order-pay">
					<view class="order-pay__title">你的终生运势报告已生成</view>
					<view class="order-pay__con">
						<view class="opc__top">
							<view class="opc__left">
								<view class="money">
									<text class="monery-xsyh">限时优惠：</text>
									<text>￥</text>
									<text class="money-num">{{ pageContent.pay_price }}</text>
									<text>元</text>
								</view>
								<view class="del">原价￥{{ pageContent.original_price }}元</view>
							</view>
							<view class="opc__right">
								<u-count-down :time="7200000" format="HH:mm:ss" @change="onChange">
									<view class="time">
										<text>距优惠结束：</text>
										<text class="text item">{{ timeData.hours > 10 ? timeData.hours : '0' + timeData.hours}}</text>
										<text class="text">:</text>
										<text class="text item">{{ timeData.minutes }}</text>
										<text class="text">:</text>
										<text class="text item">{{ timeData.seconds }}</text>
									</view>
								</u-count-down>
							</view>
						</view>
						<view class="opc__bottom">
							<text>已有</text>
							<text class="value mx-4">1831768</text>
							<text>人购买，</text>
							<text class="value mr-4">98%</text>
							<text>的用户反馈报告对他们的</text>
							<text class="value mx-4">事业、感情和财富</text>
							<text>给予了积极的帮助。</text>
						</view>
					</view>
					<view class="public_pay_box">
						<view class="btn" @click="payShow = true">
							<text class="text">立即支付</text>
						</view>
					</view>
				</view>
				<view class="order-lock">
					<view class="order-lock__title">
						<text>支付后你将获得</text>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">一生各时期运势起伏</view>
						<view class="ol-box__con">
							<image class="img" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_img_1.png" mode="widthFix"></image>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">一生运势概述和点评</view>
						<view class="ol-box__con">
							<view class="text">
								<text>一生</text>
								<text class="red">祸福几何</text>
								<text class="ml-4">？</text>
								<text class="red">中年危机</text>
								<text class="ml-4">如何渡过？</text>
								<text class="red">晚年生活</text>
								<text class="ml-4">是否如意？</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">求财路能否一帆风顺</view>
						<view class="ol-box__con">
							<view class="text">
								<text class="red">发财路</text>
								<text class="ml-4"> 在哪里？怎样</text>
								<text class="red">避免钱财流失</text>
								<text class="ml-4"> ？如何赚</text>
								<text class="red">更多的钱</text>
								<text class="ml-4"> ？</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">今生姻缘和感情变化</view>
						<view class="ol-box__con">
							<view class="text">
								<text>适合</text>
								<text class="red">早婚还是晚婚</text>
								<text class="ml-4">  ，婚前婚后</text>
								<text class="red">态度变化</text>
								<text class="ml-4">  ，会遇到的</text>
								<text class="red">变数</text>
								<text class="ml-4">  。</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">事业方向该如何选择</view>
						<view class="ol-box__con">
							<view class="text">
								<text class="red">事业发展</text>
								<text class="ml-4"> 顺利吗？何时会有</text>
								<text class="red">瓶颈或危机</text>
								<text class="ml-4"> ？什么职业适合我？</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">困难时期运势和策略</view>
						<view class="ol-box__con">
							<view class="text">
								<text>平时的</text>
								<text class="red">人际关系</text>
								<text class="ml-4"> ，有无</text>
								<text class="red">贵人提携</text>
								<text class="ml-4"> ，有没有需要注意的地方？</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">健康运势和规避</view>
						<view class="ol-box__con">
							<view class="text">
								<text>自身</text>
								<text class="red">体质强弱</text>
								<text class="ml-4"> ，需要预防哪些</text>
								<text class="red">易患疾病</text>
								<text class="ml-4"> 或</text>
								<text class="red">身体损伤</text>
								<text class="ml-4"> ？</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
					<view class="ol-box">
						<view class="ol-box__title">健康运势和规避</view>
						<view class="ol-box__con">
							<view class="text">
								<text>家庭</text>
								<text class="red">幸福和谐</text>
								<text class="ml-4"> 吗？不同时期，家人需要注意的健康问题。</text>
							</view>
							<view class="lock-box__list-btn" @click="payShow = true">
								<image class="image" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn_lock.png" mode="aspectFill" @click="payShow = true"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-box" v-show="showBotBtn">
			<image class="btn" src="https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_btn.png" mode="widthFix"  @click="payShow = true"></image>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="bazijp"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'
	
	export default {
		data () {
			return {
				pageContent: {
					submit_data: {},
				},
				order_no: '',
				
				timeData: {},
				
				shichen: [{
					text: '子',
					active: false,
					selected: false,
				}, {
					text: '丑',
					active: false,
					selected: false,
				}, {
					text: '寅',
					active: false,
					selected: false,
				}, {
					text: '卯',
					active: false,
					selected: false,
				}, {
					text: '辰',
					active: false,
					selected: false,
				}, {
					text: '巳',
					active: false,
					selected: false,
				}, {
					text: '午',
					active: false,
					selected: false,
				}, {
					text: '未',
					active: false,
					selected: false,
				}, {
					text: '申',
					active: false,
					selected: false,
				}, {
					text: '酉',
					active: false,
					selected: false,
				}, {
					text: '戌',
					active: false,
					selected: false,
				}, {
					text: '亥',
					active: false,
					selected: false,
				}],
				heavenlyStems: [{
					text: '甲',
					active: false,
					selected: false,
				}, {
					text: '乙',
					active: false,
					selected: false,
				}, {
					text: '丙',
					active: false,
					selected: false,
				}, {
					text: '丁',
					active: false,
					selected: false,
				}, {
					text: '戊',
					active: false,
					selected: false,
				}, {
					text: '己',
					active: false,
					selected: false,
				}, {
					text: '庚',
					active: false,
					selected: false,
				}, {
					text: '辛',
					active: false,
					selected: false,
				}, {
					text: '壬',
					active: false,
					selected: false,
				}, {
					text: '癸',
					active: false,
					selected: false,
				}],
				
				orderLoading: '',
				
				baziShow: false,
				orderWheelDuration: 1000,
				orderWheelShow: false,
				outerRotate: 0,
				innerRotate: 0,
				
				mainShow0: true,
				mainTitShow: true,
				mainShow11: false,
				orderWrap: false,
				
				showBotBtn: false,
				payShow: false,
			}
		},
		onReady () {
			this.initAnimation()
		},
		onPageScroll (e) {
			let scrollTop = e.scrollTop
			
			if (scrollTop > 500) {
				this.showBotBtn = true
			} else {
				this.showBotBtn = false
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.initData()
		},
		methods: {
			initData () {
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.pageContent = res.data
					}
				})
			},
			
			initAnimation () {
				this.generateOrderLoading()
				this.wheelAnimation()
			},
			/**
			 * 打字机动画
			 */
			generateOrderLoading () {
				let n = 0
				let a = null
				let s = '正在录入你的生辰八字...'
				
				let e = () => {
					if (n <= s.length) {
						this.orderLoading = s.slice(0, n++) + '_'
						a = setTimeout(e, 200)
					} else {
						this.orderLoading = s
					}
				}
				e()
			},
			/**
			 * 轮盘动画
			 */
			wheelAnimation () {
				setTimeout(() => {
					this.orderWheelShow = true
				}, 200)
				setTimeout(() => {
					this.baziShow = true
				}, 2000)
				
				let c = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
				let u = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
				let m = 0
				let f = [1, 3, 5]
				let selectedList = [0, {
					inner: '乙',
					outer: '亥',
				}, 0, {
					inner: '壬',
					outer: '午',
				}, 0, {
					inner: '癸',
					outer: '巳',
				}, 0, {
					inner: '壬',
					outer: '子',
				}]
				
				let fun = (e, bool) => {
					let a = c.indexOf(e.inner)
					let s = u.indexOf(e.outer)
					
					setTimeout(() => {
						let num = 30 * s
						
						this.innerRotate = 360 - 36 * a
						this.outerRotate = 360 - num
						
						for (let t = 1; t < 13; t++) {
							this.shichen[t - 1].active = true
						}
					}, 300)
					
					setTimeout(() => {
						this.heavenlyStems[a].selected = true
						this.shichen[s].selected = true
						
						if (bool) {
							setTimeout(() => {
								this.heavenlyStems[a].selected = false
								this.shichen[s].selected = false
							}, 500)
						}
					}, 2000)
					
					setTimeout(() => {
						this.orderWheelDuration = 0
						this.orderWheelShow = false
						this.mainTitShow = false
						this.mainShow0 = false
						this.baziShow = false
						
						this.mainShow11 = true
						this.orderWrap = true
					}, 9000)
				}
				
				for (let h = 1; h < 11; h++) {
					this.heavenlyStems[h - 1].active = true
				}
				
				let p = setInterval(() => {
					m++
					
					if (f.includes(m)) {
						fun(selectedList[m], true)
					} else {
						if (7 === m ) {
							fun(selectedList[m], false)
						} else {
							8 === m && clearInterval(p)
						}
					}
				}, 1000)
			},
			
			onChange (e) {
				this.timeData = e
			},
		}
	}
</script>

<style lang="scss">
.bazijp-result {
	min-height: 100%;
	background-color: #864a30;
	color: #333;
	font-size: 28rpx;
	line-height: 1.4;
	position: relative;
	.img {
		width: 100%;
	}
	.bg-box {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}
	.container {
		position: relative;
		z-index: 10;
	}
	.main {
		height: 416rpx;
		.main-title {
			padding: 60rpx 0 10rpx;
			color: #ffe39d;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
		}
		.main-content {
			color: #ffe39d;
			text-align: center;
			font-size: 32rpx;
			line-height: 48rpx;
			.fade-in {
				opacity: 0;
				animation-name: fade-in;
				animation-duration: .5s;
				animation-timing-function: linear;
				animation-fill-mode: forwards;
			}
			.order-sex {
				margin: 30rpx;
			}
			.item-bazi {
				padding-top: 50rpx;
				display: flex;
				.order-bz {
					flex: 1;
					text-align: center;
					.order-bz__sub {
						margin: 0 auto;
						padding-bottom: 40rpx;
						width: 52rpx;
						background: linear-gradient(to bottom,rgba(218,170,120,1) 0,rgba(218,170,120,0) 100%);
						position: relative;
						.label {
							width: 52rpx;
							height: 52rpx;
							border-radius: 50%;
							color: #c43;
							font-size: 28rpx;
							line-height: 52rpx;
							background-color: #fff;
							position: absolute;
							top: -20rpx;
						}
						.value {
							padding-top: 40rpx;
							color: #fff;
							font-weight: 500;
						}
					}
				}
			}
			.item11 {
				color: #fff;
				padding-top: 30rpx;
				.order-top-title {
					color: #fff;
					font-size: 40rpx;
					font-weight: bold;
					text-align: center;
					padding: 60rpx 0 10rpx;
				}
				.order-top-words {
				    font-size: 32rpx;
				    line-height: 60rpx;
				}
			}
		}
	}
	.order-loading {
		margin-top: 40rpx;
		height: 60rpx;
		color: #ffe39d;
		font-size: 32rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.order-wheel__wrap {
		.order-wheel {
			margin: 20rpx auto;
			width: 640rpx;
			height: 640rpx;
			font-weight: bold;
			position: relative;
			.order-wheel__outer {
				width: 600rpx;
				height: 600rpx;
				border-radius: 50%;
				border: 1px solid #dfa56b;
				background-color: #ffe29d;
				box-shadow: inset 0 0 30rpx #ffcb70;
				transition: all 1.5s linear;
				overflow: hidden;
				position: absolute;
				top: 20rpx;
				left: 20rpx;
				view {
					width: 300rpx;
					height: 300rpx;
					position: absolute;
					top: 0;
					right: 0;
					transform-origin: 0 100%;
					color: #974325;
					&::before {
						content: '';
						width: 52rpx;
						height: 52rpx;
						font-size: 36rpx;
						text-align: center;
						position: absolute;
						top: 140rpx;
						left: 40rpx;
						transform: skewY(60deg) rotate(15deg);
						background-image: url('https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/icon_bz.png');
						background-repeat: no-repeat;
						background-size: 60rpx auto;
					}
					&.active {
						&::before {
							transform: skewY(60deg) rotate(15deg);
						}
					}
					&.selected {
						&::before {
							background-image: url('https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/icon_bz_active.png');
						}
					}
					&:nth-child(1) {
						transform: rotate(-15deg) skewY(-60deg);
						&::before {
							background-position: 0 0;
						}
					}
					&:nth-child(2) {
						transform: rotate(15deg) skewY(-60deg);
						&::before {
							background-position: 0 -60rpx;
						}
					}
					&:nth-child(3) {
						transform: rotate(45deg) skewY(-60deg);
						&::before {
							background-position: 0 -120rpx;
						}
					}
					&:nth-child(4) {
						transform: rotate(75deg) skewY(-60deg);
						&::before {
							background-position: 0 -180rpx;
						}
					}
					&:nth-child(5) {
						transform: rotate(105deg) skewY(-60deg);
						&::before {
							background-position: 0 -240rpx;
						}
					}
					&:nth-child(6) {
						transform: rotate(135deg) skewY(-60deg);
						&::before {
							background-position: 0 -300rpx;
						}
					}
					&:nth-child(7) {
						transform: rotate(165deg) skewY(-60deg);
						&::before {
							background-position: 0 -360rpx;
						}
					}
					&:nth-child(8) {
						transform: rotate(195deg) skewY(-60deg);
						&::before {
							background-position: 0 -420rpx;
						}
					}
					&:nth-child(9) {
						transform: rotate(225deg) skewY(-60deg);
						&::before {
							background-position: 0 -480rpx;
						}
					}
					&:nth-child(10) {
						transform: rotate(255deg) skewY(-60deg);
						&::before {
							background-position: 0 -540rpx;
						}
					}
					&:nth-child(11) {
						transform: rotate(285deg) skewY(-60deg);
						&::before {
							background-position: 0 -600rpx;
						}
					}
					&:nth-child(12) {
						transform: rotate(315deg) skewY(-60deg);
						&::before {
							background-position: 0 -660rpx;
						}
					}
				}
			}
			.order-wheel__inner {
				width: 440rpx;
				height: 440rpx;
				border-radius: 50%;
				border: 1px solid #e1a971;
				background-color: #fff7e3;
				transition: all 1.5s linear;
				overflow: hidden;
				position: absolute;
				top: 100rpx;
				left: 100rpx;
				z-index: 2;
				view {
					width: 220rpx;
					height: 220rpx;
					position: absolute;
					top: 0;
					right: 0;
					transform-origin: 0 100%;
					color: #864a30;
					&::before {
						content: attr(title);
						width: 52rpx;
						height: 52rpx;
						font-size: 32rpx;
						text-align: center;
						position: absolute;
						top: 100rpx;
						left: 30rpx;
						transform: skewY(54deg) rotate(18deg);
					}
					&.active {
						&::before {
							transform: skewY(54deg) rotate(18deg);
						}
					}
					&.selected {
						color: #da3c2e;
					}
					&:nth-child(1) {
						transform: rotate(-18deg) skewY(-54deg);
					}
					&:nth-child(2) {
						transform: rotate(18deg) skewY(-54deg);
					}
					&:nth-child(3) {
						transform: rotate(54deg) skewY(-54deg);
					}
					&:nth-child(4) {
						transform: rotate(90deg) skewY(-54deg);
					}
					&:nth-child(5) {
						transform: rotate(126deg) skewY(-54deg);
					}
					&:nth-child(6) {
						transform: rotate(162deg) skewY(-54deg);
					}
					&:nth-child(7) {
						transform: rotate(198deg) skewY(-54deg);
					}
					&:nth-child(8) {
						transform: rotate(234deg) skewY(-54deg);
					}
					&:nth-child(9) {
						transform: rotate(270deg) skewY(-54deg);
					}
					&:nth-child(10) {
						transform: rotate(306deg) skewY(-54deg);
					}
				}
			}
			.order-wheel__center {
				width: 300rpx;
				height: 300rpx;
				border-radius: 50%;
				border: 1px solid #ce7f54;
				position: absolute;
				top: 170rpx;
				left: 170rpx;
				z-index: 3;
				overflow: hidden;
				.image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.order-wrap {
		position: relative;
		z-index: 10;
		margin-top: -228rpx;
		.order-pay {
			margin: 40rpx 20rpx 0;
			border-radius: 12rpx;
			padding: 40rpx 20rpx;
			background-color: #ffeec6;
			.order-pay__title {
				font-size: 50rpx;
				font-weight: bold;
				text-align: center;
				background: linear-gradient(0deg, #e12721, #ff8638);
				background-clip: text;
				color: transparent;
			}
			.order-pay__con {
				margin-top: 40rpx;
				border-radius: 12rpx;
				border: 1px solid #d5bb7e;
				background-color: #fffcf4;
				.opc__top {
					padding: 20rpx;
					border-bottom: 1px solid #fbdccb;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.opc__left {
						font-size: 24rpx;
						.money {
							color: #ea2929;
							.monery-xsyh {
								color: #333;
								font-size: 28rpx;
							}
							.money-num {
								font-size: 36rpx;
								font-weight: bold;
							}
						}
						.del {
							margin-top: 4rpx;
							color: #999;
							text-decoration: line-through;
						}
					}
					.opc__right {
						.text {
							font-weight: bold;
						}
					}
				}
				.opc__bottom {
					padding: 20rpx;
					.value {
						color: #ea2929;
						font-weight: bold;
					}
				}
			}
			.public_pay_box {
				margin-top: 20rpx;
				padding: 0 10rpx 16rpx;
				.btn {
					border-radius: 80rpx;
					height: 80rpx;
					color: #fff;
					font-size: 36rpx;
					font-weight: bold;
					line-height: 80rpx;
					background-color: #f32b4a;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		.order-lock {
			margin: 20rpx;
			border-radius: 12rpx;
			padding: 40rpx 20rpx;
			background-color: #ffeec6;
			.order-lock__title {
				text-align: center;
				text {
					display: inline-block;
					border-radius: 12rpx;
					border: 1px solid #ecc361;
					padding: 0 50rpx;
					height: 84rpx;
					color: #ea2929;
					font-size: 48rpx;
					line-height: 84rpx;
					background-color: #fffced;
				}
			}
			.ol-box {
				margin-top: 40rpx;
				padding-top: 60rpx;
				background: url('https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_bg_mask.png') no-repeat top center;
				background-size: 100% auto;
				position: relative;
				.ol-box__title {
					width: 418rpx;
					height: 80rpx;
					color: #fff;
					font-size: 36rpx;
					font-weight: bold;
					text-align: center;
					line-height: 80rpx;
					position: absolute;
					top: 0;
					left: 50%;
					z-index: 2;
					transform: translateX(-50%);
					background: url('https://base2.tengsytech.com/statics/ffsm/app/bzzsy/1/images/1_bg_title.png') no-repeat;
					background-size: 100% 100%;
				}
				.ol-box__con {
					margin: 0 20rpx;
					padding: 40rpx;
					line-height: 48rpx;
					background-color: #fff;
					box-shadow: 0 3px 3px #d7cdb4;
					.text {
						.red {
						    color: #ef2b16;
						    font-weight: bold;
						}
					}
					.lock-box__list-btn {
						margin: 20rpx auto 10rpx;
						width: 244rpx;
						height: 62rpx;
						.image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
	
	.bottom-box {
		padding: 0 40rpx;
		height: 124rpx;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		position: sticky;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
		.btn {
			flex: 1;
		}
	}
}

@keyframes fade-in {
	0% {
		opacity: 0
	}
	to {
		opacity: 1
	}
}
</style>
