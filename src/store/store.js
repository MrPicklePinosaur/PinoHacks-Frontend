import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module'

Vue.use(Vuex)

/* store has been broken up into modules for future scalability */
export default new Vuex.Store({

  modules: {
    auth
  }

})
