export default [
    {
      path: '/watchedlist',
      name: 'watchedlist',
      meta:{
        title: 'Watchedlist',
        icon: 'playlist_add_check',
        label: 'Já assisti',
        showNavbar: true
      },
      component: () => import(/* webpackChunkName: "watchedlist" */ './Watchedlist')
    }
  ]
  