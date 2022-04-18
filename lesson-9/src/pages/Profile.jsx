import React, { useCallback, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector, ProfileSelector } from '../redux/reducer/selector/selectors';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducer/actions';

const Profile = () => {
    const { contacts, isActive } = useSelector(ProfileSelector);
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            console.log("no user")
        }
    }, [user, navigate])

    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch({ type: 'toggleActive' });
    }, [dispatch]);

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => { navigate('/login') }, 2000)
    }

    return (
        <Box className="messagetext">
            <Typography variant="h5" component="div" color="primary">Profile</Typography>
            <List sx={{ margin: '10px 0 10px 0', bgcolor: 'background.paper' }}>
                <ListItem><ListItemAvatar>
                    <Avatar>{contacts.name[0]}{contacts.surname[0]}</Avatar>
                </ListItemAvatar><ListItemText
                        primary={`${contacts.name} ${contacts.surname}`} secondary={contacts.info} /></ListItem>
            </List>
            <Stack sx={{ margin: '0 0 10px 0' }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
            ><FormControlLabel control={
                <Checkbox
                    checked={isActive}
                    onChange={setShowName}
                />
            } label="Show as anonymus" /><Button onClick={handleAuth} size="medium">Sign out</Button>
            </Stack>
        </Box>
    );
};

export default Profile;