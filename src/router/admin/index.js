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
          name: "首页",
          title: "首页"
        }
      },
      {
        path: "/affairsmanagement",
        component: () => import("@/pages/affairs/AffairsManagement.vue"),
        meta: {
          subname: "事务管理",
          name: "活动管理",
          subkey: "affair",
          key: "affairsmanagement",
          title: "活动管理"
        }
      },
      {
        path: "/meetingmanagement",
        component: () => import("@/pages/affairs/MeetingManagement.vue"),
        meta: {
          subname: "事务管理",
          name: "例会管理",
          subkey: "affair",
          key: "meetingmanagement",
          title: "例会管理"
        }
      },
      {
        path: "/departmentmanagement",
        component: () => import("@/pages/user/DepartmentManagement.vue"),
        meta: {
          subname: "用户管理",
          name: "部门管理",
          subkey: "user",
          key: "departmentmanagement",
          title: "部门管理"
        }
      },
      {
        path: "/departmentrecruitment",
        component: () => import("@/pages/user/DepartmentRecruitment.vue"),
        meta: {
          subname: "用户管理",
          name: "部门招新",
          subkey: "user",
          key: "departmentrecruitment",
          title: "部门招新"
        }
      }
    ]
  }
];

export default admin;
