export default {
  othersAddTask(context, payload) {
    context.commit("ADD_TASK_OTHERS", payload);
    context.commit("dashboard/GET_ALL_TASKS", payload, { 
      root: true 
    });
  },
  CompleteTaskOthers(context, payload) {
    context.commit("COMPLETE_TASK_OTHERS", payload);
    context.commit("dashboard/GET_ALL_TASKS_COMPLETEDS", payload, {
      root: true,
    });
  },
  editTaskOthers(context, payload) {
    context.commit("EDIT_TASK_OTHERS", payload);
  },
  deleteTasksOthers(context, payload) {
    context.commit("DELETE_TASK_OTHERS", payload);
    context.commit("dashboard/GET_ALL_TASKS_DELETEDS", payload, { 
      root: true 
    });
  },
};
