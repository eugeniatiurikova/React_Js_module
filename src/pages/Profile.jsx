import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileSelector } from '../redux/reducer/selector/selectors';

const Profile = () => {
    const { contacts, isActive } = useSelector(ProfileSelector);

    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch({ type: 'toggleActive' });
    }, [dispatch]);

    return (
        <div className="messagetext">
            <Typography variant="h5" component="div" color="primary">Профиль</Typography>
            <List sx={{ margin: '10px 0 10px 0', bgcolor: 'background.paper' }}>
                <ListItem><ListItemAvatar>
                    <Avatar>{contacts.name[0]}{contacts.surname[0]}</Avatar>
                </ListItemAvatar><ListItemText
                        primary={`${contacts.name} ${contacts.surname}`} secondary={contacts.info} /></ListItem>
                <ListItem><FormControlLabel control={
                    <Checkbox
                        checked={isActive}
                        onChange={setShowName}
                    />
                } label="Отображать данные" /></ListItem>
            </List>


        </div>
    );
};

export default Profile;