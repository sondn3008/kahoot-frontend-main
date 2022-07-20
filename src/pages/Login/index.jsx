import React, { useState } from 'react';
// import './test.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from '../../base/axios';
import { Link , useNavigate } from 'react-router-dom';
import logo from './kahoot.png';
import { parseJwt } from '../../utils/pJwt'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respone = await axios.post('/user/login',
              { email, password },
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        origin: 'http://localhost:63342',
                    },
                
            )
            if (respone.data.authenticated) {
                localStorage.kahootApp_accessToken = respone.data.accessToken;
                localStorage.kahootApp_rfToken = respone.data.rfToken;
                const obj = parseJwt(respone.data.accessToken);
                localStorage.kahootApp_userId = obj.id;
                navigate('/teacher');
            }
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message)
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
              } else if (err.request) {
                console.log(err.request);
              } else {
                console.log('Error', err.message);
              }
              console.log(err.config);
        }
    };
    return (
        <>
            <div>
                <div className={'Mn_hnh_ng_nhp'}>
                    <div className={'image-4'}>
                        <img src={require('./kahoot.png')} />
                    </div>
                    <div className={'Rectangle-3'}>
                        <Grid item xs={12}>
                            <h1 className={'Log_in'}>Login</h1>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <Grid item xs={12}>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField className={'Rectangle-4'}
                                                label="Email"
                                                type="email"
                                                placeholder="Username or email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField className={'Rectangle-4'}
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                placeholder="please enter password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <button className={'Rectangle-6'} type="submit">Login</button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <span className={'Dont-have-an-account'}>Don't have an account?</span>
                                            <Link to="/sign-up">
                                                <span className={'Sign_up'}> Sign up!</span>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;
