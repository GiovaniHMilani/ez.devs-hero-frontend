import Vue from 'vue'
import Router from 'vue-router'
import Lista from './components/Lista.vue'
import Personagem from './components/Personagem.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Lista',
      component: Lista
    },
    {
      path: '/personagem/:name',
      name: 'Personagem',
      component: Personagem,
      props: true
    }
    
  ]
})
