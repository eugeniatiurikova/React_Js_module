const initialState = {
    messageslist: [
        {
            "userId": 1,
            "chatid": 1,
            "id": 1,
            "author": "John Smith",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "chatid": 2,
            "id": 2,
            "author": "Jane Peterson",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "chatid": 3,
            "id": 3,
            "author": "Michael Parker",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "chatid": 4,
            "id": 4,
            "author": "David Baker",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage':
            return {
                ...state,
                messageslist: [...state.messageslist, action.payload]
            };
        case 'deleteMessage':
            return {
                ...state,
                messageslist: state.messageslist.filter((item) => item.id !== action.payload)
            };
        default: return state
    }
}