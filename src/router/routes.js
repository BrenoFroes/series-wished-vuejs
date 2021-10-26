import { routes as home } from '../pages/home'
import { routes as auth } from '../modules/auth'
import { routes as seriesList } from '../pages/series'
import { routes as watchlist } from '../pages/watchlist'
import { routes as watchedlist } from '../pages/watchedlist'
import { routes as showSerie } from '../pages/show-serie'

export default [
  ...auth,
  ...home,
  ...watchlist,
  ...watchedlist,
  ...seriesList,
  ...showSerie
]
