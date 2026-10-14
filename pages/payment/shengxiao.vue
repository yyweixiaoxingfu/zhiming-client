<template>
	<view class="result-page">
		<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/order_banner.png" mode="widthFix"></image>
		<view class="order-wheel">
			<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/image/order_wheel-20201024173209.png" mode="aspectFill"></image>
			<view class="order-wheel__outer" :class="{ active: outerActive }">
				<view
					v-for="(item, index) in shichen" :key="index"
					:title="item.text"
					:class="{ active: item.active, selected: item.selected }"
				></view>
			</view>
			<view class="order-wheel__middle" :class="{ active: middleActive }">
				<view
					v-for="(item, index) in shengxiao" :key="index"
					:class="{ active: item.active, selected: item.selected, fan: item.fan }"
				></view>
			</view>
			<view class="order-wheel__inner" :style="{ transform: `rotate(${innerRotate}deg)` }">
				<view
					v-for="(item, index) in heavenlyStems" :key="index"
					:title="item.text"
					:class="{ active: item.active, selected: item.selected }"
				></view>
			</view>
			<view class="middle-icon" :class="{ active: middleIconActive }">
				<image class="icon" src="https://csweb.tengsytech.com/image/icon_2026.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="order-section J_order_info1" v-show="orderInfo1">
			<view>1.正在录入命主基础信息</view>
			<view class="order-section__bar order-section__bar--1" :class="{ active: sectionBarActive1 }"></view>
		</view>
		<view class="order-section J_order_info2" v-show="orderInfo2">
			<view>2.1正在排布十二生肖运势</view>
			<view class="order-section__bar order-section__bar--2" :class="{ active: sectionBarActive2 }"></view>
			<view>2.2正在检测犯太岁生肖、化解</view>
			<view class="order-section__bar order-section__bar--3" :class="{ active: sectionBarActive3 }"></view>
		</view>
		<view class="order-info" v-show="orderInfo3">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm_lg/app/shengxiao/images/m_top.png" mode="widthFix"></image>
			<view class="content">
				<view class="item">
					<text>姓名：{{ pageContent.submit_data.xing }}{{ pageContent.submit_data.name }}</text>
					<text class="ml-20">性别：{{ pageContent.submit_data.sex == 1 ? '男' : '女' }}</text>
				</view>
				<view class="item">生辰：{{ pageContent.submit_data.birthday }}</view>
				<!-- <view class="item">农历 一九九九年五月十八日 未知时</view>
				<view class="item">八字：（年月日）</view> -->
				<view class="desc">老师寄语：{{ systemConfigData.system_year }}年对您来说算吉凶参半的年份，得益于吉星拱照，凡事多做准备的话，也能顺利度过危机。建议您领取报告以查看全年运势分析和详细的化解方法。</view>
			</view>
			<view class="btn-box">
				<view class="btn" @click="payShow = true">
					<view class="text">领取报告</view>
					<image class="bg" src="https://base2.tengsytech.com/statics/ffsm_lg/app/image/m_btn.png" mode="heightFix"></image>
				</view>
			</view>
		</view>
		
		<pay-popup
			:show="payShow"
			:price="pageContent.pay_price"
			:orderNo="order_no" model="shengxiao"
			@close="payShow = false"
		></pay-popup>
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
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
				shengxiao: [{
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}, {
					active: false,
					selected: false,
					fan: false,
				}],
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
				
				innerRotate: 0,
				outerActive: false,
				middleActive: false,
				middleIconActive: true,
				
				sectionBarActive1: false,
				sectionBarActive2: false,
				sectionBarActive3: false,
				
				orderInfo1: true,
				orderInfo2: false,
				orderInfo3: false,
				
				payShow: false,
				
				pageContent: {
					submit_data: {},
				},
				order_no: '',
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.initData()
			this.init()
		},
		methods: {
			initData () {
				getOrderFind({ order_no: this.order_no }).then(res => {
					if (res.code == 1) {
						this.pageContent = res.data
					}
				})
			},
			init () {
				let tgIndex = 1
				let scIndex = 11
				
				this.$nextTick(() => {
					this.sectionBarActive1 = true
				})
				
				/* 天干 */
				for (let s = 1; s < 11; s++) {
					setTimeout(() => {
						this.heavenlyStems[s - 1].active = true
					}, 300 * s)
				}
				
				setTimeout(() => {
					let e = 30 * scIndex
					let t = e + 3 - 36 * tgIndex - 2160
					this.innerRotate = t
					
					for (let o = 1; o < 13; o++) {
						setTimeout(() => {
							this.shichen[o - 1].active = true
						}, 300 * o)
					}
					
					setTimeout(() => {
						this.outerActive = true
					}, 3900)
				}, 3300)
				
				setTimeout(() => {
					this.heavenlyStems[tgIndex].selected = true
					this.shichen[scIndex].selected = true
					
					this.orderInfo1 = false
					this.orderInfo2 = true
					setTimeout(() => {
						this.sectionBarActive2 = true
					}, 100)
					
					for (let e = 1; e < 13; e++) {
						setTimeout(() => {
							this.shengxiao[e - 1].active = true
						}, 300 * e)
					}
					setTimeout(() => {
						this.middleActive = true
						setTimeout(() => {
							this.shengxiao[scIndex].selected = true
						}, 3000)
					}, 3900)
				}, 11000)
				
				setTimeout(() => {
					this.sectionBarActive3 = true
					for (let e = [1, 4, 6, 7, 10], t = 0; t < e.length; t++) {
						setTimeout(() => {
							this.shengxiao[e[t]].fan = true
						}, 300 * t)
					}
					setTimeout(() => {
						this.middleIconActive = false
						this.orderInfo2 = false
						this.orderInfo3 = true
					}, 3900)
				}, 18000)
			},
		}
	}
</script>

<style lang="scss">
.result-page {
	min-height: 100%;
	background-color: #c12224;
	.img {
		width: 100%;
	}
	.order-wheel {
		margin: 20rpx auto;
		width: 520rpx;
		height: 520rpx;
		position: relative;
		.bg {
			width: 100%;
			height: 100%;
		}
		.order-wheel__outer {
			width: 340rpx;
			height: 340rpx;
			border-radius: 50%;
			border: 1px solid #7e3213;
			background-color: #f9f697;
			position: absolute;
			top: 90rpx;
			left: 90rpx;
			z-index: 2;
			transition: all 3s linear;
			overflow: hidden;
			&.active {
				transform: rotate(1080deg);
			}
			view {
				position: absolute;
				width: 170rpx;
				height: 170rpx;
				right: 0;
				top: 0;
				transform-origin: 0 100%;
				color: #333;
				&.active {
					&::before {
						opacity: 1;
						transform: skewY(60deg) rotate(15deg) scale(1);
					}
				}
				&.selected {
					color: #fff;
					background-color: #d73d3d;
				}
				&::before {
					content: attr(title);
					width: 28rpx;
					height: 28rpx;
					position: absolute;
					left: 24rpx;
					top: 74rpx;
					text-align: center;
					line-height: 1;
					opacity: 0;
					transform: skewY(60deg) rotate(15deg) scale(1.5);
					transition: all 0.5s linear;
				}
				&:nth-child(1) {
					transform: rotate(-15deg) skewY(-60deg);
				}
				&:nth-child(2) {
					transform: rotate(15deg) skewY(-60deg);
				}
				&:nth-child(3) {
					transform: rotate(45deg) skewY(-60deg);
				}
				&:nth-child(4) {
					transform: rotate(75deg) skewY(-60deg);
				}
				&:nth-child(5) {
					transform: rotate(105deg) skewY(-60deg);
				}
				&:nth-child(6) {
					transform: rotate(135deg) skewY(-60deg);
				}
				&:nth-child(7) {
					transform: rotate(165deg) skewY(-60deg);
				}
				&:nth-child(8) {
					transform: rotate(195deg) skewY(-60deg);
				}
				&:nth-child(9) {
					transform: rotate(225deg) skewY(-60deg);
				}
				&:nth-child(10) {
					transform: rotate(255deg) skewY(-60deg);
				}
				&:nth-child(11) {
					transform: rotate(285deg) skewY(-60deg);
				}
				&:nth-child(12) {
					transform: rotate(315deg) skewY(-60deg);
				}
			}
		}
		.order-wheel__middle {
			width: 260rpx;
			height: 260rpx;
			border-radius: 50%;
			border: 1px solid #7e3213;
			background-color: #f9f697;
			position: absolute;
			top: 130rpx;
			left: 130rpx;
			z-index: 3;
			transition: all 3s linear;
			overflow: hidden;
			&.active {
				transform: rotate(1079deg);
			}
			view {
				position: absolute;
				width: 130rpx;
				height: 130rpx;
				right: 0;
				top: 0;
				transform-origin: 0 100%;
				border-left: 1px solid #7e3213;
				&.active {
					&::before {
						opacity: 1;
						transform: skewY(60deg) rotate(15deg) scale(1);
					}
				}
				&.selected {
					background-color: #d73d3d;
					&::before {
						background-position-x: -48rpx;
					}
				}
				&.fan {
					&::after {
						content: '犯';
						position: absolute;
						left: 4rpx;
						top: 28rpx;
						width: 24rpx;
						height: 24rpx;
						text-align: center;
						font-size: 24rpx;
						-webkit-border-radius: 50%;
						-moz-border-radius: 50%;
						border-radius: 50%;
						color: #fff;
						background-color: #623e34;
						opacity: 0;
						transform: skewY(60deg) rotate(15deg) scale(1);
						animation: fan .5s linear forwards;
					}
				}
				&::before {
					content: '';
					width: 48rpx;
					height: 40rpx;
					position: absolute;
					left: 6rpx;
					top: 60rpx;
					color: #333;
					text-align: center;
					background: url('https://base2.tengsytech.com/statics/ffsm_lg/app/image/icon_sx1-20201024173209.png') no-repeat;
					background-size: 96rpx 480rpx;
					opacity: 0;
					transform: skewY(60deg) rotate(15deg) scale(1.5);
					transition: all 0.5s linear;
				}
				&:nth-child(1) {
					transform: rotate(-15deg) skewY(-60deg);
					&::before {
						background-position-y: 0;
					}
				}
				&:nth-child(2) {
					transform: rotate(15deg) skewY(-60deg);
					&::before {
						background-position-y: -40rpx;
					}
				}
				&:nth-child(3) {
					transform: rotate(45deg) skewY(-60deg);
					&::before {
						background-position-y: -80rpx;
					}
				}
				&:nth-child(4) {
					transform: rotate(75deg) skewY(-60deg);
					&::before {
						background-position-y: -120rpx;
					}
				}
				&:nth-child(5) {
					transform: rotate(105deg) skewY(-60deg);
					&::before {
						background-position-y: -160rpx;
					}
				}
				&:nth-child(6) {
					transform: rotate(135deg) skewY(-60deg);
					&::before {
						background-position-y: -200rpx;
					}
				}
				&:nth-child(7) {
					transform: rotate(165deg) skewY(-60deg);
					&::before {
						background-position-y: -240rpx;
					}
				}
				&:nth-child(8) {
					transform: rotate(195deg) skewY(-60deg);
					&::before {
						background-position-y: -280rpx;
					}
				}
				&:nth-child(9) {
					transform: rotate(225deg) skewY(-60deg);
					&::before {
						background-position-y: -320rpx;
					}
				}
				&:nth-child(10) {
					transform: rotate(255deg) skewY(-60deg);
					&::before {
						background-position-y: -360rpx;
					}
				}
				&:nth-child(11) {
					transform: rotate(285deg) skewY(-60deg);
					&::before {
						background-position-y: -400rpx;
					}
				}
				&:nth-child(12) {
					transform: rotate(315deg) skewY(-60deg);
					&::before {
						background-position-y: -440rpx;
					}
				}
			}
		}
		.order-wheel__inner {
			box-sizing: border-box;
			width: 170rpx;
			height: 170rpx;
			border-radius: 50%;
			border: 1px solid #7e3213;
			background-color: #ff9155;
			position: absolute;
			top: 175rpx;
			left: 175rpx;
			z-index: 4;
			overflow: hidden;
			transition: all 7s linear;
			view {
				width: 90rpx;
				height: 90rpx;
				border-left: 1px solid #7e3213;
				position: absolute;
				right: 0;
				top: 0;
				transform-origin: 0 100%;
				color: #333;
				&::before {
					content: attr(title);
					width: 26rpx;
					height: 26rpx;
					position: absolute;
					left: 10rpx;
					top: 46rpx;
					font-size: 26rpx;
					text-align: center;
					line-height: 1;
					opacity: 0;
					transform: skewY(54deg) rotate(18deg) scale(1.5);
					transition: all 0.5s linear;
				}
				&.active {
					&::before {
						opacity: 1;
						transform: skewY(54deg) rotate(18deg) scale(1);
					}
				}
				&.selected {
					color: #fff;
					background-color: #d73d3d;
				}
				&:nth-child(1) {
					transform: rotate(-18deg) skewY(-54deg);
					&::before {
						top: 46rpx;
					}
				}
				&:nth-child(2) {
					transform: rotate(18deg) skewY(-54deg);
					&::before {
						top: 44rpx;
					}
				}
				&:nth-child(3) {
					transform: rotate(54deg) skewY(-54deg);
					&::before {
						top: 42rpx;
					}
				}
				&:nth-child(4) {
					transform: rotate(90deg) skewY(-54deg);
					&::before {
						top: 42rpx;
					}
				}
				&:nth-child(5) {
					transform: rotate(126deg) skewY(-54deg);
					&::before {
						top: 40rpx;
						left: 4rpx;
					}
				}
				&:nth-child(6) {
					transform: rotate(162deg) skewY(-54deg);
					&::before {
						top: 48rpx;
						left: 6rpx;
					}
				}
				&:nth-child(7) {
					transform: rotate(198deg) skewY(-54deg);
					&::before {
						top: 54rpx;
						left: 6rpx;
					}
				}
				&:nth-child(8) {
					transform: rotate(234deg) skewY(-54deg);
					&::before {
						top: 52rpx;
						left: 4rpx;
					}
				}
				&:nth-child(9) {
					transform: rotate(270deg) skewY(-54deg);
					&::before {
						top: 54rpx;
					}
				}
				&:nth-child(10) {
					transform: rotate(306deg) skewY(-54deg);
					&::before {
						top: 52rpx;
					}
				}
			}
		}
		.middle-icon {
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			border: 1px solid #7e3213;
			background-color: #aa471f;
			position: absolute;
			top: 216rpx;
			left: 216rpx;
			z-index: 5;
			display: flex;
			align-items: center;
			justify-content: center;
			&.active {
				animation: rotate 8s linear infinite;
			}
			.icon {
				width: 80%;
				height: 80%;
			}
		}
	}
	.order-section {
		box-sizing: border-box;
		margin: 40rpx auto;
		padding: 20rpx 40rpx;
		border-radius: 10rpx;
		width: 520rpx;
		text-align: center;
		background-color: #fff;
		.order-section__bar {
			margin: 20rpx 0;
			border-radius: 20rpx;
			height: 12rpx;
			background-color: #d7d7d7;
			position: relative;
			&.active {
				&::before {
					width: 100%;
				}
			}
			&::before {
				content: '';
				width: 0;
				border-radius: 20rpx;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				background-color: #d73d3d;
			}
			&--1 {
				&::before {
					transition: all 11s linear;
				}
			}
			&--2 {
				&::before {
					transition: all 7s linear;
				}
			}
			&--3 {
				&::before {
					transition: all 4s linear;
				}
			}
		}
	}
	.order-info {
		padding-bottom: 50rpx;
		background-color: #f4d7a0;
		.content {
			padding: 0 40rpx;
			.item {
				color: #333;
				font-size: 32rpx;
				line-height: 1.4;
			}
			.desc {
				margin: 20rpx 0;
				padding: 20rpx;
				border-radius: 10rpx;
				border: 1px dashed #e8a34a;
				color: #333;
				font-size: 32rpx;
				line-height: 1.4;
				background-color: #fff;
			}
		}
		.btn-box {
			.btn {
				position: relative;
				text-align: center;
				animation: zoom 1.5s linear infinite;
				.bg {
					height: 110rpx;
				}
				.text {
					width: 100%;
					position: absolute;
					top: 50%;
					z-index: 10;
					transform: translateY(-50%);
					color: #5b1f1f;
					font-size: 50rpx;
					font-weight: bold;
				}
			}
		}
	}
}

@keyframes fan {
	0% {
		opacity: 0;
		transform: skewY(60deg) rotate(15deg) scale(1);
	}
	100% {
		opacity: 1;
		transform: skewY(60deg) rotate(15deg) scale(0.5);
	}
}
</style>
