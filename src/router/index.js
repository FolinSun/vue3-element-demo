import { createRouter, createWebHistory } from 'vue-router';

// 默认父组件
import Layout from '../layouts/index.vue';

const basicRoutes = [
  // 重定向跳转
  {
    path: '/redirect',
    name: 'Redirect',
    component: Layout,
    meta: {
      title: 'Redirect',
      hideMenu: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('../views/Redirect/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hideMenu: true,
    },
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'Home',
        },
        component: () => import('../views/Home/index.vue'),
      },
    ],
  },

  // 错误页面重定向
  {
    path: '/:path(.*)*',
    name: 'ErrorPage',
    component: Layout,
    meta: {
      title: 'ErrorPage',
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        component: () => import('../views/Exception/exception.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  strict: true, // 末尾斜杠是否精确匹配
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
