import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer } from '../redux/reducer/action';
import { MessageSelector } from '../redux/reducer/selector/selectors';
import MessagesField from './MessagesField';


const Messages = () => {
    const [msgauthor, setMsgauthor] = useState('');
    const [messagetext, setMessagetext] = useState('');
    const dispatch = useDispatch();

    function getChat() {
        var s = window.location.search.match(new RegExp('chatid=([^&=]+)'));
        return s ? s[1] : false;
    }

    const messages = useSelector(MessageSelector).filter((item) => item.chatid == getChat());

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage(msgauthor, messagetext);
    }

    const deleteMessage = (id) => {
        dispatch({ type: 'deleteMessage', payload: id })
    };

    useEffect(() => {
        return dispatch(getAnswer())
    }, [messages])

    const addMessage = (author, text) => {
        if (author && text) {
            let obj = {
                userid: 1,
                chatid: getChat(),
                id: Date.now(),
                author: author,
                body: text,
            };
            dispatch({ type: 'addMessage', payload: obj })
        } else { alert("Fill all text fields") }
    }

    // const addMessageWithThunk = (author, text) => (dispatch, getState) => {
    //     dispatch(addMessage(author, text));
    //     if (author !== "ChatBot") {
    //     const botMessage = "Dear " + author + "! Stay tuned!";
    //     setTimeout(() => dispatch(addMessage("ChatBot", botMessage)), 2000);
    //     }
    // }

    return (
        <MessagesField
            handleSubmit={handleSubmit}
            messages={messages}
            msgauthor={msgauthor}
            setMsgauthor={setMsgauthor}
            messagetext={messagetext}
            setMessagetext={setMessagetext}
            deleteMessage={deleteMessage}
        />
    );
};

export default Messages;