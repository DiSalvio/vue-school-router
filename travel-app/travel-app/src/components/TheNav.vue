<template>
  <div id="nav">
    <AppLink id="logo" to="/"><img class="home-logo" src="/src/assets/logo.png" alt="Home"></AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
    >
      {{destination.name}}
    </AppLink>
    <AppLink :to="{name: 'protected'}">Protected</AppLink>
    <AppLink to="https://vueschool.io">Vue School</AppLink>
  </div>
</template>

<script>
import sourceData from "@/data.json"
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>
  
<style>
.home-logo {
  width: 22px;
  height: 22px;
}
</style>
