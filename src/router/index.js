import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeView from "@/views/HomeView";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
  ],
});

export default router;
