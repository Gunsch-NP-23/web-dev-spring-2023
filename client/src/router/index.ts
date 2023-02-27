import { createRouter, createWebHistory } from 'vue-router'
// Hacky fix not sure why it would default to escape characters being broken! Weird!
import HomeView from `C:\\Users\\DELL\\Desktop\\CPS493\\Github_Repos\\web-dev-spring-2023\\client\\src\\views\\HomeView.vue`

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('..\\views\\AboutView.vue')
    }
  ]
})

export default router
