<template>
  <a-modal
    v-model:visible="visible"
    title="标签编辑"
    @ok="handleOk"
    cancelText="取消"
    okText="确认"
  >
    <div class="line">
      <p>标签名</p>
      <a-input v-model:value="form.name"></a-input>
    </div>
    <div class="line">
      <p>标签颜色</p>
      <a-input v-model:value="form.color"></a-input>
    </div>
  </a-modal>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
export default defineComponent({
  setup(prop, context) {
    let visible = ref(false)
    let type = 'add'
    let currentIndex = 0
    let form = reactive({
      name: '',
      color: ''
    })
    let open = (item, index) => {
      if (item) {
        form.name = item.name
        form.color = item.color
        type = 'editor'
        currentIndex = index
      } else {
        form.name = ''
        form.color = ''
        type = 'add'
      }
      visible.value = true
    }
    let handleOk = () => {
      if (form.name === '' || form.color === '') {
        message.error('字段不能为空')
        return
      }
      visible.value = false
      if (type === 'add') {
        context.emit('handleOk', form)
      } else {
        context.emit('handleOk', form, currentIndex)
      }
    }
    return {
      visible,
      form,
      handleOk,
      open
    }
  }
})
</script>
<style lang="scss" scoped>
.line {
  margin-bottom: 30px;
}
</style>
