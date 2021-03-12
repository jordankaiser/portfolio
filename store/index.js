export const state = () => ({
  menuOpen: false,
  workDetailScreenshots: {}
})

export const mutations = {
  toggleMenuOpen(state) {
    state.menuOpen = !state.menuOpen
  },
  setWorkDetailScreenshots(state, payload) {
    state.workDetailScreenshots[`${payload.id}`] = {}
    state.workDetailScreenshots[`${payload.id}`].loaded = payload.loaded
  }
}
