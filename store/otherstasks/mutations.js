export default {
  ADD_TASK_OTHERS(state, payload) {
    state.tasks.push(payload) 
  },
  COMPLETE_TASK_OTHERS(state, payload) {
    state.tasks.splice(payload.posicaoTask, 1)
    state.tasksCompleteds.push(payload)
  },
  EDIT_TASK_OTHERS(state, payload) {
    state.tasks[payload.posicaoTask].task =  payload.newtask
  },
  DELETE_TASK_OTHERS(state, payload) {
    state.tasksDeleteds++
    state.tasks.splice(payload, 1)
  }
}