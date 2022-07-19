import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  console.log(store)
  createPersistedState()(store)
}