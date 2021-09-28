import { createStore } from 'vuex'
import login from './modules/login.js'

const store = createStore({
    modules: {
      login,
    }
  })

export default store