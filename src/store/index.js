import { createStore } from 'vuex';

import permission from './modules/permission';
import user from './modules/user';

export default createStore({
  modules: {
    permission,
    user,
  },
});
