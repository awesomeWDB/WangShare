[[toc]]

## 封装axios
项目中大量使用了`axios`来发起请求，许多请求有共同、重复的业务需求，所以可以使用axios提供的"拦截器"。
下面是拦截器的一个示例

::: details 创建axios实例
``` javascript
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 15000 // 请求超时时间
})
```
:::

::: details request拦截器
``` javascript
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
```
:::

::: details respone拦截器
``` javascript 
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
```
:::

::: details 完整代码
``` javascript 
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
```
:::

## 使用request

``` javascript {1,4-7}
import request from './request'

export function login (data) {
  return request({
    url: `your/api/address`,
    method: 'post',
    data
  })
}
```