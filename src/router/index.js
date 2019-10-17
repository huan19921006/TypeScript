import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: One
    }
  ]
})
