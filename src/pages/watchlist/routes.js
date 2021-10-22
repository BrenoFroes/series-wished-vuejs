export default [
    {
      path: '/watchlist',
      name: 'watchlist',
      component: () => import(/* webpackChunkName: "watchlist" */ './Watchlist')
    }
  ]
  