import request from '@/utils/request';

export const getUser = (params) => {
  return request({
    url: '/user/test',
    method: 'get',
    params,
  });
};

export const getMenu = (params) => {
  return request({
    url: '/menu',
    method: 'get',
    params,
  });
};
