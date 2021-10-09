import { get, cloneDeep } from 'lodash';

window._ = {
  get,
  cloneDeep,
};

export default (app) => {
  app.config.globalProperties.$lodash = { get, cloneDeep };
};
