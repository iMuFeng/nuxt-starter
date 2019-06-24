import isEmpty from 'is-blank'

export const state = () => ({
  isAuthenticated: false
})

export const mutations = {
  updateAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    const auth = this.$cookies.get('islogin')
    const isAuthenticated = !isEmpty(auth)

    // Update auth status
    dispatch('updateAuthenticated', isAuthenticated)
  },

  updateAuthenticated ({ commit }, isAuthenticated) {
    if (isAuthenticated) {
      this.$cookies.set('islogin', true, { path: '/' })
    } else {
      this.$cookies.remove('islogin', { path: '/' })
    }
    commit('updateAuthenticated', isAuthenticated)
  }
}
