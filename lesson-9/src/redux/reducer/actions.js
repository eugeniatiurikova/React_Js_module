import { auth } from '../../services/firebase'
import * as types from './actionsTypes'

const registerStart = () => ({
    type: types.REGISTER_START
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})

const registerError = (error) => ({
    type: types.REGISTER_ERROR,
    payload: error
})

const loginStart = () => ({
    type: types.LOGIN_START
})

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})

const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error
})

const logoutStart = () => ({
    type: types.LOGOUT_START
})

const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
    payload: user
})

const logoutError = (error) => ({
    type: types.LOGOUT_ERROR,
    payload: error
})

export const registrInitiate = (userEmail, userPass, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(userEmail, userPass)
            .then(({ user }) => {
                user.updateProfile({ displayName });
                dispatch(registerSuccess(user));
                console.log("updated")
                console.log(user);
            })
            .catch((error) => dispatch(registerError(error.message)))
    }
}

export const loginInitiate = (userEmail, userPass) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(userEmail, userPass)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e.message)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.message)))
    }
}

export const getAnswer = () => {
    return (dispatch, getState) => {
        let messageList = getState().messages.messageslist;
        const lastMessage = messageList[messageList.length - 1];
        // let timerId = null;
        if (messageList.length) {
            let botMessage = "Dear " + lastMessage.author + "! We have received your message and will reply to you very soon. Stay tuned!"
            if (lastMessage.author != 'ChatBot') {
                let obj = {
                    userid: 1,
                    chatid: lastMessage.chatid,
                    id: Date.now(),
                    author: 'ChatBot',
                    body: botMessage
                };
                // timerId = 
                setTimeout(() => {
                    console.log("New");
                    console.log(obj);
                    dispatch({ type: 'addMessage', payload: obj });
                }, 1500);
            }
        }
        // return () => clearInterval(timerId);
    }
}
