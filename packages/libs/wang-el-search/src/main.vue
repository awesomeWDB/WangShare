<!-- 搜索组件 -->
<template>
  <div
    class="search"
    style="display: flex; align-items: center; flex-wrap: wrap;"
  >
    <div
      v-for="(param, paramIndex) in value"
      :key="paramIndex"
      style="margin: 10px 0;"
    >
      <el-select
        v-model="param.key"
        placeholder="请选择"
        :style="customStyle.selectStyle"
        :size="size"
        @change="changeType(paramIndex)"
      >
        <el-option
          v-for="(option, optionIndex) in searchOptions"
          :key="optionIndex"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
      <el-input
        v-if="!isSelect(param.key)"
        v-model="param.value"
        :style="customStyle.inputStyle"
        :size="size"
        :placeholder="`请输入${getLabel(param.key)}`"
      />
      <el-select
        v-else
        v-model="param.value"
        :style="customStyle.inputStyle"
        :size="size"
        :placeholder="`请选择${getLabel(param.key)}`"
      >
        <el-option
          v-for="(option, optionIndex) in getSubOptions(param.key)"
          :key="optionIndex"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </div>

    <el-tooltip
      effect="dark"
      content="删除最后一个搜索条件"
      placement="top"
    >
      <el-button
        v-if="multiple && value.length >= 2"
        :size="size"
        type="danger"
        class="el-icon-minus"
        plain
        @click="minusParams"
      />
    </el-tooltip>

    <el-tooltip
      effect="dark"
      content="增加搜索条件"
      placement="top"
    >
      <el-button
        v-if="multiple"
        :size="size"
        type="primary"
        class="el-icon-plus"
        plain
        @click="addParams"
      />
    </el-tooltip>

    <el-button
      :size="size"
      type="primary"
      icon="el-icon-search"
      plain
      @click="search"
    >搜索</el-button>

    <el-button
      :size="size"
      type="primary"
      icon="el-icon-refresh-right"
      plain
      @click="refreshParams"
    >重置</el-button>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'WangElSearch',
  components: {},
  props: {
    multiple: { // 是否多选
      type: Boolean,
      default: false
    },
    size: { // 表单的size属性
      type: String,
      default: 'small'
    },
    customStyle: { // 自定义样式，selectStyle-下拉框样式，inputStyle-输入框样式
      type: Object,
      default: (_) => {
        return {
          selectStyle: 'width: 150px;',
          inputStyle: 'width: 300px; margin-right: 10px;'
        }
      }
    },
    searchOptions: { // 下拉框选项
      type: Array,
      default: (_) => []
    },
    value: { // v-model绑定的搜索值，是一个数组，也是本组件主要操作的对象
      type: Array,
      default: (_) => []
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  created () { // 初始化时，当value没有值时，添加一个查询条件
    if (this.value.length === 0) {
      this.addParams()
    }
  },
  methods: {
    isSelect (key) { // 是否是一个下拉框
      let tag = false // 默认不是一个下拉框
      this.searchOptions.forEach(item => {
        if (item.value === key) tag = item.type === 'select'
      })
      return tag
    },
    getLabel (key) {
      let label = ''
      this.searchOptions.forEach(item => {
        if (item.value === key) label = item.label
      })
      return label
    },
    getSubOptions (key) {
      let options = []
      this.searchOptions.forEach(item => {
        if (item.value === key) options = item.options
      })
      return options
    },
    addParams () { // 添加一个查询条件，默认的下拉框选中第一个
      this.value.push({ key: this.searchOptions[0].value, value: '' })
    },
    minusParams () { // 删除最后的一个查询条件
      if (this.value.length <= 1) return
      this.value.pop()
    },
    refreshParams () { // 重置
      this.value.splice(0, this.value.length)
      this.addParams()
    },
    changeType (index) {
      this.value[index].value = ''
    },
    search () {
      const params = {}
      this.value.forEach(item => { // 去除空格，并构造params查询参数
        item.value = item.value.trim()
        if (item.value) params[item.key] = item.value
      })
      this.$emit('search', params)
    }
  }
}
</script>

<style>
</style>