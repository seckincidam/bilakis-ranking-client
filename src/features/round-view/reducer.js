import {ADD_GROUPS, SET_WINNER} from './actions'
import _ from 'lodash'

const roundView = (state = {rounds: []}, action) => {
    switch (action.type) {
        case ADD_GROUPS:
            return {
                ...state,
                rounds: [
                    ...state.rounds,
                    action.groups
                ]
            }
        case SET_WINNER:
            let cloneState = _.cloneDeep(state)
            let competitors = cloneState.rounds[action.round][action.group].competitors
            let competitor = _.find(competitors, function(o) { return o.id === action.id; });
            competitor.winner = true
            return cloneState
        default:
            return state
    }
}


export default roundView