export const navigatorShare = (shareInfo) => {
	try {
		if (navigator.canShare(shareInfo)) {
			navigator.share(shareInfo)
		} else {
			shareError(shareInfo.url)
		}
	} catch (err) {
		// 如果不支持，你可以在这里做降级处理
		shareError(shareInfo.url)
	}
}

const shareError = (url) => {
	uni.showModal({
		title: '提示',
		content: '当前浏览器不支持分享，请复制链接分享',
		confirmText: '复制链接',
		success: (res) => {
			if (res.confirm) {
				uni.setClipboardData({
					data: url,
					success: () => {
						console.log('success')
					}
				})
			}
		}
	})
}
