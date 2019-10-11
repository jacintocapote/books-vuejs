import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book/:path',
      name: 'book-full',
      component: () => import("@/views/Book"),
      props: true,
    },
    {
      path: "*",
      name: 'not-found',
      component: () => import("@/views/PageNotFound")
    }
  ]
})
