<template>

<div class="flex justify-center items-center h-screen w-full bg-gray-100">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1>
        <form @submit.prevent="signupForm">
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">Username</label>
                <input class="border py-2 px-3 text-grey-800" v-model="username" type="text" name="first_name" id="first_name">
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
                <input class="border py-2 px-3 text-grey-800" v-model="password" type="password" name="password" id="password">
            </div>
            <div class="flex flex-col mb-4">
                <label class="mb-2 font-bold text-lg text-gray-900" for="age">Age</label>
                <input class="border py-2 px-3 text-grey-800" v-model="age" type="number" name="age" id="age">
            </div>
            <button class="block bg-blue-500 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        <router-link class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" :to="{name: 'login'}">Already have an account?</router-link>
    </div>
</div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import router from '../router/index'
    export default {
        data() {
            return {
                username: '',
                password: '',
                age: '',
            }
        },
        computed: {
            ...mapGetters(["getToken"])
        },
        methods: {
            ...mapActions(["signupSubmit"]),
            signupForm() {
                this.signupSubmit({
                    username: this.username,
                    password: this.password,
                    age: this.age
                    }).then(()=>{
                        if(this.getToken) {
                            router.push({path: "/"})
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>