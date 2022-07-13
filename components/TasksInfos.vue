<template>
  <div class="container-tasks-infos" >
    <h2 class="titulo">Sucessos da semana</h2>
    <div class="tasks-criadas">
      <p>Criadas</p>
      <div class="circulo-infos" >
        <p class="qtd-tasks">{{infos.tasks.length}}</p>
        <p>Tasks</p>
      </div>
    </div>
    <div class="tasks-completas">
      <p>Completas</p>
      <div class="circulo-infos">
        <p class="qtd-tasks">{{infos.tasksCompleteds.length}}</p>
        <p>Tasks</p>
      </div>
    </div>
    <div class="tasks-deletadas">
      <p>Deletadas</p>
      <div class="circulo-infos">
        <p class="qtd-tasks">{{infos.tasksDeleteds}}</p>
        <p>Tasks</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infos'],
}
</script>

<style scoped>
.container-tasks-infos {
  width: 700px;
  height: 300px;
  background: #2C3440;
  color: white;
  margin-left: 135px;
  margin-top: 100px;
  border-radius: 10px;
  text-align: center;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.container-tasks-infos .titulo {
  margin: auto 0;
  grid-column-start: 1;
  grid-column-end: 4;
}
.circulo-infos {
  margin: 0 auto;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid #29A19C;
}

.qtd-tasks {
  font-size: 1.7rem;
  margin-bottom: 5px;
  color: #29A19C;
}
</style>