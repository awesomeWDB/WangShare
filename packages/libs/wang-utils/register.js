export * from './date.js' // 日期、时间处理
export * from './storage.js' // storage设置、删除、清空
export * from './platform.js' // 平台判断：是否是微信、IOS等（todo）
export * from './validate.js' // 检验函数：手机号等（todo）

/**
 * 设置浏览器头部标题
 */
export const setTitle = (title) => {
  title = title || '恩元问卷调查系统'
  window.document.title = title
}

/**
 * 根据name，获取浏览器url后面的参数
 */
export const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}