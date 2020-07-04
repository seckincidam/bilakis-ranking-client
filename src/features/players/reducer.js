const players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [...state, action.player]
        default:
            return state
    }
}

export default players