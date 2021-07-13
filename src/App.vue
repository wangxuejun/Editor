<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      a: 1,
      b: 'a1'
    }
  },
  created() {},
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
