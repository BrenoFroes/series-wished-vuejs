// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'


export const ActionFindWatchlist = ({ commit }) => (
    services.watchlist.findWatchList().then(res =>{
        commit(types.SET_WATCHLIST, res.data.data)
    })
)

export const ActionAddOnWatchlist = (context, payload ) => {
    services.watchlist.addOnWatchlist(payload)
}

export const ActionDeleteFromWatchlist = (context, payload ) => {
    services.watchlist.deleteFromWatchlist({ id: payload})
}