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
        path: '/home',
        name: 'home',
        component: () => import('@/views/goods')
      }
    ]
  }
]

export default routes
