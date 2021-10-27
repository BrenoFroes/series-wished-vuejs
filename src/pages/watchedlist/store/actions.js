// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'


export const ActionFindWatchedlist = ({ commit }) => (
    services.watchlisted.findWatchedList().then(res =>{
        commit(types.SET_WATCHEDLIST, res.data.data)
    })
)

export const ActionAddOnWatchedlist = (context, payload ) => {
    services.watchlisted.addOnWatchedlist(payload)
}

export const ActionDeleteFromWatchedlist = (context, payload ) => {
    services.watchlisted.deleteFromWatchedlist({ id: payload})
}