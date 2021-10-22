export default [
    {
      path: '/watchlist',
      name: 'watchlist',
      meta:{
        title: 'Watchlist',
        icon: 'playlist_play',
        label: 'Quero assistir',
        showNavbar: true
      },
      component: () => import(/* webpackChunkName: "watchlist" */ './Watchlist')
    }
  ]
  