<template>
  <div id="app">
    <SideBarItem class="packages-nav" />
    <div class="packages-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBarItem from './components/SideBar/index.vue'
export default {
  name: 'SideBar',
  components: {
    SideBarItem
  }
}
</script>

<style lang="less">
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .packages-nav {
    position: absolute;
    width: 300px;
    left: 0;
    top: 0;
    bottom: 0;
    background: #304156;
    box-sizing: border-box;
    color: white;
  }
  .packages-view {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 0 0 300px;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
