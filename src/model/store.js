import Vue from 'vue'
import Vuex from 'vuex'

import app from './models/app'
import main from './models/main'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    main
  },
  getters
})
