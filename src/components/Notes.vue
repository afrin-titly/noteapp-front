<template>
    <h1>Create new Note</h1>
    <form @submit.prevent="createNoteForm">
        <label for="message"> Message </label>
        <input class="border py-2 px-3 text-grey-500"
        type="text" v-model="message">
        <button type="submit">Create Note </button>
    </form>
    <h1>All Notes</h1>
    <div v-if="getAllNotes">
        <table class="table-auto">
            <tr>
                <th> Message </th>
                <th colspan="2"> Action </th>
            </tr>
            <tbody>
                <tr class="bg-emerald-200" v-for="note in getAllNotes" :key="note.id">
                    <td> {{note.message}} </td>
                    <td><button @click="editNote(note)">Edit</button></td>
                    <td><button @click="deleteNote(note)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                message: ''
            }
        },
        mounted() {
            this.fetchAllNotes().then(()=>{
                // console.log(this.getUserInfo()+"------")
            })
        },
        computed: {
            ...mapGetters({
                getAllNotes: "note/getAllNotes",
            })
        },
        methods: {
            ...mapActions({
                fetchAllNotes: "note/fetchAllNotes",
                createNote: "note/createNote",
                deleteNoteSubmit: "note/deleteNoteSubmit"
            }),
            createNoteForm() {
                this.createNote({message: this.message})
            },
            editNote(note) {
                console.log(note)
            },
            deleteNote(note) {
                this.deleteNoteSubmit({note: note})
            }
        }
    }
</script>

<style scoped>

</style>