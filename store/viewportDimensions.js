export const state = () => ({
  viewportDimensions: {
    width: null,
    height: null
  }
})

export const mutations = {
  update(state, dimensions) {
    state.viewportDimensions.width = dimensions.width
    state.viewportDimensions.height = dimensions.height
  }
}
