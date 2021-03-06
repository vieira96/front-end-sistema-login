import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/auth/Login'
import Register from '@/views/auth/Register'
import Edit from '@/views/auth/Edit'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{ path: '/edit', component: Edit }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
