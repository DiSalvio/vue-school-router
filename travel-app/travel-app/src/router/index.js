import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'
import PageBrazil from '@/views/PageBrazil.vue'
import PagePanama from '@/views/PagePanama.vue'
import PageHawaii from '@/views/PageHawaii.vue'
import PageJamaica from '@/views/PageJamaica.vue'

const routes = [
    { path: '/', name: 'PageHome', component: PageHome },
    { path: '/brazil', name: 'PageBrazil', component: PageBrazil },
    { path: '/panama', name: 'PagePanama', component: PagePanama },
    { path: '/hawaii', name: 'PageHawaii', component: PageHawaii },
    { path: '/jamaica', name: 'PageJamaica', component: PageJamaica }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
