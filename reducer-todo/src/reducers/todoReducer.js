// Export Two Things - initialState, reducer fn

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}
]

export const todoReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                item: action.item,
                id: Date.now(),
                completed: false
            };
        default:
            return state;
    }
};