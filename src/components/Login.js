import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Button,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    NativeSelect,
    Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import { bindActionCreators } from 'redux';

import { AuthUserActionCreators } from '../actions/index';
import { ROUTE_URLS } from '../constants/routes';
import {Redirect} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer);

    const { setAuthUser } = bindActionCreators(AuthUserActionCreators, dispatch);
    const [authedUser, setAuthedUser] = useState('');
    const [logIn, setLogIn] = useState(false)

    const getUsers = (users) =>
        users.map((user) => ({
            username: user.name,
            id: user.id,
            image: { avatar: true, src: user.avatarURL },
        }));

    const handleSetAuthedUser = (event) => {
        setAuthedUser(event.target.value);

    };

    if(logIn)
        return <Redirect to={ROUTE_URLS.HOME} />

    return (
        <Grid container sx={{ mt: 30 }}>
            <Grid item xs={12} align='center' sx={{ pt: 10 }}>
                <Typography variant='h6' component='h2' sx={{ pb: 5 }}>
                    Welcome to Would you Rather!
                </Typography>
                <Formik
                    onSubmit={() => {
                        setAuthUser(authedUser);
                        setLogIn(true)
                        // navigate(ROUTE_URLS.HOME);
                    }}
                    initialValues={{
                        userId: '',
                    }}
                >
                    <Form>
                        <FormControl style={{ width: '400px' }}>
                            <InputLabel variant='standard'>
                                Select the user to login
                            </InputLabel>
                            <NativeSelect
                                defaultValue={-1}
                                inputProps={{
                                    name: 'user',
                                    id: 'select-user',
                                }}
                                onChange={handleSetAuthedUser}
                            >
                                <option value={-1}>Select</option>
                                {getUsers(Object.values(users.users)).map((user) => {
                                    return (
                                        <option key={user.id} value={user.id} name={'userId'}>
                                            {user.username}
                                        </option>
                                    );
                                })}
                            </NativeSelect>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                            <Button type={'submit'} variant='contained' color='success'>
                                Login
                            </Button>
                        </FormControl>
                    </Form>
                </Formik>
            </Grid>
        </Grid>
    );
};

export default Login;
