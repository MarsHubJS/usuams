// vue.config.js
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const path = require("path");

const options = {
  antDir: path.join(__dirname, "./node_modules/ant-design-vue"), //antd包位置
  stylesDir: path.join(__dirname, "./src/style/theme"), //主题文件所在文件夹
  varFile: path.join(__dirname, "./src/style/theme/variables.less"), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, "./src/style/theme/index.less"), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  outputFilePath: path.join(__dirname, "./public/color.less"), //提取的less文件输出到什么地方
  themeVariables: ["@primary-color", "@layout-header-background"], //要改变的主题变量
  indexFileName: "./public/index.html", // index.html所在位置
  generateOnce: false // 是否只生成一次（if you don't want to generate color.less on each chnage in code to make build process fast in development mode, assign it true value. But if you have new changes in your styles, you need to re-run your build process npm start.）
};

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#6584F2", // 全局主色
          // "link-color": "#1890ff", // 链接色
          // "success-color": "#52c41a", // 成功色
          // "warning-color": "#faad14", // 警告色
          // "error-color": "#f5222d", // 错误色
          // "font-size-base": "14px", // 主字号
          // "heading-color": "rgba(0, 0, 0, .85)", // 标题色
          // "text-color": "rgba(0, 0, 0, .65)", // 主文本色
          // "text-color-secondary": "rgba(0, 0, 0, .45)", // 次文本色
          // "disabled-color": "rgba(0, 0, 0, .25)", // 失效色
          // "border-radius-base": "5px", // 组件/浮层圆角
          // "border-color-base": "#d9d9d9", // 边框色
          // "box-shadow-base": "0 2px 8px rgba(0, 0, 0, .15)" // 浮层阴影
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [new AntDesignThemePlugin(options)]
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
