<template>
  <div class="container-tasks-active-complete">
    <div class="tarefas-ativas">
      <h2 class="titulo">Tarefas Ativas</h2>
      <ul class="task-itens" v-for="(tasks, index) in this.$store.state.taskAdd" :key="index">
        <TasksActiveds :task="tasks" :pos="index" />
      </ul>
    </div>

    <div class="tarefas-completas">
      <h2 class="titulo">Tarefas Completas</h2>
      <ul class="tasks-completas" v-for="(tasksCompleteds, index) in this.$store.state.tasksCompleteds" :key="index">
        <TasksCompleted :taskCompleted="tasksCompleteds"/>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  },

}
</script>

<style scoped>

.container-tasks-active-complete {
  width: 700px;
  height: 450px;
  background: #2C3440;
  color: white;
  margin-left: 135px;
  margin-top: 40px;
  border-radius: 10px;
}
.titulo {
  padding: 20px 20px;
  color: #29A19C;
}
.task-itens,
.tasks-completas {
  width: 600px;
  height: 50px;
  margin: 4px auto;
}
.tarefas-completas,
.tarefas-ativas {
  height: 50%;
  overflow: auto;
}


</style>