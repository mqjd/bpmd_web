const model = {
  state: {
    sidemenu: {
      collapse: false
    }
  },
  mutations: {
    TOGGLE_SIDEMENU: state => {
      state.sidemenu.collapse = !state.sidemenu.collapse
    }
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('TOGGLE_SIDEMENU')
    }
  }
}
export default model
