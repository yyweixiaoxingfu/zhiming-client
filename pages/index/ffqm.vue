<template>
	<view class="ffqm-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<view class="banner-box">
			<image class="img" :src="pageContent.img1" mode="widthFix"></image>
		</view>
		<view class="container">
			<view class="form-box">
				<view class="box">
					<view class="item">
						<view class="label">{{ pageContent.fields.xing }}</view>
						<input class="input" type="text" v-model="form.xing" placeholder="请输入姓氏（汉字）" />
					</view>
					<view class="item">
						<view class="label">{{ pageContent.fields.sex }}</view>
						<view class="gender-box">
							<u-radio-group v-model="form.sex" activeColor="#ff6b8f">
								<u-radio label="男" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="女" name="2" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="未出生" name="0"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item">
						<view class="label">{{ pageContent.fields.name_type }}</view>
						<view class="gender-box">
							<u-radio-group v-model="form.name_type" activeColor="#ff6b8f">
								<u-radio label="单字" name="1" :customStyle="{marginRight: '20px'}"></u-radio>
								<u-radio label="双字" name="2" :customStyle="{marginRight: '20px'}"></u-radio>
							</u-radio-group>
						</view>
					</view>
					<view class="item" @click="show = true">
						<view class="label">{{ pageContent.fields.birthday }}</view>
						<input class="input datetext" type="text" v-model="form.birthday" placeholder="请选择出生日期（必填）" disabled />
					</view>
				</view>
				<view class="btn-box" id="btnBox1">
					<button class="btn" @click="goResult">立即起名</button>
				</view>
			</view>
			<view class="m-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="hot-box" v-if="hotList.length">
				<view class="title-box">
					<image class="img" src="https://base2.tengsytech.com/statics/img/rmyc.png" mode="aspectFill"></image>
				</view>
				<hot-list :list="hotList"></hot-list>
			</view>
		</view>
		
		<u-back-top
			:scroll-top="scrollTop"
			icon="arrow-up" right="10"
			:customStyle="{ background: 'rgba(0, 0, 0, 0.2)' }"
			:iconStyle="{ color: '#fff', fontWeight: 'bold' }"
		></u-back-top>
		
		<date-picker :show="show" showUnknown @cancel="show = false" @confirm="dataConfirm"></date-picker>
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray, barrageListOrganize } from '@/utils/util.js'

	export default {
		data () {
			return {
				form: {
					xing: '',
					sex: '',
					name_type: 1,
					birthday: '',
					calendar_type: 1,
				},
				protocol: false,
				
				scrollTop: 0,
				
				btnBottom: 0,
				showBotBtn: false,
				
				show: false,
				
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {
					desc3: '',
					fields: {}
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
		onPageScroll (e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
						
						this.barrageList = barrageListOrganize(res.data.p_content.comment_total)
						
						this.hotList = groupArray(res.data.rec_pro_data, 8)
						this.expertList = groupArray(res.data.rec_expert_data, 8)
					}
				})
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
							url: '/pages/payment/ffqm?order_no=' + order_no
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.ffqm-page {
	background-color: #ffe7e8;
	.notice-box {
		background-color: rgba(143, 103, 94, 0.5);
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.banner-box {
		.img {
			width: 100%;
		}
	}
	.container {
		position: relative;
		z-index: 10;
		.form-box {
			padding: 20rpx;
			.box {
				border-radius: 16rpx;
				border: 2px dashed #ffa483;
				background-color: #fff;
				.item {
					display: flex;
					align-items: center;
					position: relative;
					& + .item {
						border-top: 1px solid #e0e0e0;
					}
					.label {
						width: 180rpx;
						color: #ff6b8f;
						font-size: 32rpx;
						text-align: center;
						line-height: 100rpx;
					}
					.input {
						flex: 1;
						height: 100rpx;
						font-size: 32rpx;
						line-height: 100rpx;
					}
				}
			}
			.btn-box {
				margin-top: 20rpx;
				.btn {
					height: 92rpx;
					border-radius: 92rpx;
					color: #fff;
					font-size: 36rpx;
					line-height: 92rpx;
					background: #f32b4a;
					animation: btnAnimate 1.5s linear infinite;
				}
			}
		}
		.m-box {
			padding-bottom: 20rpx;
			.img {
				width: 100%;
			}
		}
		.quote-box {
			text-align: center;
			.quote {
				display: inline-block;
				font-size: 36rpx;
				padding: 0 40rpx;
				color: #fc4f50;
				line-height: 50rpx;
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				position: relative;
				.img {
					width: 30rpx;
					height: 30rpx;
					position: absolute;
				}
				.left {
					top: 0;
					left: 0;
				}
				.right {
					right: 0;
					bottom: 0;
					transform: rotate(180deg);
				}
			}
		}
		.tips-box {
			height: 64rpx;
			color: #fff;
			font-size: 32rpx;
			text-align: center;
			line-height: 64rpx;
			background-color: #ff5e5e;
		}
		.name-vs {
			height: 128rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.good, .bad {
				font-size: 36rpx;
				font-weight: bold;
				text-align: center;
			}
			.good {
				color: #4a200c;
			}
			.bad {
				color: #949494;
			}
			.vs {
				margin: 0 14rpx;
				width: 76rpx;
			}
		}
		.name-vs-list {
			.item {
				padding: 20rpx;
				border-bottom: 1px solid #e9e9e9;
				display: flex;
				align-items: center;
				font-size: 28rpx;
				.good {
					flex: 1;
					color: #666;
					text-align: right;
					.label {
						display: inline-block;
						color: #fff;
						padding: 0 6rpx;
						border-radius: 4px;
						background-color: #2db9df;
					}
				}
				.center {
					margin: 0 20rpx;
					border-radius: 50%;
					border: 4rpx solid #fd5776;
					width: 110rpx;
					height: 110rpx;
					color: #fd5776;
					font-size: 28rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.bad {
					flex: 1;
					color: #999;
					text-align: left;
					.label {
						display: inline-block;
						color: #fff;
						padding: 0 6rpx;
						border-radius: 4px;
						background-color: #666;
					}
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
}
</style>
