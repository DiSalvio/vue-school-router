<template>
  <section v-if="destination" class="destination">
    <h2>{{destination.name}}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
    <section class="experiences">
      <h3>Top Experiences in {{destination.name}}</h3>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
        >
            <experience-preview
            :experience="experience"
            />
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
import sourceData from '@/data.json'
import ExperiencePreview from '@/components/ExperiencePreview.vue'
export default {
  components: {
    ExperiencePreview
  },
  props: {
    id: {type: Number, required: true}
  },
  computed: {
    destination() {
      return sourceData.destinations.find(d => d.id === this.id)
    }
  },
}
</script>
