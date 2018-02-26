import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cep from '@/pages/Cep'
import Posts from '@/pages/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cep',
      name: 'Cep',
      component: Cep
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
