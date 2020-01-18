// vue.config.js
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "primary-color": "#6584F2", // 全局主色
          "link-color": "#1890ff", // 链接色
          "success-color": "#52c41a", // 成功色
          "warning-color": "#faad14", // 警告色
          "error-color": "#f5222d", // 错误色
          "font-size-base": "14px", // 主字号
          "heading-color": "rgba(0, 0, 0, .85)", // 标题色
          "text-color": "rgba(0, 0, 0, .65)", // 主文本色
          "text-color-secondary": "rgba(0, 0, 0, .45)", // 次文本色
          "disabled-color": "rgba(0, 0, 0, .25)", // 失效色
          "border-radius-base": "5px", // 组件/浮层圆角
          "border-color-base": "#d9d9d9", // 边框色
          "box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)" // 浮层阴影
        },
        javascriptEnabled: true
      }
    }
  }
  // lintOnSave: true,
  // productionSourceMap: false,
  // configureWebpack: {
  //   plugins: [
  //     new CompressionPlugin({
  //       // gzip压缩配置
  //       test: /\.js$|\.html$|\.css/, // 匹配文件名
  //       threshold: 10240, // 对超过10kb的数据进行压缩
  //       deleteOriginalAssets: false // 是否删除原文件
  //     })
  //   ]
  // },
  // chainWebpack: config => {
  //   config
  //     // 非开发环境
  //     .when(process.env.NODE_ENV !== "development", () => {
  //       config.optimization.minimizer([
  //         new UglifyJsPlugin({
  //           uglifyOptions: {
  //             // 移除 console
  //             // 其它优化选项 https://segmentfault.com/a/1190000010874406
  //             compress: {
  //               drop_console: true,
  //               drop_debugger: true,
  //               pure_funcs: ["console.log"]
  //             }
  //           }
  //         })
  //       ]);
  //     });
  // }
};
