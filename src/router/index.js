import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const globalRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  }
]

export default new Router({
  routes: globalRouterMap
})
