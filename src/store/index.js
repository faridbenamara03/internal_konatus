import Vue from 'vue'
import Vuex from 'vuex'
import Faker from 'vue-faker'
import "vue-toastification/dist/index.css"
// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import teamState from './team'
import orgnizationState from './orgnization'
import globalState from './global'

Vue.use(Vuex)
Vue.use(Faker)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    teamState,
    orgnizationState,
    globalState,
  },
  strict: process.env.DEV,
})
