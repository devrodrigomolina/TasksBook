export const state = () => ({
  taskAdd: [],
  tasksCompleteds: []
})

export const mutations = {
  ADD_TASK(state, payload) {
    state.taskAdd.push(payload) 
  },
  COMPLETE_TASK(state, payload) {
    console.log(payload)
    state.taskAdd.pop(payload)
    state.tasksCompleteds.push(payload)
  }
}

export const actions = {
  addTask(context, payload) {
    context.commit("ADD_TASK", payload)
  },
  CompleteTask(context, payload) {
    context.commit("COMPLETE_TASK", payload)
  },
}