import { useRouter } from 'vue-router';
import { unref } from 'vue';

/**
 * statusMapRef 参数说明
  interface statusMapRef {
    title: string;
    subTitle: string;
    btnText?: string;
    icon?: string;
    handler?: Fn;
    status?: string;
  }
*/

export const exception = {
  redo: '刷新',
  back: '返回',
  backLogin: '返回登录',
  backHome: '返回首页',
  subTitle403: '抱歉，您无权访问此页面。',
  subTitle404: '抱歉，您访问的页面不存在。',
  subTitle500: '抱歉，服务器报告错误。',
  networkErrorTitle: '网络错误',
  networkErrorSubTitle: '抱歉，您的网络连接已断开，请检查您的网络！',
  noDataTitle: '当前页无数据',
};

/**
 * @description: Exception related enumeration
 */
export const ExceptionEnum = {
  // 页面无法访问
  PAGE_NOT_ACCESS: 403,
  // 找不到网页
  PAGE_NOT_FOUND: 404,
  // error
  ERROR: 500,
  // 网络错误
  NET_WORK_ERROR: 10000,
  // 页面上没有数据。 实际上，它也不是例外页面
  PAGE_NOT_DATA: 10100,
};

export const isString = (val) => {
  return toString.call(val) === `[object String]`;
};

export const handleError = (e) => {
  console.error(e);
};

export const useGo = (_router) => {
  let router;
  if (!_router) {
    router = useRouter();
  }

  const { push, replace } = _router || router;
  const go = (opt = '/home', isReplace = false) => {
    if (!opt) return;

    if (isString(opt)) {
      isReplace
        ? replace(opt).catch(handleError)
        : push(opt).catch(handleError);
    } else {
      isReplace
        ? replace(opt).catch(handleError)
        : push(opt).catch(handleError);
    }
  };

  return go;
};

/**
 * @description: 重置当前页面
 */
export const useRedo = (_router) => {
  let router;
  if (!_router) {
    router = useRouter();
  }

  const { push, currentRoute } = _router || router;
  const { query, params } = currentRoute.value;
  const redo = () => {
    return new Promise((resolve) => {
      push({
        path: '/redirect' + unref(currentRoute).fullPath,
        query,
        params,
      }).then(() => resolve(true));
    });
  };

  return redo;
};
