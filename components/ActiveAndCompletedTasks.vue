<template>
  <div class="container-tasks-active-complete">
    <div class="tarefas-ativas">
      <h2 class="titulo">Tarefas Ativas</h2>
      <div class="infosCategoria">
        <h4>Tarefa</h4>
        <h4>Categoria</h4>
      </div>
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
.infosCategoria {
  max-width: 600px;
  margin: 20 auto;
  margin-bottom: 10px;
  display: flex;
  color: #289b97;
  justify-content: space-around;
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

/* REPONSIVO */

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {}

/* Extra large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) {
.container-tasks-active-complete {
  width: 550px;
  height: 400px;
  margin-left: 25px;
  margin-top: 20px;
}
.titulo {
  padding: 15px 15px;
  font-size: 18px;
}

.task-itens,
.tasks-completas {
  width: 480px;
  height: 35px;
  margin: 3px auto;
}
}

</style>
