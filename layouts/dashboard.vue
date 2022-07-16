<template>
  <div class="container-dashboard">
    <Header />
    <div class="infos-tasks">
      <TasksInfos :infos="actualyPage" />
      <ActiveAndCompletedTasks :infos="actualyPage" />
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualyPage: null,
    }
  },
  created() {  
    if(this.$route.path == "/") {
      this.actualyPage = this.$store.state.dashboard
    } else if (this.$route.path == "/family") {        
      this.actualyPage = this.$store.state.family
    } else if (this.$route.path == "/work") {
      this.actualyPage = this.$store.state.work
    } else if (this.$route.path == "/sports") {
      this.actualyPage = this.$store.state.sports
    }
  },
  watch: {
    '$route': {
      deep: true,
      handler(newValue) {
        if(newValue.path == "/") {
          this.actualyPage = this.$store.state.dashboard
        } else if (newValue.path == "/family") {      
          this.actualyPage = this.$store.state.family
        } else if (newValue.path == "/work") {
          this.actualyPage = this.$store.state.work
        } else if (newValue.path == "/sports") {
          this.actualyPage = this.$store.state.sports
        }
      }
    },

  },
}
</script>

<style>
.container-dashboard {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>