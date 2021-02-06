<template>
  <div>
    <el-input v-model="value"></el-input>
    <el-button @click="setStore">设置storage</el-button>
    <el-button @click="getStore">读取storage</el-button>
    <el-button @click="removeStore">移除storage</el-button>
    <el-button @click="clearStore">清空storage</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '123'
    }
  },
  methods: {
    setStore () {
      const content = this.value
      WangUtils.setStore({ name: 'name1', content })
    },
    getStore () {
      const value = WangUtils.getStore({ name: 'name1' })
      alert(value)
    },
    removeStore () {
      WangUtils.removeStore({ name: 'name1' })
    },
    clearStore () {
      WangUtils.clearStore({})
    }
  }
}
</script>