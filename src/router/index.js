import Vue from "vue";
import VueRouter from "vue-router";
import admin from "@/router/admin";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Login.vue")
    },
    {
      path: "/login",
      component: () => import("@/layouts/Login.vue")
    }
    // {
    //   path: "400",
    //   component: () => import("@/error/400.vue")
    // },
    // {
    //   path: "500",
    //   component: () => import("@/error/500.vue")
    // }
  ]
});

router.beforeEach((to, from, next) => {
  let path = to.path;
  let lastpath = getLastUrl(window.location.href, "/");
  console.log(path, lastpath);
  if (path === lastpath && path !== "/") {
    let type = sessionStorage.getItem("type");
    switch (type) {
      case "1":
        router.addRoutes(admin);
        break;
      default:
        break;
    }
    next();
  } else {
    next();
  }
  // const yz = sessionStorage.yz ? sessionStorage.yz : null;
  // if (to.path !== "/login" && !yz) {
  //   next("/login");
  // } else {
  //   next();
  // }
});

var getLastUrl = (str, yourStr) => str.slice(str.lastIndexOf(yourStr));

export default router;
