import router from './router/index'

router.beforeEach((to, from, next)=>{
    if(to.name != "login") {
        next({name: "login"})
    } else {
        next()
    }
})