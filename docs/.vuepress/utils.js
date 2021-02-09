const path = require('path')
const fs = require('fs')

const sidebarMap = [
  { title: 'guide', dirname: 'zh/guide', flag: 0, collapsable: true },
  { title: 'resource', dirname: 'zh/resource', flag: 0, collapsable: true },
  { title: 'book', dirname: 'zh/book', flag: 0, collapsable: true },
  { title: 'blog', dirname: 'zh/blog', flag: 0, collapsable: true },
]
exports.inferSiderbars = () => {
  const sidebar = {}
  sidebarMap.forEach(({ title, dirname, flag, collapsable }) => {
    let dirpath = path.resolve(__dirname, '../' + dirname)
    let key = `/${dirname}/`;
    let children = [];
    if (flag) {
      sidebar[key] = fs.readdirSync(dirpath).map(item => {
        if (item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()) {
          children.push(item);
          return {
            title,
            children,
            collapsable: collapsable ? true : false
          }
        }
      }).filter(item => item)
    } else {
      sidebar[key] = fs.readdirSync(dirpath).map(item => {
        if (fs.statSync(path.join(dirpath, item)).isDirectory()) { // 如果是文件夹
          title = item;
          children = fs.readdirSync(path.join(dirpath, item)).map(name => {
            if (name.endsWith('.md') && fs.statSync(path.join(path.join(dirpath, item), name)).isFile()) {
              const _name = name.slice(0, -3)
              return [`${item}/${name}`, `${_name}`];
            }
          }).filter(item => item).sort((a, b) => {
            if (a[0].match(/\d+/g) && b[0].match(/\d+/g)) {
              return a[0].match(/\d+/g)[0] - b[0].match(/\d+/g)[0]
            } else {
              return a[0] - b[0]
            }
          })
          return {
            title,
            children,
            collapsable: collapsable ? true : false
          }
        } else { // 如果是文件
          if (item.toUpperCase().includes('README') || !item.endsWith('md')) return // 如果是README.md文件或者非md文件，则不添加为目录
          const _name = item.slice(0, -3)
          return [`${item}`, `${_name}`]
        }
      }).filter(item => item)
    }
  })
  return sidebar
}