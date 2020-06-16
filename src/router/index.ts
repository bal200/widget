import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CompList from '../views/CompList.vue'
import Comp from '../views/Comp.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'CompList',
    component: CompList
  },
  {
    path: '/complist',
    name: 'CompList2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: CompList,
  },
  {
    path: '/comp/:id',
    name: 'Comp',
    component: Comp,
  },
  {
    path: '/enter/:id',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log("afterEach")
  next()

})

export default router
