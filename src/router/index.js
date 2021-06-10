import Vue from "vue";
import VueRouter from "vue-router";
import PageContainer from "../views/PageContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageContainer",
    component: PageContainer,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
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
    ]
  },
  {
    path: '/login',
    name: 'Login',
    props: true,
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    props: true,
    component: () => import('../views/Register.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
