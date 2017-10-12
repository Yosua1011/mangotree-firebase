import Vue from 'vue'
import Router from 'vue-router'
import Mango from '@/components/Mango'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mango',
      component: Mango
    }
  ]
})
