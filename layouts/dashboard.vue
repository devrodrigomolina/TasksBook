<template>
  <div class="container-dashboard">
    <Header />
    <div class="infos-tasks">
      <TasksInfos/>
      <ActiveAndCompletedTasks/>
    </div>
    <Nuxt />
  </div>
</template>

<script>

export default {

}
</script>

<style>
.container-dashboard {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>