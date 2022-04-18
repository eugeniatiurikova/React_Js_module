import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./reducer/profileReducer";
import { chatsReducer } from "./reducer/chatsReducer";
import { messagesReducer } from "./reducer/messagesReducer";
import { usersReducer } from "./reducer/usersReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authorizationReducer } from "./reducer/autorizationReducer";


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(
    persistConfig, combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        users: usersReducer,
        authorization: authorizationReducer
    })
);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);