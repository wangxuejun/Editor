<template>
  <div class="home-page">
    <div class="pannel">
      <div class="title">
        <h2>标签管理</h2>
        <a-button type="primary" size="large" @click="addTag()"
          >添加标签</a-button
        >
      </div>
      <div class="content tags-content">
        <div
          class="tag-item"
          v-for="(item, index) in tags"
          :key="index"
          :style="{ backgroundColor: item.color }"
        >
          {{ item.name }}
          <span class="editor" @click="addTag(item, index)">
            <i class="iconfont icon-editor"></i>
          </span>
          <span class="delete" @click="delTag(item, index)">
            <i class="iconfont icon-delete"></i>
          </span>
        </div>
      </div>
    </div>
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
            v-for="(item, index) in catalogue"
            :key="index"
            @dblclick="editorCatalogue(index)"
          >
            <span v-if="item.statue === 'close'">{{ item.name }}</span>
            <a-input
              @blur="confirmCatalogue(index)"
              v-if="item.statue === 'editor'"
              v-model:value="item.name"
            ></a-input>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddTag
    @handleOk="handleOk"
    :ref="
      el => {
        setRef(el, 'addTag')
      }
    "
  ></AddTag>
</template>
<script>
import { defineComponent, reactive, nextTick } from 'vue'
import AddTag from './components/AddTag'
import { Modal } from 'ant-design-vue'
export default defineComponent({
  name: 'Home',
  components: {
    AddTag
  },
  created() {},
  setup() {
    // ref Dom
    let myRef = reactive({})
    let setRef = (el, name) => {
      myRef[name] = el
    }
    // 标签列表
    let tags = reactive([
      { id: 1, name: 'http', color: '#ef5b9c' },
      { id: 2, name: 'h5', color: '#f47920' },
      { id: 3, name: 'vue', color: '#7fb80e' },
      { id: 4, name: 'typescript', color: '#494e8f' },
      { id: 5, name: 'node', color: '#45b97c' },
      { id: 6, name: 'webpack', color: '#00a6ac' },
      { id: 7, name: '算法', color: '#6c4c49' }
    ])
    // 添加标签
    let addTag = (item, index) => {
      myRef.addTag.open(item, index)
    }
    // 删除标签
    let delTag = (item, index) => {
      Modal.confirm({
        content: '确定删除标签【' + item.name + '】？',
        onOk() {
          tags.splice(index, 1)
        }
      })
    }
    // 确认添加标签或者修改标签
    let handleOk = (form, index) => {
      let item = JSON.parse(JSON.stringify(form))
      if (index >= 0) {
        tags.splice(index, 1, item)
      } else {
        tags.push(item)
      }
    }
    // 使当前目录获取焦点
    let getCurrentFocus = () => {
      nextTick().then(() => {
        myRef.catalogueList.getElementsByTagName('input')[0].focus()
      })
    }
    // 我的目录列表
    let catalogue = reactive([
      { name: 'http', statue: 'close' },
      { name: 'vue', statue: 'close' },
      { name: '网络协议', statue: 'close' }
    ])
    // 添加目录
    let addCatalogue = () => {
      catalogue.push({ name: '请编辑目录名', statue: 'editor' })
      getCurrentFocus()
    }
    // 修改目录名称
    let confirmCatalogue = index => {
      catalogue[index].statue = 'close'
    }
    let editorCatalogue = index => {
      catalogue[index].statue = 'editor'
      getCurrentFocus()
    }
    return {
      tags,
      addTag,
      delTag,
      setRef,
      handleOk,
      catalogue,
      addCatalogue,
      confirmCatalogue,
      editorCatalogue
    }
  }
})
</script>
<style scoped lang="scss">
.home-page {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.pannel {
  margin: 16px 16px 20px;
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
  .tags-content {
    display: flex;
    flex-wrap: wrap;
    .tag-item {
      text-align: center;
      min-width: 100px;
      color: white;
      border-radius: 4px;
      font-size: 16px;
      display: inline-block;
      padding: 5px 20px;
      margin: 0 30px 30px 0;
      box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      &:hover {
        .editor {
          transform: translateX(0);
        }
        .delete {
          transform: translateX(0);
        }
      }
      > span {
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.3s;
        i {
          transition: all 0.3s;
        }
        &:hover i {
          transform: scale(1.3);
        }
        &.editor {
          left: 0;
          transform: translateX(-100%);
        }
        &.delete {
          right: 0;
          transform: translateX(100%);
        }
      }
    }
  }
  .catalogue-content {
    .catalogue-list {
      padding: 20px 10px;
      background-color: rgb(240, 240, 240);
      .catalogue-item {
        display: flex;
        align-items: center;
        padding: 0 10px;
        height: 50px;
        box-shadow: rgb(0 0 0 / 20%) 0 1px 3px 0;
        background-color: white;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
