import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/aa'
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
		},
		/*{
			path: '/aa',
			name: 'aa',
			component: resolve => require(['@/components/aa.vue'], resolve),
		},
		{
			path: '/bb',
			name: 'bb',
			component: resolve => require(['@/components/bb.vue'], resolve),
		},*/
		{
			path:'/index2',
			name:'index2',
			component:resolve => require(['@/views/index2.vue'], resolve),
			children:[
				{
					path: '/aa',
					name: 'aa',
					component: resolve => require(['@/components/aa.vue'], resolve),
				},
				{
					path: '/bb',
					name: 'bb',
					component: resolve => require(['@/components/bb.vue'], resolve),
				}
			]
		}
	]
})