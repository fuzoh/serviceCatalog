import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mails from '@/components/Mails'
import Network from '@/components/Network'
import Outlook from '@/components/mail/Outlook'
import WebMail from '@/components/mail/WebMail'
import App from '@/components/mail/App'
import SharedFolders from '@/components/network/SharedFolders'
import Datacpnv from '@/components/network/Datacpnv'
import Smb from '@/components/network/Smb'

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
      path: '/network',
      name: 'Network',
      component: Network,
      children: [
        {
          path: 'sharedfolders',
          name: 'SharedFolders',
          component: SharedFolders
        },
        {
          path: 'datacpnv',
          name: 'Datacpnv',
          component: Datacpnv
        },
        {
          path: 'smb',
          name: 'Smb',
          component: Smb
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
