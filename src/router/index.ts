import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CVView from '../views/CVView.vue'
import StoryView from '../views/StoryView.vue'
import CodeView from '../views/CodeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cv',
      name: 'cv',
      component: CVView
    },
    {
      path: '/code',
      name: 'code',
      component: CodeView
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView
    }
  ]
})

export default router
