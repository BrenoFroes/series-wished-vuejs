// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'


export const ActionFindSerie = ({ commit }, payload) => (
    services.showSerie.findSerie({ id: payload }).then(res =>{
        commit(types.SET_SERIE, res.data.data)
    })
)