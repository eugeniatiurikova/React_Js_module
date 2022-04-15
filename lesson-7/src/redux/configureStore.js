import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./reducer/profileReducer";
import { chatsReducer } from "./reducer/chatsReducer";
import { messagesReducer } from "./reducer/messagesReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(
    persistConfig, combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    })
);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);