import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../pages/Todos.vue"),
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
