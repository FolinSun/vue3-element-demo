import router from './router';
import store from './store';

import { ElMessage } from 'element-plus';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // 免登录，直接进入
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    next();
  } else {
    // 登录鉴权
    // if (getToken()) {
    //   // 已登录
    // } else {
    //   // 未登录
    // }

    // 是否已获取用户信息
    if (Object.values(store.state.user.userInfo).length === 0) {
      try {
        // 获取用户信息
        await store.dispatch('user/GetUserInfo');
        // 获取菜单
        await store.dispatch('permission/GetMenu');
        // 生成异步路由
        const accessRoutes = await store.dispatch('permission/generateRoutes');

        accessRoutes.forEach((route) => {
          router.addRoute(route);
        });

        next({ ...to, replace: true });
      } catch (error) {
        // 出错了
        ElMessage.error(error || 'Has Error');
        // 跳到登录页去
        next(`/login?redirect=${to.path}`);
        NProgress.done();
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
