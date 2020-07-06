export const setView = view => ({
    type: 'SET_VIEW',
    view
})

export const setCurrentRoundIndex = round => ({
    type: 'SET_CURRENT_ROUND_INDEX',
    round
})

export const setCurrentGroup = groupIndex => ({
    type: 'SET_CURRENT_GROUP',
    groupIndex
})
