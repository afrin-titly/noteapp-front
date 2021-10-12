
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
            if(payload.m == "create") {
                state.notes.push(payload)
            } else if(payload.m == "delete"){
                state.notes.splice(payload.p, 1)
            } else if(payload.m == "edit") {
                var index = state.notes.map(item => item.id).indexOf(payload.p.id)
                state.notes[index] = payload.p
            }
        }
    },
    actions: {
        fetchAllNotes({commit}) {
            return new Promise((resolve, reject)=>{
                axios.get("http://localhost:3000/notes")
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
        },
        editNoteSubmit({commit}, payload) {
            return new Promise((resolve, reject) => {
                axios.patch("http://localhost:3000/notes/"+payload.note.id,{
                    note: payload.note
                })
                .then(response=>{
                    resolve(response)
                    commit('updateNotes', {p: response.data, m: "edit"})
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