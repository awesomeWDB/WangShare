<template>
  <div>
    <div style="line-height: 30px;">{{dateFmt}}</div>
    <el-button @click="onFormat1">格式化1</el-button>
    <el-button @click="onFormat2">格式化2</el-button>
    <el-button @click="onFormat3">格式化3</el-button>
    <el-button @click="onFormat4">格式化4</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: new Date(),
      dateFmt: ''
    }
  },
  created () {
    this.dateFmt = this.date.toLocaleDateString()
  },
  methods: {
    onFormat1 () {
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy/MM/dd')
    },
    onFormat2 () {
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy-MM-dd')
    },
    onFormat3 () {
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy-MM-dd hh:mm:ss')
    },
    onFormat4 () {
      this.dateFmt = WangUtils.formatDate(this.date, 'yyyy年MM月dd日 hh:mm:ss')
    }
  }
}
</script>