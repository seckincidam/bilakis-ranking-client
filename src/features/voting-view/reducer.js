const votingView = (state = {}, action) => {
    switch (action.type) {
        case 'START_VOTING':
            return {...state, competitors: action.group.competitors, totalVotes: action.group.totalVotes}
        case 'ADD_VOTE':
            return {...state,
                competitors: state.competitors.map(competitor =>
                    competitor.id === action.id ? {...competitor, vote: competitor.vote + 1} : competitor    
                ),
                totalVotes: state.totalVotes + 1
            }
        default:
            return state
    }
}

export default votingView