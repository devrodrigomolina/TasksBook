<template>
  <div class="container-dashboard">
    <Header />
    <transition :appear="true" mode="out-in" name="tasks-component">
    <div class="infos-tasks">
      <TopHeader/>
      <TasksInfos :infos="actualyPage" />
      <ActiveAndCompletedTasks :infos="actualyPage" />
    </div>
    </transition>
    <transition :appear="true" mode="out-in" name="charts-component">
    <div class="charts">
      <VueApexBarCharts :infos="actualyPage"/>
      <VueApexCircle :infos="actualyPage"/>
    </div>
    </transition>
    <Nuxt />
  </div>
</template>

<script>

export default {
  el: '#app',
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

/*  ANIMAÇÕES */
.tasks-component-enter,
.tasks-component-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.tasks-component-enter-active,
.tasks-component-leave-active {
  transition: all 1s;
}
.tasks-component-enter-to,
.tasks-component-leave {
  opacity: 1;
  transform: translateX(0);
}

.charts-component-enter,
.charts-component-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.charts-component-enter-active,
.charts-component-leave-active {
  transition: all 1s;
}
.charts-component-enter-to,
.charts-component-leave {
  opacity: 1;
  transform: translateX(0);
}

/* ELEMENTOS */
.container-dashboard {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.charts{
  width: 30vw;
  margin: 60px auto;
}

/* RESPONSIVIDADE */

@media (max-width: 1024px) {
.charts{
  width: 30vw;
  margin: 70px auto;
}
}

@media (max-width: 767.98px) { 
.container-dashboard {
  flex-direction: column;
}
.charts{
  width: 90%;
  margin: 20px auto;
}
}
</style>