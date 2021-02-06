import * as WangUtils from './register'

const install = (win) => { // 把WangUtils挂载到win对象上
  win.WangUtils = WangUtils
}

if (typeof window !== 'undefined') { // 在浏览器中挂载到window上
  install(window)
  console.log('浏览器中直接挂载到window上', window.WangUtils)
}

export default Object.assign({}, WangUtils, { install })