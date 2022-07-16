import React, { useState } from "react";
import styles from './style.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from '../../base/axios'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respone = await axios.post('/user/login',
                JSON.stringify({ email, password },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        },
                        origin:'http://localhost:63342'
                    },
                )
            )
            console.log(respone.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Login</h1>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                    <TextField
                                        label="Email"
                                        placeholder="please enter username"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="please enter password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <button type="submit">Login</button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}
export default Login