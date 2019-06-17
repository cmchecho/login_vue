import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Aplication from './components/Aplication.vue';
import Logout from './components/Logout.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				requiresVisitor: true,
			}
		},
		{
			path: '/aplication',
			name: 'aplication',
			component: Aplication,
			meta: {
				requiresAuth: true,
			}
		},
		{
			path: '/logout',
			name: 'logout',
			component: Logout
		}
	]
})

