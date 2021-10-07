import axios from '../../plugins/axios_plugin'
import login from './login'
const note = {
    namespaced: true,
    state: {
        notes: []
    },
    mutations: {
        allNotes: (state, payload) => {
            state.notes = payload
        },
        updateNotes: (state, payload) => {
            state.notes.push(payload)
        }
    },
    actions: {
        fetchAllNotes({commit}) {
            return new Promise((resolve, reject)=>{
                axios.get("http://localhost:3000/notes",{
                    headers: {
                        'Authorization': "bearer "+login.state.token
                    }
                })
                .then(response=>{
                    resolve(response.data)
                    commit('allNotes',response.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        createNote({commit}, payload) {
            const newNote = {message: payload.message, user_id: login.state.user.id}
            console.log(payload.message+" ------")
            // save the token in cookie
            return new Promise((resolve, reject)=>{
                axios.post("http://localhost:3000/notes",{
                    note: newNote
                }).then(response=>{
                    resolve(response)
                    commit('updateNotes', response.data)
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