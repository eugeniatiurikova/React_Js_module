import React, { useEffect, useState } from 'react';
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

const Chats = () => {

    const [chats, setChats] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addChat(value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(data => setChats(data))
    }, []);

    const deleteChat = (id) => {
        const removeitem = chats.filter((item) => item.id !== id);
        setChats(removeitem)
    };

    const addChat = (value) => {
        let newid = 1;
        if (chats.length > 0) newid = chats[chats.length - 1].id + 1;
        console.log(value)
        if (value && (value != "")) {
            let copy = [...chats];
            copy = [...chats, { userid: 1, id: newid, title: value }]
            setChats(copy)
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
                <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                    required fullWidth
                    id="outlined-required"
                    label="New chat name"
                    value={value} onChange={(e) => setValue(e.target.value)}
                />
                <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth type='submit'>Add new chat</Button>
            </Box>

            <div className="messagetext">
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
                    {chats.map(item => {
                        return (
                            <ListItem disablePadding key={item.id}>
                                <ListItemButton>
                                    <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                                    <ListItemText component="a" href={`/posts/${item.id}`} primary={item.title} />
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