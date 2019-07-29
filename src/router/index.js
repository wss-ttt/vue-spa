import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path:'/',
		redirect:'/home'
	},
	{
		path: '/',
		name: 'index',
		component: resolve => require(['@/views/index.vue'], resolve),
		children: [{
				path: '/home',
				name: 'home',
				component: resolve => require(['@/components/home.vue'], resolve),
			},
			{
				path: '/blog',
				name: 'blog',
				component: resolve => require(['@/components/blog.vue'], resolve),
			},
			{
				path: '/news',
				name: 'news',
				component: resolve => require(['@/components/news.vue'], resolve),
			},
			{
				path: '/photo',
				name: 'photo',
				component: resolve => require(['@/components/photo.vue'], resolve),
			},
		]
	}]
})