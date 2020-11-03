export const state = () => ({
  menuOpen: false
})

export const mutations = {
  toggleMenuOpen(state) {
    console.log(!state.menuOpen)
    state.menuOpen = !state.menuOpen
    console.log(state.menuOpen)
  }
}
