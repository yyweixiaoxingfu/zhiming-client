<template>
	<view class="service-page">
		<view class="footer-severs">
			<image class="bg" src="https://csweb.tengsytech.com/image/service-top.png" mode="widthFix"></image>
			<image class="qrcode" :src="systemConfigData.customer_img" mode="aspectFill" show-menu-by-longpress></image>
			<view class="text-box">
				<view class="mobile">{{ systemConfigData.customer_mobile }}</view>
				<view class="title">如需帮助请联系专属售后客服</view>
			</view>
		</view>
		<view class="hot-box">
			<view class="title-box">
				<image class="img" src="https://base2.tengsytech.com/statics/img/rmyc.png" mode="aspectFill"></image>
			</view>
			<hot-list :list="list"></hot-list>
		</view>
	</view>
</template>

<script>
	import { getSuggestList } from '@/api/api.js'
	import { groupArray } from '@/utils/util.js'
	
	export default {
		data () {
			return {
				list: [],
			}
		},
		onLoad () {
			this.initData()
		},
		methods: {
			initData () {
				getSuggestList().then(res => {
					if (res.code == 1) {
						this.list = groupArray(res.data.list, 8)
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.service-page {
	padding-bottom: var(--window-bottom);
	.footer-severs {
		position: relative;
		.bg {
			width: 100%;
		}
		.qrcode {
			width: 336rpx;
			height: 336rpx;
			position: absolute;
			top: 122rpx;
			left: 210rpx;
			z-index: 2;
		}
		.text-box {
			text-align: center;
			position: absolute;
			top: 498rpx;
			left: 0;
			right: 0;
			z-index: 3;
			.mobile {
				color: #333;
				font-size: 28rpx;
			}
			.title {
				margin-top: 4rpx;
				color: $red-color;
				font-size: 24rpx;
			}
		}
	}
	.hot-box {
		padding: 40rpx 0;
		background-color: #fff;
		.title-box {
			margin-bottom: 20rpx;
			text-align: center;
			.img {
				width: 260rpx;
				height: 68rpx;
			}
		}
	}
}
</style>
