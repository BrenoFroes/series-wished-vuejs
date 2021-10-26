import { services as auth } from '@/modules/auth'
import { services as series } from '@/pages/series'
import { services as watchlist } from '@/pages/watchlist'
import { services as watchlisted } from '@/pages/watchedlist'
import { services as showSerie } from '@/pages/show-serie'

export default{
    auth,
    watchlist,
    watchlisted,
    series,
    showSerie
}