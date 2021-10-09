import { createRouter, createWebHistory } from 'vue-router';

// 默认父组件
import Layout from '../layouts/index.vue';

export const basicRoutes = [
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
      requiresAuth: true,
    },
    component: () => import('../views/Login/index.vue'),
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'Home',
  //       meta: {
  //         title: '综合看板',
  //         icon: 'Home',
  //       },
  //       component: () => import('../views/Home/index.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/task',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Task',
  //       meta: {
  //         title: '工作任务',
  //       },
  //       component: () => import('../views/Task/index.vue'),
  //     },
  //     {
  //       path: 'detail',
  //       name: 'taskDetail',
  //       meta: {
  //         title: '工作任务-详情页',
  //       },
  //       component: () => import('../views/Task/detail.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/educationTraining',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'EducationTraining',
  //       meta: {
  //         title: '教育培训',
  //       },
  //       component: () => import('../views/EducationTraining/index.vue'),
  //     },
  //     {
  //       path: 'staffFile',
  //       name: 'staffFile',
  //       meta: {
  //         title: '员工档案',
  //       },
  //       component: () => import('../views/EducationTraining/staffFile.vue'),
  //     },
  //   ],
  // },
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
