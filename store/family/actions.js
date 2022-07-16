export default {
  familyAddTask(context, payload) {
    context.commit("ADD_TASK_FAMILY", payload)
    context.commit('dashboard/GET_ALL_TASKS', payload, { root: true})
  },
  CompleteTaskFamily(context, payload) {
 
    context.commit("COMPLETE_TASK_FAMILY", payload)
    context.commit('dashboard/GET_ALL_TASKS_COMPLETEDS', payload, { root: true})
  },
  editTaskFamily(context, payload) {
    context.commit("EDIT_TASK_FAMILY", payload)
  },
  deleteTasksFamily(context, payload) {
    context.commit("DELETE_TASK_FAMILY", payload)
    context.commit('dashboard/GET_ALL_TASKS_DELETEDS', payload, { root: true})
  }
}