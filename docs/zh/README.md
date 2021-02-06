# Hello VuePress

<van-button>测试van</van-button>

<el-button type="success">按钮</el-button>

::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <div class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Input something..."/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
```
:::

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

::: demo Card 组件包括`header`和`body`部分，header部分需要有显式具名 slot 分发，同时也是可选的。
```html {12-14}
<template>
  <van-button @click="onClick">默认按钮</van-button>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods:{
    onClick(){
      console.log(++this.count)
    }
  }
}
</script>
```
:::

::: tip STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法
包含标题，内容和操作。

::: demo Card 组件包括`header`和`body`部分，header部分需要有显式具名 slot 分发，同时也是可选的。
```html {2,4,6-7}
<template>
  <div class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <button style="float: right; padding: 3px 0" type="text">操作按钮</button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </div>
</template>
<style>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
</style>
```
:::