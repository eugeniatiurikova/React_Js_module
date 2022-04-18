const initialState = {
    users: [],
    isLoading: false,
    isError: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loadingUsers':
            return { ...state, isLoading: true, isError: null };
        case 'loadedUsers':
            return { ...state, users: action.payload, isLoading: false, isError: null };
        case 'loadingError':
            return { ...state, isLoading: false, isError: action.payload };
        default: return state
    }
}

export const loadUsers = () => {
    return async (dispatch) => {
        dispatch({ type: 'loadingUsers' })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            console.log(json)
            dispatch({ type: 'loadedUsers', payload: json })
        }
        catch (e) {
            dispatch({ type: 'loadingError', payload: e.message })
        }
    }
}