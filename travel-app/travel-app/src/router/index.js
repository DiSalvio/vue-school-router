import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/PageHome.vue'

const routes = [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: ()=>import('@/views/DestinationShow.vue'),
      props: route => ({id: parseInt(route.params.id)}) 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
