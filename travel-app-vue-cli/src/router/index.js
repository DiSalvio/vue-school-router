import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/brazil",
    name:"Brazil",
    component: () => import(/* webpackChunkName: 'brazil' */"../views/PageBrazil.vue")
  },
  {
    path:"/panama",
    name:"Panama",
    component: () => import(/* webpackChunkName: 'panama' */"../views/PagePanama.vue")
  },
  {
    path:"/hawaii",
    name:"Hawaii",
    component: () => import(/* webpackChunkName: 'hawaii' */"../views/PageHawaii.vue")
  },
  {
    path:"/Jamaica",
    name:"Jamaica",
    component: () => import(/* webpackChunkName: 'jamaica' */"../views/PageJamaica.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
