import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/components/index')
        },
        {
          path: 'characters',
          name: 'characters',
          component: () => import('@/components/characters')
        },
        {
          path: 'episodes',
          name: 'episodes',
          component: () => import('@/components/episodes')
        }
      ]
    }
  ]
})
