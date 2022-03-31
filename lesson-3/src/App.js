import React, { useEffect, useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import './message.css';
import Message from './Message';
import Chats from './Chats';
function App() {
  const [msgauthor, setMsgauthor] = useState('');
  const [messagetext, setMessagetext] = useState('');
  const [messages, setMessage] = useState([]);
  const [chatlist, setChatlist] = useState([
    { name: "Some chat", id: "1" },
    { name: "Complicated discussion", id: "2" },
    { name: "Descriptions and documentation", id: "3" }
  ]);
  const inputRef = useRef(null);

  const onButtonClick = () => {
    let newid = 1;
    if (messages.length > 0) newid = messages[messages.length - 1].id + 1;
    if (msgauthor.length > 0) {
      setMessage(messages => [...messages, { text: messagetext, author: msgauthor, id: newid }]);
    } else {
      alert("Author name needed")
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        alert(msgauthor + ", your message sent");
      }, 1500);
    };
    inputRef.current.focus();
  }, [messages]);


  return (
    <div className="App main">
      <div className="messagetext">
        <Typography variant="h5" component="div" color="primary">Chat list</Typography>
        <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
          {chatlist.map(item => {
            return (
              <Chats name={item.name} key={item.id} />
            )
          })}
        </List>
      </div>

      <div className="messages">
        <Box
          component="form"
          sx={{ m: 1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px', backgroundColor: 'rgb(241, 241, 241)' }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" component="div" color="primary">Messages</Typography>
          <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            required fullWidth
            id="outlined-required"
            label="Author name"
            value={msgauthor} onChange={(e) => setMsgauthor(e.target.value)}
          />
          <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            id="outlined-multiline-flexible" fullWidth
            label="Message text"
            multiline
            maxRows={4}
            value={messagetext}
            ref={inputRef}
            onChange={(e) => setMessagetext(e.target.value)}
          />
          <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth onClick={onButtonClick}>Send message</Button>
        </Box>
        {
          messages.map(item => {
            return (
              <Message author={item.author} text={item.text} key={item.id} />
            )
          })
        }
      </div>
    </div >
  );
}

export default App;
