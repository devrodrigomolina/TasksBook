export default (context, inject) => {
  window.localStorage.setItem('tasks', JSON.stringify(context.store.state.dashboard.tasks));
}