<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<script module="abc" lang="renderjs">
	export default {
		mounted () {
			this.$nextTick(() => {
				if (typeof window.translate === 'function') {
					this.init()
				} else {
					// 无translate，先引入
					// 动态引入较大类库避免影响页面展示
					const script = document.createElement('script')
					script.src = 'static/js/translate.js'
					script.onload = this.init.bind(this)
					document.head.appendChild(script)
				}
			})
		},
		methods: {
			init () {
				if (window.translate) {
					translate.service.use('client.edge')
					window.translate.listener.start()	//开启html页面变化的监控
					window.translate.selectLanguageTag.show = false
					
					// 翻译时忽略指定的class属性
					window.translate.ignore.class.push('no-translation')
					window.translate.ignore.class.push('switch-language')
					
					window.translate.execute()
				}
			}
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";

	// #ifndef APP-NVUE
	@import '@/style/common.scss';
	@import '@/style/iconfont.css';
	// #endif

	// #ifdef APP-NVUE
	@import '@/style/flex.scss';
	@import '@/style/margin.scss';
	// #endif
	
	picker {
		input {
			pointer-events: none;
		}
	}
	input.datetext {
		pointer-events: none;
	}
	
	.language-box {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		z-index: 10;
	}
	
	ins.adsbygoogle[data-ad-status="unfilled"] {  
	    display: none !important;  
	}
</style>
