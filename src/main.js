import { createApp } from 'vue'
import initRouter from '@/router'
import App from './App.vue'
import initAntd from '@/components/antd'

import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

import Prism from 'prismjs'

VueMarkdownEditor.use(vuepressTheme, {
  Prism
})

const app = createApp(App)
app.use(VueMarkdownEditor)
initAntd(app)
initRouter(app)
app.mount('#app')
