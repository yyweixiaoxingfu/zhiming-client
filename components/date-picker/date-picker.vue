<template>
	<u-popup :show="show" @close="closeHandler">
		<view class="date-picker" v-if="!showResult">
			<view class="picker-box">
				<u-toolbar
					cancelColor="#666"
					:confirmColor="moving ? '#666' : '#fc4a4a'"
					cancelText="取消"
					confirmText="完成"
					@cancel="cancel"
					@confirm="confirm"
				></u-toolbar>
				<view class="picker-tab">
					<view :class="['tab-item', { active: currentTab === 'solar' }]" @click="switchTab('solar')">公历</view>
					<view :class="['tab-item', { active: currentTab === 'lunar' }]" @click="switchTab('lunar')">农历</view>
				</view>
			</view>
			<view class="picker-container">
				<picker-view
					v-if="currentTab === 'solar'"
					:value="solarValue"
					class="picker-view"
					indicator-style="height: 50px;"
					:immediateChange="immediateChange"
					@change="solarChange"
					@pickstart="pickstart"
					@pickend="pickend"
				>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in solarYears" :key="index">{{ item }}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in solarMonths" :key="index">{{ item }}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in solarDays" :key="index">{{ item }}日</view>
					</picker-view-column>
					<picker-view-column class="picker-time">
						<view class="picker-item" v-for="(item, index) in times" :key="index">{{ item.text }}</view>
					</picker-view-column>
				</picker-view>

				<picker-view
					v-else :value="lunarValue"
					class="picker-view"
					indicator-style="height: 50px;"
					:immediateChange="immediateChange"
					@change="lunarChange"
					@pickstart="pickstart"
					@pickend="pickend"
				>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in lunarYears" :key="index">{{ item }}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in lunarMonths" :key="index">{{ item }}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="picker-item" v-for="(item, index) in lunarDays" :key="index">{{ item }}</view>
					</picker-view-column>
					<picker-view-column class="picker-time">
						<view class="picker-item" v-for="(item, index) in times" :key="index">{{ item.text }}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
		<view class="date-picker" v-else>
			<view class="picker-box">
				<u-toolbar
					cancelColor="#666"
					confirmColor="#fc4a4a"
					cancelText="返回修改"
					confirmText="完成"
					@cancel="resultCancel"
					@confirm="resultConfirm"
				></u-toolbar>
			</view>
			<view class="result-container">
				<view class="tips">请确认输入的时间是否正确</view>
				<view class="hour">
					<text>公历：</text>
					<text class="value">{{ result.solarYear }}年{{ result.solarMonth }}月{{ result.solarDay }}日 {{ result.hour.solar != -1 ? result.hour.solar + '时' : result.hour.text }}</text>
				</view>
				<view class="hour">
					<text>农历：</text>
					<text class="value">{{ result.lunarYear }}年{{ result.lunarMonth }}{{ result.lunarDay }} {{ result.hour.lunar != -1 ? result.hour.lunar + '时' : result.hour.text }}</text>
				</view>
			</view>
		</view>
	</u-popup>
</template>

<script>
	import { calendar } from './calendar'
	
	export default {
		props: {
			// 是否展示弹窗
			show: {
				type: Boolean,
				default: false
			},
			// 是否显示未知时辰
			showUnknown: {
				type: Boolean,
				default: false
			},
			// 是否允许点击遮罩关闭选择器
			closeOnClickOverlay: {
				type: Boolean,
				default: false
			},
			// 是否在手指松开时立即触发change事件（默认 false ）
			immediateChange: {
				type: Boolean,
				default: false
			},
		},
		data () {
			return {
				currentTab: 'solar', // 当前选项卡，solar公历，lunar农历
				
				solarValue: [83, 4, 14, 0], // 公历选中的索引值
				lunarValue: [83, 4, 14, 0], // 农历选中的索引值
				solarYears: [], // 公历年列表
				solarMonths: [], // 公历月列表
				solarDays: [], // 公历日列表
				lunarYears: [], // 农历年列表
				lunarMonths: [], // 农历月列表
				lunarDays: [], // 农历日列表
				
				times: [], // 时辰列表
				
				moving: false, // 列是否还在滑动中，微信小程序如果在滑动中就点确定，结果可能不准确
			
				result: {},
				showResult: false,
			}
		},
		created() {
			this.initSolarData()
			this.initLunarData()
			this.initTimes()
		},
		methods: {
			/* 处理公历数据 - start */
			initSolarData() {
				// 初始化公历年，假设从1940到2030
				for (let i = 1940; i <= 2030; i++) {
					this.solarYears.push(i);
				}
				// 初始化月份
				for (let i = 1; i <= 12; i++) {
					this.solarMonths.push(i);
				}
				// 初始化日
				this.updateSolarDays()
			},
			updateSolarDays() {
				// 根据当前选中的公历年和月更新日
				const year = this.solarYears[this.solarValue[0]];
				const month = this.solarMonths[this.solarValue[1]];
				const daysInMonth = new Date(year, month, 0).getDate();
				this.solarDays = [];
				for (let i = 1; i <= daysInMonth; i++) {
					this.solarDays.push(i);
				}
				// 如果当前选中的日超过了最大天数，则调整日为最大天数
				if (this.solarValue[2] >= daysInMonth) {
					this.solarValue[2] = daysInMonth - 1;
				}
			},
			solarChange(e) {
				// 如果年份或月份变化，需要更新日
				if (e.detail.value[0] !== this.solarValue[0]) {
					this.solarValue[0] = e.detail.value[0]
					this.updateSolarDays()
					return
				}
				
				if (e.detail.value[1] !== this.solarValue[1]) {
					this.solarValue[1] = e.detail.value[1]
					this.updateSolarDays()
					return
				}
				
				this.solarValue = e.detail.value
			},
			/* 处理公历数据 - end */
			
			/* 处理农历数据 - start */
			initLunarData() {
				/* 农历年和公历年一样 */
				for (let i = 1940; i <= 2030; i++) {
					this.lunarYears.push(i);
				}

				/* 初始化月份 */
				this.updateLunarMonths()
				
				/* 初始化日 */
				this.updateLunarDays()
			},
			updateLunarMonths () {
				/* 农历月 */
				const lunarYear = this.lunarYears[this.lunarValue[0]]
				// 返回农历 闰月没有就返回 0
				const leap_month = calendar.leapMonth(lunarYear)
				let lunarMonths = []
				for (let i = 1; i <= 12; i++) {
					lunarMonths.push(calendar.toChinaMonth(i))
					if (i == leap_month) {
						lunarMonths.push('闰' + calendar.toChinaMonth(i))
					}
				}
				this.lunarMonths = lunarMonths
				
				// 如果当前选中的月份超过了最大月份，则调整日为最大月份
				if (this.lunarValue[1] >= lunarMonths.length) {
					this.lunarValue[1] = lunarMonths.length - 1
				}
			},
			updateLunarDays () {
				// 农历年
				const lunarYear = this.lunarYears[this.lunarValue[0]]
				// 农历月
				const lunarMonth = this.lunarValue[1] + 1
				
				// 是否有闰月
				let leapMonth = calendar.leapMonth(lunarYear)
				const isLeap = leapMonth != 0
				const isSameMonth = lunarMonth - 1 == leapMonth
				
				/* 计算当月有多少天 */
				let monthNumber = 0
				if (isLeap && isSameMonth) {
					monthNumber = calendar.leapDays(lunarYear, leapMonth)
				} else {
					let month = 0
					if (leapMonth) {
						month = lunarMonth <= leapMonth ? lunarMonth : lunarMonth - 1;
					} else {
						month = lunarMonth;
					}
					monthNumber = calendar.monthDays(lunarYear, month)
				}
				// 农历日
				const lunarDays = []
				for (let i = 1; i <= monthNumber; i++) {
					let day;
					if (i <= 10) {
						day = '初' + this.numberToChinese(i);
					} else if (i <= 20) {
						day = '十' + this.numberToChinese(i - 10);
					} else if (i === 20) {
						day = '二十';
					} else if (i < 30) {
						day = '廿' + this.numberToChinese(i - 20);
					} else {
						day = '三十';
					}
					lunarDays.push(day);
				}
				this.lunarDays = lunarDays
				
				// 如果当前选中的日超过了最大天数，则调整日为最大天数
				if (this.lunarValue[2] >= lunarDays.length) {
					this.lunarValue[2] = lunarDays.length - 1;
				}
			},
			numberToChinese(num) {
				const chineseNumbers = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
				return chineseNumbers[num];
			},
			lunarChange(e) {
				// 如果年份或月份变化，需要更新日
				if (e.detail.value[0] !== this.lunarValue[0]) {
					this.lunarValue[0] = e.detail.value[0]
					this.updateLunarMonths()
				}
				
				if (e.detail.value[1] !== this.lunarValue[1]) {
					this.lunarValue[1] = e.detail.value[1]
					this.updateLunarDays()
				}
				
				this.lunarValue = e.detail.value
			},
			/* 处理农历数据 - end */
			
			// 生成时辰数据
			initTimes () {
				// 时辰列表
				let times = [
					{
						text: '00:00-00:59(早子)',
						solar: 0,
						lunar: '子',
						tiem: '00:00-00:59',
					},
					{
						text: '01:00-01:59(丑)',
						solar: 1,
						lunar: '丑',
						tiem: '01:00-01:59',
					},
					{
						text: '02:00-02:59(丑)',
						solar: 2,
						lunar: '丑',
						tiem: '02:00-02:59',
					},
					{
						text: '03:00-03:59(寅)',
						solar: 3,
						lunar: '寅',
						tiem: '03:00-03:59',
					},
					{
						text: '04:00-04:59(寅)',
						solar: 4,
						lunar: '寅',
						tiem: '04:00-04:59',
					},
					{
						text: '05:00-05:59(卯)',
						solar: 5,
						lunar: '卯',
						tiem: '05:00-05:59',
					},
					{
						text: '06:00-06:59(卯)',
						solar: 6,
						lunar: '卯',
						tiem: '06:00-06:59',
					},
					{
						text: '07:00-07:59(辰)',
						solar: 7,
						lunar: '辰',
						tiem: '07:00-07:59',
					},
					{
						text: '08:00-08:59(辰)',
						solar: 8,
						lunar: '辰',
						tiem: '08:00-08:59',
					},
					{
						text: '09:00-09:59(巳)',
						solar: 9,
						lunar: '巳',
						tiem: '09:00-09:59',
					},
					{
						text: '10:00-10:59(巳)',
						solar: 10,
						lunar: '巳',
						tiem: '10:00-10:59',
					},
					{
						text: '11:00-11:59(午)',
						solar: 11,
						lunar: '午',
						tiem: '11:00-11:59',
					},
					{
						text: '12:00-12:59(午)',
						solar: 12,
						lunar: '午',
						tiem: '12:00-12:59',
					},
					{
						text: '13:00-13:59(未)',
						solar: 13,
						lunar: '未',
						tiem: '13:00-13:59',
					},
					{
						text: '14:00-14:59(未)',
						solar: 14,
						lunar: '未',
						tiem: '14:00-14:59',
					},
					{
						text: '15:00-15:59(申)',
						solar: 15,
						lunar: '申',
						tiem: '15:00-15:59',
					},
					{
						text: '16:00-16:59(申)',
						solar: 16,
						lunar: '申',
						tiem: '16:00-16:59',
					},
					{
						text: '17:00-17:59(酉)',
						solar: 17,
						lunar: '酉',
						tiem: '17:00-17:59',
					},
					{
						text: '18:00-18:59(酉)',
						solar: 18,
						lunar: '酉',
						tiem: '18:00-18:59',
					},
					{
						text: '19:00-19:59(戌)',
						solar: 19,
						lunar: '戌',
						tiem: '19:00-19:59',
					},
					{
						text: '20:00-20:59(戌)',
						solar: 20,
						lunar: '戌',
						tiem: '20:00-20:59',
					},
					{
						text: '21:00-21:59(亥)',
						solar: 21,
						lunar: '亥',
						tiem: '21:00-21:59',
					},
					{
						text: '22:00-22:59(亥)',
						solar: 22,
						lunar: '亥',
						tiem: '22:00-22:59',
					},
					{
						text: '23:00-23:59(晚子)',
						solar: 23,
						lunar: '子',
						tiem: '23:00-23:59',
					},
				]
				
				if (this.showUnknown) {
					times.unshift({
						text: '时辰未知',
						solar: -1,
						lunar: -1,
						tiem: '时辰未知',
					})
				}
				
				this.times = times
			},
			switchTab (tab) {
				this.currentTab = tab
				
				if (tab === 'solar') {
					this.lunarToSolar()
					
					this.solarValue[3] = this.lunarValue[3]
				} else {
					this.solarToLunar()
					
					this.lunarValue[3] = this.solarValue[3]
				}
			},
			lunarToSolar () {
				// 获取年月日
				let year = this.lunarValue[0] + 1940
				let month = this.lunarValue[1] + 1
				let day = this.lunarValue[2] + 1
				
				// 是否有闰月
				const leapMonth = calendar.leapMonth(year)
				const isLeap = leapMonth != 0
				const isSameMonth = month - 1 == leapMonth
				
				// 根据闰月处理月份
				if (leapMonth) {
					month = month <= leapMonth ? month : month - 1;
				}
				
				// 转换为公历
				let solar = calendar.lunar2solar(year, month, day, isSameMonth)
				this.solarValue[0] = solar.cYear - 1940
				this.solarValue[1] = solar.cMonth - 1
				
				this.updateSolarDays()
				
				this.solarValue[2] = solar.cDay - 1
			},
			solarToLunar () {
				// 获取年月日
				let year = this.solarValue[0] + 1940
				let month = this.solarValue[1] + 1
				let day = this.solarValue[2] + 1
				
				// 转换为农历
				let lunar = calendar.solar2lunar(year, month, day)
				
				// 是否有闰月
				const leapMonth = calendar.leapMonth(lunar.lYear)
				const isLeap = leapMonth != 0
				
				if (isLeap) {
					if (lunar.lMonth > leapMonth) {
						lunar.lMonth += 1
					}
					if (lunar.isLeap) {
						lunar.lMonth += 1
					}
				}
				
				this.lunarValue[0] = lunar.lYear - 1940
				this.updateLunarMonths()
				
				this.lunarValue[1] = lunar.lMonth - 1
				this.updateLunarDays()
				
				this.lunarValue[2] = lunar.lDay - 1
			},
			
			// 标识滑动开始，只有微信小程序才有这样的事件
			pickstart () {
				// #ifdef MP-WEIXIN
				this.moving = true
				// #endif
			},
			// 标识滑动结束
			pickend () {
				// #ifdef MP-WEIXIN
				this.moving = false
				// #endif
			},
			// 点击工具栏的取消按钮
			cancel () {
				this.$emit('cancel')
			},
			// 点击工具栏的确定按钮
			confirm () {
				// #ifdef MP-WEIXIN
				if (this.moving) return
				// #endif
				
				if (this.currentTab === 'solar') {
					// 获取公历年月日
					let solarYear = this.solarValue[0] + 1940
					let solarMonth = this.solarValue[1] + 1
					let solarDay = this.solarValue[2] + 1
					
					// 获取农历年月日
					this.solarToLunar()
					let lunarYear = this.lunarYears[this.lunarValue[0]]
					let lunarMonth = this.lunarMonths[this.lunarValue[1]]
					let lunarDay = this.lunarDays[this.lunarValue[2]]
					
					// 获取时辰
					let hour = this.times[this.solarValue[3]]
					
					this.result = {
						type: 'solar',
						solarYear,
						solarMonth,
						solarDay,
						lunarYear,
						lunarMonth,
						lunarDay,
						hour,
					}
				} else {
					// 获取农历年月日
					let lunarYear = this.lunarYears[this.lunarValue[0]]
					let lunarMonth = this.lunarMonths[this.lunarValue[1]]
					let lunarDay = this.lunarDays[this.lunarValue[2]]
					
					// 获取公历年月日
					this.lunarToSolar()
					let solarYear = this.solarValue[0] + 1940
					let solarMonth = this.solarValue[1] + 1
					let solarDay = this.solarValue[2] + 1
					
					// 获取时辰
					let hour = this.times[this.lunarValue[3]]
					
					this.result = {
						type: 'lunar',
						solarYear,
						solarMonth,
						solarDay,
						lunarYear,
						lunarMonth,
						lunarDay,
						hour,
					}
				}
				
				this.showResult = true
			},
			// 关闭选择器
			closeHandler() {
				if (this.closeOnClickOverlay) {
					this.$emit('close')
				}
			},
			resultCancel () {
				this.showResult = false
			},
			resultConfirm () {
				this.$emit('confirm', this.result)
			}
		},
		watch: {
			show (newVal) {
				if (newVal) {
					this.result = {}
					this.showResult = false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.picker-box {
		border-bottom: 1px solid #eee;
		position: relative;
		.picker-tab {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			width: 376rpx;
			border-radius: 8rpx;
			border: 1rpx solid #fc4a4a;
		}
		.tab-item {
			flex: 1;
			font-size: 28rpx;
			text-align: center;
			line-height: 60rpx;
		}
		.tab-item.active {
			color: #fff;
			background-color: #fc4a4a;
		}
	}

	.picker-container {
		height: 400rpx;
	}

	.picker-view {
		height: 100%;
	}
	
	.picker-time {
		width: 300rpx !important;
		flex: none !important;
	}

	.picker-item {
		line-height: 50px;
		text-align: center;
	}
	
	.result-container {
		padding: 20rpx 40rpx;
		text-align: center;
		.tips {
			margin-bottom: 28rpx;
			color: #666;
			font-size: 28rpx;
		}
		.hour {
			color: #333;
			font-size: 32rpx;
			line-height: 64rpx;
			.value {
				color: #fc4a4a;
			}
		}
	}
</style>