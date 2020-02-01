const presidium = [
  {
    path: "/home",
    component: () => import("@/layouts/Presidium.vue"),
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
        path: "/usermanagement",
        component: () => import("@/pages/user/Pre/PreUserManagement.vue"),
        meta: {
          subname: "人员管理",
          name: "用户管理",
          subkey: "user",
          key: "usermanagement",
          title: "用户管理"
        }
      },
      {
        path: "/outsidestaff",
        component: () => import("@/pages/user/OutsideStaff.vue"),
        meta: {
          subname: "人员管理",
          name: "会外人员",
          subkey: "user",
          key: "outsidestaff",
          title: "会外人员"
        }
      },
      {
        path: "/departmentmanagement",
        component: () => import("@/pages/department/DepartmentManagement.vue"),
        meta: {
          subname: "组织管理",
          name: "部门管理",
          subkey: "department",
          key: "departmentmanagement",
          title: "部门管理"
        }
      }
    ]
  }
];

export default presidium;
