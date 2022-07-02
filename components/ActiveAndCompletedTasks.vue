<template>
  <div class="container-tasks-active-complete">
    <div class="tarefas-ativas">
      <h2 class="titulo">Tarefas Ativas</h2>
      <ul class="task-itens">
        <li>
          <input class="selected" type="checkbox" name="" id="">
          <p>Cabeçear a navaia</p>
          <div class="icons">
            <fa class="update-item" icon="pen-to-square" /> 
            <fa class="remove-item" icon="trash-can" /> 
          </div>
        </li>
      </ul>
    </div>

    <div class="tarefas-completas">
      <h2 class="titulo">Tarefas Completas</h2>
      <ul class="tasks-completas">
        <li> <!-- RETORNAR ESSA LI PELO JAVASCRIPT -->
          <input class="selected" type="checkbox" name="" id="">
          <p>Cabeçear a navaia</p>
          <div class="icons">
            <fa class="update-item" icon="pen-to-square" /> 
            <fa class="remove-item" icon="trash-can" /> 
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-tasks-active-complete {
  width: 700px;
  height: 400px;
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
.task-itens, .tasks-completas {
  width: 600px;
  height: 50px;
  margin: 0 auto;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #8d8d8da2;
}

.selected {
  width: 25px;
  height: 25px;
  margin: 0 20px;
}
.icons {
  margin-right: 20px;
}
.remove-item, .update-item {
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
}
.remove-item {
  color: #F05454;
}
</style>