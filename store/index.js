export const state = () => ({
  menuOpen: false
})

export const mutations = {
  toggleMenuOpen(state) {
    state.menuOpen = !state.menuOpen
  }
}
