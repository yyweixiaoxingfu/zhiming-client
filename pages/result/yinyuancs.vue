<template>
	<view class="yinyuancs-detail">
		<view class="banner-box">
			<image class="img" src="https://base2.tengsytech.com/statics/ffsm/yunyincs/1/images/banner.jpg" mode="widthFix"></image>
		</view>
		<view class="order_box_pay">订单号：{{ pageContent.order_no }}</view>
		<view class="container">
			<view class="title-box">您的八字命盘</view>
			<view class="content-box">
				<view class="base_info">
					<view class="text">
						<text class="label">姓名：</text>
						<text>{{ returnData.bazi_zh.user.xm_name.xing }}{{ returnData.bazi_zh.user.xm_name.ming }}</text>
					</view>
					<view class="text">
						<text class="label">性别：</text>
						<text>{{ returnData.bazi_zh.user.sex }}</text>
					</view>
					<view class="text">
						<text class="label">公历：</text>
						<text>{{ returnData.bazi_zh.user.age.y }}年{{ returnData.bazi_zh.user.age.m }}月{{ returnData.bazi_zh.user.age.d }}日 {{ returnData.bazi_zh.user.age.h }}时</text>
					</view>
					<view class="text">
						<text class="label">农历：</text>
						<text>{{ returnData.bazi_zh.user.lDate }}</text>
					</view>
				</view>
				<view class="table-box">
					<view class="tr">
						<view class="th"></view>
						<view class="th">年柱</view>
						<view class="th">月柱</view>
						<view class="th">日柱</view>
						<view class="th">时柱</view>
					</view>
					<view class="tr">
						<view class="th">十神</view>
						<view class="th" style="color: blue;">{{ returnData.bazi_pp.shishen1 }}</view>
						<view class="th" style="color: blue;">{{ returnData.bazi_pp.shishen2 }}</view>
						<view class="th" style="color: blue;">{{ returnData.bazi_pp.shishen3 }}</view>
						<view class="th" style="color: blue;">{{ returnData.bazi_pp.shishen4 }}</view>
					</view>
					<view class="tr">
						<view class="th">八</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[0] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[2] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[4] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[6] }}</view>
					</view>
					<view class="tr">
						<view class="th">字</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[1] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[3] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[5] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[7] }}</view>
					</view>
					<view class="tr">
						<view class="th">藏干</view>
						<view class="th">{{ returnData.bazi_pp.zanggan1 }}</view>
						<view class="th">{{ returnData.bazi_pp.zanggan2 }}</view>
						<view class="th">{{ returnData.bazi_pp.zanggan3 }}</view>
						<view class="th">{{ returnData.bazi_pp.zanggan4 }}</view>
					</view>
					<view class="tr">
						<view class="th">纳音</view>
						<view class="th">{{ returnData.bazi_pp.nayin1 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin2 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin3 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin4 }}</view>
					</view>
				</view>
				<view class="main_info">
					<view class="tss">
						<text class="label">喜用神:</text>
						<text>{{ returnData.bazi_zh.data.xiyongshen.xishen }}</text>
					</view>
					<view class="tss">
						<text class="label">胎元:</text>
						<text>{{ returnData.bazi_pp.taiyuan }}</text>
					</view>
					<view class="tss">
						<text class="label">命宫:</text>
						<text>{{ returnData.bazi_pp.minggong }}</text>
					</view>
				</view>
			</view>
			<view class="title-box">感情综合点评</view>
			<view class="con_word">
				<u-parse :content="returnData.bazi_zh.data.rgxx.aqfx"></u-parse>
			</view>
			<view class="title-box">您的感情婚姻总评</view>
			<view class="con_word">
				<u-parse :content="returnData.bazi_zh.info.sxgx.yinyuanb"></u-parse>
			</view>
			<view class="title-box">您的婚配建议与补救</view>
			<view class="con_word">
				<u-parse :content="returnData.bazi_zh.info.sxgx.yinyuanc"></u-parse>
			</view>
			<view class="title-box">您今年流年感情运程</view>
			<view class="con_word">
				<u-parse :content="returnData.bazi_zh.info.sxgx.yinyuana"></u-parse>
			</view>
			<view class="title-box">您的感情婚姻建议</view>
			<view class="con_word">
				<u-parse :content="returnData.bazi_zh.info.sxgx.yinyuanf"></u-parse>
			</view>
		</view>
		
		<back-home></back-home>
		
		<!-- #ifndef MP-WEIXIN -->
		<view class="language-box">
			<switch-language></switch-language>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import { getOrderFind } from '@/api/api.js'

	export default {
		data () {
			return {
				order_no: '',
				
				pageContent: {
					submit_data: {},
				},
				
				returnData: {
					bazi_pp: {},
					bazi_sm: {},
					bazi_zh: {
						data: {
							zonghe: {},
							xiyongshen: {},
							rgxx: {},
						},
						info: {
							nayin: [],
							tywh: {},
						},
						user: {
							bazi: [],
							xm_name: {},
							age: {},
						},
						zodiac_ys_list: {}
					},
				},
			}
		},
		onLoad (options) {
			this.order_no = options.order_no
			
			this.loadData()
		},
		methods: {
			loadData () {
				uni.showLoading({ mask: true })
				getOrderFind({ order_no: this.order_no }).then(res => {
					uni.hideLoading({ noConflict: true })
			
					if (res.code == 1) {
						this.pageContent = res.data
						this.returnData = res.data.return_data
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.yinyuancs-detail {
	min-height: 100%;
	color: #333;
	font-size: 28rpx;
	background-color: #fff;
	position: relative;
	.banner-box {
		.img {
			width: 100%;
		}
	}
	.order_box_pay {
		padding: 20rpx;
		color: #2b2b2b;
		border-top: 1px solid #e2ccb0;
		border-bottom: 1px solid #e2ccb0;
	}
	.container {
		.title-box {
			margin-top: 40rpx;
			height: 64rpx;
			color: #fff;
			font-size: 36rpx;
			text-align: center;
			line-height: 60rpx;
			background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAABECAMAAACoA/+jAAAAvVBMVEUAAACQTDiVSjiUSjiWSTiQTDiZSDiYSDiRSziSSziUSjiQTDiQTDiQTDiQTDidRjiQTDiQTDiQTDiQTDiZSDidRziQTDiZSDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDiQTDipQTiTSziQTDiQTDiQTDiQTDiQTDisQDiuPziQTDikQzioQjiqQTiQTDiiRTirQTitQDiaRzijRDinQjiQTDivPziqQTiwPjiQTDiTSzhrtlUfAAAAPXRSTlMA/f7+/QT4+w0RCPL4+u7uXPxrLvry1BnKha54Vj4mp5Y05sShoR/5YUO8jnZOS8+tk9/fiWj01rxPO5cpzS+UJwAABC9JREFUeNrt3etymlAUBeAVBOVilYDiXUGN0dyapGmbXg7v/1g9RJMAAQIz6dgp65vMzg9xs9U1DsrIQY5gaJ1H2genJ8d2GskaQ5T31OcklygrOVKhEq3iKj/PxS3LO2/HddY6KvlxEehaxDzQcGzakw/o8++NlJjuSDQzztiuBpXystBBteZeDJgX+juJGQw3kH5+7jfjWqqkhGFjX9TGoSiyhIeiyFJtG1lK9FEVVU6gRqWlqGrydqUhykn2UaXUGCU7HUZqPbdSpfzhC3sq8cevKvvBWm+ne34iM/aT7v96n9TmuS+Q1EzonumAvUZJziWk666gugo/D6CvXJQwu/RtW/4ffBFUY2fQnIk/GaCYubiYODakq1BQjXV/y8Q4I88pzst4amLvTFCdta4RMS6dwrzcAAwMSeo1nmiXzrt5+fnw6+6BhzD11nh8uLu7GgCan5uYyQiSedsMw5BHMHUXSkr3K2D4W2Tz5k95YVboRUsmJhgim6XLctUQRC/ke4zRKQrMd0H0Kvz8TmD4/S4ldN8JTF8QMTDEwFAWBoaOoXxgvgmimH5uYGZRYFxBlOAa1gxZVvOoCKKEFeYrZLDbJuAIohTHbNt4Q186wKAjiFI6A2epI200lmUhiN5YYDxCSnBvADeCKMONcR8gQfN2gLEURBmWxs7TEOePZBkLokxjjHzE2EMN2AqiHFttaOPFbrkB5pYgymHNN8sdDlzLBnRPEOXydNty8WTWWQPGUBAVGBrrzgySK0QADPgJiQotB4EQ7v4dxjOBoC2IcrUD0+vMno9h1rJOBVGuKdaWi4NdeyvrRBDlmGDb3sXPVLs8k0T5FnCTZ6z9ex3Q+EmJMg01/d5PnUtayLrhd3eUwdpg4WlICM5tHvhStins8wApI2suqy+IUnzMrRHS9OVQVpMnCCjFMzFc6njDFoasM0GUMIMhbGRYWbqsvNoHJTRhWCtkmfGHbPRWXwZmxp/KEn9bTREGhiphYKgSBoaOq8tr3FEVXV5FkyoovoomVzGhlP5XGZjCK4E/CqJn6hXgeoVrDRi3zVAIvs/UXij/ujIveu56JuZ4h8j13dnZL65mUm+NR5mCh3nx+jfGeMf1kkiKrZc0miCfMb7RGBgSryuyRXkpTMzYsadc85H6v6Ftt5PhBO+48df2lKvK1t4tNHu0Hs1RwmS/bjVPEtRX+H0DfeVWXRn/W6/1qqcqUiMMw31RnksjVqJbKm7TyNwmuaHcr9Lr9RSl1eypDUVuHru7JMo59Gmpss/rw0kUUcZhJLXXlCNFRcp/gIU9Y1s3oula++maWdNF3bP2I5KKntjsllKrGX+pu7cGMF2grOlaB9Xc/GIDJob+Rl6k6YVragmg/5qWoE9XG1Qy89qf4k5PIuI4TlI+qtG/MNIHTPch+z39FGctDBB9gD+SaTyZ2mOMNAAAAABJRU5ErkJggg==');
			background-size: 100% 100%;
			position: relative;
		}
		.content-box {
			padding: 0 20rpx;
			.base_info {
				padding: 20rpx 0;
				line-height: 60rpx;
				.label {
					color: #8c0000;
				}
			}
			.table-box {
				margin-top: 20rpx;
				padding: 20rpx 0;
				border-top: 1px dashed #000;
				border-bottom: 1px dashed #000;
				font-size: 32rpx;
				text-align: center;
				.tr {
					display: flex;
					.th {
						flex: 1;
						box-sizing: border-box;
						padding: 20rpx 10rpx;
						&:first-child {
							flex: none;
							width: 88rpx;
						}
					}
				}
			}
			.main_info {
				display: flex;
				padding: 20rpx 0;
				font-size: 32rpx;
				.tss {
				    width: 30%;
					.label {
						color: #8c0000;
					}
				}
			}
		}
		.con_word {
			font-size: 32rpx;
			line-height: 60rpx;
			padding: 30rpx 20rpx 10rpx;
		}
	}
}
</style>