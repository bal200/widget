import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import CompList from '../components/CompList.vue'
import Comp from '../components/Comp.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/complist',
    name: 'CompList',
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
]

const router = new VueRouter({
  routes
})

export default router
