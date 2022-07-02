<template>
  <div class="container-dashboard">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    Header
  }
}
</script>

<style>
.container-dashboard {
  display: flex;
}
</style>