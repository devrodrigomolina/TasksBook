export default {
  ADD_TASK_FAMILY: (state, payload) =>  state.tasks.push(payload),
  EDIT_TASK_FAMILY: (state, payload) => state.tasks[payload.posicaoTask].task =  payload.newtask,

  COMPLETE_TASK_FAMILY(state, payload) {
    state.tasks.splice(payload.posicaoTask, 1)
    state.tasksCompleteds.push(payload)
  },
  DELETE_TASK_FAMILY(state, payload) {
    state.tasksDeleteds++
    state.tasks.splice(payload, 1)
  }
}