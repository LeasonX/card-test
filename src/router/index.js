import Vue from 'vue'
import Router from 'vue-router'
// main.js or index.js
import InfiniteLoading from 'vue-infinite-loading'

Vue.use(Router)
Vue.use(InfiniteLoading, { /* 配置 */ })

export const globalRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/image',
    name: 'ImageWatermark',
    component: () => import('@/components/ImageWatermark')
  }
]

export default new Router({
  routes: globalRouterMap
})
