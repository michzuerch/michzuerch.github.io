import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/backend',
      name: 'backend',
      component: () => import('./views/Backend.vue')
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: () => import('./views/Frontend.vue')
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('./views/Githubprojects.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('./views/Gallery.vue')
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('./views/Network.vue')
    },
    {
      path: '/internet',
      name: 'internet',
      component: () => import('./views/Internet.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./views/Support.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      component: () => import('./views/Tools.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/credits',
      name: 'credits',
      component: () => import('./views/Credits.vue')
    }

  ]
})
