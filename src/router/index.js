import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Experience from '../views/Experience'
import Skills from '../views/Skills'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  }, {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }, {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }, {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
