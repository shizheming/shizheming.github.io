import Vue from 'vue'
import Router from 'vue-router'
import fn from '@/components/fn'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fn',
      component: fn
    }
  ]
})
