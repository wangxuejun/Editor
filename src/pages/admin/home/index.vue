<template>
  <div class="home-page">
    <Editor></Editor>
  </div>
</template>
<script>
import Editor from './components/Editor'
export default {
  name: 'Home',
  components: {
    Editor
    // Top: () => import(/* webpackChunkName: "Top" */ './components/top'),
  },
  data() {
    return {
      value: ''
    }
  },
  created() {},
  setup() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
}
</style>
