import axios from 'axios'
import { baseUrl } from '@/config'

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // 解决axios post请求头为json，方便后台获取数据
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非200是抛错 可结合自己业务进行修改
    */
    const res = response.data
    if (res.code === 200) { // 成功
      return response.data
    } else {
      const message = response.data.message || response.data.data || 'Error'
      return Promise.reject(new Error(message))
    }
  }, error => {
    return Promise.reject(error)
  }
)

export default service
