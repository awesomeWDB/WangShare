<template>
  <div>
    <wang-el-search
      v-model="searchParams"
      :search-options="searchOptions"
      @search="search"
      multiple
    />
    <div>搜索条件：{{ JSON.stringify(searchParams) }}</div>
  </div>
</template>

<script>export default {
  name: 'WangElSearchDemo1',
  data () {
    return {
      searchOptions: [
        { label: '样本编号', value: 'sampleNum' },
        { label: '产品大类', value: 'productTypeName' },
        { label: '用户', value: 'users' },
        { label: '节点名称', value: 'taskName' },
        {
          label: '搜索5', value: 'taskName33', type: 'select', options: [
            { label: '发布', value: true },
            { label: '未发布', value: false },
          ]
        }
      ],
      searchParams: [],
    }
  },
  methods: {
    search (params) {
      console.log(params)
    }
  }
}
</script>

<style>
</style>