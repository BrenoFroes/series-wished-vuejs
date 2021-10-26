// Realiza as funções gerais sobre os dados do state usando o mutations como intermediário

import services from '@/http'
import * as types from './mutations-types'


export const ActionFindSeriesList = ({ commit }) => (
    services.series.findSeriesList().then(res =>{
        commit(types.SET_SERIES_LIST, res.data.data)
    })
)