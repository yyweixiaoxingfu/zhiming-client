<template>
	<view class="taluoaiqing-find" :class="{ up: pageMoveUp }">
		<!-- 选牌区 -->
		<view class="part">
			<view class="card_list">
				<view
					v-for="(item, index) in cards" :key="index"
					v-show="item.show"
					:class="'move_card' + index"
					:style="{ transform: `rotate(${item.step}deg)`, animationDelay: `${item.delay}s` }"
					@click="clickItem($event, index)"
				>
					<image class="img" :src="pageContent.img2" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<!-- 指示区 -->
		<view class="indicate">
			<view class="triangle"></view>
			<view class="user_hint">
				<text>请根据你的第一感觉抽取</text>
				<text class="value">6张牌</text>
			</view>
			<view class="user_hint">让塔罗之灵感受你的能量</view>
		</view>
		
		<!--接牌区-->
		<view class="ensure_box">
			<view
				v-for="(item, index) in ensureList" :key="index"
				class="ensure_card"
				:style="{ visibility: item.show ? 'visible' : 'hidden', ...item.style }"
				:animation="animationData[index]"
			>
				<view class="card-wrap">
					<view class="img-wrap" :class="{ turn: item.turn }">
						<image class="ensure-img" :src="pageContent.img2" mode="widthFix"></image>
						<image class="ensure-back" :src="item.back" mode="widthFix"></image>
					</view>
					<view class="card_desc" :style="{ opacity: item.opacity }">{{ item.desc }}</view>
					<!-- <view class="cardName" :style="{ opacity: item.opacity }">{{ item.name }}</view> -->
					<!-- <view class="directional" :style="{ opacity: item.opacity }">{{ item.directional }}</view> -->
				</view>
			</view>
		</view>
		
		<!-- 选中区域 -->
		<view class="ensure">
			<image class="ensure_bg" :src="pageContent.img3" mode="widthFix"></image>
			<image class="ensure_star star_1" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_1.png" mode="aspectFill"></image>
			<image class="ensure_star star_2" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_2.png" mode="aspectFill"></image>
			<image class="ensure_star star_3" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_3.png" mode="aspectFill"></image>
			<image class="ensure_star star_4" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_4.png" mode="aspectFill"></image>
			<image class="ensure_star star_5" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_5.png" mode="aspectFill"></image>
			<image class="ensure_star star_6" src="https://csweb.tengsytech.com/image/taluoaiqing/watch_star_6.png" mode="aspectFill"></image>
		</view>
		
		<!-- 描述信息 -->
		<view class="desc-text" >
			<view v-show="pageMoveUp">塔罗牌阵已准备就绪</view>
			<view v-show="pageMoveUp">让我们来看看你今年的感情运势</view>
		</view>
		
		<!--  立即解牌 -->
		<view class="watch-btn" v-show="pageMoveUp" @click="goResult">
			<image class="btn" src="https://csweb.tengsytech.com/image/taluoaiqing/view.png" mode="widthFix"></image>
		</view>
		
		<!-- 重新选牌 -->
		<view class="retry-tips" v-show="pageMoveUp" @click="retry">
			<text>选牌时开小差了，重新选牌>></text>
		</view>
	</view>
</template>

<script>
	import { getDetailsInfo, tarotFindInfo, confirmOrder } from '@/api/api.js'
	
	export default {
		data () {
			return {
				cate_type: '',
				link_id: '',
				cid: '',
				pageContent: {},
				
				pids: [],
				ids: [],
				
				tarot_sign: ['本命姻缘', '感情状况', '桃花分析', '转运时间', '潜在问题', '塔罗指引'],
				all: [],
				num: 0,
				isEnd: false,
				
				cards: [],
				ensureList: [],
				animationData: [{}, {}, {}, {}],
				
				pageMoveUp: false,
			}
		},
		onLoad (options) {
			this.cate_type = options.cate_type
			this.link_id = options.link_id
			
			this.initData()
			this.generateCards()
		},
		methods: {
			initData () {
				getDetailsInfo({ cate_type: this.cate_type, link_id: this.link_id }).then(res => {
					if (res.code == 1) {
						this.cid = res.data.cid
						this.pageContent = res.data.p_content
					}
				})
			},
			generateCards () {
				let cards = []
				
				for (let c = 0; c < 22; c++) {
					let step = -52.5 + c * 5
					let delay = c * 0.05
					
					cards.push({ step, delay, show: true })
				}
				
				this.cards = cards
			},
			clickItem (e, index) {
				let start_point = { x: e.detail.x, y: e.detail.y }
				if (this.all.length == 0) {
					this.getTarotFindInfo(index, 0, 390, 30, start_point)
				} else if (this.all.length == 1) {
					// 判断动画是否执行完毕
					if (this.isEnd == true) {
						this.getTarotFindInfo(index, 1, 390, 70, start_point)
					}
				} else if (this.all.length == 2) {
					if (this.isEnd == true) {
						this.getTarotFindInfo(index, 2, 660, 10.5, start_point)
					}
				} else if (this.all.length == 3) {
					if (this.isEnd == true) {
						this.getTarotFindInfo(index, 3, 660, 89.5, start_point)
					}
				} else if (this.all.length == 4) {
					if (this.isEnd == true) {
						this.getTarotFindInfo(index, 4, 910, 30, start_point)
					}
				} else if (this.all.length == 5) {
					if (this.isEnd == true) {
						this.getTarotFindInfo(index, 5, 910, 70, start_point)
					}
				} else {
					console.log(this.all)
				}
			},
			getTarotFindInfo (index, obj, topval, leftval, start_point) {
				uni.showLoading({ mask: true })
				tarotFindInfo({
					link_id: this.link_id,
					tarot_ids: this.pids.toString(),
					tarot_lie: this.all.length + 1,
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						let tarot = res.data.tarot_data
						this.pids.push(tarot.pid)
						this.ids.push(tarot.id)
						
						this.changeCard(index, tarot, obj, topval, leftval, start_point)
					}
				})
			},
			changeCard (index, tarot, obj, topval, leftval, start_point) {
				// 判断用户是否已经选择
				if (this.all.length < 6) {
					let idx = this.all.length
					let info = {
						desc: this.tarot_sign[idx],
						back: tarot.img,
						name: tarot.title,
						directional: `（${tarot.zf == 0 ? '逆位' : '正位'}）`,
						show: true,
						style: {
							top: start_point.y + 'px',
							left: start_point.x + 'px',
							marginLeft: '-70rpx',
							zIndex: 999,
							transform: 'translateZ(100px)'
						},
						opacity: 0,
						turn: false,
					}
					this.ensureList[obj] = info
					this.all.push(info)
					
					this.$nextTick(() => {
						let animation = uni.createAnimation({ duration: 800, timingFunction: 'ease' })
						animation.top(topval + 'rpx').left(leftval + '%').step()
						this.animationData[obj] = animation.export()
						
						setTimeout(() => {
							this.ensureList[obj].turn = true
							this.ensureList[obj].opacity = 1
						}, 800)
					})
					
					// 隐藏选中牌
					this.cards[index].show = false
					
					// 再次选牌
					if (this.all.length !== 6) {
						this.num = 0
						this.isEnd = false
						this.startTimer()
					}
					
					// 如果是第三次选牌后
					if (this.all.length == 6) {
						// 相关显示
						setTimeout(() => {
							this.pageMoveUp = true
						}, 1200)
					}
				}
			},
			startTimer () {
				let timer = setInterval(() => {
					this.num++;
					if (this.num == 3) {
						this.isEnd = true
						clearInterval(timer)
					}
				}, 600)
			},
			retry () {
				this.generateCards()
				
				this.pageMoveUp = false
				this.all = []
				this.num = 0
				this.isEnd = false
				this.ensureList = []
				this.animationData = [{}, {}, {}, {}, {}, {}]
			},
			goResult () {
				let form = {
					tarot_data: this.ids.toString()
				}
				
				uni.showLoading({ mask: true })
				confirmOrder({
					link_id: this.link_id,
					cate_type: this.cate_type,
					cs_data: JSON.stringify(form),
					cid: this.cid,
					order_type: '1'
				}).then(res => {
					uni.hideLoading({ noConflict: true })
					
					if (res.code == 1) {
						let order_no = res.data.order_no

						uni.$u.route({
							url: '/pages/payment/taluoaiqing',
							params: {
								order_no: order_no,
								cate_type: this.cate_type,
								link_id: this.link_id,
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
page {
	background-color: #371C56;
}
</style>

<style lang="scss" scoped>
.taluoaiqing-find {
	transition: transform 0.8s linear;
	&.up {
		transform: translateY(-372rpx);
	}
	.part {
		width: 100%;
		height: 244rpx;
		position: relative;
		.card_list {
			height: 232rpx;
			position: relative;
			view {
				position: absolute;
				top: 0;
				left: 50%;
				z-index: 2;
				width: 140rpx;
				margin-left: -70rpx;
				transform-origin: 50% -312rpx;
				opacity: 0;
				animation: card 0.1s forwards;
			}
			.img {
				width: 140rpx;
			}
		}
	}
	.indicate {
		box-sizing: border-box;
		margin-top: 6rpx;
		padding-top: 35rpx;
		height: 174rpx;
		position: relative;
		.triangle {
			width: 0;
			height: 0;
			border: 18rpx solid transparent;
			border-bottom: 18rpx solid #ffe378;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			animation: arrowS 1s linear infinite;
		}
		.user_hint {
			width: 100%;
			color: #fff;
			font-size: 32rpx;
			text-align: center;
			.value {
				color: #ffe378;
			}
		}
	}
	.ensure_box {
		.ensure_card {
			position: absolute;
			top: 0;
			left: 174rpx;
			z-index: 10;
			width: 140rpx;
			.card-wrap {
				width: 140rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.card_desc {
					color: #fae17d;
					font-size: 30rpx;
					text-align: center;
					opacity: 0;
					transition: opacity 0.8s linear;
				}
				.img-wrap {
					position: relative;
					width: 140rpx;
					margin-bottom: 4rpx;
					transition: all 0.8s linear;
					transform-style: preserve-3d;
					&.turn {
						transform: rotateY(180deg);
					}
					.ensure-img {
						width: 140rpx;
						transform: rotateY(0deg);
						transform: translateZ(1px);
					}
					.ensure-back {
						position: absolute;
						top: 0;
						left: 0;
						width: 140rpx;
						transform: rotateY(-180deg);
					}
				}
				.cardName {
					color: #fae17d;
					font-size: 28rpx;
					opacity: 0;
					transition: opacity 0.8s linear;
				}
				.directional {
					color: #fff;
					font-size: 20rpx;
					opacity: 0;
					transition: opacity 0.8s linear;
				}
			}
		}
	}
	.ensure {
		margin-top: 88rpx;
		width: 100%;
		text-align: center;
		position: relative;
		.ensure_bg {
			width: 602rpx;
		}
		.ensure_star {
			width: 128rpx;
			height: 128rpx;
			margin-left: -64rpx;
			position: absolute;
		}
		.star_1 {
			top: -64rpx;
			left: 30%;
		}
		.star_2 {
			top: -64rpx;
			left: 70%;
		}
		.star_3 {
			top: 194rpx;
			left: 10.5%;
		}
		.star_4 {
			top: 194rpx;
			left: 89.5%;
		}
		.star_5 {
			top: 460rpx;
			left: 30%;
		}
		.star_6 {
			top: 460rpx;
			left: 70%;
		}
	}
	.desc-text {
		height: 116rpx;
		margin-top: 200rpx;
		color: #fff;
		font-size: 32rpx;
		text-align: center;
	}
	.watch-btn {
		text-align: center;
		.btn {
			width: 620rpx;
		}
	}
	.retry-tips {
		margin-top: 24rpx;
		color: #fae17d;
		font-size: 36rpx;
		text-align: center;
		text-decoration: underline;
	}
}

@keyframes card {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes arrowS {
	0% {
		top: 0;
	}
	50% {
		top: -9rpx;
	}
	100% {
		top: 0;
	}
}
</style>