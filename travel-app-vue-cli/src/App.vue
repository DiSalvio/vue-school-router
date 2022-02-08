<script>
import TheNav from "@/components/TheNav.vue"
export default {
  components: {TheNav}
}
</script>
<template>
  <the-nav/>
  <div class="container">
    <router-view :key="$route.path"/>
  </div>
</template>

<style>
</style>
