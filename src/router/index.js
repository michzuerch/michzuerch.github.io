import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/views/About'
import Backend from '@/views/Backend'
import Contact from '@/views/Contact'
import Credits from '@/views/Credits'
import Frontend from '@/views/Frontend'
import Gallery from '@/views/Gallery'
import Githubprojects from '@/views/Githubprojects'
import Internet from '@/views/Internet'
import Network from '@/views/Network'
import Support from '@/views/Support'
import Tools from '@/views/Tools'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/backend',
    name: 'Backend',
    component: Backend
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits
  },
  {
    path: '/frontend',
    name: 'Frontend',
    component: Frontend
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/githubprojects',
    name: 'Githubprojects',
    component: Githubprojects
  },
  {
    path: '/internet',
    name: 'Internet',
    component: Internet
  },
  {
    path: '/network',
    name: 'Network',
    component: Network
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }
]

const router = new VueRouter({
  routes
})

export default router
