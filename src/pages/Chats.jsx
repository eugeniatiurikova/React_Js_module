import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import { chatSelector } from '../redux/reducer/selector/selectors';

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
            console.log(obj);
            dispatch({ type: 'addChat', payload: obj })
        } else { alert("Chat name needed") }
    }

    return (
        <div>
            <Box
                component="form" className='messagetext messages'
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: 'background.paper' }}
                    required fullWidth
                    id="outlined-required"
                    label="New chat name"
                    value={value} onChange={(e) => setValue(e.target.value)}
                />
                <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth type='submit'>Add new chat</Button>
            </Box>

            <div className="messagetext">
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                <List sx={{ margin: '10px 0 10px 0', bgcolor: 'background.paper' }}>
                    {chats.map(item => {
                        return (
                            <ListItem disablePadding key={item.id}>
                                <ListItemButton>
                                    <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                                    <ListItemText><NavLink to={`/messages?chatid=${item.id}`}>{item.title}</NavLink></ListItemText>
                                    <IconButton onClick={() => deleteChat(item.id)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </div>
    );
};

export default Chats;