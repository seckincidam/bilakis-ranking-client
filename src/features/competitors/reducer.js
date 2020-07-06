import {ADD_COMPETITOR} from './actions'

const competitors = (state = [], action) => {
    switch (action.type) {
        case ADD_COMPETITOR:
            return [...state, action.competitor]
        default:
            return state
    }
}

export default competitors