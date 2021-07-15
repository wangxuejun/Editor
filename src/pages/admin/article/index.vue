<template>
  <div class="admin-page">
    <div class="catalogue-list">
      <div class="catalogue-head">目录</div>
      <div
        class="catalogue-item"
        v-for="(item, index) in catalogue"
        :key="index"
        :class="{ active: item.active }"
        @click="toggle(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="article-list"></div>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    let catalogue = reactive([
      { name: 'http', active: true },
      { name: 'vue', active: false },
      { name: '算法', active: false }
    ])
    let toggle = index => {
      catalogue.forEach((item, i) => {
        item.active = index === i
      })
    }
    return {
      catalogue,
      toggle
    }
  }
})
</script>
<style scoped lang="scss">
.admin-page {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
}
.catalogue-list {
  width: 200px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  > div {
    padding: 10px 0 10px 20px;
  }
  .catalogue-head {
    border-bottom: 1px solid #e8e8e8;
    font-size: 20px;
  }
  .catalogue-item {
    cursor: pointer;
    transition: all 0.3s;
    &.active {
      background-color: #90d7ec;
      color: white;
      /*box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;*/
    }
    &:hover {
    }
  }
}
.article-list {
  margin-left: 10px;
  flex: 1;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
}
</style>
