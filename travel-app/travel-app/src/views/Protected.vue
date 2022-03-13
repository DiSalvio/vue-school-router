<template>
  <div>
    <h1>Hey, {{username}}</h1>
    <button @click="logout" class="btn">Log Out</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.user
    }
  },
  methods: {
    logout(){
      window.user = null
      this.$router.push({name: "PageHome"})
    }
  }
}
</script>
