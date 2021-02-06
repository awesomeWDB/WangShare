export const translateDate = (obj, count) => {
  if (!(obj instanceof Date)) throw new Error('该参数必须为Date构造！')
  return new Date(obj.valueOf() + count * 24 * 60 * 60 * 1000)
}

export const formatDate = (date, fmt) => {
  if (date instanceof Date) {
    date = new Date(date)
  } else {
    date = date.replace(' ', 'T').substr(0, 19)
    date = new Date(date)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
const padLeftZero = (str) => {
  return ('00' + str).substr(str.length)
}