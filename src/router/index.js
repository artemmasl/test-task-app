import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work-plan",
    name: "WorkPlan",
    component: () => import("../views/WorkPlan.vue"),
  },
  {
    path: "/test",
    name: "TrainerPrint",
    component: () => import("../views/TrainerPrint.vue"), 
  },
  {
    path: '/complete',
    name: 'TestResult',
    props: true,
    component: () => import('../views/TestResult.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
