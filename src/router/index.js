import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mails from '@/components/Mails'
import Exchange from '@/components/Exchange'
import Tutu from '@/components/Tutu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mails',
      name: 'Mails',
      component: Mails,
      children: [
        {
          path: 'exchange',
          name: 'Exchange',
          component: Exchange
        },
        {
          path: 'tutu',
          name: 'Tutu',
          component: Tutu
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
