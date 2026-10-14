<template>
	<view class="hmjx-page">
		<view class="notice-box">
			<u-notice-bar
				:text="pageContent.desc3" icon=" "
				bgColor="transparent"
				color="#fff" fontSize="24rpx"
			></u-notice-bar>
		</view>
		<image class="banner" :src="pageContent.img1" mode="widthFix"></image>
		<view class="container">
			<view class="form-box">
				<view class="item">
					<view class="label">{{ pageContent.fields.name }}</view>
					<input class="input" type="text" v-model="form.name" placeholder="请输入姓名（汉字）" />
				</view>
				<picker mode="selector" :range="typeList" @change="typeChange">
					<view class="item">
						<view class="label">{{ pageContent.fields.number_type }}</view>
						<input class="input" type="text" v-model="typeText" placeholder="请选择测试种类" disabled />
						<u-icon name="arrow-down" color="#E41919" size="36rpx" bold></u-icon>
					</view>
				</picker>
				<view class="item">
					<view class="label">{{ pageContent.fields.number }}</view>
					<input class="input" type="text" v-model="form.number" placeholder="请输入号码" />
				</view>
				<button class="btn" @click="goResult">立即测试</button>
			</view>
			<view class="m-box">
				<u-parse :content="pageContent.content1"></u-parse>
			</view>
			<view class="hot-box" v-if="hotList.length">
				<view class="title-box">
					<image class="img" src="https://csweb.tengsytech.com/image/rmyc.png" mode="widthFix"></image>
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
	</view>
</template>

<script>
	import { getDetailsInfo, confirmOrder } from '@/api/api.js'
	import { groupArray } from '@/utils/util.js'

	export default {
		data () {
			return {
				form: {
					name: '',
					number_type: '1',
					number: '',
				},
				typeText: '手机号',
				typeList: [
					'手机号',
					'车牌号',
				],
				protocol: false,
				
				scrollTop: 0,
				
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {
					desc3: '',
					fields: {
						name: '姓名',
						numbers: '号码',
						numbers_type: '号码类型',
					}
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
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
						
						this.hotList = groupArray(res.data.rec_pro_data, 8)
						this.expertList = groupArray(res.data.rec_expert_data, 8)
					}
				})
			},
			typeChange (e) {
				const index = e.detail.value
				
				this.typeText = this.typeList[index]
				this.form.number_type = index + 1
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
							url: '/pages/payment/hmjx?order_no=' + order_no
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.hmjx-page {
	background-color: #fff;
	.notice-box {
		background-color: #666;
		::v-deep {
			.u-notice-bar {
				padding: 4rpx 0;
			}
		}
	}
	.banner {
		width: 100%;
	}
	.container {
		position: relative;
		z-index: 10;
		.form-box {
			padding: 30rpx 20rpx;
			.item {
				display: flex;
				align-items: center;
				position: relative;
				margin-bottom: 20rpx;
				padding-right: 10rpx;
				border-radius: 10rpx;
				border: 2rpx solid #ad821a;
				.label {
					width: 180rpx;
					font-size: 32rpx;
					text-align: center;
					line-height: 90rpx;
				}
				.input {
					flex: 1;
					height: 90rpx;
					font-size: 32rpx;
					line-height: 90rpx;
					&.datetext {
						padding-right: 60rpx;
					}
				}
				.icon {
					position: absolute;
					top: 20rpx;
					right: 24rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}
			.btn {
				margin: 30rpx 0 0;
				padding: 0;
				height: 90rpx;
				color: #fff;
				font-size: 32rpx;
				text-align: center;
				line-height: 90rpx;
				border-radius: 10rpx;
				background-color: #E41919;
				box-shadow: 0 8rpx 0 #AA0B0B;
			}
		}
		.m-box {
			margin-top: 20rpx;
			padding: 20rpx;
			.img {
				width: 100%;
				& + .item {
					margin-top: 20rpx;
				}
			}
		}
		.hot-box {
			padding: 30rpx 0;
			border: 1px solid #d3d3d3;
			border-radius: 5px;
			background-color: #fff;
			.title-box {
				margin-bottom: 20rpx;
				text-align: center;
				.img {
					width: 260rpx;
				}
			}
		}
	}
}
</style>
