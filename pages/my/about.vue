<template>
	<view class="about-page">
		<u-parse :content="systemConfigData.about_us"></u-parse>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.about-page {
	padding: 20rpx;
}
</style>