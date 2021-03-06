import router from './router/index'
import store from './store/modules/login'

router.beforeEach((to, from, next)=>{
    if(store.state.token){
        next()
    } else {
        if(to.name != "login" && to.name != "signup") {
            next({name: "login"})
        }
        else {
            next()
        }
    }

})