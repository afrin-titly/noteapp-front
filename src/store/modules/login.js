import axios from '../../plugins/axios_plugin'
import Cookie from "js-cookie"
const login = {
    state: {
        user: {},
        token: Cookie.get("token"),
        isLoggedIn: false,
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
            state.isLoggedIn = true
            Cookie.set("token", payload)
        },
        setUser: (state, payload) => {
            state.user = payload
        },
        removeToken: (state) => {
            state.token = ""
            state.isLoggedIn = false
        }
    },
    actions: {
        loginSubmit({commit}, payload) {
            return new Promise((resolve, reject) =>{
                axios.post('http://localhost:3000/login',{
                    username: payload.username,
                    password: payload.password
                }).then(response =>{
                    resolve(response.data)
                    commit('setToken',response.data.token)
                    commit('setUser', response.data.user)
                })
                .catch(error=>{
                    reject(error)
                })
            })
        },
        logoutSubmit({commit}) {
            commit('removeToken')
        },
        signupSubmit({commit}, payload) {
            const user = {  username: payload.username,
                            password: payload.password,
                            age: payload.age
                         }
            return new Promise((resolve, reject)=>{
                axios.post("http://localhost:3000/users",{
                    user: user
                }).then(response =>{
                    resolve(response.data)
                    commit('setToken',response.data.token)
                    console.log("signup")
                }).catch(error=>{
                    reject(error)
                    console.log(error)
                })
            })
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getUserInfo(state) {
            return state.user
        }
    }

}

export default login