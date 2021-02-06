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
      date: _date
    }
  },
  computed: {
    dateFmt () {
      return WangUtils.formatDate(this.date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
    translateDate (count) {
      this.date = WangUtils.translateDate(_date, count)
    },
  }
}
</script>