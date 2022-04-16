const initialState = {
    chatlist: [
        {
            "userId": 1,
            "id": 1,
            "title": "Quidem molestiae enim"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "Sunt qui excepturi placeat culpa"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "Omnis laborum odio"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "Non esse culpa molestiae omnis sed optio"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "Eaque aut omnis a"
        }
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat':
            return {
                ...state,
                chatlist: [action.payload, ...state.chatlist]
            };
        case 'deleteChat':
            return {
                ...state,
                chatlist: state.chatlist.filter((item) => item.id !== action.payload)
            };
        default: return state
    }
}