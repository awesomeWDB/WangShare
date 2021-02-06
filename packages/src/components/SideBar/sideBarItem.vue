<template>
  <div>
    <div
      class="sideBar-item"
      :class="['sideBar-item', {isActive: $route.path === route.path}]"
      :style="`padding-left: ${level*20}px;`"
      @click="go"
    >
      <slot></slot>
    </div>
    <div
      v-if="route.children"
      class="sideBar-item"
    >
      <SideBarItem
        v-for="(childRoute, index) in route.children"
        :key="index"
        :route="childRoute"
        :level="level+1"
      >{{childRoute.name}}</SideBarItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarItem',
  props: {
    route: {
      type: Object,
      default: _ => ({})
    },
    level: {
      type: Number,
      default: 1
    }
  },
  methods: {
    go () {
      if (this.route.children) return // 如果有子节点，则不跳转
      this.$router.push({ path: this.route.path })
    }
  }
}
</script>

<style scoped lang="less">
.sideBar-item {
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  &.isActive {
    background: #1f2d3d;
  }
}
</style>