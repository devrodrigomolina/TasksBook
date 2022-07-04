<template>
  <li>
    <input class="none selected"
      type="checkbox"
    />
    <input class="ipt-edit-task"
      type="text"
      :readonly="readonly"
      :value="task"
      @change="newText"
    />
    <div class="none icons">
      <fa @click="completeTask(pos, task)"
        v-if="readonly"
        class="complete-item"
        icon="check"
      /> 
      <fa @click="editTask(pos, task)"
        class="update-item"
        :class="{ active: readonly, 'complete-item': sucess }"
        icon="pen-to-square"
      /> 
      <fa @click="deleteTask(pos)"
        class="remove-item"
        icon="trash-can"
      /> 
    </div>
  </li>
   
</template>

<script>
export default {
  data() {
    return {
      readonly: true,
      newTaskText: '',
      sucess: false
    }
  },
  props: ['task', 'pos'],
  methods: {
    completeTask(posicaoTask, task) {
      this.$store.dispatch('CompleteTask', { posicaoTask, task })
    },
    newText(event) {
      this.newTaskText = event.target.value
    },
    editTask(pos, oldTask) {
      let inputSelect = document.querySelectorAll('.ipt-edit-task')
      inputSelect[pos].focus()
      this.sucess =! this.sucess
      this.readonly =! this.readonly
      this.$store.dispatch('editTask',{newtask: this.newTaskText, oldtaskk: oldTask, posicaoTask: pos })
    },
    deleteTask(posicaoTask) {
      this.$store.dispatch('deleteTasks', posicaoTask)
    }
  }
}
</script>

<style scoped>
.ipt-text {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #29A19C;
  background: rgb(177, 177, 177);
  outline: none;
}
.ipt-edit-task {
  width: 100%;
  height: 50%;
  outline: none;
  border: none;
  background: transparent;
  color: white;
  font-size: 1rem;
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
.none {
  opacity: 0;
}

.selected {
  width: 25px;
  height: 25px;
  margin: 0 20px;
  accent-color: #29A19C;
}
li:hover > .none,
.selected:checked ~ .none,
input[type="checkbox"]:checked  {
  transition: all .7s;
  opacity: 1;
}

.icons {
  display: flex;
  margin-right: 20px;
}
.remove-item,
.update-item,
.complete-item   {
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
}
.remove-item {
  color: #F05454;
}
.complete-item {
  color: green;
}
</style>