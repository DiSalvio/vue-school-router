import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'

const routes = [
    { path: '/', name: 'PageHome', component: PageHome },
    { path: '/brazil', name: 'PageBrazil', component: ()=>import('@/views/PageBrazil.vue')},
    { path: '/panama', name: 'PagePanama', component: ()=>import('@/views/PagePanama.vue')},
    { path: '/hawaii', name: 'PageHawaii', component: ()=>import('@/views/PageHawaii.vue')},
    { path: '/jamaica', name: 'PageJamaica', component: ()=>import('@/views/PageJamaica.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
