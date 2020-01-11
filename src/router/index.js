import Vue from "vue";
import VueRouter from "vue-router";
import student from "@/router/student";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [student]
});

export default router;
