import axios from 'axios'
import { ElMessage } from 'element-plus'
// 二次封装 axios
const request = axios.create({
  // 配置基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 设置请求超时时间
  timeout: 5000,
})
// 配置请求 拦截器
request.interceptors.request.use((config) => {
  config.headers.token = window.localStorage.getItem('token') || ''
  // 返回修改后的 配置对象
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    //处理网络错误
    let msg = ''
    const status = error.request.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
