import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearTarea from '../views/CrearTarea.vue'
import ListarTarea from '../views/ListarTarea.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crearview',
    name: 'crear',
    component: CrearTarea
  },
  {
    path: '/ListarTarea',
    name: 'listar',
    component: ListarTarea
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
