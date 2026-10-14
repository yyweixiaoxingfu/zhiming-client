<template>
	<view class="dashi-form">
		<view class="banner-box">
			<image class="banner" src="https://base2.tengsytech.com/statics/ffsm/dashi/img/changjiu.jpg" mode="widthFix"></image>
			<view class="title">是什么使你的恋情无法长久？</view>
		</view>
		<view class="ptxt">我们都希望自己和心爱的另一半长相厮守，可是总会经历波折，导致最后时分手，你能清楚的知道，你恋爱失败的原因在哪里吗？是自身原因还是客观原因呢？不如让老师给你看看吧。</view>
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
		<view class="scsm-box">
			<view>测算说明：</view>
			<view>请提供您的出生信息，专业老师马上为您解答。</view>
			<view>预测以用户输入的时间为准，提供详细准确的个人信息，对预测准确度有很大帮助喔！</view>
		</view>
		<view class="form-box">
			<u--form labelPosition="left" labelWidth="140rpx" :model="form">
				<u-form-item label="预约金额" borderBottom>
					<view class="price">299元</view>
				</u-form-item>
				<u-form-item label="您的姓名" borderBottom>
					<u--input v-model="form.name" border="none" placeholder="请输入名字（必须汉字）"></u--input>
				</u-form-item>
				<u-form-item label="您的性别" borderBottom>
					<u-radio-group v-model="form.sex" activeColor="#fc4a4a">
						<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
						<u-radio label="女" name="2"></u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item label="出生日期" borderBottom>
					<u--input v-model="form.datetext" border="none" placeholder="请选择出生日期"></u--input>
				</u-form-item>
				<u-form-item label="联系电话" borderBottom>
					<u--input v-model="form.tel" border="none" placeholder="请输入手机号码"></u--input>
				</u-form-item>
			</u--form>
			<button class="btn" @click="onSubmit">提交预约</button>
		</view>
		<view class="fenge"></view>
		<view class="card-box">
			<view class="title-box">
				<view class="title">资讯评价(5)</view>
			</view>
			<view class="cmtlist">
				<view class="item">
					<image class="avatar" src="https://cdn.uviewui.com/uview/album/1.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="name">138****6098</view>
						<view class="star">
							<u-rate :count="5" :value="5" activeColor="#f5d519" size="28rpx"></u-rate>
						</view>
						<view class="text">
							<text>2019年本来要结婚的，后面因为一些乱七八糟的事情一直左右摇摆，不知道后面到底会怎样，我仿佛已经没有了信心。老师分析的也很对，我们之间存在的问题都说到了，也谢谢老师的建议，我尽量调整了只能。</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="avatar" src="https://cdn.uviewui.com/uview/album/1.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="name">152****0289</view>
						<view class="star">
							<u-rate :count="5" :value="5" activeColor="#f5d519" size="28rpx"></u-rate>
						</view>
						<view class="text">
							<text>希望和老师说的那样，两个人顺顺利利</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="avatar" src="https://cdn.uviewui.com/uview/album/1.jpg" mode="aspectFill"></image>
					<view class="content">
						<view class="name">138****5784</view>
						<view class="star">
							<u-rate :count="5" :value="5" activeColor="#f5d519" size="28rpx"></u-rate>
						</view>
						<view class="text">
							<text>是啊，感觉我们就快要是老师说的这种状态了，幸好提前看了老师的分析。</text>
						</view>
					</view>
				</view>
			</view>
			<view class="cmtall">
				<text class="text">查看全部评价</text>
				<u-icon name="arrow-right" color="#666" size="30rpx"></u-icon>
			</view>
		</view>
		<view class="fenge"></view>
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
		
		<view class="lunpan-popup" v-if="lunpanShow">
			<view class="lunpan">
				<image class="bg" src="https://base2.tengsytech.com/statics/ffsm/bazisyy/1/images/luopan.png" mode="aspectFill"></image>
				<image class="zhizheng" src="https://base2.tengsytech.com/statics/ffsm/bazisyy/1/images/zhizheng.png" mode="aspectFill"></image>
			</view>
			<view class="label">正在查询在线大师 请稍后...</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				form: {
					name: '',
				},
				
				lunpanShow: false,
			}
		},
		methods: {
			onSubmit () {
				this.lunpanShow = true
				
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/payment/dashi'
					})
					this.lunpanShow = false
				}, 5000)
			},
			goDashiForm () {
				uni.redirectTo({
					url: '/pages/index/dashiForm'
				})
			}
		}
	}
</script>

<style lang="scss">
.dashi-form {
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
	.ptxt {
		padding: 20rpx;
		font-size: 30rpx;
		line-height: 50rpx;
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
	.scsm-box {
		padding: 20rpx 30rpx 28rpx 30rpx;
		color: #999;
		font-size: 26rpx;
		line-height: 46rpx;
		background-color: #fbf2e7;
	}
	.form-box {
		padding: 20rpx 20rpx 50rpx;
		background-color: #fff;
		.price {
			color: #ee4d4c;
			font-size: 28rpx;
			font-weight: bold;
		}
		.btn {
			margin-top: 30rpx;
			width: 500rpx;
			height: 80rpx;
			color: #fff;
			font-size: 36rpx;
			line-height: 80rpx;
			background-color: #ee4d4c;
		}
	}
	.fenge {
		height: 22rpx;
		background-color: #f1e9df;
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
	.lunpan-popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.lunpan {
			width: 340rpx;
			height: 340rpx;
			position: relative;
			.bg {
				width: 340rpx;
				height: 340rpx;
				animation: rotate 4s linear infinite;
			}
			.zhizheng {
				width: 40rpx;
				height: 280rpx;
				position: absolute;
				top: 30rpx;
				left: 150rpx;
				z-index: 2;
				animation: rotate2 4s linear infinite;
			}
		}
		.label {
			margin-top: 40rpx;
			color: #fff;
		}
	}
}
</style>
