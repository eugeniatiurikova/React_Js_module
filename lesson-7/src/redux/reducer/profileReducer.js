const initialState = {
    contacts: {
        name: 'John',
        surname: 'Williamson',
        info: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
    },
    isActive: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'toggleActive':
            return { ...state, isActive: !state.isActive };
        default: return state
    }
}