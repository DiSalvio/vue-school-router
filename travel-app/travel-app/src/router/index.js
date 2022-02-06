import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import PageAbout from '@/views/PageAbout.vue'

const routes = [
    { path: '/', name: 'PageHome', component: PageHome },
    { path: '/about', name: 'PageAbout', component: PageAbout }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
