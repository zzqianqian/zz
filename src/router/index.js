import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import print from '@/components/print.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: resolve=>(['@/components/HelloWorld'],resolve)
	  component:HelloWorld
    },
	{
	  path: '/print',
	  name: 'print',
	  // component: resolve=>(['@/components/print'],resolve)
	  component:print
	},
// 	{
// 	  path: '/print',
// 	  name: 'print',
// 	  component: print
// 	},
  ]
})
