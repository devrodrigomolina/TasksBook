<template>
  <li>
    <input class="none selected" type="checkbox" />
    <input
      class="ipt-edit-task"
      type="text"
      :readonly="readonly"
      :value="task.task"
      @change="newText"
    />

    <p>{{ task.optionsTask }}</p>

    <div class="none icons" v-if="this.checkRoute != '/'">
      <fa
        @click="completeTask(pos, task)"
        v-if="readonly"
        class="complete-item"
        icon="check"
      />
      <fa
        @click="editTask(pos, task)"
        class="update-item"
        :class="{ active: readonly, 'complete-item': sucess }"
        icon="pen-to-square"
      />
      <fa @click="deleteTask(pos)" class="remove-item" icon="trash-can" />
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      readonly: true,
      newTaskText: "",
      sucess: false,
      route: this.checkRoute,
    };
  },
  props: {
    task: {
      type: [Object, String],
    },
    pos: {
      type: Number,
    },
  },
  methods: {
    ...mapActions("family", [
      "CompleteTaskFamily",
      "editTaskFamily",
      "deleteTasksFamily",
    ]),
    ...mapActions("work", [
      "CompleteTaskWork",
      "editTaskWork",
      "deleteTasksWork",
    ]),
    ...mapActions("sports", [
      "CompleteTaskSports",
      "editTaskSports",
      "deleteTasksSports",
    ]),

    checkRouteAndComplete(posicaoTask, task) {
      this.checkRoute == "/family"
        ? this.CompleteTaskFamily({ posicaoTask, task })
        : this.checkRoute == "/work"
        ? this.CompleteTaskWork({ posicaoTask, task })
        : this.checkRoute == "/sports"
        ? this.CompleteTaskSports({ posicaoTask, task })
        : "";
    },

    checkRouteAndEdit(pos, oldTask) {
      this.checkRoute == "/family"
        ? this.editTaskFamily({
            newtask: this.newTaskText,
            oldtaskk: oldTask,
            posicaoTask: pos,
          })
        : this.checkRoute == "/work"
        ? this.editTaskWork({
            newtask: this.newTaskText,
            oldtaskk: oldTask,
            posicaoTask: pos,
          })
        : this.checkRoute == "/sports"
        ? this.editTaskSports({
            newtask: this.newTaskText,
            oldtaskk: oldTask,
            posicaoTask: pos,
          })
        : "";
    },

    checkRouteAndDelete(posicaoTask) {
      this.checkRoute == "/family"
        ? this.deleteTasksFamily(posicaoTask)
        : this.checkRoute == "/work"
        ? this.deleteTasksWork(posicaoTask)
        : this.checkRoute == "/sports"
        ? this.deleteTasksSports(posicaoTask)
        : "";
    },

    completeTask(posicaoTask, task) {
      this.checkRouteAndComplete(posicaoTask, task);
    },
    newText(event) {
      this.newTaskText = event.target.value;
    },
    editTask(pos, oldTask) {
      let inputSelect = document.querySelectorAll(".ipt-edit-task");
      inputSelect[pos].focus();
      this.sucess = !this.sucess;
      this.readonly = !this.readonly;
      this.checkRouteAndEdit(pos, oldTask);
    },
    deleteTask(posicaoTask) {
      this.checkRouteAndDelete(posicaoTask);
    },
  },
  computed: {
    checkRoute() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.ipt-text {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #29a19c;
  background: rgb(177, 177, 177);
  outline: none;
}
.ipt-edit-task {
  width: 50%;
  height: 50%;
  outline: none;
  border: none;
  background: transparent;
  color: rgb(177, 177, 177);
  font-size: 1rem;
}

li {
  display: flex;
  align-items: center;
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
  accent-color: #29a19c;
}
li:hover > .none,
.selected:checked ~ .none,
input[type="checkbox"]:checked {
  transition: all 0.7s;
  opacity: 1;
}

.icons {
  display: flex;
  margin-right: 20px;
  margin-left: 80px;
}
.remove-item,
.update-item,
.complete-item {
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
}
.remove-item {
  color: #f05454;
}
.complete-item {
  color: green;
}
</style>
