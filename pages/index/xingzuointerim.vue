<template>
	<view class="xingzuointerim-page">
		<view class="banner-wrap">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/banner.png" mode="widthFix"></image>
		</view>
		<view class="owner-wrap">
			<view class="owner">
				<text class="text">{{ xinzuoName }}</text>
				<text>的</text>
			</view>
			<view class="owner-2">{{ systemConfigData.system_year }}运势分析</view>
		</view>
		<view class="items">
			<view class="item item-1">
				<image v-if="item1" class="icon" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/over_icon.png" mode="aspectFill"></image>
				<image v-else class="icon interim" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/wait_icon.png" mode="aspectFill"></image>
				<view class="text">星座基础分析{{ item1 ? '完成' : '中' }}</view>
			</view>
			<view class="item item-2">
				<image v-if="item2" class="icon" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/over_icon.png" mode="aspectFill"></image>
				<image v-else class="icon interim" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/wait_icon.png" mode="aspectFill"></image>
				<view class="text">星座基础分析{{ item2 ? '完成' : '中' }}</view>
			</view>
			<view class="item item-3">
				<image v-if="item3" class="icon" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/over_icon.png" mode="aspectFill"></image>
				<image v-else class="icon interim" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/wait_icon.png" mode="aspectFill"></image>
				<view class="text">星座基础分析{{ item3 ? '完成' : '中' }}</view>
			</view>
			<view class="item item-4">
				<image v-if="item4" class="icon" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/over_icon.png" mode="aspectFill"></image>
				<image v-else class="icon interim" src="https://base2.tengsytech.com/statics/ffsm/xingzuo/img/wait_icon.png" mode="aspectFill"></image>
				<view class="text">星座基础分析{{ item4 ? '完成' : '中' }}</view>
			</view>
		</view>
		<u-transition :show="over" duration="1500" mode="fade">
			<view class="over-text">分析完毕, 生成报告中...</view>
		</u-transition>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				item1: false,
				item2: false,
				item3: false,
				item4: false,
				over: false,
				
				xinzuoName: '',
				xinzuoId: '',
				order_no: '',
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			this.xinzuoName = options.name
			this.xinzuoId = options.id
		},
		onReady () {
			setTimeout(() => {
				this.item1 = true
				setTimeout(() => {
					this.item2 = true
					setTimeout(() => {
						this.item3 = true
						setTimeout(() => {
							this.item4 = true
							setTimeout(() => {
								this.over = true
								setTimeout(() => {
									uni.$u.route({
										url: '/pages/payment/xingzuo',
										params: {
											order_no: this.order_no,
											name: this.xinzuoName,
											id: this.xinzuoId,
										}
									})
								},1000)
							}, 200)
						}, 1000)
					}, 1000)
				}, 1000)
			},2000)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.xingzuointerim-page {
	min-height: 100%;
	background-color: #1a1933;
	position: relative;
	.banner-wrap {
		.banner {
			width: 100%;
		}
	}
	.owner-wrap {
		padding-top: 22rpx;
		margin-bottom: 116rpx;
		text-align: center;
		.owner {
			color: #fff;
			font-size: 32rpx;
			margin-bottom: 22rpx;
			.text {
				color: #fbd673;
			}
		}
		.owner-2 {
			color: #fff;
			font-size: 30px;
			font-weight: bold;
		}
	}
	.items {
		margin-bottom: 58rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.item {
			display: flex;
			align-items: center;
			margin-bottom: 34rpx;
			width: 308rpx;
			animation: move_x 1s ease both;
			.icon {
				width: 36rpx;
				height: 36rpx;
				margin-right: 12rpx;
			}
			.text {
				color: #fff;
				font-size: 16px;
			}
		}
		.item-1 {
			animation-delay: 0s;
		}
		.item-2 {
			animation-delay: 0.5s;
		}
		.item-3 {
			animation-delay: 1s;
		}
		.item-4 {
			animation-delay: 1.5s;
		}
		.interim{
		    animation: rotates 1s linear infinite;
		}
	}
	.over-text {
		margin-top: 58rpx;
		color: #fbd257;
		font-size: 36rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	@keyframes move_x{
	    0%{
	        opacity: 0;
	        transform: translateX(100%);
	    }
	    100%{
	        opacity: 1;
	        transform: translateX(0%);
	    }
	}
	@keyframes rotates {
	    0%{
	        transform: rotate(360deg);
	    }
	    100%{
	        transform: rotate(0deg);
	    }
	}
}
</style>
