import axios from '../../plugins/axios_plugin'
const login = {
    state: {
        token: "",
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
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
        }
    }

}

export default login