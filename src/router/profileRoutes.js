import Profile from "../views/Profile.vue";
import ProfileNew from "../views/ProfileNew.vue";

const ProfileRoutes = [
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/profile/new",
    name: "ProfileNew",
    component: ProfileNew,
  },
];

export default ProfileRoutes;
