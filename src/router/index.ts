import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => Home
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
