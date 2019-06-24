import isEmpty from 'is-blank'

export default function ({ app, $axios, redirect }) {
  $axios.onRequest(config => {
    const auth = app.$cookies.get('WTS.SESS')

    if (!isEmpty(auth)) {
      config.headers.common['Authorization'] = `Bearer ${auth.accessToken}`
    }

    console.log('::::: Making request to ', config)
  })

  $axios.onError(err => {
    console.error(err)

    if(err.response.status === 401) {
      app.store.dispatch('logout')
      redirect('/admin/login')
    }
  })
}