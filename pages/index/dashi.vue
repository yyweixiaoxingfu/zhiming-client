<template>
	<view class="dashi-page">
		<u-swiper
			:list="swiperList"
			:current="swiperCurrent"
			circular
			indicator indicatorMode="dot"
			radius="0" height="300rpx"
			@change="swiperChange"
			@click="swiperClick"
		></u-swiper>
		<view class="menu-box">
			<view class="item" @click="goDashiForm">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/dashi/logo_1.png" mode="aspectFill"></image>
				<view class="label">情感婚恋</view>
			</view>
			<view class="item" @click="goDashiForm">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/dashi/logo_2.png" mode="aspectFill"></image>
				<view class="label">事业财运</view>
			</view>
			<view class="item" @click="goDashiForm">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/dashi/logo_3.png" mode="aspectFill"></image>
				<view class="label">终身运程</view>
			</view>
			<view class="item" @click="goDashiForm">
				<image class="icon" src="https://base2.tengsytech.com/statics/ffsm/dashi/logo_4.png" mode="aspectFill"></image>
				<view class="label">流年运势</view>
			</view>
		</view>
		<view class="card-box">
			<view class="title-box">
				<view class="title">单身的你，一定想知道</view>
				<view class="mord">查看更多</view>
			</view>
			<view class="list-box">
				<view class="item" v-for="(item, index) in 3" :key="index" @click="goDashiForm">
					<image class="image" src="https://base2.tengsytech.com/statics/ffsm/dashi/images/thumb1569393972.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="title u-line-1">是什么使你的恋情无法长久？</view>
						<view class="subtitle u-line-1">我们都希望自己和心爱的另一半长相厮守，可是总会经历波折，导致最后时分手，你能清楚的知道，你恋爱失败的原因在哪里吗？是自身原因还是客观原因呢？不如让老师给你看看吧。</view>
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
		<view class="card-box">
			<view class="title-box">
				<view class="title">奋斗的你，一定想知道</view>
				<view class="mord">查看更多</view>
			</view>
			<view class="list-box">
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
				swiperCurrent: 0,
				swiperList: [
					'https://base2..com/statics/ffsm/dashi/img/dashi_1.jpg',
					'https://base2.tengsytech.com/statics/ffsm/dashi/img/dashi_2.jpg',
					'https://base2.tengsytech.com/statics/ffsm/dashi/img/01.jpg',
					'https://base2.tengsytech.com/statics/ffsm/dashi/img/02.jpg',
				],
			}
		},
		methods: {
			swiperChange (e) {
				this.swiperCurrent = e.current
			},
			goDashiForm () {
				uni.navigateTo({
					url: '/pages/index/dashiForm'
				})
			}
		}
	}
</script>

<style lang="scss">
.dashi-page {
	min-height: 100%;
	background-color: #f9f3eb;
	.menu-box {
		background-color: #fffbf5;
		display: flex;
		.item {
			flex: 1;
			padding: 24rpx 0 20rpx;
			text-align: center;
			.icon {
				width: 96rpx;
				height: 96rpx;
			}
			.label {
				margin-top: 14rpx;
				color: #333;
				font-size: 24rpx;
			}
		}
	}
	.card-box {
		margin-top: 22rpx;
		background-color: #fffbf5;
		.title-box {
			height: 110rpx;
			line-height: 110rpx;
			padding: 0 30rpx;
			border-bottom: 1rpx solid #f3ecdf;
			display: flex;
			justify-content: space-between;
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
			.mord {
				color: #999;
				font-size: 26rpx;
			}
		}
		.list-box {
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
