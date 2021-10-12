import { createStore } from 'vuex'
import login from './modules/login.js'
import note from './modules/note'

const store = createStore({
    modules: {
      login,
      note,
    }
  })

export default store