<template>
  <li>
    <p class="completed">{{taskCompleted.task.task}} | {{taskCompleted.task.optionsTask}}</p>
  </li>
</template>

<script>
export default {
  props: ['taskCompleted', 'task']
}
</script>

<style scoped> 
li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  margin-bottom: 4px;
  border-radius: 10px;
  border: 1px solid #8d8d8da2;
  transition: all .4s;
}
li:hover {
  background: #29a19d56;
}
.none {
  opacity: 0;
}
.completed {
  text-decoration: line-through black 2px
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

/* RESPONSIVO */
@media (max-width: 767.98px) {
.icons svg{
  width: 14px;
}
}
</style>