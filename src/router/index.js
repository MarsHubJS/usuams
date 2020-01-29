import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Login.vue"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/login",
      component: () => import("@/layouts/Login.vue"),
      meta: {
        title: "登录"
      }
    },
    {
      path: "/sign",
      component: () => import("@/layouts/Sign.vue"),
      meta: {
        title: "加入学生会"
      }
    }
  ]
});

export default router;
