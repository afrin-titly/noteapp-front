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
        // fixme: after delete main list doesn't update without refresh
        updateNotes: (state, payload) => {
            if(payload.m == "create") {
                state.notes.push(payload)
            } else if(payload.m == "delete"){
                state.note.splice(payload.p, 1)
            }

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
            return new Promise((resolve, reject)=>{
                axios.post("http://localhost:3000/notes",{
                    note: newNote
                }).then(response=>{
                    resolve(response)
                    commit('updateNotes', {p: response.data, m: "create"})
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        deleteNoteSubmit({commit}, payload) {
            return new Promise((resolve, reject) =>{
                axios.delete("http://localhost:3000/notes/"+payload.note.id)
                .then(response=>{
                    resolve(response)
                    commit('updateNotes', {p: response.data, m: "delete"})
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