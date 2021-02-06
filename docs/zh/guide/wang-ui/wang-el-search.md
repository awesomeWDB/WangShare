# 这个是wang-el-search

## 3级标题1
大概是他不说了

::: demo 日期格式化使用的是`WangUtils.formatDate`方法
``` html
<template>
  <wang-el-search
  v-model="searchParams"
  :search-options="searchOptions"
  @search="search"
  multiple />
  <div>搜索条件：{{ JSON.stringify(searchParams) }}</div>
</template>
<script>
export default {
  data() {
    return {
      searchOptions: [
        { label: '样本编号', value: 'sampleNum' },
        { label: '产品大类', value: 'productTypeName' },
        { label: '用户', value: 'users' },
        { label: '节点名称', value: 'taskName' },
        { label: '搜索5', value: 'taskName33', type: 'select', options: [
            {label: '发布', value: true},
            {label: '未发布', value: false},
          ]
        }
      ],
      searchParams: [],
    }
  },
  methods: {
    search(params) {
      console.log(params)
    }
  }
}
</script>
```
:::

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

## 3级标题2
大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了

大概是他不说了
