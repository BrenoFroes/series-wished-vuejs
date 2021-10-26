export default [
    {
      path: '/serie',
      name: 'serie',
      meta:{
        title: 'Séries',
        icon: 'playlist_play',
        label: 'Todas as séries',
        showNavbar: true
      },
      component: () => import(/* webpackChunkName: "series" */ './Series')
    }
  ]
  