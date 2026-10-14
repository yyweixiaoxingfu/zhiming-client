<template>
	<view class="index-page">
		<view class="swiper-box">
			<u-swiper
				:list="swiperList"
				:current="swiperCurrent"
				keyName="pic"
				circular indicator indicatorMode="dot"
				radius="0" height="372rpx"
				@change="swiperChange"
				@click="swiperClick"
			></u-swiper>
			
			<!-- #ifndef MP-WEIXIN -->
			<view class="language-box">
				<switch-language></switch-language>
			</view>
			<!-- #endif -->
		</view>
		
		<!-- <button @click="goAd">跳转</button> -->
		
		<view class="container">
			<view class="notice-box">
				<u-notice-bar
					direction="column"
					:text="noticeList"
					mode="link" :icon="' '"
					bgColor="#fff" color="#333"
				></u-notice-bar>
			</view>
			<view class="menu-box" v-if="menuShow == 1">
				<view class="item" v-for="(item, index) in menuList" :key="index" @click="openMenu(item)">
					<image class="icon" :src="item.cate_img" mode="aspectFill"></image>
					<view class="title">{{ item.cate_name }}</view>
				</view>
			</view>
			<block  v-if="cateShow == 1">
				<view class="tabs-box">
					<view class="level-one">
						<e-tabs
							:list="tabList" keyName="cate_name"
							:current="tabCurrent"
							:scrollable="false"
							:inactiveStyle="{ color: '#fff', fontSize: '28rpx' }"
							:activeStyle="{ color: '#fc4a4a', fontSize: '28rpx' }"
							:itemStyle="{ height: '102rpx' }"
							lineWidth="50rpx"
							:lineColor="`url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAICAYAAAC73qx6AAABM0lEQVQ4jdXUu0peURAF4O+PYgwoxoiQgHgBTaOoeGkDVkIKO19D0ErQylcJ+BD2gUC0EvFSJKYQvP14V4iXyMAIckDlL8S4YDFn77PnMDNnr1X6N/p1HLN4h1X8wE8s4tD/gxI+YwiDGMYA/mIqGinjwwPl/sZych1r+IXyM7ZXhXZ0ZuHB7iy64YGcg2rcPPLRjuRYYf8Ef7CLHexhP+MRrnJSZ4W89znZOtSiKYfYjFZ8QhtqKmy+FI3MY6LCxHr0VJjznPj2BjOph9eK75iORk7xBXPYeiXNxLVdwiRGcB5iLx76iF70Z+xDF96+QMEXaThhNCtpOhE3cHn/YGikiO3kQuFFCDEEGWIMtqR479iYrhL6CcRz/PH7OMZ1TDAZBhEMF4wYxhG3YjPdMdZPA7cZskOonm4HSAAAAABJRU5ErkJggg==) 100% 100%`"
							@change="tabChange"
						></e-tabs>
					</view>
					<view class="level-two">
						<u-tabs
							:list="levelTwo" keyName="cate_name"
							:current="twoCurrent"
							lineColor="transparent"
							:activeStyle="{ background: '#fc4a4a', color: '#fff' }"
							@change="tabTwoChange"
						></u-tabs>
					</view>
				</view>
				<googleAd></googleAd>
				<view class="list-box" v-if="listCurrent === 1">
					<view class="item" v-for="(item, index) in promotionList" :key="index" @click="goPromotion(item)">
						<view class="img-box">
							<image class="img" :src="item.p_img" mode="aspectFill"></image>
							<view class="num">{{ item.p_cs_num }}人已测</view>
						</view>
						<view class="text-box">
							<view class="left">
								<view class="title">{{ item.p_title }}</view>
								<view class="text u-line-2">{{ item.p_desc }}</view>
							</view>
							<button class="btn">立即测算</button>
						</view>
					</view>
				</view>
				<view class="list-box" v-else-if="listCurrent === 2">
					<view class="item" v-for="(item, index) in promotionList" :key="index" @click="goPromotion(item)">
						<view class="img-box">
							<image class="img" :src="item.cover" mode="aspectFill"></image>
							<view class="num">{{ item.click_count }}人查看</view>
						</view>
						<view class="text-box">
							<view class="left">
								<view class="title">{{ item.title }}</view>
								<view class="text u-line-2">{{ item.desc }}</view>
							</view>
							<button class="btn">立即查看</button>
						</view>
					</view>
				</view>
				<view class="almanac-box" v-else-if="listCurrent === 3">
					<almanac :data="almanacData"></almanac>
				</view>
				<view class="dashi-list" v-else-if="listCurrent === 4">
					<view class="item" v-for="(item, index) in promotionList" :key="index" @click="goPromotion(item)">
						<view class="img-box">
							<image class="img" :src="item.cover" mode="aspectFill"></image>
						</view>
						<view class="text-box">
							<view class="title u-line-1">{{ item.name }}</view>
							<view class="text u-line-2">{{ item.label }}</view>
						</view>
					</view>
				</view>
				<view class="bottom-box">
					<view class="bottom">—— 已经到底啦 ——</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import { homeInfo, getCateData } from '@/api/api.js'

	export default {
		data () {
			return {
				swiperCurrent: 0,
				swiperList: [],
				
				noticeList: [],
				
				menuList: [],
				
				tabCurrent: 0,
				tabList: [],
				
				twoCurrent: 0,
				levelTwo: [],
				
				promotionList: [],
				almanacData: {},
				
				menuShow: 1,
				cateShow: 1,
			}
		},
		onLoad () {
			this.loadData()
		},
		methods: {
			loadData () {
				uni.showLoading({ mask: true })
				homeInfo().then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						const data = res.data
						
						this.menuShow = data.hot_zone_type
						this.cateShow = data.home_cate_type
						
						this.swiperList = data.banner
						this.menuList = data.cate_list
						
						let noticeList = data.comment_data.map(item => {
							return '📢  ' + item
						})
						this.noticeList = noticeList
						
						this.tabList = data.home_cate
						this.levelTwo = data.home_cate[this.tabCurrent].child
						
						this.getListData()
					}
				})
			},
			getListData () {
				let cate_type = this.tabList[this.tabCurrent].cate_type
				let cate_id = 0
				if (this.levelTwo.length > 0) {
					cate_id = this.levelTwo[this.twoCurrent].id
				}
				
				uni.showLoading({ mask: true })
				getCateData({ cate_type, cate_id }).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (this.listCurrent == 3) {
						this.almanacData = res.data.api_data_1
					} else {
						this.promotionList = res.data
					}
				})
			},
			swiperChange (e) {
				this.swiperCurrent = e.current
			},
			swiperClick (index) {
				console.log(index)
			},
			tabChange (e) {
				this.tabCurrent = e.index
				this.twoCurrent = 0
				
				this.levelTwo = this.tabList[e.index].child
				
				this.getListData()
			},
			tabTwoChange (e) {
				this.twoCurrent = e.index
				
				this.getListData()
			},
			goUrl (url) {
				uni.navigateTo({
					url
				})
			},
			
			openMenu (item) {
				if (item.cate_type == 1) {
					uni.$u.route({
						url: '/pages/index/' + item.p_model,
						params: {
							cate_type: item.cate_type,
							link_id: item.link_id
						}
					})
				} else if (item.cate_type == 2) {
					uni.$u.route({
						url: '/pages/index/article',
						params: {
							cate_type: item.cate_type,
							link_id: item.link_id
						}
					})
				} else if (item.cate_type == 4) {
					uni.$u.route({
						url: '/pages/index/dashiList',
						params: {
							cate_type: item.cate_type,
							link_id: item.link_id
						}
					})
				}
			},
			goPromotion (item) {
				let index = this.tabList[this.tabCurrent].cate_type
				
				if (index == 1) {
					uni.$u.route({
						url: '/pages/index/' + item.p_model,
						params: {
							cate_type: index,
							link_id: item.id
						}
					})
				} else if (index == 2) {
					if (item.content_type == 'epub') {
						uni.$u.route({
							url: '/pages/index/book',
							params: {
								cate_type: index,
								link_id: item.id
							}
						})
					} else {
						uni.$u.route({
							url: '/pages/index/article',
							params: {
								cate_type: index,
								link_id: item.id
							}
						})
					}
				} else if (index == 4) {
					uni.$u.route({
						url: '/pages/index/expert',
						params: {
							cate_type: index,
							link_id: item.id
						}
					})
				}
			},
			goAd () {
				uni.navigateTo({
					url: '/pages/index/ad'
				})
			}
		},
		computed: {
			listCurrent () {
				if (this.tabList.length) {
					let index = this.tabCurrent
					return this.tabList[index].cate_type
				} else {
					return false
				}
			}
		}
	}
</script>

<style lang="scss">
.index-page {
	padding-bottom: var(--window-bottom);
	.swiper-box {
		position: relative;
	}
	.container {
		padding-bottom: 20rpx;
	}
	.notice-box {
		padding: 26rpx 8rpx;
		::v-deep {
			.u-icon__icon {
				color: $primary-color !important;
				font-size: 24rpx !important;
				font-weight: bold !important;
			}
		}
	}
	.menu-box {
		margin-top: 12rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		.item {
			margin-bottom: 10rpx;
			width: 25%;
			color: #333;
			font-size: 30rpx;
			text-align: center;
			line-height: 80rpx;
			.icon {
				width: 146rpx;
				height: 146rpx;
				border-radius: 60rpx;
			}
		}
	}
	.tabs-box {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background-color: #fff;
		.level-one {
			margin: 0 10rpx;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #ff474a;
			
			::v-deep {
				.u-tabs__wrapper__nav__line {
					width: 50rpx !important;
					height: 8rpx !important;
					bottom: 14rpx;
					background-size: 100% 100% !important;
				}
				.u-tabs__wrapper__nav__item {
					position: relative;
				}
				.u-tabs__wrapper__nav__item__text {
					border-radius: 20rpx 20rpx 0 0;
					text-align: center;
					line-height: 60rpx;
					position: absolute;
					top: 11px;
					bottom: 0;
					left: 11px;
					right: 11px;
				}
				.u-tabs__wrapper__nav__item__text__active {
					background-color: #fff;
					&::before, &::after {
						content: '';
						display: block;
						position: absolute;
						bottom: 0;
						width: 6rpx;
						height: 62rpx;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAABOCAYAAAADx2dJAAAArElEQVQ4jc3TTQrCMBCG4dcfFCtq0h7GbY/h/Y8guHHhSIpKO50gAyVtoIvy8H1hkhYRuYkI+lkDLcZKcLVgJSJ34KwhJU7AxYK0mhzEHAQ3lKjyQ4k59sDBglFdH4Ib6gJ7LLNqMHn6DaT3vgFeOjGYRUNww6xV2cSEVf+PRB/78/PljxI7oLLgV2dBdCdqd2LCzWet6kDfx3dtrUS3Tw6iO7HMqmMOxAZ4vAHIWyu3XM3N6AAAAABJRU5ErkJggg==) no-repeat;
						background-size: 100% 100%;
					}
					&::after {
						right: -6rpx;
					}
					&::before {
						left: -6rpx;
						transform: rotateY(180deg);
					}
				}
			}
		}
		.level-two {
			::v-deep {
				.u-tabs__wrapper__nav__item {
					padding: 0 10rpx;
				}
				.u-tabs__wrapper__nav__item__text {
					display: inline-block;
					padding: 0 20rpx;
					border-radius: 60rpx;
					flex: 1;
					font-size: 28rpx;
					text-align: center;
					line-height: 60rpx;
				}
			}
		}
	}
	.list-box {
		.item {
			margin: 22rpx 14rpx;
			border-radius: 12rpx;
			overflow: hidden;
			background-color: #fff;
			box-shadow: 0 6rpx 52rpx 0 rgba(35, 35, 35, 0.08);
			.img-box {
				height: 312rpx;
				position: relative;
				.img {
					width: 100%;
					height: 100%;
				}
				.num {
					position: absolute;
					bottom: 26rpx;
					right: 32rpx;
					border-radius: 60rpx;
					width: 200rpx;
					height: 60rpx;
					color: #fff;
					font-size: 26rpx;
					text-align: center;
					line-height: 60rpx;
					background-color: rgba(0, 0, 0, 0.7);
				}
			}
			.text-box {
				padding: 20rpx 26rpx;
				display: flex;
				align-items: center;
				.left {
					flex: 1;
					margin-right: 20rpx;
					.title {
						font-size: 32rpx;
						margin-bottom: 12rpx;
					}
					.text {
						font-size: 26rpx;
					}
				}
				.btn {
					margin: 0;
					padding: 0;
					border-radius: 70rpx;
					height: 70rpx;
					width: 180rpx;
					color: #fff;
					font-size: 28rpx;
					line-height: 70rpx;
					background-color: $primary-color;
				}
			}
		}
	}
	.almanac-box {
		padding: 30rpx 20rpx;
	}
	.dashi-list {
		padding: 28rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.item {
			width: 330rpx;
			margin-bottom: 20rpx;
			.img-box {
				width: 330rpx;
				.img {
					width: 330rpx;
					height: 330rpx;
					border-radius: 12rpx;
				}
			}
			.text-box {
				margin-top: 14rpx;
				.title {
					font-size: 32rpx;
				}
				.text {
					margin-top: 8rpx;
					height: 76rpx;
					font-size: 26rpx;
					line-height: 38rpx;
				}
			}
		}
	}
	.bottom-box {
		.bottom {
			padding: 40rpx 0;
			color: #999;
			font-size: 28rpx;
			text-align: center;
		}
	}
}
</style>
