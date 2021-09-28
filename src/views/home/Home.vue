<template>
  <div>
    <router-view></router-view>
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  components: {
    Home
  }
}
</script>
