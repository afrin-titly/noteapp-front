<template>
    <div class="flex justify-center min-h-screen bg-gray-100">
  <div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
    <!-- header -->
    <div class="text-center my-6">
      <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
      <p class="text-gray-500">Sign in to access your account</p>
    </div>
    <!-- sign-in -->
    <div class="m-6">
      <form class="mb-4" @submit.prevent="loginFormSubmit">
        <div class="mb-6">
          <label for="username" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">User Name</label>
          <input type="text" v-model="username" name="email" id="email" placeholder="Your user name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <div class="flex justify-between mb-2">
            <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
          </div>
          <input type="password" v-model="password" name="password" id="password" placeholder="Your password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
    import router from '../router/index'
    import {mapActions} from "vuex"
    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        computed: {

        },
        methods: {
            ...mapActions(["loginSubmit"]),

            loginFormSubmit() {
              this.loginSubmit({username: this.username, password: this.password}).then(()=>{
                router.push({path: "/"})
              })
            }
        }
    }
</script>

<style scoped>

</style>