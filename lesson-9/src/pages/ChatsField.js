import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';


const ChatsField = ({ handleSubmit, chats, value, setValue, deleteChat }) => (
    <Stack sx={{ margin: '10px 0 10px 0' }}
        direction="column"
        spacing={2}
    >
        <Box
            component="form" className='messagetext'
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

        <Box className="messagetext">
            <Typography variant="h5" color="primary">Chat list</Typography>
            <List sx={{ margin: '10px 0 10px 0', bgcolor: 'background.paper' }}>
                {chats.map(item => {
                    return (
                        <ListItem disablePadding key={item.id}><ListItemButton>
                            <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                            <ListItemText><NavLink to={`/messages?chatid=${item.id}`}>{item.title}</NavLink></ListItemText>
                            <IconButton onClick={() => deleteChat(item.id)} edge="end" aria-label="delete"><DeleteOutlinedIcon /></IconButton>
                        </ListItemButton></ListItem>
                    )
                })}
            </List>
        </Box>
    </Stack>
);
export default ChatsField;