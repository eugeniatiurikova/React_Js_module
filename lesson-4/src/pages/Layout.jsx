import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const Layout = () => {
    return (
        <div className='container'>
            <div className='mainmenu'>
                <Paper>
                    <MenuList>
                        <MenuItem><NavLink to={'/'}>На главную  </NavLink></MenuItem>
                        <MenuItem><NavLink to={'/chats'}>Список чатов  </NavLink></MenuItem>
                        <MenuItem><NavLink to={'/profile'}>Профиль</NavLink></MenuItem>
                    </MenuList>
                </Paper>
            </div>
            <>
                <Outlet />
            </>
        </div>
    );
};

export default Layout;