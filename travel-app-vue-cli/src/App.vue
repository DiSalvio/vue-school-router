<script>
import TheNav from "@/components/TheNav.vue"
export default {
  components: {TheNav}
}
</script>
<template>
  <the-nav/>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
</style>
