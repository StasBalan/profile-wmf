const ProfileRoutes = [
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/profile/new",
      name: "ProfileNew",
      component: () => import("../views/ProfileNew.vue"),
    },
];

export default ProfileRoutes;