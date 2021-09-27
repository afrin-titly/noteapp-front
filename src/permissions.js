import router from './router/index'

router.beforeEach((to, from, next)=>{
    if(to.name != "login" || to.name == 'home') {
        next({name: "login"})
    } else {
        next()
    }
})