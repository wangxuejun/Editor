<template>
  <div class="editor-component">
    <v-md-editor v-model="text" @save="save"></v-md-editor>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  data() {
    return {
      text: ''
    }
  },
  created() {},
  setup() {
    let save = e => {
      console.log(e)
    }
    return {
      save
    }
  }
})
</script>
<style scoped lang="scss">
.editor-component {
  width: 100%;
  height: 100%;
}
.v-md-editor {
  width: 100%;
  height: 100%;
}
</style>
