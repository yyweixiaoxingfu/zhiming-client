const http = uni.$u.http

/**
 * @description 获取系统参数
 */
export const systemConfig = (params) => http.post('/index/index/system_config', params)

/**
 * @description 登录
 */
export const login = (params) => http.post('/member/login/login', params)

/**
 * @description 验证码登录
 */
export const codeLogin = (params) => http.post('/member/login/code_login', params)

/**
 * @description 注册
 */
export const register = (params) => http.post('/member/login/register', params)

/**
 * @description 忘记密码
 */
export const forgetPass = (params) => http.post('/member/login/forgetPass', params)

/**
 * @description 获取图形验证码
 */
export const getImgCode = (params) => http.post('/system/sms/get_img_code', params)

/**
 * @description 获取手机验证码
 */
export const sendSms = (params) => http.post('/system/sms/send_sms', params)

/**
 * @description 获取首页数据
 */
export const homeInfo = (params) => http.post('/index/index/get_home_info', params)

/**
 * @description 获取分类下列表或内容数据
 */
export const getCateData = (params) => http.post('/index/index/get_data_list', params)

/**
 * @description 获取详情信息
 */
export const getDetailsInfo = (params) => http.post('/index/index/get_details_info', params)

/**
 * @description 点赞、收藏
 */
export const clickLike = (params) => http.post('/member/operation/click_like', params)

/**
 * @description 获取点赞、收藏列表
 */
export const getClickLikeList = (params) => http.post('/member/operation/click_like_list', params)

/**
 * @description 星座列表
 */
export const starsListInfo = (params) => http.post('/index/index/stars_list_info', params)

/**
 * @description 专家列表
 */
export const getExpertList = (params) => http.post('/index/index/get_expert_list', params)

/**
 * @description 获取签到日期数据
 */
export const signInData = (params) => http.post('/index/index/sign_in_data', params)

/**
 * @description 签到
 */
export const signIn = (params) => http.post('/index/sign_in/sign_in', params)

/**
 * @description 获取用户连续签到状态
 */
export const getSignInStatus = (params = {}, config = { custom: { jump: true } }) => http.post('/index/sign_in/get_sign_in_status', params, config)

/**
 * @description 补签
 */
export const repairSignIn = (params) => http.post('/index/sign_in/repair_sign_in', params)

/**
 * @description 获取用户信息
 */
export const getMaterial = (params = {}, config = { custom: { jump: true } }) => http.post('/member/personal/material', params, config)

/**
 * @description 下单
 */
export const confirmOrder = (params = {}) => http.post('/order/sp_order/confirm_order', params)

/**
 * @description 邀请好友
 */
export const inviteFriends = (params = {}) => http.post('/member/team/invite_friends', params)

/**
 * @description 邀请好友
 */
export const changeUserInfo = (params = {}) => http.post('/member/personal/changeInfo', params)

/**
 * @description 退出登录
 */
export const logout = (params = {}) => http.post('/member/personal/logout', params)

/**
 * @description 推广记录（我的团队）
 */
export const teamList = (params = {}) => http.post('/member/team/team_list', params)

/**
 * @description 塔罗牌数据
 */
export const tarotFindInfo = (params = {}) => http.post('/index/index/tarot_find_info', params)

/**
 * @description 塔罗数据查询
 */
export const tarotInfo = (params = {}) => http.post('/index/stars/tarot', params)

/**
 * @description 提交意见反馈
 */
export const feedback = (params = {}) => http.post('/member/personal/feedback', params)

/**
 * @description 我的收藏、点赞列表
 */
export const clickLikeList = (params = {}) => http.post('/member/operation/click_like_list', params)

/**
 * @description 钱包明细
 */
export const creditLogs = (params = {}) => http.post('/member/credit/logs', params)

/**
 * @description 更换手机号或邮箱
 */
export const changeMobile = (params = {}) => http.post('/member/personal/changeMobile', params)

/**
 * @description 设置支付密码
 */
export const setTradePass = (params = {}) => http.post('/member/personal/setTradePass', params)

/**
 * @description 字库使用状态查询
 */
export const getZidianStatus = (params = {}) => http.post('/order/sp_order/get_zidian_status', params)

/**
 * 今年运势
 */
export const yearLuck = (params) => http.post('/index/sm/year_luck', params)

/**
 * 起名查字
 */
export const getZidiansInfo = (params) => http.post('/index/sm/get_zidians_info', params)

/**
 * 发起支付（体验次数）
 */
export const initiatePay = (params) => http.post('/order/sp_order/initiate_pay', params)

/**
 * 发起支付（易支付）
 */
export const ePay = (params) => http.post('/payment/epay/epay', params)

/**
 * 订单列表
 */
export const getOrderList = (params) => http.post('/order/sp_order/get_order_list', params)

/**
 * 测算结果页
 */
export const getOrderFind = (params) => http.post('/order/sp_order/get_order_find', params)

/**
 * 我的钱包
 */
export const getCredit = (params) => http.post('/member/credit/get_credit', params)

/**
 * 客服模块下的推荐列表
 */
export const getSuggestList = (params) => http.post('/index/index/get_suggest_list', params)

/**
 * 支付回调
 */
export const epayNotify = (params) => http.get('/payment/epay/epay_notify', { params })

/**
 * 帮助中心
 */
export const helpCenter = (params) => http.post('/system/announce/help_center', params)

/**
 * 帮助中心详情
 */
export const helpCenterDetail = (params) => http.post('/system/announce/help_center_detail', params)

/**
 * 支付方式列表
 */
export const getPayList = (params) => http.post('/payment/pay/pay_list', params)

/**
 * 发起支付（在线支付）
 */
export const pay = (params) => http.post('/payment/pay/pay', params)

/**
 * 积分兑换体验次数
 */
export const pointsExchange = (params) => http.post('/payment/pay/points_exchange', params)
