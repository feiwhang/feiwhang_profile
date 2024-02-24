import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// make page reset scroll on refresh
// -> so the loading screen always shows on top
window.history.scrollRestoration = "manual";

export default router;
