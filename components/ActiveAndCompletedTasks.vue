<template>
  <div class="container-tasks-active-complete">
    <div class="tarefas-ativas">
      <h2 class="titulo">Tarefas Ativas</h2>
      <ul class="task-itens" v-for="(tasks, index) in infos.tasks" :key="index">
        <TasksActiveds :task="tasks" :pos="index" />
      </ul>
    </div>

    <div class="tarefas-completas">
      <h2 class="titulo">Tarefas Completas</h2>
      <ul
        class="tasks-completas"
        v-for="(tasksCompleteds, index) in infos.tasksCompleteds"
        :key="index"
      >
        <TasksCompleted :taskCompleted="tasksCompleteds" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infos"],
};
</script>

<style scoped>
.container-tasks-active-complete {
  width: 700px;
  height: 450px;
  background: #2c3440;
  color: white;
  margin-left: 135px;
  margin-top: 40px;
  border-radius: 10px;
}
.titulo {
  padding: 20px 20px;
  color: #29a19c;
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
