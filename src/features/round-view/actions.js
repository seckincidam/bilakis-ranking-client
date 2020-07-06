export const ADD_GROUPS = '[roundView] add-groups'
export const SET_WINNER = '[roundView] set-winner'

export const addGroups = groups => ({
    type: ADD_GROUPS,
    groups
})

export const setWinner = (id, round, group) => ({
    type: SET_WINNER,
    id,
    round,
    group
})