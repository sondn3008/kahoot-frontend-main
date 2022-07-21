import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from '../../../../base/axios';
import { useNavigate } from 'react-router-dom';

const Student_username = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [room_id, setRoomId] = useState(localStorage.kahootApp_room_id);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respone = await axios.post('/realtime', { name, room_id })
            if (respone) {
                localStorage.kahootApp_name = name;
                navigate('/student-waiting');
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
                <img src={require('../image/kahoot.png')} />
            </div>
            <div className={'Rectangle-32'}>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    className={'Rectangle-4'}
                                    label="USERNAME"
                                    placeholder="USERNAME"
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <button className={'Rectangle-6'} type="submit">
                                    Submit
                                </button>
                            </Grid>
                        </Grid>
                    </form>    
                </Box>
            </div>
        </div>
    );
};
export default Student_username