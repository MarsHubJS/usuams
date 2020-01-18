const admin = {
  path: "/",
  component: () => import("@/layouts/Index.vue"),
  children: [
    {
      path: "",
      component: () => import("@/pages/Home.vue"),
      meta: {
        title: "首页",
        key: "/"
      },
      name: "首页"
    },
    {
      path: "affairsmanagement",
      component: () => import("@/pages/affairs/AffairsManagement.vue"),
      meta: {
        title: "活动管理",
        subkey: "affair",
        key: "affairsmanagement"
      },
      name: "活动管理"
    },
    {
      path: "meetingmanagement",
      component: () => import("@/pages/affairs/MeetingManagement.vue"),
      meta: {
        title: "例会管理",
        subkey: "affair",
        key: "meetingmanagement"
      },
      name: "例会管理"
    }
  ]
};

export default admin;
