<<<<<<< HEAD
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
import globalState from './global'
import portfolioState from './portfolio'
import databaseState from './database'

Vue.use(Vuex)
Vue.use(Faker)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    teamState,
    globalState,
    portfolioState,
    databaseState
  },
  strict: process.env.DEV,
})
=======
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
import globalState from './global'
import portfolioState from './portfolio'
import databaseState from './database'

Vue.use(Vuex)
Vue.use(Faker)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    teamState,
    globalState,
    portfolioState,
    databaseState
  },
  strict: process.env.DEV,
})
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
