<template>
  <div class="admin-root">
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo-box">
          <img src="../../../public/img/logo.png" alt="" />
        </div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item
            v-for="(item, index) in navs"
            :key="index"
            @click="jump(item)"
          >
            <span class="nav-text">{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2021 Created by wang xue jun
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Admimn',
  components: {},
  data() {
    return {}
  },
  created() {},
  setup() {
    const router = useRouter()
    const onCollapse = (collapsed, type) => {
      console.log(collapsed, type)
    }

    const onBreakpoint = broken => {
      console.log(broken)
    }

    const navs = reactive([
      {
        name: '编辑器',
        path: '/admin/home'
      },
      {
        name: '标签管理',
        path: '/admin/tag'
      },
      {
        name: '目录管理',
        path: '/admin/catalogue'
      },
      {
        name: '文章管理',
        path: '/admin/article'
      }
    ])

    let jump = item => {
      console.log(item)
      router.push({ path: item.path })
    }

    return {
      selectedKeys: ref(['4']),
      navs,
      jump,
      onCollapse,
      onBreakpoint
    }
  }
})
</script>
<style scoped lang="scss">
.admin-root {
  width: 100%;
  height: 100%;
}
.ant-layout {
  width: 100%;
  height: 100%;
}
.ant-layout-content {
  background-color: white;
  margin: 16px 16px 0;
}
.logo-box {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  img {
    height: 50px;
  }
}
</style>
