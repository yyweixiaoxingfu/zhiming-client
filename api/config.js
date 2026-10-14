// -------------------------------------------------------------
// 后端接口地址配置
//
// 部署前请把 baseURL 改成自己的服务端地址，例如：
//   export let baseURL = 'https://api.your-domain.com/index.php/'
//
// 注意：
//   1. 必须是 HTTPS，否则微信小程序等平台会拒绝请求；
//   2. 地址需与服务端 public/ 目录对应，末尾保留 /index.php/；
//   3. 服务端需开启 CORS，允许当前页面域名访问。
// -------------------------------------------------------------
export let baseURL = 'https://127.0.0.1/index.php/'

export let uploadURL = baseURL + 'system/basic/uploadImage'
