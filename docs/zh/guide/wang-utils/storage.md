# storage方法

[[toc]]

## 设置storage（setStore）
::: demo
``` html
<template>
  <div>
    <el-input v-model="value"></el-input>
    <el-button @click="setStore">设置storage</el-button>
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
    }
  }
}
</script>
```
:::

## 读取单个storage（getStore）
::: demo
``` html
<template>
  <div>
    <el-button @click="getStore">读取storage</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    getStore () {
      const value = WangUtils.getStore({ name: 'name1' })
      alert(value)
    }
  }
}
</script>
```
:::

## 移除单个storage（removeStore）
::: demo
``` html
<template>
  <div>
    <el-button @click="removeStore">移除storage</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    removeStore () {
      WangUtils.removeStore({ name: 'name1' })
    }
  }
}
</script>
```
:::

## 清空storage（clearStore）
::: demo
``` html
<template>
  <div>
    <el-button @click="clearStore">清空storage</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    clearStore () {
      WangUtils.clearStore({})
    }
  }
}
</script>
```
:::

**方法说明**
| 函数      | 说明      | 参数          | 类型      | 可选值   | 默认值  |
|---------- |---------- |---------- |--------- |--------  |-------- |
| setStore | 设置storage | options | object | — | — |
| getStore | 获取某一个storage | options | object | — | — |
| removeStore | 移除某一个storage | options | object | — | — |
| clearStore | 清空storage | options | object | — | — |