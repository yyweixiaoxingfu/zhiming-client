# 知命罗盘 · 客户端

> 八字命理测算应用的前端，基于 uni-app + Vue 2 + uView UI，一套代码编译到
> H5、微信小程序、App（Android / iOS）及多家小程序平台。
> 配套服务端见独立仓库 `zhiming-server`（ThinkPHP 5.1）。

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)

## 功能概览

**命理测算**

八字精批 · 生辰详批 · 流年运势 · 财运分析 · 八字合婚 · 姻缘分析 · 姓名配对 ·
姓名详批 · 宝宝取名 · 号码吉凶 · 紫微斗数 · 生肖运势 · 星座运势 · 小六壬 · 命理字典

**塔罗**

运势 · 爱情 · 复合 · 分手 · 继续 · 暗恋 · 脱单 · 心理 · 他人（九个牌阵）

**其他**

大师咨询 · 会员与 VIP · 邀请分销 · 订单与支付（微信 / 支付宝 / 余额）·
登录注册与找回密码 · 个人中心 · 客服

## 技术栈

- uni-app（Vue 2）
- uView UI 2.x
- SCSS
- HBuilderX 3.x 或 `vue-cli` 命令行

## 快速开始

### 方式一：HBuilderX（推荐）

1. 下载 [HBuilderX](https://www.dcloud.io/hbuilderx.html)（App 开发版）。
2. `文件 → 导入 → 从本地目录导入`，选择本项目目录。
3. 运行前先完成下方「必要配置」。
4. `运行 → 运行到浏览器 / 小程序模拟器 / 手机或模拟器`。

### 方式二：命令行（仅 H5 与微信小程序）

```bash
# 安装依赖
npm install

# 开发运行
npm run dev:%PLATFORM%      # 如 npm run dev:h5 / dev:mp-weixin

# 生产构建
npm run build:%PLATFORM%    # 如 npm run build:h5 / build:mp-weixin
```

> 命令行方式需要自行安装 `@dcloudio/vue-cli-plugin-uni` 等脚手架依赖并补充
> `package.json` 中的 scripts，仓库当前以 HBuilderX 为主要开发方式。

> 📘 **H5 / 微信小程序 / App 的完整发布步骤请看 [docs/部署文档.md](./docs/部署文档.md)**，
> 包含各平台伪静态配置、域名白名单、App 打包证书与常见问题排查。

### 必要配置

1. **后端地址** —— 修改 `api/config.js` 中的 `baseURL`，指向你自己的服务端：

   ```js
   export let baseURL = 'https://api.your-domain.com/index.php/'
   ```

2. **应用标识** —— 修改 `manifest.json`：
   - `appid`：在 [DCloud 开发者中心](https://dev.dcloud.net.cn/) 申请后替换；
   - `mp-weixin.appid`：替换成你自己的微信小程序 AppID；
   - `h5.title`：按需要修改站点标题。

3. **图片资源** —— 页面中的命理配图默认引用 `base2.tengsytech.com` /
   `csweb.tengsytech.com` 上的资源。自行部署时请将这些地址替换为自有 CDN，
   或把资源下载到 `static/` 后改为相对路径引用。

4. **支付与分享** —— 按各平台要求配置支付商户号、分享 AppID 等参数。

## 目录结构

```
uni-app/
├── api/          # 接口封装与地址配置
├── components/   # 业务公共组件
├── pages/        # 页面（index 测算入口 / result 结果页 / payment 支付 / my 个人中心 ...）
├── static/       # 本地静态资源
├── style/        # 全局样式
├── uni_modules/  # 第三方组件（uView UI、uQRCode、DCloud 官方组件）
├── utils/        # 工具方法（request、分享、二维码）
├── App.vue
├── main.js
├── manifest.json # 各平台配置
└── pages.json    # 页面路由与导航栏配置
```

## 支持平台

| 平台 | 状态 |
| --- | --- |
| H5 | 支持 |
| 微信小程序 | 支持 |
| App（Android / iOS） | 支持（需云端打包） |
| 支付宝 / 百度 / 头条小程序 | 已在 `manifest.json` 中开启，未做完整适配 |

## 免责声明

本项目所有测算结果均基于传统民俗文化与固定规则生成，**属于娱乐内容，不构成
任何形式的运势预测、医疗、法律或投资建议**。请勿将其结果用于人生重大决策。

## 技术支持与定制

本项目免费开源，如果你在使用过程中遇到问题，或需要**二次开发、功能定制、
商业化部署**等服务，欢迎通过微信联系作者：

<p align="center">
  <img src="./docs/images/wechat-qr.png" alt="作者微信二维码" width="220">
</p>

> 扫码添加微信，备注「知命罗盘」。

## 特别感谢

本项目站在众多开源项目与第三方服务的肩膀上，在此向以下公司与组织致以诚挚感谢。
（完整版权与许可证信息见 [NOTICE](./NOTICE)）

### 一、框架与 UI 组件

| 公司 / 组织 | 项目 | 引用位置 | 协议 |
| --- | --- | --- | --- |
| **DCloud**（dcloud.io） | uni-app | 整个项目框架，以及 `uni-icons` / `uni-scss` / `uni-calendar` / `uni-pagination` 官方组件 | Apache-2.0 |
| **uView UI 团队**（uviewui.com） | uView UI 2.0.38 | `uni_modules/uview-ui`，全站基础组件与样式 | MIT |
| **Sansnn** | Sansnn-uQRCode | `uni_modules/Sansnn-uQRCode`，推广海报二维码 | MIT |
| **lz-epub 作者** | lz-epub | `uni_modules/lz-epub`，电子书阅读 | 见组件目录内声明 |
| **DENSO WAVE**（denso-wave.com） | QR Code | 二维码标准的商标与规范持有方 | — |

### 二、第三方在线服务

- **ZVO 翻译**（zvo.cn / api.translate.zvo.cn）—— 页面多语言翻译服务，
  由 `App.vue` 中的 `static/js/translate.js` 调用
- **Google**（googletagmanager.com / googlesyndication.com）—— 站点统计与广告
- **百度统计**（hm.baidu.com）—— 站点访问统计
- **Cookiebot**（consent.cookiebot.com）—— Cookie 合规提示

> 上述统计与广告代码位于 `template.h5.html`，**部署到自有站点前请替换为自己的 ID 或删除**
> （详见 [部署文档](./docs/部署文档.md) 1.3 节）。

### 三、图片资源

页面中的命理配图与 Banner 由本项目自有 CDN 提供
（`base2.tengsytech.com` / `csweb.tengsytech.com`），版权归本项目作者所有。

> 若你是上述任一项目的作者，且不希望本仓库引用你的作品或服务，
> 请通过微信或 Issue 联系作者，我会在第一时间移除相关内容。

## 许可证

本项目采用 [Apache License 2.0](./LICENSE) 发布。第三方组件的归属与许可证信息见 [NOTICE](./NOTICE)。
`uni_modules/` 下各组件遵循其各自的原始许可证。
