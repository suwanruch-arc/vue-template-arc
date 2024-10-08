import { createWebHistory, createRouter } from "vue-router";

//layouts
import MainLayout from "@/layouts/MainLayout.vue";

import IndexPage from "@/pages/IndexPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { name: "", path: "", component: IndexPage },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(BASE),
  routes,
});

export default router;
