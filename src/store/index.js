import Vue from 'vue'
import Vuex from 'vuex'
import "vue-toastification/dist/index.css"
// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import teamState from './team-state'
import projectState from './project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    teamState,
    projectState,
  },
  strict: process.env.DEV,
})
