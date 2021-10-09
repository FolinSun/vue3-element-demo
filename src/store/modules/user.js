import { getUser } from '@/api/user';

const user = {
  namespaced: true,
  name: 'user',
  state: {
    userInfo: {},
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async GetUserInfo({ commit }) {
      const menuRes = await getUser();
      const data = _.get(menuRes, 'data');

      commit('SET_USER_INFO', data);
    },
  },
};

export default user;
