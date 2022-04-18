import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/reducer/actions';
import { currentUserSelector } from '../redux/reducer/selector/selectors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(currentUserSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/profile');
            console.log("logged redirected")
            console.log(user)
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userEmail || !userPass) {
            return;
        }
        dispatch(loginInitiate(userEmail, userPass))
    }

    return (
        <Box
            component="form" className='messagetext'
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" component="div" color="primary">Authorization</Typography>
            <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                required fullWidth
                id="outlined-required"
                label="E-mail"
                value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                required fullWidth
                type="password"
                id="outlined-required"
                label="Password"
                value={userPass} onChange={(e) => setUserPass(e.target.value)}
            />
            <Stack sx={{ margin: '0 0 10px 0' }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
            ><Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" type='submit'> Sign in </Button><Button size="medium"><NavLink to='/register'> Registration </NavLink></Button>
            </Stack>
        </Box>
    );
};

export default Login;