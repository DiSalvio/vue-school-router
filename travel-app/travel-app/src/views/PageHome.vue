<template>
  <h1>All Destinations</h1>
  <div class="container">
    <router-link v-for="destination in destinations"
                 :key="destination.id"
                 :to="destination.slug"
      >
      <h2>{{destination.name}}</h2>
      <img :src="`images/${destination.image}`" :alt="destination.name">
    </router-link>
  </div>
</template>

<script>
import sourceData from "@/data.json"
export default {
  name: "PageHome",
  data () {
    return {
      destinations: sourceData.destinations
    }
  }
};
</script>
