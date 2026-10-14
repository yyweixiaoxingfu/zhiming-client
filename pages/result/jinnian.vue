<template>
	<view class="jinnian-detail">
		<view class="container">
			<view class="order">订单号：{{ pageContent.order_no }}</view>
			<view class="user-info">
				<image class="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAaVBMVEUAAADewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqTewqQuQxQ3AAAAInRSTlMA9RUMJ+HBOtTM7lWkHoJeSEHatC9mT4p7bemXdJC5Wqyd2vYzowAABC5JREFUaN6tmemSqyAQhRtwwX2JGrdsvP9D3hoxw51IC2K+X1OVeNKc3kgGbKFemBRF0VVhk1H4Hswr8jSoCRFCEBL70WVqPfYNZa+dOBEbCH+1zTll+rgQgUKCIXOWDq++MDCmoZv0R9DErzmPeO3Hf/Xv1XGrU/K/welcNpQyBoxSL3zk9//P9PSO1UevwqunRPMwDYf7KFbiGeypol9PXx1ec1kRvI8XWFufk3fQfWYK40VW53o7twMh4QO1yruQXKjFm/3Vx9y2yRMun4iMee3i4xVAJ/mMbzD+QaSDAxwi8eVpSwvtGukLY6LIjnontQPqMDlTqY6GFSptB66yMZBcZb4qKRdusmaY9mCBjFu+6K6e4i9xCu5I3wdNNclS9U7tlmgpyGZruEq2O028THj9iXo4yWORaT+mm0ymoZYzz8uYhe3+38QFiyk7htPkFvCRkLGOppLuvG+x97Y9TY539215Ri2nEDdmE2a0PMIwO65kc6t4YWtEmvD6LMMHtm240OB3oKdUoasP46BnIMiVqN0LPf87sJAR3gqUGZmty8GYavxN+SjHdkBiX2xM1nwtlXDVl0mMKuO7oV/nl8qAvrguYhc/00b0Y/NIpSt4OgthIMVTKn3haAMxbhInIerL7fcQokICNzGh+zL6VRipg+Pog6z+OVQmLUfmYUaEmQ6NqgRgd7QQHyZhNFn52mNe/fNHgVwWzKRo603v3tcm/WkjftGuu+UVBglB10RgI35HGzvKYEAHC4tsxJ/oPvIbWfCcOUc+od0XhzALWfAa7kri6NyN5D1lxtf+y0a8wsU7GPDIZwttn6HiotgTDx3LXIkXeEJZbRYvAU0oSaAj8lbh1qLRztWIVLJDxwyQlWKgAPzBOFxnSwNaJoGj7ETan3tAA9w6yOJ98QT0JHK2rNU8gJ7WOLTwZE3vhffEr8Q4MXorvr8DLuXyR6DRwc5XN6Hq5/F492ru+bvDFu++kf0OvxZQdSR2nwJGviZE/YlBcySbHmBEqkaqJTlIHGU64j8rFvqHmmW5ra2DrmjWGpZRnVPMlUhVpXakP7jFyB2YvlZ6dQzNrS8MhBVRp2tP4v2p+RfyJcvMi27T+fz4rGbzy48tvNoEXqkw+ccIKH1xCDJ/BB58zic1GmcijnLTSanQ1XS+IQI2yzQbty3ZyY9Xlemqnsr0aS6dpJMj2F39IctH+50wbqRnblxXFZ/qdw5viXBnDuT50Z1znity1zgLvkNK8g1tP8NW/XlICAjzee0OUPKz4oXpp2R3CKp9PnaSgIFH7FwnFRgJazftqAELsqeL9sTAjvZws9YJWJOlxzI5UThCEh2YJiEcJbG9tyTgQnkxjrL42Z34LzTf0+e9B6cI+yDWxhzkJXwBWs5TMJL3GYgfpX1H4XvQpkqKoc/zvgibDOz4B7bE01JG/AqAAAAAAElFTkSuQmCC" mode="aspectFill"></image>
				<view class="content">
					<view class="">服务项目：流年运详批</view>
					<view class="">用户信息：{{ returnData.bazi_zh.user.xm_name.xing }}{{ returnData.bazi_zh.user.xm_name.ming }}（{{ returnData.bazi_zh.user.sex }}）</view>
					<view class="">出生日期：{{ returnData.bazi_zh.user.age.y }}年{{ returnData.bazi_zh.user.age.m }}月{{ returnData.bazi_zh.user.age.d }}日 {{ returnData.bazi_zh.user.age.h }}时</view>
				</view>
			</view>
			<view class="infor-table">
				<view class="text">您的八字命盘</view>
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
						<view class="th">天干</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[0] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[2] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[4] }}</view>
						<view class="th">{{ returnData.bazi_zh.user.bazi[6] }}</view>
					</view>
					<view class="tr">
						<view class="th">地支</view>
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
						<view class="th">支神</view>
						<view class="th">
							<view>{{ returnData.bazi_pp.ysshen1 }}</view>
							<view>{{ returnData.bazi_pp.ysshen2 }}</view>
							<view>{{ returnData.bazi_pp.ysshen3 }}</view>
						</view>
						<view class="th">
							<view>{{ returnData.bazi_pp.msshen1 }}</view>
							<view>{{ returnData.bazi_pp.msshen2 }}</view>
							<view>{{ returnData.bazi_pp.msshen3 }}</view>
						</view>
						<view class="th">
							<view>{{ returnData.bazi_pp.rsshen1 }}</view>
							<view>{{ returnData.bazi_pp.rsshen2 }}</view>
							<view>{{ returnData.bazi_pp.rsshen3 }}</view>
						</view>
						<view class="th">
							<view>{{ returnData.bazi_pp.hsshen1 }}</view>
							<view>{{ returnData.bazi_pp.hsshen2 }}</view>
							<view>{{ returnData.bazi_pp.hsshen3 }}</view>
						</view>
					</view>
					<view class="tr">
						<view class="th">纳音</view>
						<view class="th">{{ returnData.bazi_pp.nayin1 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin2 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin3 }}</view>
						<view class="th">{{ returnData.bazi_pp.nayin4 }}</view>
					</view>
				</view>
				<view class="text">本命属{{ returnData.bazi_zh.user.zodiac }}，胎元：{{ returnData.bazi_pp.taiyuan }}、纳音胎元：{{ returnData.bazi_pp.nayintaiyua }}、命宫：{{ returnData.bazi_pp.minggong }}、纳音命宫：{{ returnData.bazi_pp.nayinminggong }}，生于{{ returnData.bazi_zh.user.season }}季。</view>
			</view>
		</view>
		<view class="analysis">
			<view class="analysis-title">
				<view class="title">终生事业运势分析</view>
			</view>
			<view class="analysis-body">
				<u-parse :content="returnData.bazi_zh.data.rgxx.syfx"></u-parse>
				<view class="public_title">适合的行业</view>
				<view class="">{{ returnData.bazi_zh.info.tywh.hyhw }}</view>
			</view>
			<view class="analysis-title mt-20">
				<view class="title">终生财富运势分析</view>
			</view>
			<view class="analysis-body">
				<u-parse :content="returnData.bazi_zh.data.rgxx.cyfx"></u-parse>
			</view>
			<view class="analysis-title mt-20">
				<view class="title">终生爱情运势分析</view>
			</view>
			<view class="analysis-body">
				<u-parse :content="returnData.bazi_zh.data.rgxx.aqfx"></u-parse>
			</view>
			<view class="analysis-title mt-20">
				<view class="title">未来一年运势分析</view>
			</view>
			<view class="analysis-body">
				<u-parse :content="returnData.bazi_sm.myq_text"></u-parse>
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
						
						let bazi_pp = res.data.return_data.bazi_pp
						if (bazi_pp) {
							bazi_pp = JSON.stringify(bazi_pp)
							bazi_pp = bazi_pp.replaceAll('(', '')
							bazi_pp = bazi_pp.replaceAll(')', '')
							
							this.returnData.bazi_pp = JSON.parse(bazi_pp)
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.jinnian-detail {
	color: #333;
	font-size: 28rpx;
	position: relative;
	.container {
		padding: 20rpx;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAeCAYAAABzEJv6AAAD8ElEQVR4nO3dbZabIBQA0JjttPtfRrdkTzuTMypIjKJ8eO+PJqMGnoD4tM5k+PP71/gYHjP/f5wsG17vF9sFG3y/LjeblRera/JmWCwYlitS5UzWRUN9xTdE1i7rj2wS1DOLcAhj21DGyiaTMobwQ2EIkbjeWG2rSPCLtv+kmkMxrkiNp/nC6MpzHay6QMTATYx7dnP5oV2FHPGqcFHxZHGWkF7l7CxsDMJcLpgXPK6vSovEOS7fvYJJlL8MM7JJ+PlxnK2c/RQtIAwpVtk4izksaLooWB3E+PPD9N9/H5y2W1jLSqyztlrZYO3z0T6Kr4/sRHS7f2+fqwM1towbMQAAgIykFoc9G4+/T7Pbrkb5Z9q+Z623AWCnG+RPEncWpI4AvTGzQ822H6FfibsHa3cafpquVBvqu3pk6gsnWAD2OysxOKfcLKUmC8l8Vo39nuSFnumdJa3RFEufA0Do6PnxNufXRne0prB3xnL6ozLnX0lVJkesH14PyMNjtAoA17jFGcdp9TPf7fVZSvd+6y6fcb/l2HJA1UNfAD1o5D+Vc0257U/d2/cg+me7P7AcGsXa7sqKCz8i89JW4i4hyqvV9qwxbmMToF0ekVm3/OKYFl2a4AdLspZXVeK+8vVCdZGgEeM3SgFojZymOacn7ofzmSsGVc46JHAYA0CPzG1QXOWPygzxiSJ3Mh+r47ZcfgNQm47PTbXu2hlx7Smzs64/ujubEvcxeENA21zCZQUAcJbT84yDFTxrTjglaSVFWr+WseIiCeBmTPx12NkPkZSCfb7uuFd/POjxqZKtoScAYG5XGuWE2qeTc+ptz7i70L2Wg3knDQdwK6Z9bqbLL2BKOXKM33N+WPkF4Sq5wgSgRr1lEBvPt8PspZBjtdfWc1+J+1pU8qCy/vfLWucAAFClk3LoZ3N/J71xmgIADnIy5a2VQbKyuA7vg2vzUZncVzFXd+LdJhwTLAC3VMEJsGQI4+yFDG73jHuTPDIDwNWcdqA61yTunV5qfTqnmQOv5Poe4C6cX+9hWz+/2arq9OB9cBXecU80eGp/hm2b5TROK02EDQCluI1RUqnWrywpKdAMvaZl6cRdMgqXc9gB1TAhwSG7D6Eh/j6duBd14S30nOWb5CriPhNAlxbTe/2zfSTCyKI93qYdNTXOFbFsyMNaTtW2Je4t7WGRWGXr5GEkAXCcG1ddmXRnxXfcDbqeSEgBgENSyURqXQ5jHXnpU0JVmaIdYjQA0JAe7vH1sA/Sh9BJbfLZHfcdQWz6yGwjd9pTWj029Op75j2ANWbIGc1xW9HEfZlkGR8F9HTnXdYOAOyVSkuuzpdKPjLzeDz+AkTQpqO6UN2pAAAAAElFTkSuQmCC") repeat-y;
		background-size: 100% auto;
		.order {
			color: #FFEB3B;
			font-size: 32rpx;
			text-align: center;
		}
		.user-info {
			margin-top: 20rpx;
			border-radius: 6rpx;
			padding: 20rpx;
			line-height: 50rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			.avatar {
				width: 120rpx;
				height: 120rpx;
			}
			.content {
				margin-left: 20rpx;
				flex: 1;
			}
		}
		.infor-table {
			margin-top: 20rpx;
			.table-box {
				margin: 20rpx 0;
				border: 1px solid #b09589;
				font-size: 32rpx;
				text-align: center;
				.tr {
					display: flex;
					background-color: #f5f0ee;
					&:last-child {
						.th {
							border-bottom: none;
						}
					}
					.th {
						flex: 1;
						padding: 20rpx 10rpx;
						border-right: 1px solid #b09589;
						border-bottom: 1px solid #b09589;
						&:last-child {
							border-right: none;
						}
					}
				}
			}
			.text {
				color: #FFEB3B;
				font-size: 32rpx;
			}
		}
	}
	.analysis {
		padding: 20rpx;
		background-color: #fff6e6;
		.analysis-title {
			text-align: center;
			.title {
				display: inline-block;
				padding: 0px 30rpx;
				height: 60rpx;
				color: #932716;
				font-size: 32rpx;
				font-weight: bold;
				text-align: center;
				line-height: 30px;
				background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAA+BAMAAACy3T8SAAAAMFBMVEUAAADkhxjkhxjkhxjkhxjkhxjkhxj3tVXkhxj0rEn2sU/qlCnmixzxp0HrmC7unje5a8q6AAAAB3RSTlMA9OS/gkgR84OklQAAAQ5JREFUaN7t2jsOAVEUxvHTsAYbYAUKvUYpViA2cRiPREgcxqNEJFoyhdYo1BS3R2RqjxVMKWIW8Z04/xX8kpvc5nxE6WJGoOvmq0RUEfiyRCk5bhg67y5lqs0YvjhHpT3D1+xT4cIrJ8C5A7d7lNk0zgLdeO51SbjpB8/D8lsURbclVqtpEO5ZSLg+4sWJQWsNeTv4MQfYzHrCnAXhg0Hr+EGcMEXGsD+8dxZJmL57MWxrFybMIUO3MKYxQTPmHzMnDN1VF1PJoxvTmGgZ05ioGdOYqBnTmKgZ05ioGdOYqClj+u7NsO1cqOvgouR8peQYqOO0quJQreTsr2REoWSSomTgo2QupWR8pmPK9wFYhE3Hvs/JoQAAAABJRU5ErkJggg==') no-repeat;
				background-size: 100% 100%;
			}
		}
		.analysis-body {
			margin-top: 20rpx;
			padding: 20rpx;
			border-radius: 10rpx;
			border: 1rpx solid #c8bca7;
			color: #333333;
			font-size: 28rpx;
			line-height: 52rpx;
			background-color: #fff;
			.public_title {
				margin: 20rpx 0px;
				color: #FF5722;
				font-size: 16px;
				font-weight: 700;
			}
		}
	}
}
</style>