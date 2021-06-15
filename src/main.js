import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


import ejercicio1 from './components/ejercicio1.vue';
import ejercicio2 from './components/ejercicio2.vue';
import ejercicio3 from './components/ejercicio3.vue';
import ejercicio4 from './components/ejercicio4.vue';
import ejercicio5 from './components/ejercicio5.vue';
import ejercicio6 from './components/ejercicio6.vue';
import ejercicio7 from './components/ejercicio7.vue';
import ejercicio8 from './components/ejercicio8.vue';
import ejercicio9 from './components/ejercicio9.vue';
import ejercicio10 from './components/ejercicio10.vue';

import home from './components/home.vue';

Vue.use(VueRouter);


Vue.config.productionTip = false;

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/ejercicio1',
			name: 'ejercicio1',
			component: ejercicio1
		},
		{
			path: '/ejercicio2',
			name: 'ejercicio2',
			component: ejercicio2
		},
		{
			path: '/ejercicio3',
			name: 'ejercicio3',
			component: ejercicio3
		},
		{
			path: '/ejercicio4',
			name: 'ejercicio4',
			component: ejercicio4
		},
		{
			path: '/ejercicio5',
			name: 'ejercicio5',
			component: ejercicio5
		},
		{
			path: '/ejercicio6',
			name: 'ejercicio6',
			component: ejercicio6
		},
		{
			path: '/ejercicio7',
			name: 'ejercicio7',
			component: ejercicio7
		},
		{
			path: '/ejercicio8',
			name: 'ejercicio8',
			component: ejercicio8
		},
		{
			path: '/ejercicio9',
			name: 'ejercicio9',
			component: ejercicio9
		},
		{
			path: '/ejercicio10',
			name: 'ejercicio10',
			component: ejercicio10
		},
	]
});

new Vue({
  router,
	render: (h) => h(App)
}).$mount('#app');


