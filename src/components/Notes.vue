<template>
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

            }
        },
        mounted() {
            this.fetchAllNotes().then((response)=>{
                console.log("vallagena.."+response)
            })
        },
        computed: {
            ...mapGetters({
                getAllNotes: "getAllNotes"
            })
        },
        methods: {
            ...mapActions({
                fetchAllNotes: "fetchAllNotes"
            })
        }
    }
</script>

<style scoped>

</style>