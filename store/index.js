export const state = () => ({
  taskAdd: [],
  tasksCompleteds: [],
  tasksDeleteds: 0
})

export const mutations = {
  ADD_TASK(state, payload) {
    state.taskAdd.push(payload) 
  },
  COMPLETE_TASK(state, payload) {
    state.taskAdd.splice(payload.posicaoTask, 1)
    state.tasksCompleteds.push(payload.task)
  },
  EDIT_TASK(state, payload) {
    state.taskAdd.splice(payload.posicaoTask, 1, payload.newtask)
  },
  DELETE_TASK(state, payload) {
    state.tasksDeleteds++
    state.taskAdd.splice(payload, 1)
  }
}

export const actions = {
  addTask(context, payload) {
    context.commit("ADD_TASK", payload)
  },
  CompleteTask(context, payload) {
    context.commit("COMPLETE_TASK", payload)
  },
  editTask(context, payload) {
    context.commit("EDIT_TASK", payload)
  },
  deleteTasks(context, payload) {
    context.commit("DELETE_TASK", payload)
  }
}