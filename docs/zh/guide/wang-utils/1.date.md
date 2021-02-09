# 日期处理相关函数

[[toc]]

## 日期格式化函数（formatDate）
::: demo 日期格式化使用的是`WangUtils.formatDate`方法
``` html {21,24,27,30}
<template>
  <div style="line-height: 30px;">{{dateFmt}}</div>
  <el-button @click="onFormat1">格式化1</el-button>
  <el-button @click="onFormat2">格式化2</el-button>
  <el-button @click="onFormat3">格式化3</el-button>
  <el-button @click="onFormat4">格式化4</el-button>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
      dateFmt: ''
    }
  },
  mounted(){
    this.dateFmt = this.date.toLocaleDateString()
  },
  methods:{
    onFormat1(){
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy/MM/dd')
    },
    onFormat2(){
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy-MM-dd')
    },
    onFormat3(){
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy-MM-dd hh:mm:ss')
    },
    onFormat4(){
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy年MM月dd日 hh:mm:ss')
    }
  }
}
</script>
```
:::

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| date | 需要格式化的时间 | string / date | — | — |
| format | 转换的格式 | string | — | — |

## 日期计算函数

### 日期偏移计算（translateDate）
::: demo 日期偏移计算使用的是`WangUtils.translateDate`方法
``` html {21}
<template>
  <div>
    <div style="line-height: 30px;">{{dateFmt}}</div>
    <el-button @click="translateDate(-1)">往前推一天</el-button>
    <el-button @click="translateDate(1)">往后推一天</el-button>
  </div>
</template>
<script>
const _date = new Date()
export default {
  data () {
    return {
      dateFmt: ''
    }
  },
  mounted(){
    this.dateFmt = WangUtils.formatDate(_date, 'yyyy-MM-dd hh:mm:ss')
  },
  methods: {
    translateDate (count) {
      this.dateFmt = WangUtils.formatDate(WangUtils.translateDate(_date, count), 'yyyy-MM-dd hh:mm:ss')
    },
  }
}
</script>
```
:::

### 其他（ToDo）