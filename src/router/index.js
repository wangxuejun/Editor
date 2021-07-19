import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect() {
      return '/login'
    }
  },
  {
    // 登录页面
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/index')
  },
  {
    // 后台页面
    path: '/admin',
    name: 'Admin',
    component: () =>
      import(/* webpackChunkName: "Admin" */ '../pages/admin/index'),
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'AdminHome',
        component: () =>
          import(
            /* webpackChunkName: "AdminHome" */ '../pages/admin/home/index'
          )
      },
      {
        path: 'tag',
        name: 'AdminTag',
        component: () =>
          import(/* webpackChunkName: "AdminTag" */ '../pages/admin/tag/index')
      },
      {
        path: 'catalogue',
        name: 'AdminCatalogue',
        component: () =>
          import(
            /* webpackChunkName: "AdminCatalogue" */ '../pages/admin/catalogue/index'
          )
      },
      {
        path: 'article',
        name: 'AdminArticle',
        component: () =>
          import(
            /* webpackChunkName: "AdminArticle" */ '../pages/admin/article/index'
          )
      },
      {
        path: 'note',
        name: 'AdminNote',
        component: () =>
          import(
            /* webpackChunkName: "AdminNote" */ '../pages/admin/note/index'
          )
      },
      {
        path: 'git',
        name: 'AdminGit',
        component: () =>
          import(/* webpackChunkName: "AdminGit" */ '../pages/admin/git/index')
      }
    ]
  },
  //
  {
    // 后台页面
    path: '/front',
    name: 'Front',
    component: () =>
      import(/* webpackChunkName: "Front" */ '../pages/front/index'),
    redirect: '/admin/home',
    children: [
      {
        path: 'list',
        name: 'FrontList',
        component: () =>
          import(
            /* webpackChunkName: "FrontList" */ '../pages/front/list/index'
          )
      },
      {
        path: 'detail',
        name: 'FrontDetail',
        component: () =>
          import(
            /* webpackChunkName: "FrontDetail" */ '../pages/front/detail/index'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default function initRouter(app) {
  app.use(router)
}
