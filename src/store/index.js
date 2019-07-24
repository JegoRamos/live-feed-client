import Vue from 'vue'
import Vuex from 'vuex'

import subDashboard from './modules/sub-dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { subDashboard }
})
