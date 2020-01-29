import axios from "axios";
import config from "@/config";
import { notification } from "ant-design-vue";
import router from "@/router";

const Axios = axios.create({
  baseURL: config.baseurl,
  timeout: 5000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

//axios 请求 拦截器
Axios.interceptors.request.use(config => {
  let token = sessionStorage.getItem("Authorization")
    ? sessionStorage.getItem("Authorization")
    : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//axios 响应 拦截器
Axios.interceptors.response.use(
  res => {
    if (res.data) {
      return res.data;
    } else {
      notification.warning({
        message: "系统错误",
        description: `未正常返回内容!`
      });
    }
  },

  err => {
    console.log(err.response);
    if (err.response.status === 401) {
      notification.warning({
        message: "登录失效",
        description: "您的登录已经失效,请重新登录!"
      });
      sessionStorage.clear();
      router.push("/login");
    } else {
      notification.warning({
        message: "服务器错误",
        description: `服务器错误! ${err}`
      });
      // router.push("/500");
    }
    // 使错误传递到then中!
    return Promise.resolve(err);
    // return Promise.reject(err);
  }
);

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
