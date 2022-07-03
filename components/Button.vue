<template>
  <div class="container-btn">

    <button @click="newTask = !newTask" class="btn"><fa class="icon fa-xl" icon="circle-plus" />Nova Task </button>
    <div v-if="newTask" class="ipt-new-task">
      <input v-model="taskText" placeholder="Digite aqui sua tarefa" type="text" name="" id="">
        <div class="none icons">
          <fa @click="completeTask" class="complete-item" icon="check" /> 
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newTask: false,
      taskText: '',
    }
  },
  methods: {
    completeTask() {
      this.$store.dispatch('addTask', this.taskText)
    }
  }

}
</script>

<style scoped>
.container-btn {
  display: inline-block;
  width: 220px;
  height: 40px;
  position: relative;
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

.btn .icon {
  color: white;
  margin-right: 10px;
}

.ipt-new-task {
  width: 100%;
  display: flex;
  position: relative;
}

.ipt-new-task input {
  width: 100%;
  height: 30px;
  outline: none;
  padding-left: 8px;
  border-radius: 10px;
}
.icons {
  position: absolute;
  right: 10px;
  top: 5px;
}
.complete-item {
  cursor: pointer;
  color: green;
}
</style>