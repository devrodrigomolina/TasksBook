export default {
  workAddTask(context, payload) {
    context.commit("ADD_TASK_WORK", payload);
    context.commit("dashboard/GET_ALL_TASKS", payload, { 
      root: true 
    });
  },
  CompleteTaskWork(context, payload) {
    console.log(payload)
    context.commit("COMPLETE_TASK_WORK", payload);
    context.commit("dashboard/GET_ALL_TASKS_COMPLETEDS", payload, {
      root: true,
    });
  },
  editTaskWork(context, payload) {
    context.commit("EDIT_TASK_WORK", payload);
  },
  deleteTasksWork(context, payload) {
    context.commit("DELETE_TASK_WORK", payload);
    context.commit("dashboard/GET_ALL_TASKS_DELETEDS", payload, { 
      root: true 
    });
  },
};
