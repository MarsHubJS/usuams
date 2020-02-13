import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {
  Row,
  Col,
  Button,
  Menu,
  Layout,
  Icon,
  Collapse,
  Dropdown,
  Input,
  Select,
  message,
  Table,
  Popconfirm,
  DatePicker,
  Modal,
  Form,
  Cascader,
  Switch,
  TimePicker,
  Upload,
  Progress,
  LocaleProvider,
  Pagination,
  InputNumber,
  notification,
  Popover,
  Checkbox,
  Divider,
  Breadcrumb,
  Tag,
  Tree,
  Card,
  Statistic,
  Drawer
} from "ant-design-vue";

Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Collapse);
Vue.use(Dropdown);
Vue.use(Input);
Vue.use(Select);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(DatePicker);
Vue.use(Modal);
Vue.use(Form);
Vue.use(Cascader);
Vue.use(Switch);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(LocaleProvider);
Vue.use(Pagination);
Vue.use(InputNumber).use(Popover);
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Breadcrumb);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Card);
Vue.use(Statistic);
Vue.use(Drawer);
message.config({
  duration: 5
});
Vue.prototype.$notification = notification;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
Vue.config.productionTip = false;
import "ant-design-vue/dist/antd.less";
import "@/style/base.less";

//md5
import md5 from "js-md5";
Vue.prototype.$md5 = md5;

//moment
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn"); //需要汉化
Vue.prototype.moment = moment; //赋值使用

//图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3, //预加载的宽高比
  error: "./img/userimage.png", //图片加载失败时使用的图片源
  loading: "./img/loading.gif", //图片加载的路径
  attempt: 1 //尝试加载次数
});

// 全局axios
import qs from "qs";
import config from "@/config";
import Axios from "@/utils/Axios";
Vue.use(Axios);
Vue.prototype.$qs = qs;
Vue.prototype.baseurl = config.baseurl;

// 根据路由设置标题
import NProgress from "nprogress";
import "nprogress/nprogress.css";
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});

// 当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

NProgress.configure({
  // easing: 'ease', // 动画方式
  // speed: 500, // 递增进度条的速度
  showSpinner: false // 是否显示加载ico
  // trickleSpeed: 100, // 自动递增间隔
  // minimum: 0.3, // 初始化时的最小百分比
});

import admin from "@/router/admin";
import teacher from "@/router/teacher";
import presidium from "@/router/presidium";
import minister from "@/router/minister";
import secretary from "@/router/secretary";

// 实例化Vue
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch("changeColorTheme", this.$store.state.theme.color);
    let type = sessionStorage.getItem("type");
    if (type !== "") {
      switch (parseInt(type)) {
        case 1:
          this.$router.addRoutes(admin);
          break;
        case 2:
          this.$router.addRoutes(teacher);
          break;
        case 3:
          this.$router.addRoutes(presidium);
          break;
        case 4:
          this.$router.addRoutes(minister);
          break;
        case 5:
          this.$router.addRoutes(secretary);
          break;
      }
    } else {
      this.$router.addRoutes([
        {
          path: "*",
          redirect: "/login"
        }
      ]);
      this.$router.push("login");
    }
  }
}).$mount("#app");
