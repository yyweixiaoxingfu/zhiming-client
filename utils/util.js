export const groupArray = (array, subGroupLength) => {
	if (typeof array == 'object') {
		const result = array.reduce((acc, curr, index) => {
			if (index % subGroupLength === 0) {
				acc.push([])
			}
			acc[Math.floor(index / subGroupLength)].push(curr)
			return acc
		}, [])
		
		return result
	} else {
		return []
	}
}

export const barrageListOrganize = (obj) => {
	let barrageList = []
	
	if (obj) {
		for (let key in obj) {
			barrageList.push({
				name: key,
				text: obj[key]
			})
		}
	}
	
	return barrageList
}

/**
 * 隐藏手机号中间四位
 */
export const phoneFilter = (val) => {
	if (val) {
		let reg = /^(.{3}).*(.{4})$/;
		return val.toString().replace(reg, '$1****$2');
	} else {
		return ''
	}
}
