import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../views/Products.vue";
import ProductSingle from "@/views/ProductSingle.vue";
import Favourite from "../../src/views/Favourite.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        layout: "defoult",
      },
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      meta: {
        layout: "defoult",
      },
      component: Products,
    },
    {
      path: "/products/:id",
      name: "about",
      meta: {
        layout: "defoult",
      },
      component: ProductSingle,
    },
    {
      path: "/favourite",
      name: "Favourite",
      meta: {
        layout: "empty",
      },
      component: Favourite,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      meta: {
        layout: "empty",
      },
      component: () => import("../../src/views/404/index.vue"),
    },
  ],
});

export default router;
