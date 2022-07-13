<template>
  <div class="container-modal">
    <div class="dados">
      <label for="tarefa">Digite sua tarefa:</label><br>
      <input type="text" id="tarefa" v-model="task" name="fname"><br>
      <p>Digite a categoria</p>
      <select v-model="optionsTask" name="" id="">
        <option disabled value="none">Escolha uma caegoria</option>
        <option value="familia">Familia</option>
        <option value="trabalho">Trabalho</option>
        <option value="sports">Sports</option>
        <option value="outros">Outros</option>
      </select>

      <div class="container-btn">
        <button @click="sendForm" class="btn">Concluir</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      task: '',
      optionsTask: ''
    }
  },
  methods:{
    ...mapActions('family', ['familyAddTask']),
    ...mapActions('work', ['workAddTask']),
    sendForm() {
      if (this.optionsTask == 'familia') {
        this.familyAddTask({ task: this.task, optionsTask: this.optionsTask })
      } else if(this.optionsTask == 'trabalho') {
        this.workAddTask({ task: this.task, optionsTask: this.optionsTask })
      }
    } 
  }
}
</script>

<style scoped>
.container-modal {
  width: 800px;
  height: 600px;
  background: #2C3440;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: 320px;
  margin: 0 auto;
}
.dados {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  border: 1px solid red;
  color: white;
  margin: 100px;
}
label, input, select {
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.container-btn {
  display: inline-block;
  width: 100%;
  height: 40px;
  position: relative;
  margin: 0 auto;
}
.btn {
  width: 100%;
  height: 100%;
  background: #29A19C;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-weight: 700;
}

</style>