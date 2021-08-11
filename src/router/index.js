import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import RoomDetails from '../components/RoomDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chambres/details',
    name: 'RoomDetails',
    component: RoomDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
