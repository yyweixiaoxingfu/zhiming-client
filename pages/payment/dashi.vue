<template>
	<view class="dashi-result">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/dashi/img/changjiu.jpg" mode="widthFix"></image>
			<view class="title">张三在线预约恋情运势解读</view>
		</view>
		<view class="person">
			<view class="info-box">
				<image class="avatar" src="https://base2.tengsytech.com/statics/ffsm/dashi/images/renx.png" mode="aspectFill"></image>
				<view class="content">
					<view>姓名：张三</view>
					<view>性别：男</view>
					<view>生日：2025年9月29日未知时</view>
					<view>电话：18800000001</view>
				</view>
			</view>
		</view>
		<view class="pcombtn">
			<view class="bediv">
				<image class="icon" src="@/static/icon-sl.png" mode="aspectFill"></image>
				<text>91 测试</text>
			</view>
			<view class="bediv">
				<image class="icon" src="@/static/icon-pj.png" mode="aspectFill"></image>
				<text>17 评价</text>
			</view>
			<view class="bediv">
				<image class="icon" src="@/static/icon-hp.png" mode="aspectFill"></image>
				<text>96.78% 好评</text>
			</view>
		</view>
		<view class="fenge"></view>
		<view class="price-box">
			<view class="title">预约金额299元</view>
			<view class="inner">
				<view class="item">
					<u-icon name="weixin-circle-fill" color="#04BE02" size="52rpx"></u-icon>
					<view class="label">立即支付</view>
					<u-icon name="arrow-right" color="#666" size="24rpx"></u-icon>
				</view>
			</view>
		</view>
		<view class="fenge"></view>
		<view class="scsm-box">
			<view class="title">预约说明</view>
			<view>预约项目：是什么使你的恋情无法长久？</view>
			<view>请确保联系方式正确，方便我们与您取得联系。</view>
			<view>付款后也可获取为您分配的大师联系方式，可主动联系预约大师。</view>
		</view>
		<view class="card-box">
			<view class="title-box">
				<view class="title">相关推荐</view>
			</view>
			<view class="article-list">
				<view class="item" v-for="(item, index) in 3" :key="index" @click="goDashiForm">
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/dashi/images/thumb1545813794.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="title u-line-1">我以后会是一个有钱人吗？</view>
						<view class="subtitle u-line-1">在这个物欲横流的社会，不可否认的是钱很重要。吃穿不愁的生活是人人向往的，人们都希望自己能成为有钱人，然而能成为富翁的人永远是少数。 想知道你有没有成为有钱人的命吗？快来找老师算一下吧。</view>
						<view class="info">
							<view class="bediv">
								<image class="icon" src="@/static/icon-sl.png" mode="aspectFill"></image>
								<text>91 测试</text>
							</view>
							<view class="bediv">
								<image class="icon" src="@/static/icon-pj.png" mode="aspectFill"></image>
								<text>17 评价</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			goDashiForm () {
				uni.redirectTo({
					url: '/pages/index/dashiForm'
				})
			}
		}
	}
</script>

<style lang="scss">
.dashi-result {
	color: #333;
	font-size: 28rpx;
	line-height: 1.4;
	background-color: #fffbf5;
	.banner-box {
		.banner {
			width: 100%;
		}
		.title {
			padding: 12rpx 20rpx;
			color: #fff;
			font-size: 32rpx;
			background-color: rgba(0, 0, 0, 0.7);
		}
	}
	.person {
		padding: 24rpx;
		.info-box {
			padding: 10rpx 10rpx 10rpx 60rpx;
			border-radius: 10rpx;
			background-color: #fbf2e7;
			display: flex;
			align-items: center;
			.avatar {
				width: 130rpx;
				height: 130rpx;
			}
			.content {
				flex: 1;
				margin-left: 60rpx;
				color: #000;
				font-size: 28rpx;
				line-height: 1.7;
			}
		}
	}
	.pcombtn {
		padding: 25rpx;
		border-top: 1px solid #f1e9df;
		display: flex;
		justify-content: space-between;
		.bediv {
			color: #999;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			.icon {
				width: 22rpx;
				height: 22rpx;
				margin-right: 12rpx;
			}
		}
	}
	.fenge {
		height: 22rpx;
		background-color: #f1e9df;
	}
	.price-box {
		padding: 50rpx 0;
		background-color: #fff;
		.title {
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #d2d2d2;
			color: #ee4d4c;
			font-size: 40rpx;
			text-align: center;
		}
		.inner {
			margin-top: 18rpx;
			padding: 0 30rpx;
			.item {
				padding: 18rpx 20rpx;
				height: 60rpx;
				display: flex;
				align-items: center;
				.label {
					flex: 1;
					margin-left: 40rpx;
					color: #666;
					font-size: 26rpx;
				}
			}
		}
	}
	.scsm-box {
		color: #999;
		font-size: 26rpx;
		line-height: 46rpx;
		background-color: #fbf2e7;
		padding: 20rpx 30rpx 28rpx 30rpx;
		.title {
			color: #ee4d4c;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
	.card-box {
		padding: 22rpx 0;
		background-color: #fffbf5;
		.title-box {
			height: 110rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #f3ecdf;
			.title {
				padding-left: 20rpx;
				font-size: 34rpx;
				position: relative;
				&::before {
					content: '';
					display: block;
					width: 8rpx;
					height: 32rpx;
					background-color: #d2a958;
					position: absolute;
					top: 40rpx;
					left: 0;
				}
			}
		}
		.cmtlist {
			padding: 0 30rpx;
			.item {
				padding: 25rpx 0;
				display: flex;
				& + .item {
					border-top: 1rpx solid #f3ecdf;
				}
				.avatar {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
				}
				.content {
					flex: 1;
					margin-left: 20rpx;
					.name {
						color: #999;
						font-size: 28rpx;
					}
					.star {
						::v-deep {
							.uicon-star-fill {
								padding-left: 0 !important;
								padding-right: 0 !important;
							}
						}
					}
					.text {
						margin-top: 4rpx;
						color: #666;
						font-size: 28rpx;
						line-height: 40rpx;
					}
				}
			}
		}
		.cmtall {
			border-top: 1rpx solid #f3ecdf;
			height: 108rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.text {
				color: #666;
				font-size: 30rpx;
			}
		}
		.article-list {
			padding: 0 30rpx;
			.item {
				padding: 30rpx 0;
				display: flex;
				& + .item {
					border-top: 1rpx solid #f3ecdf;
				}
				.image {
					width: 120rpx;
					height: 120rpx;
					border-radius: 6rpx;
				}
				.content {
					flex: 1;
					margin-left: 30rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.title {
						color: #333;
						font-size: 30rpx;
					}
					.subtitle {
						color: #999;
						font-size: 26rpx;
					}
					.info {
						display: flex;
						align-items: center;
						justify-content: space-between;
						.bediv {
							color: #999;
							font-size: 24rpx;
							display: flex;
							align-items: center;
							.icon {
								width: 22rpx;
								height: 22rpx;
								margin-right: 12rpx;
							}
						}
					}
				}
			}
		}
	}
}
</style>
