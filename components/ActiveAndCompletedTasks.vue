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
  margin-left: 80px;
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
@media (max-width: 1440px) {
.container-tasks-active-complete {
  width: 650px;
  height: 450px;
  margin-left: 35px;
  margin-top: 30px;
}
.task-itens,
.tasks-completas {
  height: 45px;
}
}

@media (max-width: 1024px) {
.container-tasks-active-complete {
  width: 400px;
  height: 330px;
}
.task-itens,
.tasks-completas {
  width: 90%;
  height: 40px;
}

.tarefas-completas h2,
.tarefas-ativas h2 {
  font-size: 1rem;
  padding: 10px;
}
}

@media (max-width: 767.98px) {
.container-tasks-active-complete {
  width: 380px;
  height: 400px;
  margin: 15px auto;
}
.task-itens,
.tasks-completas {
  width: 90%;
  height: 40px;
}

.tarefas-completas h2,
.tarefas-ativas h2 {
  font-size: 1rem;
  padding: 10px;
}
}

</style>
