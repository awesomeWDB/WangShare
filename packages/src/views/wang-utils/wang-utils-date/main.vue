<template>
  <div class="demo-container">
    <Demo1 />
    <Demo2 />
  </div>
</template>

<script>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
export default {
  name: 'Main',
  components: {
    Demo1,
    Demo2
  }
}
</script>

<style>
</style>