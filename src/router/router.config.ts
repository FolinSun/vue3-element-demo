/**
 * Meta 参数定义说明
 */
interface RouteMeta {
  // 标题，一般必填，用于菜单、浏览器title或者面包屑中展示的文字
  title: string;
  // 图标，也是菜单图标
  icon?: string;
  // 隐藏该路由在面包屑上面的显示
  hideBreadcrumb?: boolean;
  // 当前路由不再菜单显示
  hideMenu?: boolean;
  // 隐藏所有子菜单
  hideChildrenInMenu?: boolean;
  // 当前路由不再标签页显示
  hideTab?: boolean;
  // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
  currentActiveMenu?: string;
  // 是否需要鉴权
  requiresAuth?: boolean;
  // 是否固定标签
  affix?: boolean;
}

/**
 * 单条路由记录
 */
// const AppRouteRecordRaw: RouteRecordRaw = {
//   path: '路由地址',
//   name: '路由名',
//   component: '路由对应的组件',
//   alias: '可选,string|string[],路由别名',
//   redirect: '可选,重定向地址',
//   children: '可选,子路由数组',
//   meta: '可选,元字段-参数',
//   props: '可选,开启动态路由传值',
//   beforeEnter: '可选,进入该路由前执行什么操作'
// }
