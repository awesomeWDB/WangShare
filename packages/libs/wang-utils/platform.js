/**
 * 是否是微信
 */
export const isWeiXin = () => {
  const ua = navigator.userAgent.toLowerCase()
  const match = ua.match(/MicroMessenger/i)
  if (!match) return false
  if (match[0] === 'micromessenger') {
    return true
  } else {
    return false
  }
}