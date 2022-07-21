import React, { useState } from 'react';
import Grid from '@mui/material/Grid';



const Student_waiting = () => {
    return (
        <div className={'Mn_hnh_ng_nhp_waiting'}>
            <span className={'Youre-in'}>You’re in!</span>
            <br />
            <span className={'See-your-nickname-on-screen'}>See your nickname on screen?</span>
            <div className={'Rectangle-25'}>
                <Grid container spacing={2}>
                    <Grid sx={{ justifyContent: 'left' }} item xs={6}>
                        <div className={"Room-waiting"}>Room: 1</div> 
                    </Grid>
                    <Grid sx={{ justifyContent: 'right' }} item xs={6}>
                        <div className={"Room-waiting"}>Username: Công Sơn</div> 
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
export default Student_waiting