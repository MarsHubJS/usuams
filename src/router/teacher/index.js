const teacher = [
  {
    path: "/home",
    component: () => import("@/layouts/Teacher.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/pages/Home.vue"),
        meta: {
          key: "",
          name: "首页",
          title: "首页"
        }
      },
      {
        path: "/affairsmanagement",
        component: () => import("@/pages/affairs/Tea/TeaAffairsManagement.vue"),
        meta: {
          subname: "事务管理",
          name: "活动管理",
          subkey: "affair",
          key: "affairsmanagement",
          title: "活动管理"
        }
      },
      // {
      //   path: "/meetingmanagement",
      //   component: () => import("@/pages/affairs/MeetingManagement.vue"),
      //   meta: {
      //     subname: "事务管理",
      //     name: "例会管理",
      //     subkey: "affair",
      //     key: "meetingmanagement",
      //     title: "例会管理"
      //   }
      // },
      {
        path: "/usermanagement",
        component: () => import("@/pages/user/Tea/TeaUserManagement.vue"),
        meta: {
          subname: "人员管理",
          name: "用户管理",
          subkey: "user",
          key: "usermanagement",
          title: "用户管理"
        }
      }
    ]
  }
];

export default teacher;
