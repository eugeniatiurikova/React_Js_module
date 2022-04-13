const initialState = {
    chatlist: [
        {
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "omnis laborum odio"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "non esse culpa molestiae omnis sed optio"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "eaque aut omnis a"
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