import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mails from '@/components/Mails'
import Outlook from '@/components/mail/Outlook'
import WebMail from '@/components/mail/WebMail'
import App from '@/components/mail/App'

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
          path: 'outlook',
          name: 'Outlook',
          component: Outlook
        },
        {
          path: 'webmail',
          name: 'WebMail',
          component: WebMail
        },
        {
          path: 'app',
          name: 'App',
          component: App
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  linkActiveClass: 'is-active'
})
