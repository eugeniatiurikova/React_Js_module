import React, { useEffect, useState } from 'react';
import './message.css';

function App() {
  const [msgauthor, setMsgauthor] = useState('');
  const [messagetext, setMessagetext] = useState('');
  const [messages, setMessage] = useState([]);

  const onButtonClick = () => {
    let newid = 1;
    if (messages.length > 0) newid = messages[messages.length - 1].id + 1;
    setMessage(messages => [...messages, { text: messagetext, author: msgauthor, id: newid }]);
  };

  useEffect(() => {
    setTimeout(() => { alert(msgauthor + ", ваше сообщение отправлено") }, 1500);
  }, [messages])

  return (
    <div className="App">
      <div class="messagetext centered">
        <div><input type="text" value={msgauthor} onChange={(e) => setMsgauthor(e.target.value)} placeholder="Author"></input></div>
        <div><textarea id="txt" value={messagetext} onChange={(e) => setMessagetext(e.target.value)} cols="30" rows="10" placeholder="Message text"></textarea></div>
        <div><button onClick={onButtonClick}>Send message</button></div>
      </div>
      {messages.map(item => <div class="messagetext" key={item.id}><p><i>Author:</i> <b>{item.author}</b></p><p><i>Message:</i> {item.text}</p></div>)}
    </div>
  );
}

export default App;
