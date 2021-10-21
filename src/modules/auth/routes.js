// Mapeia os componentes para seus respectivos end points
export default [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ './pages/Login')
  }
]
