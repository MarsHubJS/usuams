const admin = [
  {
    path: "/home",
    component: () => import("@/layouts/Index.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/pages/Home.vue"),
        meta: {
          key: "",
          name: "首页"
        }
      },
      {
        path: "/affairsmanagement",
        component: () => import("@/pages/affairs/AffairsManagement.vue"),
        meta: {
          subname: "事务管理",
          name: "活动管理",
          subkey: "affair",
          key: "affairsmanagement"
        }
      },
      {
        path: "/meetingmanagement",
        component: () => import("@/pages/affairs/MeetingManagement.vue"),
        meta: {
          subname: "事务管理",
          name: "例会管理",
          subkey: "affair",
          key: "meetingmanagement"
        }
      }
    ]
  }
];

export default admin;
