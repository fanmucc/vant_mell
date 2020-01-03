import layout from '@/components/Layout'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: '_home',
    component: layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/goods')
      }
    ]
  },
  {
    path: '/classification',
    name: '_home',
    component: layout,
    children: [
      {
        path: '/classification',
        name: 'classification',
        component: () => import('@/views/Classification')
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    component: layout,
    children: [
      {
        path: '/news',
        name: 'news',
        component: () => import('@/views/News')
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    component: layout,
    children: [
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart')
      }
    ]
  },
  {
    path: '/',
    name: '_home',
    component: layout,
    children: [
      {
        path: '/personal',
        name: 'personal',
        component: () => import('@/views/Personal')
      }
    ]
  }
]

export default routes
