import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

const Student_waiting = () => {
    const [name, setName] = useState(localStorage.kahootApp_name);
    const [room_id, setRoomId] = useState(localStorage.kahootApp_room_id);
    const [pin, setPin] = useState(localStorage.kahootApp_pin);
    return (
        <div className={'Mn_hnh_ng_nhp_waiting'}>
            <span className={'Youre-in'} >You’re in!</span>
            <br />
            <span className={'See-your-nickname-on-screen'}>See your nickname on screen?</span>
            <div className={'Rectangle-25'}>
                <Grid container spacing={2}>
                    <Grid sx={{ justifyContent: 'left' }} item xs={4}>
                        <div className={"Room-waiting"}>Room: {room_id}</div> 
                    </Grid>
                    <Grid sx={{ justifyContent: 'center' }} item xs={4}>
                        <div className={"Room-waiting"}>Pin: {pin}</div> 
                    </Grid>
                    <Grid sx={{ justifyContent: 'right' }} item xs={4}>
                        <div className={"Room-waiting"}>Username: {name}</div> 
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Student_waiting