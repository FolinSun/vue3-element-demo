import router from './router';
import store from './store';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // 免登录，直接进入
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   next();
  // }

  store.dispatch('GetMenu');
  next();
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
