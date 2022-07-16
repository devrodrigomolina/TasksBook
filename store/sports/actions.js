export default {
  sportsAddTask(context, payload) {
    context.commit("ADD_TASK_SPORTS", payload);
    context.commit("dashboard/GET_ALL_TASKS", payload, { 
      root: true 
    });
  },
  CompleteTaskSports(context, payload) {
    context.commit("COMPLETE_TASK_SPORTS", payload);
    context.commit("dashboard/GET_ALL_TASKS_COMPLETEDS", payload, {
      root: true,
    });
  },
  editTaskSports(context, payload) {
    context.commit("EDIT_TASK_SPORTS", payload);
  },
  deleteTasksSports(context, payload) {
    context.commit("DELETE_TASK_SPORTS", payload);
    context.commit("dashboard/GET_ALL_TASKS_DELETEDS", payload, { 
      root: true 
    });
  },
};
