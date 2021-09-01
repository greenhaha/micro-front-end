
import Home from '@/components/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/components/list/index.vue')
  }
]

export default routes
