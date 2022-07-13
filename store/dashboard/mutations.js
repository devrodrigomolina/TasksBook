export default {
  GET_ALL_TASKS(state, payload) {
    state.tasks.push(payload.task)
  },
  GET_ALL_TASKS_COMPLETEDS(state, payload) {
    state.tasksCompleteds.push(payload.task)
  },
  GET_ALL_TASKS_DELETEDS(state, payload) {
    state.tasks.splice(payload, 1)
    state.tasksDeleteds++
  },
}