import axios from '../../plugins/axios_plugin'
const login = {
    state: {
        token: "",
        isLoggedIn: false,
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
            state.isLoggedIn = true
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
                    console.log(response.data.token)
                })
                .catch(error=>{
                    reject(error)
                })
            })
        },
        logoutSubmit({commit}) {
            commit('removeToken')
        }
    }

}

export default login