import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/auth/Login'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
