import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      components: {
        login:login
      }
    }
  ]
})
