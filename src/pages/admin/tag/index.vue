<template>
  <div class="home-page">
    <div class="pannel">
      <div class="title">
        <h2>标签管理</h2>
      </div>
      <div class="content">content</div>
    </div>
    <div class="pannel">
      <div class="title">
        <h2>目录管理</h2>
      </div>
      <div class="content">content</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
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
.pannel {
  margin: 16px 16px 20px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  .title {
    padding: 18px 20px;
    border-bottom: 1px solid #e6ebf5;
    h2 {
      margin-bottom: 0;
    }
  }
  .content {
    padding: 18px 20px;
  }
}
</style>
