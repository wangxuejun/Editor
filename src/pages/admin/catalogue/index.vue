<template>
  <div class="admin-page">
    <div class="pannel">
      <div class="title">
        <h2>目录管理</h2>
        <a-button type="primary" size="large" @click="addCatalogue()"
          >新建目录</a-button
        >
      </div>
      <div class="content catalogue-content">
        <div
          class="catalogue-list"
          :ref="
            el => {
              setRef(el, 'catalogueList')
            }
          "
        >
          <div
            class="catalogue-item"
            :class="{ 'item-level2': item.level === 2 }"
            v-for="(item, index) in list"
            :key="index"
            @dblclick="editorCatalogue(index)"
          >
            <span v-if="item.statue === 'close'">{{ item.name }}</span>
            <a-input
              @blur="confirmCatalogue(index)"
              @keydown.enter="getCurrentBlur"
              v-if="item.statue === 'editor'"
              v-model:value="item.name"
            ></a-input>
            <i class="flex1"></i>
            <i
              class="iconfont icon-add-folder"
              @click="addTwoCatalogue(item, index)"
              v-if="item.level !== 2"
            ></i>
            <i class="iconfont icon-delete" @click="deltCatalogue(item)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, reactive, computed } from 'vue'
import { Modal } from 'ant-design-vue'

export default {
  name: 'Note',
  components: {},
  data() {
    return {}
  },
  created() {},
  setup() {
    // ref Dom
    let myRef = reactive({})
    let setRef = (el, name) => {
      myRef[name] = el
    }
    // 使当前目录获取焦点
    let getCurrentFocus = () => {
      nextTick().then(() => {
        myRef.catalogueList.getElementsByTagName('input')[0].focus()
      })
    }
    // 使当前目录失去焦点
    let getCurrentBlur = () => {
      nextTick().then(() => {
        myRef.catalogueList.getElementsByTagName('input')[0].blur()
      })
    }
    // 我的目录列表
    let catalogue = reactive([
      { id: 1, name: 'http', statue: 'close' },
      { id: 2, name: 'vue', statue: 'close' },
      { id: 3, name: '网络协议', statue: 'close' }
    ])
    let list = computed(() => {
      let arr = []
      catalogue.forEach(item => {
        arr.push(item)
        if (item.child && item.child.length > 0) {
          item.child.forEach(child => {
            arr.push(child)
          })
        }
      })
      return arr
    })
    // 添加目录
    let addCatalogue = () => {
      // 测试id
      let id = catalogue.length + 1
      catalogue.push({ id, name: '请编辑目录名', statue: 'editor' })
      getCurrentFocus()
    }
    // 添加二级目录
    let addTwoCatalogue = item => {
      if (!item.child) {
        item.child = []
      }
      // 测试id
      let id = item.id + '-' + (item.child.length + 1)
      item.child.push({ id, name: '请编辑目录名', statue: 'editor', level: 2 })
      getCurrentFocus()
    }
    // 修改目录名称
    let confirmCatalogue = index => {
      console.log('confirmCatalogue')
      catalogue[index].statue = 'close'
    }
    // 编辑目录
    let editorCatalogue = index => {
      catalogue[index].statue = 'editor'
      getCurrentFocus()
    }
    // 删除目录
    let deltCatalogue = item => {
      Modal.confirm({
        content: '确定删除目录【' + item.name + '】？',
        onOk() {
          console.log(item.id)
          for (let i = 0; i < catalogue.length; i++) {
            if (catalogue[i].id === item.id) {
              catalogue.splice(i, 1)
              break
            } else {
              let isChild = false
              if (catalogue[i].child) {
                for (let j = 0; j < catalogue[i].child.length; j++) {
                  if (catalogue[i].child[j].id === item.id) {
                    catalogue[i].child.splice(j, 1)
                    isChild = true
                    break
                  }
                }
              }
              if (isChild) break
            }
          }
        }
      })
    }
    return {
      list,
      setRef,
      addCatalogue,
      addTwoCatalogue,
      confirmCatalogue,
      editorCatalogue,
      getCurrentBlur,
      deltCatalogue
    }
  }
}
</script>
<style scoped lang="scss">
.admin-page {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.pannel {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 4px;
  .title {
    padding: 18px 20px;
    border-bottom: 1px solid #e6ebf5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-bottom: 0;
    }
  }
  .content {
    padding: 18px 20px;
  }
  .catalogue-content {
    .catalogue-list {
      padding: 20px 10px;
      background-color: rgb(240, 240, 240);
      .catalogue-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        height: 50px;
        box-shadow: rgb(0 0 0 / 20%) 0 1px 3px 0;
        background-color: white;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        &.item-level2 {
          margin-left: 20px;
        }
        .iconfont {
          margin-left: 20px;
          cursor: pointer;
        }
        .flex1 {
          flex: 1;
          margin-right: 40px;
        }
      }
    }
  }
}
</style>
