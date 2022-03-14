<template>
  <div>
    <div class="home">
    </div>
    <h1>All Destinations</h1>
    <div class="destinations">
      <AppLink
          v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
      <h2>{{destination.name}}</h2>
      <img :src="`images/${destination.image}`" :alt="destination.name">
      </AppLink>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json"
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      destinations: sourceData.destinations
    }
  }
};
</script>
