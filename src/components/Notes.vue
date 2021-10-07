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
        <ul>
            <li v-for="note in getAllNotes" :key="note.id" >{{note.message}}</li>
        </ul>
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
                createNote: "note/createNote"
            }),
            createNoteForm() {
                this.createNote({message: this.message})
            }
        }
    }
</script>

<style scoped>

</style>