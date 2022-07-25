<template>
  <div class="container-modal">
    <div class="container-btn-close">
      <button @click="modalClose" class="btn-close">X</button>
    </div>
    <div class="dados">
      <h1>Adicione sua tarefa</h1>
      <label for="tarefa">Digite sua tarefa:</label><br />
      <input type="text" id="tarefa" v-model="task" name="fname" /><br />
      <p>Escolha a categoria:</p>
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      task: "",
      optionsTask: ""
    };
  },
  methods: {
    ...mapActions("family", ["familyAddTask"]),
    ...mapActions("work", ["workAddTask"]),
    ...mapActions("sports", ["sportsAddTask"]),
    sendForm() {
      if (this.optionsTask == "familia") {
        this.familyAddTask({ task: this.task, optionsTask: this.optionsTask });
      } else if (this.optionsTask == "trabalho") {
        this.workAddTask({ task: this.task, optionsTask: this.optionsTask });
      } else if (this.optionsTask == "sports") {
        this.sportsAddTask({ task: this.task, optionsTask: this.optionsTask });
      }
    },
    modalClose() {
      this.$emit('emit', false)
    }
  },
};
</script>

<style scoped>
.container-btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}
.btn-close {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid #29a19c;
  color: #29a19c;
}
.container-modal {
  width: 800px;
  height: 600px;
  background: #2c3440;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: 415px;
  margin: 10px auto;
  border: 1px dashed #29a19c;
}
.dados {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  color: white;
  margin: 100px;
}
.dados h1 {
  margin-bottom: 60px;
}
label,
input,
select {
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
  margin: 50px auto;
}
.btn {
  width: 100%;
  height: 100%;
  background: #29a19c;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-weight: 700;
}
</style>
