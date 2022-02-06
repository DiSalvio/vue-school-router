import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageBrazil from "../views/PageBrazil.vue"
import PagePanama from "../views/PagePanama.vue"
import PageHawaii from "../views/PageHawaii.vue"
import PageJamaica from "../views/PageJamaica.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/brazil",
    name:"Brazil",
    component: PageBrazil
  },
  {
    path:"/panama",
    name:"Panama",
    component: PagePanama
  },
  {
    path:"/hawaii",
    name:"Hawaii",
    component: PageHawaii
  },
  {
    path:"/Jamaica",
    name:"Jamaica",
    component: PageJamaica
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
