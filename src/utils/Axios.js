import axios from "axios";

import qs from "qs";

// import router from "./router";

import config from "@/config";

// import { notification } from "ant-design-vue";

const Axios = axios.create({
  baseURL: config.baseurl,

  responseType: "json",

  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//axios 请求 拦截器

Axios.interceptors.request.use(config => {
  //如果有token,就给token

  let token = localStorage.logininfo
    ? JSON.parse(localStorage.logininfo).additional
    : null;

  if (token) {
    // 判断token是否存在

    config.headers.token = token; // 将token设置成请求头
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";

    return config;
  } else if (["post", "put", "patch"].includes(config.method)) {
    // 序列化

    config.data = qs.stringify(config.data);
  }

  return config;
});

//axios 响应 拦截器

Axios.interceptors.response.use(
  res => {
    // if (res.data.code === "error_unauth") {

    //   notification.warning({

    //     message: "登录失效",

    //     description: "您的登录已经失效,请重新登录!"

    //   });

    //   localStorage.clear();

    //   router.push("/login");

    // } else if (res.data) {

    if (res.data) {
      return res.data;
    } else {
      // notification.warning({
      //   message: "系统错误",
      //   description: `没有返回内容! `
      // });
    }
  },

  err => {
    // console.log(err);

    // notification.warning({

    //   message: "系统错误",

    //   description: `系统错误! ${err}`

    // });

    // router.push("/500");

    //使错误传递到then中!

    return Promise.resolve(err);

    // return Promise.reject(err);
  }
);

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
