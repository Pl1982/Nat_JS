import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MassageView from '../views/MassageView.vue'
import PriseDeRendezVousView from '../views/PriseDeRendezVousView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/massage',
      name: 'massage',
      component: MassageView,
    },
    
    {
    path: '/rendezvous',
    name:'rendezvous',
    component: PriseDeRendezVousView, 
}
   
  ]
})

export default router
