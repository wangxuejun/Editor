<template>
  <div class="admin-page">
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
import { defineComponent, reactive } from 'vue'
import AddTag from './components/AddTag'
import { Modal } from 'ant-design-vue'
import { apiLoginByOpenId } from '@/axios/api'
export default defineComponent({
  name: 'Home',
  components: {
    AddTag
  },
  created() {
    console.log(
      apiLoginByOpenId({
        url: 'http://192.168.1.105:8081/api/blog/getTagList'
      }).then(data => {
        console.log('data', data)
      })
    )
  },
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
    return {
      tags,
      addTag,
      delTag,
      setRef,
      handleOk
    }
  }
})
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
}
</style>
