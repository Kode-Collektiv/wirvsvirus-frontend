import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import GastroDetailPage from '../components/GastroDetailPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/participants/:id',
        name: 'participants',
        component: GastroDetailPage,
        props: true
    }
]

const router = new VueRouter({
    routes
})

export default router
