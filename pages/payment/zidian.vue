<template>
	<view class="zidian-page">
		<view class="container">
			<view class="search-box">
				<view class="search-content">
					<input class="input" type="text" v-model="sort.s_value" placeholder="请输入文字" @change="searchChange" />
					<button class="btn" @click="searchClick">搜索</button>
				</view>
				<button class="reset-btn" @click="resetHandle">重置</button>
			</view>
			<view class="tips">支持搜索单字拼音笔画以及关键词，搜索关键词单字加入“,”区分。例如：“好，”</view>
			<view class="card-box">
				<view class="title-box">
					<view class="title">勾选相应筛选</view>
					<image class="bg" src="https://csweb.tengsytech.com/image/zidian/title-bg.png" mode="aspectFill"></image>
				</view>
				<image class="border top" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
				<view class="content-box">
					<view v-if="sort.s_type == '1'" class="cube-box tag">
						<view class="item" :class="{ active: tag_active == 'pinyin' }" @click="simu('pinyin')">同音字</view>
						<view class="item" :class="{ active: tag_active == 'shengmu' }" @click="simu('shengmu')">同声母</view>
						<view class="item" :class="{ active: tag_active == 'yumu' }" @click="simu('yumu')">同韵母</view>
					</view>
					<view v-if="sort.s_type == '3'" class="cube-box bihua">
						<view
							v-for="(item, index) in dictionarys" :key="index"
							class="item" :class="{ active: sort.bihua_type == index + 1 }"
							@click="dictionaryClick(index)"
						>{{ item }}</view>
					</view>
					<view class="cube-box">
						<view class="item" :class="{ active: sort.wx_items === 1 }" @click="sortChange('wx_items', 1)">金</view>
						<view class="item" :class="{ active: sort.wx_items === 2 }" @click="sortChange('wx_items', 2)">木</view>
						<view class="item" :class="{ active: sort.wx_items === 3 }" @click="sortChange('wx_items', 3)">水</view>
						<view class="item" :class="{ active: sort.wx_items === 4 }" @click="sortChange('wx_items', 4)">火</view>
						<view class="item" :class="{ active: sort.wx_items === 5 }" @click="sortChange('wx_items', 5)">土</view>
					</view>
					<view class="cube-box">
						<view class="item" :class="{ active: sort.sd_items === 0 }" @click="sortChange('sd_items', 0)">轻声</view>
						<view class="item" :class="{ active: sort.sd_items === 1 }" @click="sortChange('sd_items', 1)">一声</view>
						<view class="item" :class="{ active: sort.sd_items === 2 }" @click="sortChange('sd_items', 2)">二声</view>
						<view class="item" :class="{ active: sort.sd_items === 3 }" @click="sortChange('sd_items', 3)">三声</view>
						<view class="item" :class="{ active: sort.sd_items === 4 }" @click="sortChange('sd_items', 4)">四声</view>
					</view>
					<view class="cube-box">
						<view class="item" :class="{ active: sort.star_value === 1 }" @click="sortChange('star_value', 1)">
							<text class="custom-icon custom-icon-yixing"></text>
						</view>
						<view class="item" :class="{ active: sort.star_value === 2 }" @click="sortChange('star_value', 2)">
							<text class="custom-icon custom-icon-erxing"></text>
						</view>
						<view class="item" :class="{ active: sort.star_value === 3 }" @click="sortChange('star_value', 3)">
							<text class="custom-icon custom-icon-sanxing"></text>
						</view>
						<view class="item" :class="{ active: sort.star_value === 4 }" @click="sortChange('star_value', 4)">
							<text class="custom-icon custom-icon-sixing"></text>
						</view>
						<view class="item" :class="{ active: sort.star_value === 5 }" @click="sortChange('star_value', 5)">
							<text class="custom-icon custom-icon-wuxing"></text>
						</view>
					</view>
					<view class="cube-box">
						<view class="item" :class="{ active: sort.level_value === 1 }" @click="sortChange('level_value', 1)">一级</view>
						<view class="item" :class="{ active: sort.level_value === 2 }" @click="sortChange('level_value', 2)">二级</view>
						<view class="item" :class="{ active: sort.level_value === 3 }" @click="sortChange('level_value', 3)">三级</view>
						<view class="item" :class="{ active: sort.level_value === 4 }" @click="sortChange('level_value', 4)">四级</view>
					</view>
					<view v-if="sort.s_type !== '3'" class="select-box">
						<picker mode="selector" :range="dictionarys" @change="dictionaryChange">
							<view class="select stroke">
								<view class="input">{{ dictionarys[sort.bihua_type - 1] }}</view>
								<u-icon name="arrow-down-fill" color="#a75300" size="26rpx"></u-icon>
							</view>
						</picker>
						<picker mode="selector" :range="strokes" @change="strokeChange">
							<view class="select num">
								<view class="input">{{ sort.bihua ? sort.bihua : '笔画数' }}</view>
								<u-icon name="arrow-down-fill" color="#a75300" size="26rpx"></u-icon>
							</view>
						</picker>
					</view>
					<view v-if="list.length > 0" class="select-box mt-24">
						<picker mode="selector" :range="order" range-key="name" @change="orderChange">
							<view class="select order">
								<view class="input">{{ order[order_index].name == '默认' ? '笔画排序' : order[order_index].name }}</view>
								<u-icon name="arrow-down-fill" color="#a75300" size="26rpx"></u-icon>
							</view>
						</picker>
					</view>
				</view>
				<image class="border bottom" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
			</view>
			<view class="card-box flex-1">
				<view class="title-box">
					<view class="title">查询结果展示</view>
					<image class="bg" src="https://csweb.tengsytech.com/image/zidian/title-bg.png" mode="aspectFill"></image>
				</view>
				<image class="border top" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
				<view class="content-box flex-1">
					<view class="zi-item" v-for="(item, index) in list" :key="index">
						<view class="top">
							<view class="flexmc">
								<view class="yin">{{ item.pinyin2 }}</view>
								<view class="info">{{ item.zi }}</view>
							</view>
							<view class="info">{{ item.wuxing }}</view>
							<view class="info">{{ item.level }}</view>
							<view class="info">
								<text class="custom-icon custom-icon-yixing" v-if="item.star_value == 1"></text>
								<text class="custom-icon custom-icon-erxing" v-else-if="item.star_value == 2"></text>
								<text class="custom-icon custom-icon-sanxing" v-else-if="item.star_value == 3"></text>
								<text class="custom-icon custom-icon-sixing" v-else-if="item.star_value == 4"></text>
								<text class="custom-icon custom-icon-wuxing" v-else-if="item.star_value == 5"></text>
							</view>
							<button class="btn" size="mini" @click="openChange(index)">查看字义</button>
						</view>
						<view class="content">
							<text class="text">简{{ item.bihua }}画</text>
							<text class="text">繁{{ item.shu_bihua }}画</text>
							<text class="text">康熙字典{{ item.fan_bihua }}画</text>
						</view>
						<view class="bottom" :class="{ open: open == index }">
							<view class="text">
								<view  v-if="item.is_bug" style="margin-right: 5px;font-weight: 600;font-size: 14px;padding: 3px 10px;background: #999;border-radius: 15px;color: #fff;min-width: 40px;display: inline-block;">
									生僻字
								</view>
								<text>{{ item.ziyi }}</text>
							</view>
						</view>
					</view>
					<view class="empty-box" v-if="list.length == 0">
						<u-empty mode="search"></u-empty>
					</view>
				</view>
				<image class="border bottom" src="https://csweb.tengsytech.com/image/zidian/card-top.png" mode="widthFix"></image>
			</view>
		</view>
		
		<view class="bottom-box">
			<view class="pagination-box">
				<view class="left">
					<uni-pagination :total="totalpage" :current="sort.page" :pageSize="sort.rows" showIcon @change="pageChange"></uni-pagination>
				</view>
				<view class="go">
					<text class="text">跳转到</text>
					<input class="input" type="number" v-model="go" @confirm="goConfirm" />
					<button class="btn" @click="goConfirm">确认</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getZidiansInfo, getZidianStatus } from '@/api/api.js'
	
	export default {
		data () {
			return {
				list: [],
				
				go: 1,
				page: 1,
				totalpage: 0,
				
				sort: {
					key: uni.getStorageSync('zidianKey') || '', // 密钥
					
					s_type: '', // 搜索类型
					
					s_value: '', // 搜索 字段
					wx_items: '', // 五行
					sd_items: '', // 声调
					star_value: '', // 星级
					level_value: '', // 等级
					bihua_type: '2', // 笔画筛选类型
					bihua: '', // 笔画
					
					s_order: '', // 排序
					
					like_type: '', // 单字义包含：and 多字义包含:or
					
					tp_value: '', // 同音字
					ts_value: '', // 同声母
					ty_value: '', // 同韵母
					
					page: 1, // 页码
					rows: '20', // 每页数据
				},
				
				// 笔画筛选类型选项
				dictionarys: ['简体笔画', '康熙字典笔画', '繁体笔画'],
				// 笔画选项
				strokes: [],
				
				/* 笔画排序 */
				order_index: 0,
				order: [{
					name: '默认',
					value: 'id asc'
				}, {
					name: '简体笔画（从小到大）',
					value: 'bihua asc'
				}, {
					name: '简体笔画（从大到小）',
					value: 'bihua desc'
				}, {
					name: '康熙字典笔画数（从小到大）',
					value: 'fan_bihua asc'
				}, {
					name: '康熙字典笔画数（从大到小）',
					value: 'fan_bihua desc'
				}, {
					name: '繁体笔画数（从小到大）',
					value: 'shu_bihua asc'
				}, {
					name: '繁体笔画数（从大到小）',
					value: 'shu_bihua desc'
				}, {
					name: '星级（从小到大）',
					value: 'star_value asc'
				}, {
					name: '星级（从大到小）',
					value: 'star_value desc'
				}, {
					name: '等级（从小到大）',
					value: 'level_value asc'
				}, {
					name: '等级（从大到小）',
					value: 'level_value desc'
				}],
				
				/* 同声 */
				tag_active: '', // 选择的同声，pinyin 同音字、shengmu同声母 、yumu 同韵母
				tp_value: '', // 同音字
				ts_value: '', // 同声母
				ty_value: '', // 同韵母
				
				open: -1,
			}
		},
		onLoad (options) {
			let search = options.search
			this.sort.s_value = search
			this.generateStrokes()
			
			this.verify()
		},
		methods: {
			/* 检测 key 是否有效 */
			verify () {
				let zidianKey = uni.getStorageSync('zidianKey') || ''
				getZidianStatus({ key: zidianKey }).then(res => {
					if (res.code) {
						let is_status = res.data.is_status
						
						if (is_status == 1) {
							uni.setStorageSync('zidianKey', res.data.key)
							this.sort.key = res.data.key
							
							this.searchHandle()
						} else {
							uni.showModal({
								title: '您暂无查询权限，请购买',
								confirmText: '确认',
								success: (res) => {
									if (res.confirm) {
										uni.switchTab({
											url: '/pages/index/index'
										})
									}
								}
							})
						}
					}
				})
			},
			
			/* 选项切换 */
			sortChange (key, index) {
				let value = this.sort[key]
				
				if (value == index) {
					this.sort[key] = ''
				} else {
					this.sort[key] = index
				}
				
				this.chongzhi()
				this.searchHandle()
			},
			
			/* 笔画筛选类型 */
			dictionaryChange (e) {
				const value = Number(e.detail.value)
				const index = value + 1
				
				this.sort.bihua_type = index
				
				this.chongzhi()
				this.searchHandle()
			},
			dictionaryClick (number) {
				const index = number + 1
				
				if (this.sort.bihua_type == index) {
					return
				}
				
				this.sort.bihua_type = index
				this.sort.bihua = this.sort.s_value
				
				this.chongzhi()
				this.searchHandle()
			},
			
			/* 笔画 */
			generateStrokes () {
				let strokes = ['全部']
				for (let i = 1; i <= 36; i++) {
					strokes.push(i)
				}
				this.strokes = strokes
			},
			strokeChange (e) {
				const index = e.detail.value
				const value = this.strokes[index]
				
				if (value == '全部') {
					this.sort.bihua = ''
				} else {
					this.sort.bihua = value
				}
				
				this.chongzhi()
				this.searchHandle()
			},
			
			/* 笔画排序 */
			orderChange ({ detail }) {
				this.order_index = detail.value
				this.sort.s_order = this.order[detail.value].value
				
				this.chongzhi()
				this.searchHandle()
			},
			
			/* 同音 */
			simuClear() {
				this.sort.tp_value = ''
				this.sort.ts_value = ''
				this.sort.ty_value = ''
			},
			setType(type) {
				switch (type) {
					case 'pinyin':
						this.sort.tp_value = this.tp_value
						break;
					case 'shengmu':
						this.sort.ts_value = this.ts_value
						break;
					case 'yumu':
						this.sort.ty_value = this.ty_value
						break;
				}
			},
			simu (type) {
				if (type == this.tag_active) {
					this.tag_active = ''
					this.simuClear()
					this.searchHandle()
				} else {
					this.tag_active = type
					this.simuClear()
					
					this.setType(type)
					this.searchHandle()
				}
			},
			
			/* 页面跳转 */
			pageChange (e) {
				const value = e.current
				
				this.sort.page = value
				this.go = value
				
				this.searchHandle()
			},
			goConfirm (e) {
				const value = this.go
				const number = Number(value)
				const max = this.maxPage()
				
				if (number > max) {
					this.sort.page = max
					this.go = max
				} else if (number < 1) {
					this.sort.page = 1
					this.go = 1
				} else if (Number.isNaN(number)) {
					this.sort.page = 1
					this.go = 1
				} else {
					this.sort.page = number
					this.go = number
				}
				
				this.searchHandle()
			},
			maxPage () {
				let maxPage = 1
				let total = Number(this.totalpage)
				let pageSize = Number(this.sort.rows)
				if (total && pageSize) {
					maxPage = Math.ceil(total / pageSize)
				}
				return maxPage
			},
			
			/* 查看字义 */
			openChange (index) {
				this.open = this.open == index ? -1 : index
			},
			closeZiyi () {
				this.open = -1
			},
			
			/* 重置 */
			resetHandle () {
				this.sort = {
					key: uni.getStorageSync('zidianKey') || '',
					s_type: '',
					s_value: '',
					wx_items: '',
					sd_items: '',
					star_value: '',
					level_value: '',
					bihua_type: '2',
					bihua: '',
					s_order: '',
					like_type: '',
					tp_value: '',
					ts_value: '',
					ty_value: '',
					page: 1,
					rows: '20',
				}
				
				this.tag_active = ''
				this.tp_value = ''
				this.ts_value = ''
				this.ty_value = ''
				
				this.go = 1
				
				this.closeZiyi()
				
				this.list = []
			},
			
			/* 搜索 */
			searchHandle () {
				if (this.sort.s_value.trim() == '') {
					uni.showToast({ title: '请输入要查询的文字或拼音', icon: 'none' })
					return
				}
				
				this.sort.s_type = this.valueType(this.sort.s_value)
				
				getZidiansInfo(this.sort).then(res => {
					console.log(res)
					if (res.code == 1) {
						let data = res.data.text_data
						
						this.list = data
						
						this.totalpage = res.data.total
						
						this.tp_value = data[0]?.pinyin || ''
						this.ts_value = data[0]?.shengmu || ''
						this.ty_value = data[0]?.yumu || ''
					}
				})
			},
			searchClick () {
				this.chongzhi(true)
				this.searchHandle()
			},
			searchChange () {
				/* 清空同音 */
				this.tag_active = ''
				this.tp_value = ''
				this.ts_value = ''
				this.ty_value = ''
				this.sort.tp_value = ''
				this.sort.ts_value = ''
				this.sort.ty_value = ''
			},
			chongzhi (bool) {
				if (bool) {
					/* 清空同音 */
					this.tag_active = ''
					this.tp_value = ''
					this.ts_value = ''
					this.ty_value = ''
					this.sort.tp_value = ''
					this.sort.ts_value = ''
					this.sort.ty_value = ''
				}
				
				/* 复原页码 */
				this.go = 1
				this.sort.page = 1
				
				/* 关闭打开的字义 */
				this.closeZiyi()
			},
			valueType (value) {
				if (isNaN(value)) {
					const chineseRange = /[\u4e00-\u9fa5]/;
					const pinyinRange = /^[a-zA-Z\u0300-\u036f]+$/;
					if (chineseRange.test(value)) {
						return value.length === 1 ? '1' : '4';
					} else if (pinyinRange.test(value)) {
						return '2';
					} else {
						return '0'
					}
				} else {
					if (value > 0 && value < 36) {
						return '3';
					} else {
						return '0'
					}
				}
			},
		}
	}
</script>

<style lang="scss">
.zidian-page {
	box-sizing: border-box;
	min-height: 100%;
	background-color: #dc3d2f;
	.container {
		padding: 34rpx 18rpx 156rpx;
	}
	.search-box {
		display: flex;
		align-items: center;
		.search-content {
			flex: 1;
			padding: 8rpx 8rpx 8rpx 40rpx;
			border-radius: 44rpx;
			border: 4rpx solid #d28f57;
			background-color: #faecd9;
			display: flex;
			align-items: center;
			.input {
				flex: 1;
				height: 62rpx;
				color: #6e3017;
				font-size: 32rpx;
				line-height: 62rpx;
			}
			.input-placeholder {
				color: #6e3017;
			}
			.btn {
				margin: 0;
				padding: 0;
				border-radius: 60rpx;
				width: 156rpx;
				height: 62rpx;
				color: #fff;
				font-size: 30rpx;
				line-height: 62rpx;
				background: linear-gradient(90deg, #fa9602, #da0d14);
			}
		}
		.reset-btn {
			box-sizing: content-box;
			margin-left: 20rpx;
			padding: 0;
			border-radius: 44rpx;
			border: 4rpx solid #999;
			width: 140rpx;
			height: 72rpx;
			color: #333;
			font-size: 30rpx;
			line-height: 72rpx;
			background-color: #ddd;
		}
	}
	.tips {
		margin-top: 14rpx;
		padding: 0 22rpx;
		color: #faecd9;
		font-size: 28rpx;
		line-height: 44rpx;
	}
	.card-box {
		margin-top: 54rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		.title-box {
			position: absolute;
			top: -40rpx;
			left: 50%;
			z-index: 20;
			transform: translateX(-50%);
			.title {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				z-index: 2;
				color: #fbedd2;
				font-size: 34rpx;
				font-weight: bold;
				text-align: center;
				line-height: 86rpx;
			}
			.bg {
				width: 500rpx;
				height: 90rpx;
			}
		}
		.border {
			width: 100%;
			&.top {
				margin-bottom: -4rpx;
			}
			&.bottom {
				margin-top: -4rpx;
				transform: rotate(180deg);
			}
		}
		.content-box {
			padding: 40rpx 40rpx 20rpx;
			background: url('https://csweb.tengsytech.com/image/zidian/card-border.png') repeat-y;
			background-size: 100% auto;
			.text {
				color: #6e3017;
				font-size: 30rpx;
				line-height: 48rpx;
			}
			.cube-box {
				margin-bottom: 24rpx;
				display: flex;
				gap: 40rpx;
				&.tag {
					.item {
						width: 180rpx;
					}
				}
				&.bihua {
					.item {
						padding: 0 12rpx;
						width: auto;
					}
				}
				.item {
					width: 92rpx;
					height: 62rpx;
					border-radius: 6rpx;
					border: 1rpx solid #f2c097;
					color: #a75300;
					font-size: 26rpx;
					background-color: #f7e9c9;
					display: flex;
					align-items: center;
					justify-content: center;
					&.active {
						border-color: #d28f57;
						color: #fbedd2;
						background-color: #dc3d2f;
					}
				}
				.custom-icon {
					font-size: 30rpx;
				}
			}
			.select-box {
				display: flex;
				align-items: center;
				gap: 40rpx;
				.select {
					box-sizing: border-box;
					padding: 0 24rpx;
					height: 62rpx;
					border-radius: 6rpx;
					border: 1rpx solid #f2c097;
					color: #a75300;
					font-size: 26rpx;
					background-color: #f7e9c9;
					display: flex;
					align-items: center;
					&.stroke {
						width: 368rpx;
					}
					&.num {
						width: 224rpx;
					}
					&.order {
						width: 632rpx;
					}
					.input {
						flex: 1;
					}
				}
			}
			
			.zi-item {
				padding: 50rpx 20rpx 30rpx;
				border-bottom: 1rpx solid #892027;
				color: #892027;
				.top {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 30rpx;
					.flexmc {
						text-align: center;
						position: relative;
						.yin {
							font-size: 28rpx;
							position: absolute;
							left: 0;
							right: 0;
							top: -28rpx;
						}
					}
					.info {
						width: 72rpx;
						height: 72rpx;
						text-align: center;
						line-height: 64rpx;
					}
					.btn {
						margin: 0;
						padding: 0;
						border-radius: 52rpx;
						width: 148rpx;
						height: 52rpx;
						color: #fbedd2;
						font-size: 28rpx;
						line-height: 52rpx;
						background: linear-gradient(90deg, #fa9602, #da0d14);
					}
				}
				.content {
					font-size: 28rpx;
					display: flex;
					gap: 66rpx;
				}
				.bottom {
					overflow: hidden;
					height: 0px;
					transition: all 0.25s;
					&.open {
						height: auto;
					}
					.text {
						margin-top: 20rpx;
						color: #333;
						font-size: 28rpx;
					}
				}
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		padding: 20rpx;
		background-color: #dc3d2f;
		.pagination-box {
			padding: 20rpx 28rpx;
			border-radius: 28rpx;
			border: 4rpx solid #d28f57;
			background-color: #faecd9;
			display: flex;
			::v-deep {
				.uni-pagination__btn {
					background: #dc3d2f;
				}
				.uni-icons {
					color: #fff !important;
				}
				.uni-pagination__num-current-text {
					color: #333;
				}
				.current-index-text {
					color: #dc3d2f;
				}
			}
			.left {
				flex: 1;
			}
			.go {
				margin-left: 28rpx;
				line-height: 30px;
				display: flex;
				.text {
					color: #333;
					font-size: 26rpx;
				}
				.input {
					margin-left: 8rpx;
					width: 120rpx;
					height: 30px;
					border-radius: 5px;
					font-size: 28rpx;
					line-height: 30px;
					text-align: center;
					background: #fff !important;
				}
				.btn {
					margin: 0 0 0 12rpx;
					padding: 0;
					border-radius: 5px;
					width: 92rpx;
					height: 30px;
					color: #fff;
					font-size: 28rpx;
					line-height: 30px;
					background: #dc3d2f;
				}
			}
		}
	}
}
</style>
