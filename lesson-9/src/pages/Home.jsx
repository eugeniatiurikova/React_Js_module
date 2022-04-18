import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../redux/reducer/selector/selectors';
import { loadUsers } from '../redux/reducer/usersReducer';

const Home = () => {
    const users = useSelector(usersSelector);
    const loading = useSelector(state => state.users.isLoading);
    const loadingError = useSelector(state => state.users.isError)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleError = () => {
        dispatch(loadUsers())
    }

    if (loading) {
        return (
            <Box className="messagetext"><Typography variant="h5" component="div" color="primary">Loading...</Typography></Box>
        )
    }

    if (loadingError) {
        return (
            <Box className="messagetext"><Typography variant="h6" component="div" color="text">Error: {loadingError}</Typography><Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth onClick={handleError}>Retry loading</Button></Box >
        )
    }

    return (
        <Box className="messagetext">
            <Typography variant="h5" component="div" color="primary">Users list:</Typography>
            <List sx={{ margin: '10px 0 10px 0', bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    <ListItem key={`user${user.id}`}><ListItemAvatar><Avatar>{user.username[0]}</Avatar></ListItemAvatar>
                        <ListItemText primary={`«${user.username}» ${user.name}`} secondary={user.company.catchPhrase} /></ListItem>
                ))}
            </List>
        </Box >
    );

};

export default Home;