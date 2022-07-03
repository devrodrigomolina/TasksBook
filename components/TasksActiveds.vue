<template>
  <li>
    <input class="none selected" type="checkbox" name="" id="">
    <p>{{task}}</p>
    <div class="none icons">
      <fa @click="completeTask(pos, task)" class="complete-item" icon="check" /> 
      <fa class="update-item" icon="pen-to-square" /> 
      <fa class="remove-item" icon="trash-can" /> 
    </div>
  </li>
   
</template>

<script>
export default {
  props: ['task', 'pos'],
  methods: {
    completeTask(posicaoTask, task) {
      this.$store.dispatch('CompleteTask', {posicaoTask, task})
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