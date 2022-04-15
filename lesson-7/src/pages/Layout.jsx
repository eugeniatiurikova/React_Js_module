import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Layout = () => {
    return (
        <Stack sx={{ margin: '20px 0 10px 0' }}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
        >
            <Box className='mainmenu'>
                <Paper>
                    <MenuList>
                        <MenuItem><NavLink to={'/'}>На главную  </NavLink></MenuItem>
                        <MenuItem><NavLink to={'/chats'}>Список чатов  </NavLink></MenuItem>
                        <MenuItem><NavLink to={'/profile'}>Профиль</NavLink></MenuItem>
                    </MenuList>
                </Paper>
            </Box>
            <>
                <Outlet />
            </>
        </Stack>
    );
};

export default Layout;