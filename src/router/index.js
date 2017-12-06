import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Mails from '@/components/Mails'
import Network from '@/components/Network'
import Printers from '@/components/Printers'
import Authentication from '@/components/Authentication'
import Web from '@/components/Web'

import Outlook from '@/components/mail/Outlook'
import WebMail from '@/components/mail/WebMail'
import App from '@/components/mail/App'

import SharedFolders from '@/components/network/SharedFolders'
import Datacpnv from '@/components/network/Datacpnv'
import Smb from '@/components/network/Smb'

import Drivers from '@/components/printers/Drivers'
import Add from '@/components/printers/Add'

import Password from '@/components/authentication/Password'

import Intranet from '@/components/web/Intranet'
import WebAccess from '@/components/web/WebAccess'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/serviceCatalog',
      name: 'Home',
      component: Home
    },
    {
      path: '/serviceCatalog/mails',
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
      path: '/serviceCatalog/network',
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
      path: '/serviceCatalog/printers',
      name: 'Printers',
      component: Printers,
      children: [
        {
          path: 'drivers',
          name: 'Drivers',
          component: Drivers
        },
        {
          path: 'add',
          name: 'Add',
          component: Add
        }
      ]
    },
    {
      path: '/serviceCatalog/authentication',
      name: 'Authentication',
      component: Authentication,
      children: [
        {
          path: 'password',
          name: 'Password',
          component: Password
        }
      ]
    },
    {
      path: '/serviceCatalog/web',
      name: 'Web',
      component: Web,
      children: [
        {
          path: 'intranet',
          name: 'Intranet',
          component: Intranet
        },
        {
          path: 'webaccess',
          name: 'WebAccess',
          component: WebAccess
        }
      ]
    },
    {
      path: '*',
      redirect: '/serviceCatalog'
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
