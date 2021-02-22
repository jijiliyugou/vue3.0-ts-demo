import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const Home = () => import("@/views/Home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
