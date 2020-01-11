const student = {
  path: "/",
  component: () => import("@/layouts/Index.vue"),
  children: [
    {
      path: "",
      component: () => import("@/pages/Home.vue")
    }
  ]
};

export default student;
