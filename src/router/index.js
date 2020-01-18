import Vue from "vue";
import VueRouter from "vue-router";
import admin from "@/router/admin";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [admin]
});

export default router;
