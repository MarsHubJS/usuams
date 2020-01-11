const student = {
  path: "/",
  component: () => import("@/layouts/Index.vue"),
  children: [
    {
      path: "",
      component: () => import("@/pages/Home.vue")
    },
    {
      path: "affairsmanagement",
      component: () => import("@/pages/affairs/AffairsManagement.vue")
    },
    {
      path: "meetingmanagement",
      component: () => import("@/pages/affairs/MeetingManagement.vue")
    },
    {
      path: "departmentmanagement",
      component: () => import("@/pages/affairs/DepartmentManagement.vue")
    },
    {
      path: "organizationconstruction",
      component: () => import("@/pages/affairs/OrganizationConstruction.vue")
    }
  ]
};

export default student;
