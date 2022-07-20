import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import axios from '../../../base/axios';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const Student = () => {
    const navigate = useNavigate();
    const [pin, setPin] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respone = await axios.get(`/student/${pin}`)
            if (respone) {
                localStorage.kahootApp_pin = pin;
                localStorage.kahootApp_room_id = respone.data.id
                navigate('/student-username');
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
        <div className={'Mn_hnh_ng_nhp'}>
            <div className={'image-4'}>
                <img src={require('./kahoot.png')} />
            </div>
            <div className={'Rectangle-32'}>
                <Box>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField className={'Rectangle-4'} 
                            label="Game PIN" 
                            placeholder="Game PIN"
                            type="number"
                            onChange={(e) => setPin(e.target.value)}
                            required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <button className={'Rectangle-6'} type="submit">Submit</button>
                        </Grid>
                    </Grid>
                    </form>
                </Box>
            </div>
        </div>
    );
};
export default Student