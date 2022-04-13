import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MessageSelector } from '../redux/reducer/selector/selectors';

const Messages = () => {
    const [msgauthor, setMsgauthor] = useState('');
    const [messagetext, setMessagetext] = useState('');

    const dispatch = useDispatch();

    const messages = useSelector(MessageSelector);

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage(msgauthor, messagetext)
    }

    const addMessage = (author, text) => {
        if (author && text) {
            let obj = {
                userid: 1,
                id: Date.now(),
                author: author,
                body: text,
            };
            console.log(obj);
            dispatch({ type: 'addMessage', payload: obj })
        } else { alert("Fill all text fields") }
    }


    return (
        <div>
            <Box
                component="form" className='messagetext messages'
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
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
                    value={messagetext}
                    onChange={(e) => setMessagetext(e.target.value)}
                />
                <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth type='submit'>Send message</Button>
            </Box>

            <div className="messagetext">
                <Typography variant="h5" component="div" color="primary">Сообщения</Typography>
                {messages.map(item => {
                    return (
                        <Card sx={{ margin: '20px 0 20px 0', backgroundColor: 'background.paper' }} fullWidth key={item.id}>
                            <CardContent>
                                <Typography variant="h6" component="div" color="primary">{item.author}:</Typography>
                                <Typography variant="body2">«{item.body}»</Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
};

export default Messages;