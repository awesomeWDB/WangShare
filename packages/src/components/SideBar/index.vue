<template>
  <div class="c">
    <SideBarItem
      v-for="(route, index) in routes.filter(item => item.path !== '/')"
      :key="index"
      :route="route"
    >{{route.name}}</SideBarItem>
  </div>
</template>

<script>
import { routes } from '@/router'
import SideBarItem from './sideBarItem.vue'
export default {
  name: 'SideBar',
  components: {
    SideBarItem
  },
  data () {
    return {
      routes
    }
  }
}
</script>

<style lang="less" scoped>
.sideBar{
  padding-top: 50px;
}
</style>