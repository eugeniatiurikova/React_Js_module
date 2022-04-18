import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from '../redux/reducer/selector/selectors';
import ChatsField from './ChatsField';

const Chats = () => {

    const dispatch = useDispatch();

    const chats = useSelector(chatSelector);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addChat(value)
    }

    const deleteChat = (id) => {
        dispatch({ type: 'deleteChat', payload: id })
    };

    const addChat = (value) => {
        if (value && (value != "")) {
            let obj = {
                userid: 1,
                id: Date.now(),
                title: value
            };
            dispatch({ type: 'addChat', payload: obj })
        } else { alert("Chat name needed") }
    }

    return (
        <ChatsField
            handleSubmit={handleSubmit}
            chats={chats}
            value={value}
            setValue={setValue}
            deleteChat={deleteChat}
        />
    );
};

export default Chats;