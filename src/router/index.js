import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from 'firebase/app'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'main', auth: true},
    component: Home,
  },
  {
    path: "/test",
    name: "TrainerPrint",
    meta: {layout: 'main', auth: true},
    component: () => import("../views/TrainerPrint.vue"), 
  },
  {
    path: '/complete',
    name: 'TestResult',
    props: true,
    meta: {layout: 'main'},
    component: () => import('../views/TestResult.vue')
  },
  {
    path: "/login",
    name: "Login",
    meta: {layout: 'empty'},
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/registr",
    name: "Registr",
    meta: {layout: 'empty'},
    component: () => import("../views/Registr.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);
  if (requireAuth && !currentUser) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router;
