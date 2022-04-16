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
