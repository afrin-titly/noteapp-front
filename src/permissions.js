import router from './router/index'
import store from './store/modules/login'

router.beforeEach((to, from, next)=>{
    console.log(store.state.token)
    if(store.state.token){
        next()
    } else {
        if(to.name != "login") {
            next({name: "login"})
        } else {
            next()
        }
    }

})