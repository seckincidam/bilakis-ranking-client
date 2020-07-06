export const startVoting = group => ({
    type: 'START_VOTING',
    group
})

export const addVote = id => ({
    type: 'ADD_VOTE',
    id
})