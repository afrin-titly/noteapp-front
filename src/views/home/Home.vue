<template>
  <div>
    <router-view></router-view>
    <Home />
    <Notes />
    <button @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
      Logout
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Notes from '../../components/Notes.vue'
import { mapActions } from 'vuex'
import router from '../../router/index'
export default {
  components: {
    Home,
    Notes
  },
  methods: {
    ...mapActions(["logoutSubmit"]),
    logout() {
      this.logoutSubmit()
      router.push({path: "/login"})
    }
  }
}
</script>
