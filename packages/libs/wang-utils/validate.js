/**
 * 简单的校验下手机号是否合法
 */
export const validatePhone = (tel) => {
  const result = { tag: true, message: '检测手机号通过' }
  if (tel.length < 11) {
    result.tag = false
    result.message = '手机号长度少于11位'
  } else if (tel.length > 11) {
    result.tag = false
    result.message = '手机号长度多于11位'
  }

  return result
}