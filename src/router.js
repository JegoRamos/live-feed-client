import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SubDashboard from './components/SubDashboard'
import PubDashboard from './components/PubDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '', name: 'sub-dashboard', component: SubDashboard },
        { path: '/pub', name: 'pub-dashboard', component: PubDashboard }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
