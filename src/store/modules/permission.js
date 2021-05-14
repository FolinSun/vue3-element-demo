import { getMenu } from '@/api/user';

const permission = {
  // namespaced: true,
  // name: 'permission',
  state: {
    menu: [],
  },
  mutations: {
    SET_MENU(state, payload) {
      state.menu = payload;
    },
  },
  actions: {
    async GetMenu({ commit }) {
      const menuRes = await getMenu();
      console.log(menuRes);
      commit('SET_MENU', _.get(menuRes, 'data'));
    },
  },
};

export default permission;
