import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/input/style/css'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/menu/style/css'
import 'ant-design-vue/lib/modal/style/css'
import 'ant-design-vue/lib/message/style/css'

import {
  Button,
  Input,
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  Menu,
  MenuItem,
  Modal,
  message
} from 'ant-design-vue'

export default function initAntd(app) {
  app.component(Button.name, Button)
  app.component(Input.name, Input)
  app.component(Layout.name, Layout)
  app.component(LayoutSider.name, LayoutSider)
  app.component(LayoutHeader.name, LayoutHeader)
  app.component(LayoutContent.name, LayoutContent)
  app.component(LayoutFooter.name, LayoutFooter)
  app.component(Menu.name, Menu)
  app.component(MenuItem.name, MenuItem)
  app.component(Modal.name, Modal)
  app.component(message.name, message)
}
