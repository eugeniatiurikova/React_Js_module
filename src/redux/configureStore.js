import { createStore, combineReducers } from "redux";
import { profileReducer } from "./reducer/profileReducer";
import { chatsReducer } from "./reducer/chatsReducer";
import { messagesReducer } from "./reducer/messagesReducer";

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    })
)