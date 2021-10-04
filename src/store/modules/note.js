import axios from '../../plugins/axios_plugin'
import login from './login'
const note = {
    state: {
        notes: []
    },
    mutations: {
        allNotes: (state, payload) => {
            state.notes = payload
        }
    },
    actions: {
        fetchAllNotes({commit}) {
            console.log(login.state.token)
            return new Promise((resolve, reject)=>{
                axios.get("http://localhost:3000/notes",{
                    headers: {
                        'Authorization': "bearer "+login.state.token
                    }
                })
                .then(response=>{
                    resolve(response.data)
                    console.log(response)
                    commit('allNotes',response.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    },
    getters: {
        getAllNotes(state) {
            return state.notes
        }
    }
}

export default note