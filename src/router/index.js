import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/index.vue'
import List from '@/components/List/list.vue'
import Car from '@/components/Car/car.vue'
import My from '@/components/My/my.vue'


Vue.use(Router)

export default new Router({
  routes: [
				    {
						path: '/',
						name: 'index',
						component: Index
				    },
						{
							path: '/list',
							name: 'list',
							component: List
						},
						{
							path: '/car',
							name: 'car',
							component: Car
						},{
							path: '/my',
							name: 'my',
							component: My
						}
	  	]
})	
