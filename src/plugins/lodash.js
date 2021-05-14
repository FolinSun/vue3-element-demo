import { get } from 'lodash';

window._ = {
  get,
};

export default (app) => {
  app.config.globalProperties.$lodash = { get };
};
