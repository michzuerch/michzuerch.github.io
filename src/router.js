import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import('./views/About.vue')
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
