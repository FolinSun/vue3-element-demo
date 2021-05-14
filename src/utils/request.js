import axios from 'axios';
import { ElMessage } from 'element-plus';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, //  api 的 base_url,
  timeout: 0, // 请求超时时间(单位毫秒) 0表示不做限制
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (parseInt(response.data.code, 10) === 0) {
      return response.data;
    } else {
      console.log(`出错了`);
      const message = _.get(response, 'data.msg');
      ElMessage({
        message: message,
        type: 'error',
        duration: 2 * 1000,
      });
      return Promise.reject(new Error(response.data.msg));
    }
  },
  (error) => {
    // 对响应错误做点什么
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 2 * 1000,
    });
    return Promise.reject(error);
  }
);

export default instance;
