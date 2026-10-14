<template>
	<view class="withdrawal-page">
		<view class="form-box">
			<u--form labelPosition="left" labelWidth="auto" :model="form" :rules="rules" ref="uForm">
				<u-form-item label="可提现额" borderBottom>
					<view class="balance">10元</view>
				</u-form-item>
				<u-form-item label="提现金额" borderBottom>
					<u--input v-model="form.dl_jf" type="number" border="none" inputAlign="right" placeholder="请输入提现金额，单位元"></u--input>
				</u-form-item>
				<picker mode="selector" :range="typeList" range-key="name" @change="typeChange">
					<u-form-item label="提现方式" borderBottom>
						<u--input v-model="form.dl_txfst" type="text" border="none" inputAlign="right" placeholder="请选择提现方式" disabled disabledColor="#ffffff"></u--input>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>
				</picker>
				<u-form-item label="提现帐号" borderBottom>
					<u--input v-model="form.dl_txzh" type="text" border="none" inputAlign="right" placeholder="请输入提现帐号"></u--input>
				</u-form-item>
				<u-form-item label="帐户姓名" borderBottom>
					<u--input v-model="form.dl_txnc" type="text" border="none" inputAlign="right" placeholder="请输入姓名"></u--input>
				</u-form-item>
				<u-form-item label="联系电话">
					<u--input v-model="form.dl_txtel" type="text" border="none" inputAlign="right" placeholder="请输入联系电话"></u--input>
				</u-form-item>
			</u--form>
		</view>
		<view class="bottom-box">
			<button class="btn" type="default" @click="confirm">申请提现</button>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				form: {
					dl_jf: '',
					dl_txfs: '',
					dl_txfst: '',
					dl_txzh: '',
					dl_txnc: '',
					dl_txtel: '',
				},
				rules: {},

				typeList: [{
					name: '支付宝',
					value: 1
				}, {
					name: '微信',
					value: 2
				}],
			}
		},
		methods: {
			typeChange (e) {
				const index = e.detail.value
				
				this.form.dl_txfs = this.typeList[index].value
				this.form.dl_txfst = this.typeList[index].name
			}
		}
	}
</script>

<style lang="scss">
.withdrawal-page {
	box-sizing: border-box;
	padding: 28rpx;
	min-height: 100%;
	background-color: #f8f8f8;
	.form-box {
		padding: 0 20rpx;
		border-radius: 20rpx;
		background-color: #fff;
		.balance {
			flex: 1;
			color: red;
			font-size: 28rpx;
			text-align: right;
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 120rpx;
		border-top: 1rpx solid #EEEEEE;
		padding: 0 20rpx;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.btn {
			flex: 1;
			color: #FFFFFF;
			font-size: 30rpx;
			line-height: 80rpx;
			text-align: center;
			background: $primary-color;
		}
	}
}
</style>
