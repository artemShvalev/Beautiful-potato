import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '../views/AllTasks'
import CreateTasks from '../views/CreateTasks'

import NotFoundPage from '../views/NotFoundPage'

const routes = [
  { path: '/', component: AllTasks},
  { path: '/create', component: CreateTasks },
  { path: '/task/:id',name: 'Task',props: true,
    component: () => import('../components/editCard.vue')
  },
  
  {path: '/:pathMatch(.*)*', component: NotFoundPage}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
