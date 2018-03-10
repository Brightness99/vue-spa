import Vue from 'vue'
import Router from 'vue-router'
import BrowseJobsPage from '@/pages/BrowseJobsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: BrowseJobsPage
    }
  ]
})
