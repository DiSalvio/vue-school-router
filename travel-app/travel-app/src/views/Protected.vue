<template>
  <div>
    <h1>Hey, {{username}}</h1>
    <button @click="logout" class="btn">Log Out</button>
    <router-link :to="{name: 'invoices'}">
      <button class="btn">
        Invoices
      </button>
    </router-link>
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
