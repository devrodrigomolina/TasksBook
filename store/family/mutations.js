export default {
  ADD_TASK_FAMILY: (state, payload) =>  state.tasks.push(payload.task),
  EDIT_TASK_FAMILY: (state, payload) => state.tasks.splice(payload.posicaoTask, 1, payload.newtask),

  COMPLETE_TASK_FAMILY(state, payload) {
    state.tasks.splice(payload.posicaoTask, 1)
    state.tasksCompleteds.push(payload.task)
  },
  DELETE_TASK_FAMILY(state, payload) {
    state.tasksDeleteds++
    state.tasks.splice(payload, 1)
  }
}