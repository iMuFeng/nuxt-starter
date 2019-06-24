const loginRoutes = [
  'index___en',
  'index___zh-cn'
]
const authorizeRoutes = [
  'admin___en',
  'admin___zh-cn'
]

export default async function ({ isServer, store, req, route, redirect }) {
  // If nuxt generate, pass this middleware
  if (isServer && !req) return

  const isAuthenticated = store.state.isAuthenticated

  if (loginRoutes.includes(route.name)) {
    if (isAuthenticated) {
      return redirect('/admin')
    }
  } else if (authorizeRoutes.includes(route.name)) {
    if (!isAuthenticated) {
      return redirect('/')
    }
  }
}
