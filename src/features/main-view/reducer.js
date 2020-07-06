const mainView = (state = {}, action) => {
    switch (action.type) {
        case 'SET_VIEW':
            return {...state, view: action.view}
        case 'SET_CURRENT_ROUND_INDEX':
            return {...state, round: action.round}
        case 'SET_CURRENT_GROUP':
            return {...state, currentGroupIndex: action.groupIndex}
        default:
            return state
    }
}

export default mainView