// import { basicRoutes } from '@/router';
import { getMenu } from '@/api/user';
import { isExternal } from '@/utils/validate';

// 默认父组件
import Layout from '@/layouts/index.vue';
import mapConfig from '@/utils/mapConfig';

const generateTemplate = (menu, isChildren) => {
  return {
    path: isChildren ? menu.path : '',
    name: menu.key,
    meta: {
      title: menu.name,
      requiresAuth: menu.requiresAuth ?? false,
    },
    component: mapConfig[menu.key],
  };
};

const GenerateRoutes = (allMenu, _tempRoutes, isChildren) => {
  let result = [];

  allMenu.forEach((menu) => {
    // 外部链接不做任何处理
    if (isExternal(menu.path)) {
      return;
    }

    // 生成路由
    let tempRoutes = _tempRoutes ?? {};

    if (!isChildren) {
      tempRoutes = {
        path: `/${menu.path}`,
        component: Layout,
        children: [_.cloneDeep(generateTemplate(menu))],
      };
    } else {
      // 如果是子级菜单
      tempRoutes.children.push(_.cloneDeep(generateTemplate(menu, isChildren)));
    }

    // 首页进行单独处理
    if (menu.key === 'home') {
      tempRoutes.path = '/';
      tempRoutes.redirect = `/${menu.path}`;
      tempRoutes.children[0].path = `${menu.path}`;
    }

    // 如果当前有子级菜单
    if (menu.children) {
      GenerateRoutes(menu.children, tempRoutes, true);
    }

    result.push(tempRoutes);
  });

  // console.log(result);
  return result;
};

const permission = {
  namespaced: true,
  name: 'permission',
  state: {
    menu: [],
    routes: [],
    asyncRoutes: [],
  },
  mutations: {
    SET_MENU(state, payload) {
      state.menu = payload;
    },
    SET_ROUTES: (state, payload) => {
      state.asyncRoutes = payload;
      //state.routes = basicRoutes.concat(payload);
    },
  },
  actions: {
    async GetMenu({ commit }) {
      const menuRes = await getMenu();
      const data = _.get(menuRes, 'data');
      commit('SET_MENU', data);
    },
    generateRoutes({ commit, state }) {
      return new Promise((resolve) => {
        const allMenu = state.menu.reduce((acc, cur) => {
          acc = acc.concat(cur.menus);
          return acc;
        }, []);
        let accessedRoutes = GenerateRoutes(allMenu);
        commit('SET_ROUTES', accessedRoutes);
        resolve(accessedRoutes);
      });
    },
  },
};

export default permission;
